# Cranbakery — Product Document

## 1. Business Overview

**Cranbakery** ("Desserts & Delights") is a home/boutique bakery brand, established 2024, selling cakes, cheesecakes, cake tubs, cookies, brownies, tea cakes, muffins, cupcakes, and donuts. It currently operates as an Instagram-and-WhatsApp order business with no website — customers browse PDF/image menus and order via WhatsApp/DM.

- **Brand tagline:** "We bake happiness"
- **Brand line:** "Life is too short to skip dessert!"
- **Positioning:** premium ingredients, notably Belgian chocolate sourced from Callebaut; 100% hygiene during production and packaging
- **Contact / ordering channels:**
  - Instagram: [@cranbakery](https://instagram.com/cranbakery)
  - WhatsApp ordering: +91 84000 19540 (Devpriya)
  - Additional listed contact: +91 8174955472
- **Fulfillment model:** delivery only — no pickup/storefront flow needed on the site.
- **Visual identity:** see `DESIGN.md` for brand colors, typography, and visual direction — not covered in this document.

## 2. Product Vision

Build a clean, mobile-first website that replaces static PDF/Instagram menus with a proper digital catalog, so customers can:

1. Browse the full product range by category, with photos, descriptions, weights, and prices.
2. Enquire/order directly (WhatsApp-first ordering, since there's no payment gateway or delivery logistics system currently in place).
3. Trust the brand — reinforce premium ingredient sourcing, hygiene standards, and customization options (ribbons, toppers, festive packaging).

This is **not** intended (at least initially) to be a full e-commerce checkout/payment system — it's a **digital menu + lead-generation / WhatsApp-order funnel**, matching how the business actually operates today. This can evolve later into full cart + payments if the business scales.

## 3. Target Users

- **Primary:** Local customers (Kanpur, Uttar Pradesh region, per existing WhatsApp-based ordering) browsing on mobile, deciding what to order for birthdays, get-togethers, or personal indulgence.
- **Secondary:** People discovering Cranbakery via Instagram and wanting a more detailed/organized menu than an IG grid can offer.
- **Tertiary:** Repeat/corporate customers wanting bulk orders (cookie boxes, cupcake boxes, tea cakes) for events.

## 4. Core Requirements

### 4.1 Must-Have (v1)

- **Home page:** brand intro, tagline, hero imagery, links into categories. WhatsApp is not a persistent floating button — it surfaces at cart checkout (compiled order message) and as a contextual contact action (header, footer, contact section) elsewhere.
- **Menu/Catalog pages** organized by category (see §5 for full data), each item showing:
  - Name, short description, image
  - Available sizes/weights and corresponding prices
  - Allergen notes where specified (e.g., Chocolate Caramel Bliss contains cashew)
  - Minimum order quantities where applicable (muffins, donuts, brownies, cupcakes)
- **Order flow — cart system:** the site has a proper cart (client-side, no payment) rather than a simple button. Users add items (with selected pack + quantity) to the cart from any category page, review/edit the cart (remove items, change quantity/pack), and see a persistent cart indicator (e.g. floating button/badge with item count) while browsing.
- **Checkout-to-WhatsApp:** a final "Send Order" / "Checkout via WhatsApp" CTA compiles the entire cart into one formatted text message (item names, packs, quantities) and opens it as a pre-filled `wa.me` link.
- **Post-send cart clearing:** after the user is redirected to WhatsApp and returns to the site (tab refocus/visibility change), the app should detect the return and prompt them to confirm clearing the cart (since the order has presumably been sent) — rather than silently clearing it or leaving stale items in the cart indefinitely.
- **About/Story section:** premium ingredients (Callebaut Belgian chocolate), hygiene commitment, customization options (ribbons/flowers/toppers, sliceable cake versions of tubs).
- **Contact section:** Instagram handle, WhatsApp number, delivery-only note (no pickup/storefront), maybe embedded IG feed or link-out.
- **Out-of-stock handling:** unavailable items stay visible in the catalog but are clearly marked (e.g. "Out of stock" badge, disabled order action) rather than being hidden.
- **Responsive design:** mobile-first (majority of traffic will be mobile, coming from Instagram bio link).

### 4.2 Nice-to-Have (v1.5+)

- Search/filter by category, price range, or flavor (chocolate/fruit/coffee/etc.)
- "Popular" or "Signature" tagging (e.g., Signature Chocolate cake, Tiramisu, Black Forest)
- Basic analytics (which categories/items get the most clicks/WhatsApp taps)

### 4.3 Out of Scope (for now)

- Online payments / checkout
- Delivery tracking / logistics (delivery happens, but no in-app tracking/routing)
- User accounts / login
- Inventory management (beyond a simple available/out-of-stock flag)

## 5. Product Categories (structure, not pricing)

All actual items, prices, weights, and copy will live in **Payload CMS**, not in code. From researching the existing menus, these are the categories the schema needs to support:

- Cakes (signature sponge cakes, sold by weight, e.g. 600g / 1200g)
- Cheesecakes (sold by weight, e.g. 350g / 600g / 1200g)
- Cake Tubs / Gateaux (sold by weight, e.g. 250g / 500g / 1200g, often grouped into sub-collections like "Signature Collection", "Premium Gateaux", "Fruit Delights")
- Cookies (sold by box, e.g. box of 6/8/15, or by weight e.g. ½kg)
- Brownies (sold per piece with a minimum box size, plus a separate "Brownie Cake" sold by weight)
- Tea Cakes (mostly flat single-size pricing, one item sold as a box of 4)
- Muffins (sold per piece with a minimum order quantity)
- Cupcakes (sold per piece, available in box sizes e.g. 4/6/9)
- Donuts (sold per piece with a minimum pack size)

Key patterns the data model must handle (seen repeatedly across the source menus):

- **Weight-based pricing:** same item, multiple weight tiers, each with its own price (e.g. 250g / 500g / 1200g).
- **Piece-based pricing with minimums:** price per piece, but only orderable in a minimum quantity or fixed box sizes (e.g. "minimum box of 4", "box of 6/8").
- **Flat pricing:** single price, no variants (e.g. some tea cakes).
- **Allergen / dietary notes:** at least one item calls out an allergen (cashew) — needs to be a field, not just prose.
- **Customization notes:** some products (cake tubs) support add-ons like ribbon, flower, topper, or a "sliceable cake version" — could be modeled as optional add-ons or just a note field for v1.
- **Category grouping / sub-collections:** some catalogs group items under named collections (e.g. "Signature Collection", "Premium Gateaux Selection") — worth supporting a "collection/tag" field so products can be grouped without needing a rigid category tree.

### 5.1 Suggested Payload CMS Collections

**`Categories`**

- `name` (text)
- `slug` (text, unique)
- `description` (richtext, optional)
- `image` (upload, optional — category cover)
- `order` (number — for display sequencing)

**`Products`**

- `name` (text)
- `slug` (text, unique)
- `category` (relationship → Categories)
- `collectionTag` (text/select, optional — e.g. "Signature Collection", "Specials")
- `description` (textarea/richtext)
- `images` (array of uploads)
- `pricingType` (select: `weight` | `piece` | `flat`)
- `pricePacks` (array — see below, shown conditionally based on `pricingType`)
- `minOrderQty` (number, optional — e.g. "minimum box of 4")
- `allergens` (array of text/select, optional)
- `customizationNotes` (textarea, optional)
- `isSignature` / `isFeatured` (checkbox, optional — for homepage highlights)
- `isAvailable` (checkbox — when off, item stays visible in the catalog but is marked "Out of stock" and its order action is disabled)

**`PricePacks`** (can be a Payload array/block field on `Products` rather than its own collection)

- `label` (text — e.g. "600g", "Box of 8", "1200g")
- `price` (number)
- `unit` (select: `grams` | `piece` | `box`, optional, for consistent formatting)

This keeps all catalog content editable by the bakery owner through the Payload admin UI, with no code changes needed to add/remove items or change prices.

## 6. Information Architecture (suggested)

```
/                      → Home (hero, brand story teaser, category shortcuts, WhatsApp CTA)
/about                 → Brand story, ingredient sourcing, hygiene, customization
/menu                  → Category overview / index
/menu/cakes
/menu/cheesecakes
/menu/cake-tubs
/menu/cookies
/menu/brownies
/menu/tea-cakes
/menu/muffins
/menu/cupcakes
/menu/donuts
/contact               → WhatsApp, Instagram, (map/location if applicable)
```

Each `/menu/[category]` page renders a grid of item cards → item detail (modal or page) with sizes/prices and a WhatsApp order CTA.

## 7. Component Architecture (frontend, data-driven)

Components should be generic and driven entirely by the CMS data shape, not hardcoded per category:

- **`<ProductCard />`** — takes a `Product`, renders image, name, short description, starting price (lowest `pricePacks` entry), out-of-stock badge if `isAvailable` is false, and an "Add to cart" action (with pack/quantity selection). Links to detail view.
- **`<PricePackSelector />`** — takes a `pricePacks[]` array, renders selectable size/box options with prices; adapts label formatting based on `pricingType` (grams vs. piece vs. box).
- **`<ProductDetail />`** — takes a `Product`, composes `<PricePackSelector />`, allergen tags, customization notes, and the "Add to cart" action (disabled if out of stock).
- **`<CategoryGrid />`** — takes a `Category` + its `Product[]`, renders a responsive grid of `<ProductCard />`.
- **`<Cart />`** — global, persistent (client-side state, e.g. `localStorage` + context) list of `{ product, pricePack, quantity }` entries across categories. Shows a floating indicator/badge with item count while browsing, and a review view (drawer/page) to edit quantity, change pack, or remove items.
- **`<WhatsAppCheckoutButton />`** — takes the full cart contents, builds one combined, formatted, prefilled `wa.me` message listing every item + pack + quantity, and opens it. After the user returns to the tab (via the Page Visibility API or a return-focus listener), triggers a confirm prompt asking whether to clear the cart, on the assumption the order was sent.
- **`<CollectionSection />`** (optional) — takes a `collectionTag` string and renders products grouped under it (for cases like "Signature Collection" / "Premium Gateaux Selection") within a category page.

This keeps every page essentially a thin fetch-from-Payload + map-to-component layer, so adding a new category or product later requires zero new components.

## 8. Technical Considerations

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Payload CMS, with **Payload embedded in the same Next.js app** (single codebase/deploy, shared DB connection).
- **Frontend:** fully custom — Payload's prebuilt admin UI is used only for content management; none of Payload's default frontend components/blocks are used for the public-facing site. All public UI is built from scratch per §7.
- **Data fetching:** use Payload's Local API (since it's embedded in the same app) for server-side fetching, with ISR/SSG so menu pages stay fast and SEO-friendly while still reflecting CMS edits without a redeploy.
- **Images:** need proper product photography or at least consistent illustration/photo treatment — currently a mix of illustrated menu graphics and real photos; pick one visual language for the live site (recommend real photography for trust, illustrations only for decorative/hero use). Payload's upload collection can serve as the image source of truth.
- **WhatsApp deep links:** use `https://wa.me/918400019540?text=...` with a URL-encoded message built from the full cart contents (all items, packs, quantities) as a single combined order summary.
- **SEO:** category and item names/descriptions should be indexable (not locked behind client-side-only rendering) — good candidate for Next.js SSG/ISR.
- **Performance:** optimize images (next/image), since menu pages will be image-heavy.

## 9. Decisions Log

| Question | Decision |
|---|---|
| Payload deployment | Embedded in the same Next.js app; custom frontend only, no Payload prebuilt UI components on the public site |
| Fulfillment | Delivery only, no pickup |
| Order flow | Full cart system (add/edit/remove across categories), single combined WhatsApp message on checkout, prompt to clear cart when user returns from WhatsApp |
| Out-of-stock items | Stay visible in the catalog, clearly marked, order action disabled |
| Visual direction | Tracked separately in `DESIGN.md` |
| WhatsApp CTA | No persistent floating sticky button; WhatsApp surfaces at cart checkout (compiled order message) and as a contextual contact action (header, footer, contact section) elsewhere |
