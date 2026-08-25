import { NextResponse } from "next/server";
import { Resend } from "resend";

import { CONTACT_RECAPTCHA_ACTION, validateContactForm } from "@/lib/contact";

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
};

const getClientIp = (request: Request): string | undefined => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return request.headers.get("x-real-ip") ?? undefined;
};

const verifyRecaptcha = async (
  token: string,
  remoteIp?: string,
): Promise<{ ok: true } | { ok: false; status: number; error: string }> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set.");
    return {
      ok: false,
      status: 500,
      error: "Server configuration error.",
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  let data: RecaptchaVerifyResponse;
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      },
    );
    data = (await response.json()) as RecaptchaVerifyResponse;
  } catch (error) {
    console.error("reCAPTCHA verification request failed:", error);
    return {
      ok: false,
      status: 502,
      error: "Unable to verify reCAPTCHA. Please try again.",
    };
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
  const score = data.score ?? 0;

  if (
    !data.success ||
    data.action !== CONTACT_RECAPTCHA_ACTION ||
    Number.isNaN(minScore) ||
    score < minScore
  ) {
    console.error("reCAPTCHA verification failed:", {
      success: data.success,
      action: data.action,
      errorCodes: data["error-codes"],
    });
    return {
      ok: false,
      status: 403,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  return { ok: true };
};

export async function POST(request: Request) {
  let payload: ContactRequestBody;
  try {
    payload = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name : "";
  const email = typeof payload.email === "string" ? payload.email : "";
  const subject = typeof payload.subject === "string" ? payload.subject : "";
  const message = typeof payload.message === "string" ? payload.message : "";
  const recaptchaToken =
    typeof payload.recaptchaToken === "string" ? payload.recaptchaToken : "";

  if (!recaptchaToken) {
    return NextResponse.json(
      { error: "reCAPTCHA token is missing." },
      { status: 400 },
    );
  }

  const validationError = validateContactForm({ name, email, subject, message });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const recaptchaResult = await verifyRecaptcha(
    recaptchaToken,
    getClientIp(request),
  );
  if (!recaptchaResult.ok) {
    return NextResponse.json(
      { error: recaptchaResult.error },
      { status: recaptchaResult.status },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const userTemplateId = process.env.RESEND_TEMPLATE_CONTACT_USER;
  const adminTemplateId = process.env.RESEND_TEMPLATE_CONTACT_ADMIN;
  const adminEmail = process.env.CONTACT_TO_EMAIL;
  const siteUrl = (process.env.CONTACT_SITE_URL || "").replace(/\/$/, "");

  if (
    !apiKey ||
    !from ||
    !adminEmail ||
    !userTemplateId ||
    !adminTemplateId ||
    !siteUrl
  ) {
    console.error("Missing Resend environment variables.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = `Subject: ${trimmedSubject}\n\n${message.trim()}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.batch.send([
      {
        from,
        to: trimmedEmail,
        replyTo: adminEmail,
        template: {
          id: userTemplateId,
          variables: {
            USER_NAME: trimmedName,
            USER_MESSAGE: trimmedMessage,
            SITE_URL: siteUrl,
          },
        },
      },
      {
        from,
        to: adminEmail,
        replyTo: trimmedEmail,
        template: {
          id: adminTemplateId,
          variables: {
            USER_NAME: trimmedName,
            USER_EMAIL: trimmedEmail,
            USER_MESSAGE: trimmedMessage,
            SITE_URL: siteUrl,
          },
        },
      },
    ]);

    if (error) {
      console.error("Resend batch send failed:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected error while sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
