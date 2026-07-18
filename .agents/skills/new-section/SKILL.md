---
name: new-section
description: Scaffold a new App Router route or a new section within an existing route, following THIS repo's real structure and conventions (route group (app), _home sections, section-heading/FullWidthWrapper/ScrollReveal reuse, @ aliases, per-route constants.ts). Use when the user asks to add a new page/route (e.g. "build the /menu page") or a new section to an existing route (e.g. "add a testimonials section to the homepage").
---

Before generating anything, read `docs/CONVENTIONS.md` §3 (Project structure), §4 (Data &
content model), §5 (150-LOC rule), and `docs/DESIGN.md`'s **Component catalog** and
**Signature techniques**. Scaffold to match what is actually in the repo today — do not invent a
structure, and do not copy patterns from a portfolio/other template.

## Ground truth about this repo (verify, don't assume)

- All routes live under `src/app/(app)/` (route group, aliased `@app/*`). The group name is
  stripped from the URL. The shared root `layout.tsx` (fonts, theme, chrome) is here.
- The homepage is `src/app/(app)/page.tsx`; its sections live in
  `src/app/(app)/_home/<section>/index.tsx`, with copy in `src/app/(app)/_home/constants.ts`.
- Global reusable kit is `src/components/*` (aliased `@components/*`): `button`,
  `full-width-wrapper`, `header`, `link`, `marquee`, `scroll-reveal`, `section-heading`,
  `smooth-scroll`, `theme-setter`, `theme-toggle`. Read the actual `index.tsx` of any you use —
  do not guess props.
- Catalog data is `src/data/menu.json` (brand + categories + products). Import it directly
  (e.g. `import menu from "@/data/menu.json"`); there is no `@data` alias yet.
- There is **no `sitemap.ts`, `robots.ts`, or `JsonLd` component yet.** If a task needs them,
  create them (don't reference them as if they exist), and update this skill.

## 1. Determine the scope

- **New section within an existing route** (common) — e.g. "add a reviews section to the
  homepage". Goes under `<route>/<section>/`.
- **New top-level route** (bigger) — e.g. "build the `/menu` page". Needs its own `page.tsx`,
  metadata, `constants.ts`, and nav wiring. Cross-check `docs/PRODUCT.md` §6 (IA/sitemap) and §7
  (component architecture) for what the route must contain before inventing content.

## 2. New section within an existing route

Given a route at `src/app/(app)/<route>/` (the homepage's `<route>` is `_home`):

1. Create `src/app/(app)/<route>/<section-name>/index.tsx` (kebab folder + `index.tsx`). Open a
   sibling section first (`_home/hero/`, `_home/signature-products/`, `_home/brand-story/`) and
   match its exact shape — a section is a folder with `index.tsx` plus sibling part files
   (e.g. `hero/img.tsx`) when it needs sub-parts, not one long file.
2. For the standard title/description/optional-action header, use the shared `SectionHeading`
   (`@components/section-heading`) rather than hand-rolling an `<h2>`. It renders the `<h2>`, an
   optional `description`, and an optional `action` node (button on the right). Pass `action`
   only when the section has a CTA.
3. Contain width with `FullWidthWrapper` (`@components/full-width-wrapper`) — don't hand-roll
   max-width/centering.
4. Put all copy/content in the route's `constants.ts` (`src/app/(app)/<route>/constants.ts`),
   not inline in the component beyond structural text. Product data comes from
   `src/data/menu.json`.
5. Style **only** through tokens per `docs/DESIGN.md` — semantic color aliases, `--fs-*` sizing
   (never raw px/hex, never `dark:` color literals; rely on ramp inversion). Reuse the signature
   techniques (noise grain, image gradient overlays for text readability, etc.) instead of
   inventing new ornament.
6. Server component by default. Add `"use client"` only at the smallest leaf that needs
   interactivity/browser APIs/hooks.
7. Wire the section into the route's `page.tsx` in the right visual order. The homepage wraps
   most sections in `<ScrollReveal>` (`@components/scroll-reveal`) for entrance animation — mirror
   that if the section belongs in the revealed flow.
8. Keep every file under ~150 LOC (CONVENTIONS.md §5); split into sibling files if it grows.

## 3. New top-level route

1. `src/app/(app)/<route>/page.tsx` as a server component. Export a `Metadata` object (title,
   description, `alternates.canonical`, `openGraph`, `twitter`) — model it on
   `src/app/(app)/page.tsx`'s existing metadata, not from scratch.
2. `src/app/(app)/<route>/constants.ts` for the route's copy.
3. Build sections under `src/app/(app)/<route>/<section-name>/` per §2. Anything reused across
   the route's own sections goes in `src/app/(app)/<route>/components/`; promote to global
   `src/components/` only when a second route needs it (CONVENTIONS.md §7).
4. Wire nav: add the route to `src/components/header/` (check its link list), matching the
   existing nav link styling per `docs/DESIGN.md`.
5. If SEO infra (sitemap/robots/JsonLd) is needed and absent, create it — then run `/seo-audit`.

## 4. Before finishing

- Run `pnpm lint` — must be green (auto-fixed, not suppressed).
- No inline colors/px sizes introduced (spot-check against `docs/DESIGN.md`).
- Every new unit is a kebab folder with `index.tsx`, under ~150 LOC, imports via `@` aliases.
- If a route was added/changed, consider `/seo-audit` and `/perf-check` before calling it done.
