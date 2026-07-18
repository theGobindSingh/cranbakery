---
name: token-edit
description: Make palette, color-token, spacing, radius, or font changes to the design system safely — editing src/styles/globals.css and keeping docs/DESIGN.md in sync, enforcing tokens-only / ramp-inversion / no dark: literal rules. Use when the user wants to change the color palette, add/rename a font family, adjust the accent/primary, or tweak any design token.
---

The design system is token-driven. A token change is done only when the CSS **and** the DESIGN.md
docs agree, and nothing bypasses tokens.

## Where things live (read before editing)

- `src/styles/globals.css` — the token definitions, keyed off `:root, .light` (light) and `.dark`
  (inverted ramp). Exactly one of those classes is always present on `<html>`.
- `src/styles/defaults.css`, `src/styles/components.css` — element defaults and the per-component
  CSS index.
- `docs/DESIGN.md` — the human source of truth for what each token means (§ Colors, § Typography,
  § Layout & Spacing, § Shape & Elevation). Any token change must be reflected here too.

## Rules (do not violate)

1. **Change tokens, not call sites.** Update the token value/definition in `globals.css`; don't
   sprinkle new hex values at usage sites. If a component needs a variant, add a token or a
   `--_`-prefixed local per DESIGN.md, don't inline a color.
2. **Ramp inversion, not `dark:` literals.** Define the light ramp and its inverted dark
   counterpart in the `.dark` block. Never add `dark:<color>` utility literals — the class on
   `<html>` does the switching.
3. **Semantic aliases stay semantic.** If asked to "make accent distinct from primary" or "rename
   glaze to accent", change the semantic alias mapping and its ramp, then update every doc
   reference — don't leave a dead token behind (a prior session deleted `accent` and promoted
   `glaze`→`accent`; do the rename cleanly, no orphans).
4. **Fonts**: register a new family through the existing font setup (check how current families
   like `font-gothic`/sans are wired in the root `layout.tsx` and `globals.css` `--font-*` vars).
   Give it a role-based name (display / sans / serif / mono), not a descriptive one like
   "expanded". Confirm the `--font-*` var is actually defined — a `font-family: var(--font-x)`
   with an undefined `--font-x` is a real bug this repo has hit.
5. Sizing uses `--fs-*`; no raw px font sizes. Spacing/radius use documented tokens, no magic
   numbers.

## Method

1. Read the current tokens in `globals.css` and the matching DESIGN.md section.
2. Make the token edit in `globals.css` (both `:root/.light` and `.dark` where the ramp inverts).
3. Update `docs/DESIGN.md` to match — swatches, token names, and any prose describing them.
4. Grep for any now-dead token name across `src/` and remove/repoint stragglers.
5. Run `pnpm lint`. If a dev server is running, don't restart it — visually confirm light and
   dark both look right (ask before touching a running server).

## Output

State: which tokens changed (old → new), which DESIGN.md sections you updated, and any call sites
you had to repoint. Flag if a requested change would force a `dark:` literal or an inline color —
propose the token-based alternative instead.
