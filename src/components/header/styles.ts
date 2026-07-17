import type { CSSProperties } from "react";

export const GLASS_STYLE: CSSProperties = {
  background: "hsla(var(--color-neutral-50-base), 0.375)",
  backdropFilter: "blur(16px) saturate(160%)",
  WebkitBackdropFilter: "blur(16px) saturate(160%)",
};

// Same glass look, but toggled off at desktop via --nav-glass (see header.css)
// instead of a hardcoded value: the header already has its own glass layer
// behind the whole bar at desktop, so <nav>'s own copy would double up.
export const NAV_GLASS_STYLE: CSSProperties = {
  background: "var(--nav-glass-bg, hsla(var(--color-neutral-50-base), 0.375))",
  backdropFilter: "var(--nav-glass-blur, blur(16px) saturate(160%))",
  WebkitBackdropFilter: "var(--nav-glass-blur, blur(16px) saturate(160%))",
};

export const ICON_BUTTON_STYLE: CSSProperties = {
  borderRadius: "4px",
  border: "1px solid var(--color-neutral-950)",
  background: "transparent",
  color: "var(--color-text-muted)",
  transitionDuration: "var(--dur-base)",
};

export const ICON_BUTTON_CLASS =
  "flex size-9 shrink-0 items-center justify-center transition-colors hover:border-accent-700 hover:text-accent-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:hover:border-[color:var(--color-border)] disabled:hover:text-(--color-text-muted)";

// One class for every top-level nav item (Home/About/Menu/Contact) at both
// breakpoints: a large gothic block row with a divider on mobile, a quiet
// small Karla link with a hover underline on desktop (`lg:`).
export const NAV_LINK_CLASS =
  "block border-b py-4 font-gothic text-(length:--fs-m) text-neutral-950 uppercase transition-colors hover:text-accent-700 focus-visible:outline-none lg:relative lg:border-b-0 lg:py-1 lg:font-sans lg:text-(length:--fs-3xs) lg:font-normal lg:text-neutral-700 lg:normal-case lg:after:absolute lg:after:inset-x-0 lg:after:-bottom-1 lg:after:h-px lg:after:origin-left lg:after:scale-x-0 lg:after:bg-accent-200 lg:after:transition-transform lg:after:duration-(--dur-base) lg:hover:after:scale-x-100";

export const NAV_LINK_ACTIVE_CLASS = "text-accent-700 lg:after:scale-x-100";

// Category links inside "Menu"'s submenu — a plain indented list on
// mobile, a small dropdown-panel row on desktop.
export const SUBMENU_LINK_CLASS =
  "block py-2 text-(length:--fs-2xs) text-neutral-700 transition-colors hover:text-accent-700 lg:px-4 lg:py-2 lg:text-(length:--fs-3xs)";
