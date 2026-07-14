---
name: Premium Warmth
colors: refer src/styles/globals.css
---

# Brand & Style

The persona is a **boutique patisserie that takes itself seriously without being
precious**: premium ingredients (Callebaut Belgian chocolate), real hygiene standards, and
made-to-order craft, presented with editorial restraint rather than greeting-card cheer. Think
closer to Ladurée's quiet confidence than to a birthday-party flyer — warm and inviting, but
disciplined. The system rejects two failure modes equally: the cold, ornament-free
"architect portfolio" look (no hairline-only structuralism, no mono-label section numbering,
no monochrome-plus-one-accent austerity), and the overly playful "kids' menu" look (no pill
buttons, no balloon-round display type, no clutter of accent colors).

Brand personality: **warm, premium, unhurried.** Every page (home, menu/catalog, cart,
about, contact) should read as one language — same tokens, same restraint, same warmth.

**Key stylistic pillars:**

- **Quiet warmth over decoration** — softness comes from color, type, and generous spacing,
  not from stacking ornament. A section should feel inviting at a glance, not busy.
- **Editorial typography, gently rounded** — a display face with just enough roundness to feel
  handmade, a workhorse sans for everything else, a serif/script accent reserved for brand
  moments (taglines, pull-quotes), and a handwritten face used sparingly for a personal touch.
- **Restraint in color** — two accents, each with one clear job (see Colors below); everything
  else is neutral. Depth comes from tone and, where it earns its place, a soft shadow — never
  from a wall of saturated color.
- **Structure without austerity** — hairline borders and clear section rhythm are still useful
  for organizing a catalog (many products, categories, cart states), but softened with small
  corner radii rather than treated as a design statement in themselves.

## Colors

Token source: `src/styles/globals.css`. Eight ramp families (not seven — the family count in
an earlier draft of this doc was wrong), each with 11 stops (`50`–`950`) stored as a raw HSL
triplet (`--color-<family>-<stop>-base`) resolved to a usable color
(`--color-<family>-<stop>: hsl(var(--color-<family>-<stop>-base))`):

- **`grey`** — the primary neutral ramp; backs most text/background/border tokens.
- **`primary`** / **`secondary`** — near-desaturated neutrals, for tonal variation without
  introducing a new hue.
- **`accent`** — the primary interactive color: CTAs, links, focus rings, the one "go do the
  thing" color (Add to Cart, Send Order via WhatsApp, primary nav highlight). Reserve it for
  actionable moments — do not use it as a large decorative background fill.
- **`glaze`** — the second, merchandising-only accent: product/category badges and callouts
  that need visual pop without competing with `accent`'s call-to-action meaning — e.g.
  "Signature", "Popular", "New" tags on `ProductCard`. Never used for an interactive control
  (buttons, links, focus rings stay on `accent`). This name is a placeholder — rename it in
  `globals.css` if a better brand-fit word comes up, but keep the *role* (merchandising tag,
  never interactive) distinct from `accent`.
- **`success` / `caution` / `info` / `error`** — semantic ramps for actual status use, not
  decoration: `caution` for "Out of stock", `success` for "Order sent" confirmation states, etc.
  Prefer these over inventing a new color when the meaning is genuinely status-like.

**Semantic aliases** (build on the ramps, use these before reaching for a raw ramp stop):
`--color-bg`, `--color-surface`, `--color-surface-raised`, `--color-text`,
`--color-text-muted`, `--color-text-subtle`, `--color-text-inverse`, `--color-border`
(hairline), `--color-border-strong` (solid), `--color-focus` (= `accent-500`).

**Actual hex/HSL values are not finalized in this doc** — real brand colors will be set
directly in `globals.css` by hand. Until then, treat the ramps as placeholders that follow the
mechanism described here (8 families × 11 stops, semantic aliases on top), not as a locked
palette.

**Dark mode:** the `.dark` class on `<html>` only redefines each family's `-base` HSL triplet
(inverting the ramp direction: `50↔950`, `100↔900`, … `500↔500`); every `--color-*`/semantic
alias resolves automatically. Components never branch on theme.

**Rule:** no inline hex/HSL, no raw Tailwind color utilities (`text-orange-600`, etc.) in
component code. Consume the semantic alias first, then a ramp stop, only introducing a
`--_`-prefixed local variable for a genuine one-off component variant.

## Typography

Five font roles, loaded via `next/font/google` and mapped to CSS variables
(`--ff-display` / `--ff-sans` / `--ff-mono` / `--ff-serif` / `--ff-cursive`, registered into
Tailwind's `@theme` as `--font-display` / `--font-sans` / `--font-mono` / `--font-serif` /
`--font-cursive`):

- **`--ff-display`** — a gently rounded, quiet display sans for headings. Recommend
  **Quicksand** (bold/700+ weights) as the primary choice — geometric, softly rounded, reads
  premium rather than cartoonish at large sizes. If bold weights feel too thin in practice,
  fall back to **Nunito** (which has a true 900 weight and a slightly warmer, more humanist
  shape). Pick one and commit — don't run both.
- **`--ff-sans`** — **Poppins**, the workhorse body/UI face. Default for everything that isn't
  a display heading or a brand-voice accent.
- **`--ff-serif`** — **Fraunces**, italic, reserved for brand-voice moments: the tagline
  ("Life is too short to skip dessert!"), pull-quotes, testimonial copy. Not a body face.
- **`--ff-cursive`** — **Caveat**, a handwritten accent used *sparingly* — a signed note, an
  annotation-style callout, never for headings or body copy.
- **`--ff-mono`** — `JetBrains Mono` or similar, for genuinely technical/meta text only (dates,
  SKUs/weights, form labels) if and where that need actually shows up in a bakery catalog UI.
  Uppercase for mono labels. Don't force mono-label section numbering (`NN // Title`) onto this
  brand — that's an architect-portfolio convention, not a bakery one.

**Type scale — use `--fs-*` only.** `globals.css` defines a UI/body scale (`--fs-4xs` through
`--fs-4xl`, shrinking under a `1024px` media query) plus a "monumental" display tier
(`--fs-display-section`, `--fs-display-hero`). **The `--fs-*` UI scale is the default for all
text, including most headings.** The display tier is the one sanctioned exception — for hero
headlines and comparably large, hand-tuned display type only (see the clamp() exception in
Layout & Spacing). Don't reach for display tokens on ordinary section headings just because
they're bold; that's what `--fs-3xl`/`--fs-4xl` are for.

**Rules:**

- Body paragraphs stay in a comfortable ~65–75 character line length.
- No raw px font sizes or arbitrary Tailwind size values (`text-[Npx]`) outside the hero
  exception.
- Mono, if used at all, is uppercase and reserved for genuinely technical/meta text — not a
  default heading treatment.

## Layout & Spacing

Two systems working together, matching what's actually implemented:

1. **Tailwind's default spacing scale** (`gap-16`, `py-12`, `p-4`, etc.) drives internal
   rhythm — padding, gaps, margins between elements within a section. This is the default for
   everything.
2. **`CommonFullWidthWrapper`** (`src/components/common-full-width-wrapper`) is the
   width-containment primitive: it renders a full-width outer element and centers a `w-[85%]`
   (`w-[90%]` under `1024px`) inner element. It takes `element` (defaults to `section`),
   `bg`, `wrapperCss`, `wrapperProps`, and `className`. Every section-level block should go
   through it rather than hand-rolling containment.
3. **The hero/display-type exception**: large hand-tuned display sizing (hero headline,
   comparably large section-opener type) may use `clamp()` directly, following the same pattern
   `--fs-display-hero`/`--fs-display-section` already establish, instead of the discrete
   `--fs-*` steps. This is a narrow, intentional exception — don't extend fluid `clamp()` sizing
   to ordinary body copy, card padding, or grid gaps; those stay on the discrete Tailwind scale.
4. **`--space-1`…`--space-32`, `--container-max`, `--content-max`, `--gutter`,
   `--section-pad-y`** exist in `globals.css` but nothing in the codebase reads them
   (`CommonFullWidthWrapper` uses hardcoded `w-[85%]`/`w-[90%]`, not these tokens). **Do not use
   them; they are dead code slated for removal.**

For catalog grids specifically (category tiles, product cards, gallery), prefer
`repeat(auto-fit, minmax(Npx, 1fr))` so column counts collapse naturally with viewport width,
rather than hand-authoring breakpoint-specific column counts — this is a genuinely useful
pattern from the earlier bakery draft worth keeping, and it composes fine with the Tailwind-gap
rhythm above.

## Shape & Elevation

Warm but disciplined — small, consistent rounding; shadows exist but are used sparingly.

- **Radius is tokenized and mid-sized by default:** `--radius-none` (0px) for elements that
  genuinely want a hard edge, `--radius-sm` (2px, currently the only non-zero token defined)
  for subtle rounding. **This doc calls for adding a small/medium radius step (roughly 4–12px,
  e.g. `--radius-md`) to `globals.css`** as the default for cards, buttons, images, and inputs
  — the current token set only has `none`/`sm`(2px)/`pill`(9999px), and neither end of that
  range fits the "restrained radius, no pills" direction. **No pill-shaped buttons or badges** —
  `--radius-pill` stays defined for now but should not be used on this brand's UI.
- **Borders as structure, not decoration:** `--color-border` (hairline) for section dividers
  and card outlines; `--color-border-strong` where a boundary needs to read clearly.
- **Shadows are allowed, used sparingly:** a small shadow scale (e.g. `--shadow-sm`/`--shadow-md`,
  to be added to `globals.css` alongside the radius token above) for card hover-lift
  (`ProductCard`, `CategoryCard`) and floating elements (a persistent WhatsApp/cart button).
  Everything else — section backgrounds, nav, static layout — stays flat; shadow is reserved for
  things that are meant to feel liftable/interactive.
- **Accent as indicator first, fill second:** `accent` marks interactive moments (a button fill,
  a focus ring, a link). A full-bleed accent background is allowed for one deliberate,
  end-of-page CTA moment per page (see Signature techniques below) — not for section
  backgrounds in general.

## Signature techniques

- **Noise-grain overlay** — a fixed, full-viewport `body::before` pseudo-element using an
  inline SVG `feTurbulence` filter (`fractalNoise`, `baseFrequency: 0.9`, 4 octaves) at
  `opacity: 0.035` in light mode and `0.05` in dark mode (`html.dark body::before`). Already
  implemented in `src/styles/defaults.css` — don't duplicate it per-component. Works fine under
  a warm palette; it's a texture mechanism, not an architect-specific ornament.
- **Auto-fit product/category grids** — see Layout & Spacing above.
- **Mono slash-prefixed section labels are *not* part of this brand.** An earlier draft of this
  doc (copied from an unrelated project) specified a `NN // Title` mono-label convention for
  section headings. Drop it — it reads as engineering-tool chrome, not bakery-appropriate. Use
  ordinary `--ff-display` headings for section titles instead.
- **Scroll-reveal fade-in and Lenis smooth-scroll — planned, not yet built.** Neither exists in
  this repo today (no `ScrollReveal` component, no Lenis dependency in `package.json`) — an
  earlier draft of this doc described them as already implemented, which was inaccurate. They
  remain the intended approach for future scroll-triggered reveals and smooth-scroll feel (e.g.
  the Signature Collection or Customer Gallery sections, once built):
  - **Scroll-reveal**: a client component wrapping `IntersectionObserver` — content renders
    fully visible in SSR markup, a `"use client"` effect adds `opacity-0 translate-y-4` after
    mount and removes it once the element crosses a threshold (~`0.15`), transitioning over
    `--dur-reveal`/`--ease-out`. Must no-op entirely under `prefers-reduced-motion` (check before
    ever adding the hidden-state classes, not just in the CSS transition).
  - **Lenis** would be the only motion-related dependency if/when smooth-scroll is added — don't
    add framer-motion, GSAP, or react-spring instead without discussing it first.
- **Closing accent CTA band** — a page's final section may use `accent` as a full-bleed
  background, the one sanctioned exception to "accent as indicator, not fill":
  - A single `CommonFullWidthWrapper` with an accent background (via its `bg` prop or
    `wrapperCss`) — full-bleed by default since the wrapper's outer element is already
    full-width.
  - Light/inverse text throughout (`--color-text-inverse` or `grey-50`) — headline bold at
    `--fs-2xl`+, body copy at reduced opacity.
  - Primary and secondary actions flip to light-on-accent (white/`grey-50` fill or outline,
    accent-colored text) so they stay legible on the accent background.
  - This is a one-off, end-of-page moment — never more than one per page, never a mid-page
    section.

## Motion

No animation library beyond what's noted above as planned. The baseline is CSS transitions:

- A universal `* { transition: all 0.3s ease }` in `defaults.css` covers most hover/focus/
  theme-change state changes by default.
- Duration tokens (`--dur-fast` 0.2s, `--dur-base` 0.3s, `--dur-slow` 0.5s, `--dur-reveal` 0.7s)
  and easing tokens (`--ease-out`, `--ease-inout`) are defined in `globals.css` for finer
  control layered on top of the universal transition.
- **`prefers-reduced-motion` is already guarded globally** in `defaults.css` (zeroes
  transition/animation duration and forces `scroll-behavior: auto`) — new animated components
  don't need to re-implement this, but should still verify they don't rely on animation to
  convey information that's lost when it's disabled.

## Component catalog

Two tiers: a real global kit already in `src/components/*`, and route-local patterns. This doc
covers the **existing, generic global kit only** — bakery-specific components (`ProductCard`,
`CategoryCard`, cart UI, WhatsApp CTA, FAQ accordion, testimonial layout, etc.) are intentionally
out of scope here; they get designed and documented as they're actually built, against the
tokens and pillars above, not speculatively catalogued in advance.

### Global kit — `src/components/*` (reusable across any page)

- **`Button`** (`src/components/button`) / **`Link`** (`src/components/link`) — the shared
  interaction primitive, sharing color logic via `colorStyleVars()` in `button/styles.ts`.
  Colors are set via typed `color`/`colorWeight` (and hover/text variants) props resolved into
  `--c`/`--c-hover`/`--c-text`/`--c-hover-text` CSS vars — never pass a raw color.
  `ColorFamily` currently covers `grey | primary | secondary | accent | success | caution |
  info | error`; add `glaze` to this union when the second accent is wired up. Variants:
  `filled` / `outlined` / `text`; sizes `sm` / `md` (default) / `lg`. `Link` reuses `Button`'s
  color logic rather than duplicating it.
- **`CommonFullWidthWrapper`** (`src/components/common-full-width-wrapper`) — see Layout &
  Spacing above.
- **`theme-toggle`** (`src/components/theme-toggle.tsx`) — the light/dark toggle; owns the
  `dark` class flip on `<html>` and persists the choice to `localStorage`.
- **`html`** (`src/components/html`) — check this component's actual purpose before reusing;
  not described further here since it wasn't part of either source doc.

### Page-local patterns — specific to one route, not meant for reuse elsewhere yet

If a pattern needs to be reused by a second route, promote it into `src/components/` at that
point rather than importing across page boundaries (`CONVENTIONS.md` covers the global-vs-local
split in more detail). Note: `CONVENTIONS.md` currently references a promoted `Section` and
`ExperienceCard` component that do not exist in this repo yet — that's a separate inconsistency
worth fixing in that doc when someone's next in there, not something this doc tries to resolve.
