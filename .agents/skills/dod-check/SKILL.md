---
name: dod-check
description: Run the repo's Definition-of-Done and CONVENTIONS gate over a set of changed files or a diff — kebab filenames, folder+index units, <150 LOC, @ aliases, no inline colors/px, server-by-default, ESLint green. Read-only structural gate the orchestrator runs before declaring build work done. Not a design or bug review.
---

Read-only. You verify structure and conventions and report pass/fail per rule; you do not fix
anything. This is the closing gate on build work — the orchestrator runs you before it declares a
task done. Scope: structural/convention compliance only (not visual design → `design-audit`, not
correctness bugs → `/code-review`).

## Scope of the check

Default to the working-tree diff (`git diff --name-only` + `git diff`) unless given explicit
files. Check only files the change touched, plus their unit siblings.

## Checklist (from AGENTS.md "Definition of done" + docs/CONVENTIONS.md)

1. **Kebab-case filenames** — every new/renamed file and folder is lower-kebab-case (CONVENTIONS
   §1). Component identifiers/TS types stay PascalCase in code — that's fine, filenames only.
2. **Folder + index units** — a unit is a kebab folder with `index.tsx`/`index.ts` (+ optional
   `types.ts`), not a bare loose file (CONVENTIONS §2). Flag `foo.tsx` that should be `foo/index.tsx`.
3. **150-LOC rule** — no file past ~150 LOC; if one is, it must be split by responsibility
   (CONVENTIONS §5). Report the file and its line count.
4. **`@` path aliases** — imports use `@app`/`@components`/`@utils`/`@/…` aliases, not deep
   relative chains (`../../..`). Relative only for true siblings within a unit (CONVENTIONS §6).
5. **Tokens only** — no inline hex/HSL/rgb, no raw px font sizes, no magic numbers, no `dark:`
   color literals (AGENTS.md golden rule 1). (Depth of design conformance is `design-audit`'s
   job; here just flag the obvious inline-style violations.)
6. **Server component by default** — `"use client"` appears only at the smallest leaf that needs
   it, not blanket-applied to a whole section/route (CONVENTIONS §7, golden rule 6).
7. **No `any`** — TypeScript strict; exported functions declare return types (CONVENTIONS §9).
8. **Surgical** — every changed line traces to the request; no unrelated "improvements",
   reformatting, or drive-by refactors in the diff (AGENTS.md "Surgical changes").
9. **ESLint** — run `pnpm lint`. Must be green. Report failures verbatim; do not suppress rules.

## Method

- Enumerate changed files, apply each rule, cite `file:line` for every failure.
- Run `pnpm lint` and include the real result (pass, or the actual errors). Never claim green
  without running it.

## Output

A compact pass/fail table: `Rule | Status | Offending file:line (if fail)`. End with a one-line
verdict: **DONE** (all pass) or **NOT DONE** with the blocking items listed. Report only; the
orchestrator or an editor agent applies fixes.
