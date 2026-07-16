# CONVENTIONS.md

Technical conventions and source of truth for how the codebase is structured and written.
Pairs with DESIGN.md (look and feel) and PRODUCT.md (what the site is). Agents (Claude Code,
skills, MCP tools) follow this for every file they create or edit. When a rule here conflicts
with a default habit, this file wins.

Stack: Next.js (App Router) + TypeScript + Tailwind, pnpm, `src/` directory, content as `.md`.

---

## 1. Naming

- **Everything on disk is lower kebab-case**: files and folders. No PascalCase, no camelCase,
  no snake_case in file or folder names. Examples: `hero-section/`, `use-theme.ts`,
  `format-date.ts`, `why-i-shifted-to-next-js.md`.
- The kebab rule is about filenames only. Inside code, identifiers keep their language norms:
  - React component identifier stays PascalCase (JSX requires it): file `button/index.tsx`
    exports `export function Button() {}`.
  - TypeScript `type` / `interface` names stay PascalCase: `ButtonProps`.
  - Variables/functions camelCase; true constants SCREAMING_SNAKE_CASE.
- Route folders follow Next.js needs (`[slug]`, `(group)`, `layout.tsx`, `page.tsx`); these
  are framework names and are exempt from kebab where the framework dictates otherwise.

## 2. Folders over bare files

- Prefer a folder with an `index.tsx` (or `index.ts`) entry over a single loose file. A
  button is `components/button/index.tsx`, not `components/button.tsx`.
- Co-locate everything a unit owns inside its folder:
  - `index.tsx` the entry / public surface
  - `types.ts` its types (only if needed)
  - sub-parts as their own kebab folders or files when split (see 5)
  - unit-specific helpers in the same folder
- Import the unit by its folder; `index` resolves automatically:
  `import { Button } from "@/components/button"`.

## 3. Project structure

```
src/
  app/
    (app)/                 # route group: page.tsx, layout.tsx, route folders (aliased @app)
      <route>/             # example route
        components/        # components local to this route only
        hero/, work/, ...  # one kebab folder per section/module of the route
        constants.ts       # this route's copy/presentation data
        page.tsx, layout.tsx, ... # next.js route files
  components/              # global reusable UI units (kebab folder + index.tsx), used by 2+ routes
  utils/                   # small framework-agnostic helpers (e.g. tw, cookies)
  styles/                  # globals.css, defaults.css, components.css
  hooks/                   # shared hooks (a hook lives beside its consumer
                           # in its component folder until a second route needs it)
  icons/                   # custom icon components — last resort only, see §7a
public/
  assets/images/           # images
  ...                      # resume pdf, og images, other static assets
```

Keep route files thin: a route's `page.tsx`/`layout.tsx` compose its section folders and local
`components/`, they do not hold large logic blocks themselves.

- **`(app)` route group**: all real routes live under `src/app/(app)/`, which holds the shared
  root `layout.tsx` (fonts, theme, global chrome). The group name is stripped from the URL —
  it exists purely to scope that layout to app routes, aliased as `@app/*`.

### Route sections vs. route components

A route is built from two kinds of folders:

- **`<route>/<section>/`** — one modular slice of the route (e.g. `hero/`, `work/`,
  `manifesto/`). Each is a kebab folder with its own `index.tsx` (+ sibling files as needed).
  This is how a route stays under the 150-LOC rule without becoming one giant file: split by
  section, not by arbitrary line breaks.
- **`<route>/components/`** — small pieces reused _within that route only_, across its
  sections (e.g. about's `RailSection`/`ScrollReveal`, work's `WorkItemCard`). If a
  `components/` piece is ever needed by a second route, promote it to the global
  `src/components/` (see §7 Components) — this already happened for `Section` (formerly
  `home/components/section`) and `ExperienceCard`, both now used by 2+ routes.

## 4. Data & content model

- **Per-route `constants.ts`** (i.e. `src/app/(app)/<route>/constants.ts`) — that route's copy
  and presentation data (section titles, descriptions, image URLs, tag lists). Route sections
  import from their own route's `constants.ts`, not from another route's.
- No shared raw-data layer (`@data`) exists yet. If cross-route data emerges, introduce a
  `src/data.ts` aliased `@data` at that point — add the alias to `tsconfig.json` first (see §6) and update this line.

## 5. Modular code (applies to ALL files, not just components)

- **Hard rule: if a file passes ~150 lines of code, split it.** This is not a soft target.
  When a file grows past it, break it into smaller files in the same folder and re-export
  from `index`.
- Split by responsibility, not by line count alone: extract a sub-component, a hook, a types
  file, a pure helper. A unit folder ends up like `index.tsx` + `parts/*` + `types.ts` +
  `utils.ts` rather than one long file.
- One primary export per file; a file does one job. Pure functions live in the unit's
  `utils.ts`, not inline in a component (introduce a shared `src/lib/` only once a helper is
  genuinely cross-cutting.
- Prefer composition (small pieces assembled) over large monoliths everywhere, including
  hooks and route files.

## 6. Imports

- **Always prefer the `@` path alias** over relative paths. `@/components/button`, not
  `../../../components/button`. Relative imports only for true siblings within the same unit
  folder (`./parts/icon`).
- Import order: external packages, then `@/` internal, then relative, then styles/assets.
  Let ESLint enforce and auto-fix ordering.
- No deep relative chains (`../../..`); if you are tempted, use the alias.

**Alias reference** (`tsconfig.json`):

| Alias                | Resolves to                          |
| -------------------- | ------------------------------------ |
| `@app/*`             | `src/app/(app)/*`                    |
| `@components/*`      | `src/components/*`                   |
| `@hooks/*`           | `src/hooks/*`                        |
| `@utils/*`           | `src/utils/*`                        |
| `@styles/*`          | `src/styles/*`                       |
| `@icons`, `@icons/*` | `src/icons/*` — last resort, see §7a |
| `@images/*`          | `public/assets/images/*`             |
| `@assets/*`          | `public/assets/*`                    |
| `@public/*`          | `public/*`                           |
| `@/*`                | `src/*`                              |

Add a new alias to `tsconfig.json`'s `paths` (and mirror it here) before using it — don't
introduce an import path the config doesn't yet resolve.

## 7. Components

- Default to React Server Components; add `"use client"` only when the unit needs
  interactivity, browser APIs, or hooks like state/effect. Push client boundaries to the
  smallest leaf possible.
- Props are typed via a `Props` type/interface (in `types.ts` when non-trivial). No `any`.
- Keep components presentational where possible; lift data and side effects out.
- Co-locate a component's styles and helpers in its folder. Style only through tokens per
  DESIGN.md.

### Global vs. local components

- **Global** (`src/components/*`) — reusable across any route, no dependency on a specific
  route's data or `constants.ts`. This is the kit DESIGN.md's component catalog documents
  (`Button`, `Link`, `FullWidthWrapper`, `JsonLd`, `ThemeSwitcher`, `Hamburger`, ...).
- **Local** (`<route>/<section>/*`, `<route>/components/*`) — specific to one route, allowed
  to import that route's `constants.ts` directly. Not meant to be imported by another route.
- **Promotion rule**: when a local pattern is needed by a second route, move it into
  `src/components/`, generalize its props (drop the route-specific data dependency), and
  update both routes to import it from there. Don't cross-import one route's local component
  into another route.

### 7a. Icons

- **Lucide React (`lucide-react`) is the default for icons.** Import the icon you need
  directly from the package; do not build a custom SVG component for something Lucide already
  covers.
- **`src/icons/` (aliased `@icons`) is a last resort**, for icons Lucide genuinely doesn't
  have (a brand mark, a bespoke shape) or where the design calls for custom line art. Adding a
  file here should be the exception, not the default reach.
- When a custom icon is truly needed, follow the same rules as any component: kebab filename,
  typed props, no inline magic numbers.

## 8. Styling

- Token-driven only, per DESIGN.md. Consume semantic aliases first, then ramp shades, then a
  `--_`-prefixed local for component variants.
- No inline hex/HSL, no raw px font sizes, no magic numbers. Use `--fs-*` for all UI/body/
  heading sizing (the hero headline is the one documented exception — see DESIGN.md) and
  `--text-*` for the button-size scale (`btn-sm`/`btn-lg`).
- Never add `dark:` color literals; rely on the ramp inversion. Reuse the signature kit and
  component patterns from DESIGN.md instead of inventing new ornament.

### Complex CSS as a co-located file

- Simple styling stays inline as Tailwind classes on the element. Once a component's styling
  is complex enough to want `@utility` blocks, nested selectors, or several related variants
  (e.g. `Button`'s `btn`/`btn-filled`/`btn-outlined`), pull it into its own `<component>.css`
  file co-located in that component's folder (e.g. `components/button/button.css`), not inline.
- Register it with a single `@import` line in `src/styles/components.css`, one line per
  component file, e.g. `@import "../components/button/button.css";`. `components.css` stays a
  pure index — no rules of its own.
- Write rules with `@utility` (not `@layer components`) so Tailwind v4 registers them as real
  utility candidates; `eslint-plugin-better-tailwindcss` then recognizes them with no manual
  ignore-list entries needed.
- Document non-obvious contracts at the top of the file as a comment: required CSS vars (e.g.
  `--c`/`--c-hover`), optional overrides, and why `@utility` was chosen over `@layer
components`. See `button/button.css` for the reference example.

### Theme (light/dark)

- The runtime mechanism is fixed: a `theme` cookie is read server-side in the root layout and
  sets exactly one class, `light` or `dark`, on `<html>` at SSR (defaults to `light` when no
  cookie). This makes returning visitors render correct on the server with no flash.
- A client `ThemeSetter` (mounted in `body`) reconciles on mount with precedence
  **`?theme=` query param > cookie > default light**, persists the result to the cookie, and
  toggles the `light`/`dark` class on `documentElement`. Theme state lives only in the cookie —
  no localStorage.
- `src/styles/globals.css` keys styling off `:root, .light` (light) and `.dark` (inverted
  ramp). Exactly one of those classes is always present.
- **Components never branch on theme in JS for styling.** They use tokens; the class on
  `<html>` does the rest. Only the theme toggle writes the cookie and flips the class (reuse
  the existing client helper, do not re-implement).
- Known tradeoff: a first-time visitor with no cookie whose system is dark sees a brief light
  paint before `ThemeSetter` runs. Acceptable as-is; if you want to remove it, set the class
  from a tiny blocking inline script in `<head>` before paint (do not change the cookie model).

## 9. TypeScript

- Strict mode on. No `any` (use `unknown` + narrowing when truly unknown). Exported functions
  declare return types. Prefer `type` for unions/utility shapes, `interface` for object
  contracts that may extend; stay consistent within a folder.
- Types live next to what they describe (`types.ts` in the unit folder); introduce a shared
  `src/lib/` or `types/` area only once a type is genuinely cross-cutting.

## 10. Linting and quality gates

- ESLint is already configured; **follow it, and always fix what it reports.** Do not leave
  lint errors or disable rules to silence them without a clear, commented reason.
- Run lint:fix (and let it auto-fix) as part of finishing any change. A change is not done while
  ESLint is red.

## 11. Tooling

- Package manager is **pnpm**. Use `pnpm` for install/scripts; do not mix in npm/yarn
  lockfiles.

## 12. Git (light)

- Conventional Commits for messages (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, etc.),
  short and present-tense. This is a soft convention, not a heavy process; keep commits
  focused and readable.
- Do not commit on your own, unless asked by the user.

## 13. Quick checklist for any new file

- Name is lower kebab-case.
- It lives in a folder with an `index` entry where it represents a unit.
- It is under ~150 LOC; if not, it is split.
- Imports use `@` aliases; ESLint is green and auto-fixed.
- Styling goes through tokens; no inline colors or magic numbers.
- Server component by default; client only where required.
