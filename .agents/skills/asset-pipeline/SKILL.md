---
name: asset-pipeline
description: Organize the bakery image library — categorize, rename, and move files under public/assets/images/** to match the categories in src/data/menu.json, and wire available local images into the homepage. Use when the user asks to sort/rename/categorize product photos, or to swap remote images for local ones.
---

Deterministic, rule-bound work. Follow these rules exactly; when a rule and your own judgment
conflict, the rule wins.

## Categorizing images into folders

1. The **only** allowed categories are the ones present in `src/data/menu.json` (read it first,
   list the category slugs). **Never invent a new category** — not even "signature",
   "misc", or "uncategorized".
2. For each image in the source folder (typically `public/assets/images/ungrouped/`), look at
   the actual picture (Read it) and place it in `public/assets/images/<category>/`.
3. If unsure which category an image belongs to, pick the **closest** existing category — never
   skip it, never leave it in `ungrouped/`.
4. Non-product images that already have a meaningful name and a sensible home (e.g.
   `company/logo.png`, a `ceo/devpriya.jpg` portrait) are **out of scope** — do not touch or
   recategorize them.

## Renaming images

1. Rename gibberish filenames (e.g. `sdfkjvsjn.jpg`) to `<foldername><n>` numbered per folder:
   `brownies/` → `brownie1.jpg`, `brownie2.jpg`, … Preserve the original extension.
2. **Skip files that already have a sensible, meaningful name** (e.g. `devpriya.jpg`) — leave
   them exactly as-is.
3. Number sequentially and stably within a folder; don't create gaps or collisions (check for
   an existing `brownieN` before assigning).

## Wiring local images into the homepage

1. Homepage image references live in the section constants
   (`src/app/(app)/_home/constants.ts` and per-section files). Prefer a **local** image from
   `public/assets/images/<category>/` (via the `@images/*` alias) over a remote URL whenever a
   suitable local one exists.
2. If no local image exists for a slot (e.g. muffins not yet shot), keep the current remote
   image rather than leaving it broken.
3. Remote images from Unsplash go through `next/image`. This repo restricts `images.qualities`
   — if you set `quality`, it must be a value present in `next.config.js` `images.qualities`
   (currently `[75]`), or add the value there. Don't hardcode `quality={100}` against a config
   that only allows `[75]`.
4. Every `next/image` needs a descriptive `alt`.

## Finish

- Confirm no image was left in `ungrouped/` (or report which couldn't be placed and why).
- Confirm no already-well-named / out-of-scope file was renamed or moved.
- If homepage constants were touched, run `pnpm lint` and confirm the dev server (if running)
  still renders — do not start/kill a running dev server without asking (AGENTS.md).
