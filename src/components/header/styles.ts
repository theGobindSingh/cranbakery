import type { CSSProperties } from "react";

export const GLASS_STYLE: CSSProperties = {
  background: "hsla(var(--color-neutral-50-base), 0.375)",
  backdropFilter: "blur(16px) saturate(160%)",
  WebkitBackdropFilter: "blur(16px) saturate(160%)",
};

export const ICON_BUTTON_STYLE: CSSProperties = {
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-border)",
  background: "var(--color-surface)",
  color: "var(--color-text-muted)",
  transitionDuration: "var(--dur-base)",
};

export const ICON_BUTTON_CLASS =
  "flex size-9 shrink-0 items-center justify-center transition-colors hover:border-accent-700 hover:text-accent-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:hover:border-[color:var(--color-border)] disabled:hover:text-(--color-text-muted)";

export const NAV_LINK_CLASS =
  "relative py-1 text-(length:--fs-3xs) text-neutral-700 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-200 after:transition-transform after:duration-(--dur-base) hover:text-accent-700 hover:after:scale-x-100 focus-visible:outline-none";

export const NAV_LINK_ACTIVE_CLASS = "text-accent-700 after:scale-x-100";
