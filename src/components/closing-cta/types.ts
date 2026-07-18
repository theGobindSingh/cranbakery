export interface ClosingCtaAction {
  href: string;
  label: string;
}

export interface ClosingCtaProps {
  tagline?: string;
  heading?: string;
  body?: string;
  primaryAction?: ClosingCtaAction;
  /** optional second action (e.g. WhatsApp) rendered outlined beside the primary button */
  secondaryAction?: ClosingCtaAction;
}
