---
name: Quiet Coquette
colors: refer src/styles/globals.css
---

# Brand & Style

**The scene:** a woman reads in a sunlit sitting room before a five-star patisserie
counter — linen tablecloth, a pot of tea gone lukewarm, a paperback face-down, a box
tied in ribbon waiting to be opened. That's the register: **Light Academia gives the
room, Coquette gives the ribbon on the box.** Neither is a costume. The academia side
supplies the calm — cream stone, ink serif, generous margins, the unhurried pace of a
library afternoon. The coquette side supplies the detail — a blush hairline, a wax-seal
badge, a thread of ribbon at a section's edge, never a wall of pink.

This is a **five-star patisserie, not a neighbourhood bakery stall.** The previous
system's failure mode was cheerfulness: a rounded geometric display face (Quicksand), a
mid-saturation cranberry doing every job at once, uniform card grids standing in for
photography. None of that reads as finesse — it reads as a template. The rewrite rejects
that failure mode and its opposite in equal measure: a cold, photography-free "editorial
magazine" look (no italic-serif-plus-mono-kicker scaffolding, no ruled three-column
grids) reads as borrowed sophistication, not this brand's own.

Brand personality: **restrained, romantic, unhurried.** Every page should read like
pages of the same letter — same ink, same paper, same one ribbon.

**Key stylistic pillars:**

- **Cream carries the room; wine and blush are jewelry.** The page is built from warm
  neutrals (`neutral` ramp) doing 90% of the work. Color is not banished — it's rationed.
  One deep, disciplined wine (`accent-700`, not the mid-tone cranberry) carries every
  call-to-action. A pale blush (`accent-100`/`200`) appears only as a hairline, a badge
  fill, or a soft wash — never as a body-copy background or a large fill.
  A muted gold thread (`secondary` ramp, used at low-saturation stops) marks the rare
  "gilt" detail: a hairline rule, a wax-seal ring, a hover glow. Three colors, three jobs,
  nothing competing.
- **Photography is the design.** A five-star bakery without real imagery reads as
  unfinished, not restrained. Every section that could show a cake, a bouquet, a pair of
  hands at work, does — full-bleed where the composition earns it, never a colored
  rectangle standing in for a photo.
- **Motifs are literal objects, not clip-art.** "Ribbon" and "pearl" show up as an actual
  ribbon in a photograph, an actual wax-seal-shaped badge, an actual small round bullet
  between a testimonial's quote and its name — never a heart emoji, a dashed
  bow-illustration, or a doodled flourish.
- **Structure without austerity.** Hairline borders and generous section rhythm still
  organize the page, but the grid is allowed to go asymmetric — a large image against a
  narrow text column, a featured tile beside a quiet index list — the way a well-laid
  page of a book or a fashion editorial breaks its own grid on purpose.

## Colors

Token source: `src/styles/globals.css`. Nine ramp families, each with 11 stops (`50`–`950`),
stored as a raw HSL triplet (`--color-<family>-<stop>-base`) resolved to a usable color
(`--color-<family>-<stop>: hsl(var(--color-<family>-<stop>-base))`). **The ramps themselves
are not changing** — every hue and stop already in `globals.css` stays exactly as-is. What
changes is which stops this system actually reaches for, and why.

- **`neutral`** — Cream & Ink. The dominant surface and text ramp, and now wired into every
  semantic alias (`--color-bg`, `--color-text`, …). This *is* the room: parchment-cream
  backgrounds (`50`–`200`), warm ink text (`900`/`950`). Nearly everything on the page is
  drawn from this ramp.
- **`accent`** — Cranberry, reframed as a two-register ramp instead of one flat color:
  - **Deep register (`600`–`800`, read as "wine"/"oxblood")** — the single
    call-to-action color. Every button, link, focus ring, and the one closing-CTA band
    per page pulls from here, `700` as the default. This is what used to be the flat
    `accent-500` cranberry; pulling one register darker is what turns "fruit-juice pink"
    into "burgundy velvet."
  - **Pale register (`50`–`200`, read as "blush")** — the coquette decorative note:
    hairline dividers, a wax-seal badge fill, a soft card wash behind a testimonial. Never
    a large fill, never body text on it below 4.5:1 contrast (test against `neutral-950`
    ink, not against white).
  - Don't reach for the untouched middle (`400`/`500`) — that stop is the exact
    "greeting-card pink" this rewrite is moving away from.
- **`secondary`** — Mustard, recast as the **gilt** accent: light-academia's "sunlight
  through a library window," used at `300`–`500` for a hairline rule, a wax-seal ring, a
  hover glow — never a fill, never more than one gilt touch per section.
- **`grey`** / **`primary`** — stay as structural/tonal neutrals, available directly
  (`bg-grey-100`, …) for the rare section that deliberately wants a cooler note; not part
  of the default palette for this brand.
- **`success` / `caution` / `info` / `error`** — unchanged, reserved for genuine status
  use (out-of-stock, order-sent confirmation), never decoration.

**Semantic aliases** (use before reaching for a raw ramp stop): `--color-bg`,
`--color-surface`, `--color-surface-raised`, `--color-text`, `--color-text-muted`,
`--color-text-subtle`, `--color-text-inverse`, `--color-border` (hairline),
`--color-border-strong` (solid), `--color-focus` (= `accent-500` — audit this: focus rings
are a functional indicator, not a decorative one, so the mid-tone is fine here even though
it's avoided elsewhere).

**Color strategy: Restrained.** Tinted cream neutral + one committed wine accent + a gilt
whisper — not a Committed or Drenched palette. The reference point is Ladurée's macaron
boxes: the box is cream and ink, the ribbon is one color, and that's the entire palette.

**Dark mode:** the `.dark` class only redefines each family's `-base` HSL triplet
(inverting `50↔950`, …, `500↔500`); every semantic alias resolves automatically.
Components never branch on theme. **Light is the shipped default** — see Theming below;
dark mode is an opt-in a returning visitor can choose, never the initial state.

**Rule:** no inline hex/HSL, no raw Tailwind color utilities (`text-orange-600`, etc.) in
component code. Consume the semantic alias first, then a ramp stop, only introducing a
`--_`-prefixed local variable for a genuine one-off component variant.

## Theming (light-default, not system-auto)

This is a correctness rule, not a preference: **the site must render light on first visit,
every time, regardless of the visitor's OS-level dark-mode setting.** A five-star bakery
storefront doesn't ask "what mode is your phone in" before deciding what to look like.

- `ThemeSetter` (`src/app/(app)/theme-setter.tsx`) resolves theme as
  `?theme= query param → cookie → "light"` — it must never call
  `window.matchMedia("(prefers-color-scheme: dark)")`. That media query is for a
  visitor's *explicit* toggle to persist across visits, not for the initial guess.
- `RootLayout` (`src/app/(app)/layout.tsx`) mirrors this server-side: the `<html>` class is
  `"dark"` only when the `theme` cookie is literally `"dark"`; every other case (missing
  cookie, any other value) renders `"light"`.
- `defaults.css`'s `html { color-scheme: light }` / `html.dark { color-scheme: dark }`
  follows the same default — light is the base rule, dark is the override, not the
  reverse.
- `ThemeToggle` (`src/components/theme-toggle.tsx`) is the only way a visitor reaches dark
  mode, and it's an explicit, deliberate opt-in.

## Typography

Four font roles, loaded via `next/font/google` and mapped to CSS variables
(`--ff-display` / `--ff-sans` / `--ff-cursive` / `--ff-mono`, registered into Tailwind's
`@theme` as `--font-display` / `--font-sans` / `--font-cursive` / `--font-mono`). This is a
full rebuild from the previous five-role system — Quicksand, Poppins, Fraunces, and Caveat
are all retired; none of them can carry finesse (Quicksand and Caveat are exactly the
"cute" tells the rewrite is removing, and Fraunces sits on the reflex-reject list for new
brand decisions — it's the default italic-display pick behind half of 2026's
"editorial-typographic" AI landing pages, which is the other failure mode this system is
avoiding).

- **`--ff-display`** — **EB Garamond.** A garamond revival literally cut for book
  interiors — the physical object is a well-worn hardback, not a magazine cover. Its
  italic is lush and slightly feminine without becoming a costume, which is what makes it
  do double duty across both aesthetics: set upright, it's the calm library serif; a key
  word set in italic is the coquette flourish. Weight 400–600, never forced bold — size
  and spacing carry the hierarchy, not weight.
- **`--ff-sans`** — **Karla.** A quiet humanist grotesque for everything that isn't a
  headline: body copy, UI labels, nav, buttons. It has just enough warmth in its curves to
  sit next to a garamond without fighting it, and it stays out of the way — this is the
  linen tablecloth, not the centerpiece.
- **`--ff-cursive`** — **Bonheur Royale.** A dainty calligraphic script, used *rarely* —
  a single word, a signature-style line, never a heading and never body copy. This is the
  literal "love letter" reference: the tagline treatment, a wax-seal badge's lettering, a
  testimonial's closing flourish. If it shows up more than once or twice on a page, it's
  being overused.
- **`--ff-mono`** — kept for genuinely technical/meta text only (weights, SKUs, prices on
  future catalog pages) — not part of the homepage's vocabulary. Uppercase when used.
  Don't reach for it as a decorative "kicker" label above section headings; that's the
  editorial-magazine trope this system explicitly avoids.

**Pairing logic:** the contrast axis is serif (EB Garamond) against sans (Karla) — one
family each, chosen for voice rather than by reflex, with the script held in reserve as a
rare third accent. Don't add a second sans or a second serif; the pairing is deliberately
narrow.

**Type scale — use `--fs-*` only**, exactly as before: `--fs-4xs`…`--fs-4xl` for all UI/body
text (including most headings), the `--fs-display-section`/`--fs-display-hero` clamp()
pair reserved for hero and comparably large section-opener type. Display letter-spacing on
EB Garamond should stay looser than the old Quicksand tracking — a garamond tightened past
`-0.02em` starts touching; don't apply the old display-face `-0.04em`-and-tighter habit to
this font.

**Rules:**

- Body paragraphs stay in a comfortable ~65–75 character line length.
- No raw px font sizes or arbitrary Tailwind size values (`text-[Npx]`) outside the hero
  exception.
- Italic EB Garamond is an accent, not a default — reserve it for taglines, pull-quotes,
  and single emphasized words, the same restraint the old Fraunces role had, just on a
  less-saturated font choice.

## Layout & Spacing

Two systems working together, matching what's actually implemented:

1. **Tailwind's default spacing scale** (`gap-16`, `py-12`, `p-4`, etc.) drives internal
   rhythm. Default for everything.
2. **`CommonFullWidthWrapper`** (`src/components/common-full-width-wrapper`) is the
   width-containment primitive: full-width outer element, centered `w-[85%]` (`w-[90%]`
   under `1024px`) inner element. Every section-level block goes through it.
3. **The hero/display-type exception**: hand-tuned `clamp()` sizing for hero headline and
   comparably large section-opener type, per `--fs-display-hero`/`--fs-display-section`.
   Don't extend fluid sizing to ordinary body copy, card padding, or grid gaps. Even here,
   prefer expressing the token via a Tailwind arbitrary value (e.g. `text-[length:var(--fs-display-hero)]`)
   over an inline `style` prop — see CONVENTIONS.md §8 ("Tailwind first, `style` prop as a
   last resort"). A one-off literal `clamp()` in `style` bypasses the token entirely and is
   not this exception; if a page needs a size the token doesn't cover, extend the token, don't
   hardcode around it.
4. **`--space-*`, `--container-max`, `--content-max`, `--gutter`, `--section-pad-y`** are
   dead code (nothing reads them). Do not use them.

**Asymmetry is intentional here, not accidental.** Where the previous system defaulted
every section to a centered heading over a uniform `auto-fit` card grid, this one should
break that rhythm on purpose where the content earns it: a dominant image against a
narrower text column, one large "featured" tile beside two or three smaller ones, a quiet
text index running alongside a photograph rather than below it. `repeat(auto-fit,
minmax(Npx, 1fr))` is still the right tool for a genuinely uniform grid (the "moments"
gallery, a future catalog page) — just don't reach for a uniform grid as the default
composition for every section.

## Shape & Elevation

- **Radius stays small and deliberate:** `--radius-none` (0px) for the button/badge edges
  that want a crisp, fashion-label cut (this brand's buttons keep the sharp corner — a
  hard-edged rectangle reads more like a perfume box than a rounded card does);
  `--radius-sm` (2px) for photography and content cards, just enough to soften a corner
  without going "app UI." **No pill shapes, no radius above `--radius-sm` anywhere** —
  large rounding is the single fastest way back to "friendly neighbourhood" territory.
- **Borders as structure:** `--color-border` (hairline) for dividers and photo frames;
  a blush or gilt hairline (`accent-200`/`secondary-400` at 1px) replaces a plain grey
  hairline in the moments where the coquette detail should read — a divider inside a
  testimonial card, the top edge of the closing CTA band, never a `border-left` accent
  stripe (that pattern is banned outright, see below).
  - **`border-left`/`border-right` accent stripes are banned.** If a callout or card wants
    a colored edge, give it a full hairline border or a wax-seal badge instead.
- **Shadows stay barely-there:** `--shadow-sm`/`--shadow-md`, reserved for genuinely
  liftable/interactive elements (a hovered photo, the hero's floating text panel). Never
  pair a soft wide shadow with a visible border on the same element — pick one.
- **Wine as indicator first, fill second:** same rule as before, now pointed at the deep
  register (`accent-700`) instead of the old flat `accent-600`. One full-bleed wine band
  is still allowed as the single end-of-page CTA moment per page.

## Signature techniques

- **Wax-seal badge.** A small circular badge (`--radius-pill`, the one sanctioned use of
  full rounding on the whole site — it's standing in for an actual sealing-wax stamp, not
  a UI pill) in `accent-700`, `--ff-cursive` lettering in `--color-text-inverse`, used for
  "Signature" / "Popular" tags on featured products. This replaces the old flat
  rectangular merchandising tag and is the literal, non-clip-art version of the "ribbon
  and seal" coquette reference.
- **Hairline ribbon divider.** A 1px rule in `accent-200` or `secondary-400`, with a
  slightly wider gap than a structural `--color-border` hairline, used to separate a
  quote from its attribution or a section's intro copy from its content — the "ribbon
  tying two things together" reference, executed as an actual rule, not a bow graphic.
- **Pearl-dot separator.** A single small filled circle (`4–6px`, `neutral-400` or
  `accent-300`) used inline between two short pieces of metadata (a name and a location,
  a category and a price) instead of a slash or pipe character — a literal small round
  "pearl," not a decorative string of them.
- **Real photography, sourced with intent.** Hero and every product-adjacent section use
  real imagery (verified stock where house photography doesn't exist yet) — the literal
  subject (a bakery window's pastry display, a hand shaping dough, a ribboned bouquet, a
  pearl necklace standing in for "the finishing touches: ribbon, pearl, topper") rather
  than a generic "food" stock choice or a colored placeholder rectangle.
- **Noise-grain overlay** — unchanged, `body::before` with the `feTurbulence` filter,
  `opacity: 0.035` light / `0.05` dark, implemented once in `defaults.css`.
- **No mono kicker labels, no `NN //` section numbering.** Still true, and now doubly
  important: the italic-serif-plus-small-mono-label combination is precisely the
  "editorial-typographic" aesthetic lane currently saturating AI-built brand sites. This
  system uses ordinary `--ff-display` headings for section titles, no kicker above them.
- **Scroll-reveal fade-in and Lenis smooth-scroll** — unchanged, `ScrollReveal`
  (`src/components/scroll-reveal`) and `lenis`, wired site-wide. Vary which sections get a
  reveal and how (a photograph might crossfade while its caption/price tag reveals a beat
  later) rather than applying one identical reveal to every section in sequence.
- **Closing wine CTA band** — a page's final section, full-bleed `accent-700` background,
  a single hairline of gilt (`secondary-400` at low opacity) along its top edge as the one
  "framed like a keepsake box" detail, light/inverse text throughout, primary and
  secondary actions flipped to light-on-wine. One per page, end-of-page only.

## Motion

Unchanged mechanism, same tokens:

- Universal `* { transition: all 0.3s ease }` in `defaults.css` covers most hover/focus/
  theme-change state changes.
- Duration tokens (`--dur-fast` 0.2s, `--dur-base` 0.3s, `--dur-slow` 0.5s, `--dur-reveal`
  0.7s) and easing tokens (`--ease-out`, `--ease-inout`) layer finer control on top.
- `prefers-reduced-motion` is guarded globally in `defaults.css` — new components don't
  need to re-implement this, but should verify they don't rely on motion to convey
  information that's lost when it's disabled.

## Component catalog

Two tiers: a real global kit in `src/components/*`, and route-local patterns.
Bakery-specific components (`ProductCard`, cart UI, WhatsApp CTA, etc.) get designed and
documented as they're actually built against the tokens above, not catalogued in advance.

### Global kit — `src/components/*` (reusable across any page)

- **`Button`** (`src/components/button`) / **`Link`** (`src/components/link`) — shared
  interaction primitive via `colorStyleVars()` in `button/styles.ts`. `ColorFamily` covers
  `grey | neutral | primary | secondary | accent | success | caution | info | error`.
  Variants: `filled` / `outlined` / `text`; sizes `sm` / `md` (default) / `lg`. Default CTA
  usage on this brand: `color="accent"` `colorWeight={700}` (the wine register, not the old
  `600`).
- **`CommonFullWidthWrapper`** (`src/components/common-full-width-wrapper`) — see Layout &
  Spacing above.
- **`ThemeSetter`** (`src/app/(app)/theme-setter.tsx`) / **`ThemeToggle`**
  (`src/components/theme-toggle.tsx`) — see Theming above. `ThemeSetter` resolves the
  initial theme (light-default, no system-preference inference); `ThemeToggle` is the only
  path to dark mode, an explicit visitor choice.
- **`ScrollReveal`** (`src/components/scroll-reveal`) / **`SmoothScroll`**
  (`src/components/smooth-scroll.tsx`) — see Signature techniques and Motion above.
- **`html`** (`src/components/html`) — the `H1`/`H2`/`P`/`Span` text primitives; `$size`,
  `$weight`, `$color`/`$colorWeight`, `$margin` props resolve against the token system
  above. Use these instead of raw `<h1>`/`<p>` tags with ad-hoc classes.

### Page-local patterns — specific to one route, not meant for reuse elsewhere yet

If a pattern needs to be reused by a second route, promote it into `src/components/` at
that point rather than importing across page boundaries.
