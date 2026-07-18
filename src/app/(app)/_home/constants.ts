import menu from "@/data/menu.json";

const unsplash = (photoId: string, isPremium = false) => {
  return `https://${isPremium ? "plus" : "images"}.unsplash.com/${isPremium ? "premium_photo" : "photo"}-${photoId}?auto=format&q=80`;
};

export const images = {
  // no local shot of the storefront window yet — kept on unsplash
  heroBakeryWindow: unsplash("1644015272264-2d70518c2046"),
  chocolateCake: "/assets/images/cakes/cake28.jpg",
  cheesecakeSlice: "/assets/images/cakes/cake2.jpg",
  cupcake: "/assets/images/cupcakes/cupcake1.jpg",
  // lifestyle/prop shots (ribbon, roses, pearls, dough) have no local equivalent yet
  rosesWithRibbon: unsplash("1778861675433-a28590550789"),
  vintageRoses: unsplash("1610823140365-8d7f1adf01e6"),
  pearlNecklace: unsplash("1595345705177-ffe090eb0784"),
  handsShapingDough: unsplash("1689778560408-78595f912b97"),
  cookies: "/assets/images/cookies/cookie1.jpg",
  brownies: "/assets/images/brownies/brownie1.jpg",
  cakeTub: "/assets/images/cake-tubs/cake-tub1.jpg",
  teaCake: "/assets/images/tea-cakes/tea-cake1.jpg",
  // no local muffin shots yet — folder is empty
  muffins: unsplash("1722251172903-cc8774501df7"),
  donuts: "/assets/images/donuts/donut1.jpg",
  // extra local shots used for the "Finishing Touches" masonry gallery
  cakeTiered: "/assets/images/cakes/cake15.jpg",
  cakeTubFloral: "/assets/images/cake-tubs/cake-tub3.jpg",
  cakeTubGold: "/assets/images/cake-tubs/cake-tub7.jpg",
  cookieStack: "/assets/images/cookies/cookie3.jpg",
  brownieSquares: "/assets/images/brownies/brownie2.jpg",
  donutGlazed: "/assets/images/donuts/donut2.jpg",
};

export const categoryMarqueeWords: string[] = menu.categories
  .filter((category) => {
    return category.id !== "online-store-tins";
  })
  .map((category) => {
    return category.name;
  });

export interface CollectionTile {
  name: string;
  slug: string;
  /** shown only on large tiles, as the CTA label */
  cta: string;
  /** shown only on small tiles, as a terse tag line */
  subtitle: string;
  image: string;
  alt: string;
  span: "large" | "small" | "long";
}

/** display metadata (image, layout) for each menu.json category id — keyed by id so the
 * shortcut grid stays in sync with menu.json without duplicating category names/slugs */
const collectionDisplayMeta: Record<
  string,
  Omit<CollectionTile, "name" | "slug">
> = {
  cakes: {
    cta: "Explore",
    image: images.chocolateCake,
    alt: "A rich chocolate layer cake with a slice cut away, revealing the crumb",
    span: "large",
    subtitle: "Layer Cakes & Cheesecakes",
  },
  "cake-tubs": {
    cta: "Order Now",
    image: images.cakeTub,
    alt: "A slice of layered chocolate cake on a wooden board",
    span: "long",
    subtitle: "Sliceable Gateaux",
  },
  cupcakes: {
    cta: "Explore",
    subtitle: "Boxes of 4 · 6 · 9",
    image: images.cupcake,
    alt: "A frosted cupcake with piped buttercream swirl",
    span: "small",
  },
  cookies: {
    cta: "Explore",
    subtitle: "Half-Dozen · Dozen",
    image: images.cookies,
    alt: "A stack of chocolate chunk cookies on parchment",
    span: "small",
  },
  brownies: {
    cta: "Explore",
    subtitle: "Sold by the Piece",
    image: images.brownies,
    alt: "Fudge brownie squares, drizzled and plated",
    span: "small",
  },
  "tea-cakes": {
    cta: "Explore",
    subtitle: "Boxed in Fours",
    image: images.teaCake,
    alt: "A slice of tea cake served with a cup of tea",
    span: "small",
  },
  muffins: {
    cta: "Explore",
    subtitle: "Minimum Order of 4",
    image: images.muffins,
    alt: "Stacked blueberry muffins dusted with powdered sugar",
    span: "small",
  },
  donuts: {
    cta: "Explore",
    subtitle: "Minimum Pack of 4",
    image: images.donuts,
    alt: "Stacked glazed donuts drizzled with chocolate",
    span: "small",
  },
};

export const collections: CollectionTile[] = menu.categories
  .filter((category) => {
    return category.id in collectionDisplayMeta;
  })
  .map((category) => {
    return {
      name: category.name,
      slug: category.id,
      ...collectionDisplayMeta[category.id]!,
    };
  });

export interface SignatureCreation {
  name: string;
  startingPrice: string;
  badge?: "Signature" | "Popular";
  description: string;
  image: string;
  alt: string;
}

type MenuItem = (typeof menu.categories)[number]["items"][number];

const findMenuItem = (categoryId: string, itemName: string): MenuItem => {
  const item = menu.categories
    .find((category) => {
      return category.id === categoryId;
    })
    ?.items.find((candidate) => {
      return candidate.name === itemName;
    });
  if (!item) {
    throw new Error(`Menu item not found: ${categoryId}/${itemName}`);
  }
  return item;
};

const formatStartingPrice = (item: MenuItem): string => {
  const lowestPrice = Math.min(
    ...item.variants.map((variant) => {
      return variant.price;
    }),
  );
  const isPerPiece = item.variants.every((variant) => {
    return variant.size === "per piece";
  });
  return isPerPiece ? `From ₹${lowestPrice} / piece` : `From ₹${lowestPrice}`;
};

/** editorial copy (badge, description, image) for each featured menu.json item — keyed by
 * category id + item name so the starting price always tracks menu.json's real variants */
const signatureDisplayMeta: {
  categoryId: string;
  itemName: string;
  badge?: "Signature" | "Popular";
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    categoryId: "cakes",
    itemName: "Signature Chocolate",
    badge: "Signature",
    description:
      "Layers of dark sponge, sandwiched and enclosed in a couverture ganache made from Callebaut Belgian chocolate — rich and glossy, never cloying. Piped, filled, and finished by hand the same day it ships.",
    image: images.chocolateCake,
    alt: "Signature chocolate layer cake, sliced",
  },
  {
    categoryId: "cake-tubs",
    itemName: "Matilda Chocolate Cake Tub",
    badge: "Popular",
    description:
      "Chocolaty, gooey, and built for spoons rather than forks — our most-repeated cake tub order, layered with the same Callebaut couverture that carries our signature cakes.",
    image: images.cakeTub,
    alt: "A spoonful of layered chocolate cake tub",
  },
  {
    categoryId: "brownies",
    itemName: "Signature Chocolate Brownie",
    description:
      "Dense, fudgy squares finished with a crackly top — the box most often requested for office orders and last-minute gifting, sold by the piece.",
    image: images.brownies,
    alt: "Fudge brownie squares, drizzled and plated",
  },
];

export const signatureCreations: SignatureCreation[] = signatureDisplayMeta.map(
  (meta) => {
    const item = findMenuItem(meta.categoryId, meta.itemName);
    return {
      name: item.name,
      startingPrice: formatStartingPrice(item),
      description: meta.description,
      image: meta.image,
      alt: meta.alt,
      ...(meta.badge ? { badge: meta.badge } : {}),
    };
  },
);

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I ordered the Black Forest for my daughter's birthday and it was gone in ten minutes. Three guests asked which bakery in Kanpur we'd bought it from.",
    name: "Ritika S.",
    location: "Swaroop Nagar",
  },
  {
    quote:
      "You can taste the actual chocolate in their cakes, not just sugar. I messaged on WhatsApp, picked my pack size, and had it confirmed in five minutes.",
    name: "Arjun M.",
    location: "Civil Lines",
  },
  {
    quote:
      "We ordered a cookie box for a work event and people kept asking about it for a week. Cranbakery is our go-to for office orders now.",
    name: "Priya K.",
    location: "Kakadeo",
  },
];

export interface MomentTile {
  image: string;
  alt: string;
  /** controls how many grid columns/rows the tile spans in the mosaic gallery */
  size: "small" | "wide" | "tall" | "large";
}

export const moments: MomentTile[] = [
  {
    image: images.rosesWithRibbon,
    alt: "A bouquet of pink roses tied with white ribbon",
    size: "large",
  },
  { image: images.chocolateCake, alt: "Chocolate cake, sliced", size: "small" },
  {
    image: images.cakeTubFloral,
    alt: "A gateau cake tub finished with sugar flowers",
    size: "wide",
  },
  {
    image: images.pearlNecklace,
    alt: "A pearl necklace laid on linen",
    size: "small",
  },
  {
    image: images.cupcake,
    alt: "Frosted cupcake with buttercream swirl",
    size: "tall",
  },
  {
    image: images.cookieStack,
    alt: "A stack of iced cookies",
    size: "small",
  },
  {
    image: images.vintageRoses,
    alt: "Close-up of vintage pink roses",
    size: "wide",
  },
  {
    image: images.cakeTiered,
    alt: "A tiered celebration cake, finished and ready for delivery",
    size: "large",
  },
  {
    image: images.brownieSquares,
    alt: "Fudge brownie squares, freshly cut",
    size: "small",
  },
  {
    image: images.donutGlazed,
    alt: "A glazed donut with a delicate drizzle finish",
    size: "tall",
  },
  {
    image: images.cakeTubGold,
    alt: "A cake tub finished with a gold ribbon accent",
    size: "small",
  },
  {
    image: images.cheesecakeSlice,
    alt: "Chocolate cheesecake slice close-up",
    size: "wide",
  },
];
