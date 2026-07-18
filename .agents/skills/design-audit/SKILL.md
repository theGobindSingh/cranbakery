---
name: design-audit
description: Check UI code against docs/DESIGN.md — either audit an existing page/component for drift ("does the homepage still match the design doc / is the doc outdated?") or verify a freshly built unit conforms before it ships. Read-only; produces a drift table plus proposed doc or code edits, never applies them.
---

Read-only. You compare implementation against `docs/DESIGN.md` and report; you do not edit code
or docs. Output is a table the orchestrator or user acts on.

## Inputs

- **Target**: which files to check (a route, a section folder, or "the whole homepage").
- **Direction**: is the code the source of truth (doc may be outdated → propose doc updates), or
  is the doc the source of truth (code drifted → propose code fixes)? If unstated, report both
  and flag which side each finding leans.

## What to check (against docs/DESIGN.md sections)

1. **Colors** (§ Colors) — every color comes from a token / semantic alias. Flag any inline
   hex/HSL/rgb, any `dark:` color literal (the ramp is supposed to invert automatically), any
   raw Tailwind color like `text-red-500` instead of a semantic token.
2. **Theming** (§ Theming) — light is the default; no JS branching on theme for styling; theme
   comes only from the `light`/`dark` class on `<html>`.
3. **Typography** (§ Typography) — sizes use `--fs-*` (and the documented font families, e.g.
   `font-gothic`); no raw px font sizes; heading hierarchy sane (one `<h1>` per page, `<h2>` for
   sections via `SectionHeading`).
4. **Layout & Spacing** (§ Layout & Spacing) — width contained via `FullWidthWrapper`; spacing
   uses the documented scale, not magic numbers.
5. **Shape & Elevation** (§ Shape & Elevation) — radius/border/shadow use documented tokens.
6. **Signature techniques** (§ Signature techniques) — the section reuses the documented kit
   (noise grain, image gradient overlays for text readability, etc.) rather than inventing
   parallel ornament. Flag invented ornament.
7. **Motion** (§ Motion) — animations respect `prefers-reduced-motion` (no-op under it); entrance
   reveals go through `ScrollReveal`.
8. **Component catalog** (§ Component catalog) — the code reuses the documented global kit
   (`Button`, `Link`, `SectionHeading`, `FullWidthWrapper`, …) instead of re-implementing it.
   Flag any hand-rolled duplicate of a catalogued component.

## Method

- Read the target files and the relevant DESIGN.md sections. Ground every finding in a specific
  file:line and the specific DESIGN.md rule it violates or diverges from.
- Distinguish **clash** (code violates a still-valid doc rule → fix code) from **drift** (code
  reflects a newer, better reality the doc hasn't caught up to → update doc). Say which.
- A finding is real only if it diverges from what DESIGN.md (or the existing homepage baseline)
  actually says — not a hypothetical ideal.

## Output

A table: `File:line | DESIGN.md rule | Clash or Drift | Proposed edit (code fix OR doc update)`.
Most-impactful first. If a target is fully conformant, say so briefly rather than padding. Do not
apply any change — hand the proposed edits back.
