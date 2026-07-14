# Cranbakery Website

Website for [Cranbakery](https://instagram.com/cranbakery) — Desserts & Delights. Replaces the current Instagram/WhatsApp PDF-menu ordering flow with a proper digital catalog and a WhatsApp-based checkout.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Payload CMS](https://payloadcms.com/) — embedded in the same app, custom frontend (no Payload prebuilt UI on the public site)

## Docs

Start with **[`AGENTS.md`](./AGENTS.md)** — it's the entry point and points to everything else.

- [`docs/PRODUCT.md`](./docs/PRODUCT.md) — product vision, audience, requirements, content model
- [`docs/DESIGN.md`](./docs/DESIGN.md) — design language, tokens, components
- [`docs/CONVENTIONS.md`](./docs/CONVENTIONS.md) — code structure and style rules
- [`docs/AUTOMATIONS.md`](./docs/AUTOMATIONS.md) — scripts, CI, deploys, jobs

## Getting Started

### Prerequisites

- Node.js (LTS)
- A package manager (npm/pnpm/yarn — see `docs/CONVENTIONS.md` for the project's choice)
- A Postgres/Mongo instance for Payload (see `.env.example`)

### Setup

```bash
# install dependencies
npm install

# copy env vars and fill in DB connection, Payload secret, etc.
cp .env.example .env

# run the dev server (Next.js + Payload admin)
npm run dev
```

- App: [http://localhost:3000](http://localhost:3000)
- Payload admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### Common Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |
| `npm run typecheck` | Run TypeScript checks |

See `docs/AUTOMATIONS.md` for the full/authoritative list, including any Payload seed or migration scripts.

## Project Notes

- Delivery-only business — no pickup flow on the site.
- No online payments. The site ends in a cart that compiles into a single, pre-filled WhatsApp message.
- All catalog content (products, categories, prices) is managed through the Payload admin, not hardcoded.
