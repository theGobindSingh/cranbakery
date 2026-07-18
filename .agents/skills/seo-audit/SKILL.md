---
name: seo-audit
description: Audit every App Router page.tsx for missing or weak SEO metadata, OG/Twitter tags, canonical URLs, JSON-LD structured data, and heading/image/link accessibility, per docs/PRODUCT.md §8 (SEO must be indexable, SSG/ISR) and the AGENTS.md golden rule 7. Use after adding or changing a route, or when asked to check SEO health.
---

Use `src/app/(app)/page.tsx` (homepage) and `src/app/(app)/layout.tsx` as the reference baseline
for what "correct" looks like in THIS repo. A finding is "missing X" only if a route falls short
of the homepage baseline or of a requirement in `docs/PRODUCT.md` — not a hypothetical ideal.

Ground truth: routes live under `src/app/(app)/`. As of now this is largely a single-page site;
`sitemap.ts`, `robots.ts`, a `JsonLd` component, and a shared site-config module **do not exist
yet**. Where a check below depends on one of those and it's absent, report it as "recommend
creating X", not "route fails to use X".

For every `page.tsx` under `src/app/(app)/`, check:

1. **Metadata export** — a `Metadata` object with at least `title` and `description`. Prefer
   overriding the root template set in `layout.tsx` rather than duplicating a full title.
2. **Canonical URL** — `alternates.canonical` set. If the domain is hardcoded in more than one
   place, recommend extracting a single `SITE_URL` constant (e.g. `src/lib/site-config.ts`).
3. **Open Graph** — `openGraph` block (title, description, url, images).
4. **Twitter card** — `twitter` block, `card: "summary_large_image"`.
5. **JSON-LD structured data** — for a bakery, `LocalBusiness`/`Bakery` and `WebSite` on the home
   page; `BreadcrumbList` on nested pages; `Product`/`Offer` on menu/product pages once built
   (`docs/PRODUCT.md` §5/§7). Recommend rendering it via a small shared `JsonLd` component rather
   than a hand-written `<script>` — create one if it doesn't exist yet.
6. **Heading structure** — exactly one `<h1>` per page, logical order after it (`<h2>` for
   section titles — most sections render `SectionHeading` as an `<h2>`).
7. **Images** — every `next/image` has a descriptive `alt`; no meaningful image ships with an
   empty/placeholder `alt`. `next/image` (not raw `<img>`) for optimizable images; `quality` must
   be a value allowed in `next.config.js` `images.qualities`.
8. **Link text** — no bare "click here"/"read more"; icon-only links have an `aria-label`.

Project-wide:

- **Sitemap/robots** — recommend adding `src/app/sitemap.ts` and `src/app/robots.ts` covering
  every real route once more than the homepage exists; until then, note they're not needed yet.
- **Indexability** — indexable content is server-rendered (SSG/ISR), not client-only
  (`docs/PRODUCT.md` §8).

Report format: one line per route, pass/fail per check, naming the specific gap (not just "SEO
incomplete"). Separate "route falls short of baseline" (fix now) from "infra not built yet"
(recommend creating). If a route is fully compliant, say so briefly rather than omitting it.
