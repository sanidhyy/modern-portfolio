export const CONTACT_RECAPTCHA_ACTION = "contact";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormError =
  | "Invalid Name"
  | "Invalid E-mail"
  | "Invalid Subject"
  | "Invalid Message";

export const isValidContactName = (name: string): boolean => {
  const trimmed = name.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
};

export const isValidContactEmail = (email: string): boolean => {
  const trimmed = email.trim();
  return trimmed.length <= 100 && Boolean(trimmed.toLowerCase().match(EMAIL_REGEX));
};

export const isValidContactSubject = (subject: string): boolean => {
  const trimmed = subject.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
};

export const isValidContactMessage = (message: string): boolean => {
  const trimmed = message.trim();
  return trimmed.length >= 5 && trimmed.length <= 500;
};

export const validateContactForm = ({
  name,
  email,
  subject,
  message,
}: ContactFormFields): ContactFormError | null => {
  if (!isValidContactName(name)) {
    return "Invalid Name";
  }

  if (!isValidContactEmail(email)) {
    return "Invalid E-mail";
  }

  if (!isValidContactSubject(subject)) {
    return "Invalid Subject";
  }

  if (!isValidContactMessage(message)) {
    return "Invalid Message";
  }

  return null;
};
