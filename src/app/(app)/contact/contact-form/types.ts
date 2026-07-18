export interface ContactFormPayload {
  name: string;
  contact: string;
  message: string;
}

export type ContactFormStatus = "idle" | "pending" | "success" | "error";
