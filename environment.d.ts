// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // resend
      RESEND_API_KEY: string;
      RESEND_FROM_EMAIL: string;
      CONTACT_TO_EMAIL: string;
      CONTACT_SITE_URL: string;
      RESEND_TEMPLATE_CONTACT_USER: string;
      RESEND_TEMPLATE_CONTACT_ADMIN: string;

      // google recaptcha v3 keys
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
      RECAPTCHA_SECRET_KEY: string;
      RECAPTCHA_MIN_SCORE?: string;
    }
  }
}
