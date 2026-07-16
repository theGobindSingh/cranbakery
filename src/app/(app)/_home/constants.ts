const unsplash = (photoId: string) => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80`;
};

export const images = {
  heroBakeryWindow: unsplash("1674560819864-c2e1232f413e"),
  chocolateCake: unsplash("1578985545062-69928b1d9587"),
  cheesecakeSlice: unsplash("1543773495-2cd9248a5bda"),
  cupcake: unsplash("1659549591823-c6efec55b82f"),
  rosesWithRibbon: unsplash("1778861675433-a28590550789"),
  vintageRoses: unsplash("1610823140365-8d7f1adf01e6"),
  pearlNecklace: unsplash("1595345705177-ffe090eb0784"),
  handsShapingDough: unsplash("1689778560408-78595f912b97"),
  cookies: unsplash("1499636136210-6f4ee915583e"),
  brownies: unsplash("1607920591413-4ec007e70023"),
  cakeTub: unsplash("1605807646837-485a3bc9bf1b"),
  teaCake: unsplash("1595080623303-c5ae68d73e92"),
  muffins: unsplash("1722251172903-cc8774501df7"),
  donuts: unsplash("1551106652-a5bcf4b29ab6"),
};

export const categoryMarqueeWords: string[] = [
  "Cakes",
  "Cheesecakes",
  "Cake Tubs",
  "Cookies",
  "Brownies",
  "Tea Cakes",
  "Muffins",
  "Cupcakes",
  "Donuts",
];

export interface CollectionTile {
  name: string;
  slug: string;
  /** shown only on large tiles, as the CTA label */
  cta: string;
  /** shown only on small tiles, as a terse tag line */
  subtitle: string;
  image: string;
  alt: string;
  span: "large" | "small";
}

export const collections: CollectionTile[] = [
  {
    name: "Cakes",
    slug: "cakes",
    cta: "Explore",
    image: images.chocolateCake,
    alt: "A rich chocolate layer cake with a slice cut away, revealing the crumb",
    span: "large",
    subtitle: "Custom Layer Cakes",
  },
  {
    name: "Cheesecakes",
    slug: "cheesecakes",
    cta: "Order Now",
    image: images.cheesecakeSlice,
    alt: "A close-up slice of chocolate cheesecake on a plate",
    span: "large",
    subtitle: "Rich & Creamy",
  },
  {
    name: "Cupcakes",
    slug: "cupcakes",
    cta: "Explore",
    subtitle: "Boxes of 4 · 6 · 9",
    image: images.cupcake,
    alt: "A frosted cupcake with piped buttercream swirl",
    span: "small",
  },
  {
    name: "Cookies",
    slug: "cookies",
    cta: "Explore",
    subtitle: "Half-Dozen · Dozen",
    image: images.cookies,
    alt: "A stack of chocolate chunk cookies on parchment",
    span: "small",
  },
  {
    name: "Brownies",
    slug: "brownies",
    cta: "Explore",
    subtitle: "Sold by the Piece",
    image: images.brownies,
    alt: "Fudge brownie squares, drizzled and plated",
    span: "small",
  },
  {
    name: "Cake Tubs",
    slug: "cake-tubs",
    cta: "Explore",
    subtitle: "Sliceable Gateaux",
    image: images.cakeTub,
    alt: "A slice of layered chocolate cake on a wooden board",
    span: "small",
  },
  {
    name: "Tea Cakes",
    slug: "tea-cakes",
    cta: "Explore",
    subtitle: "Boxed in Fours",
    image: images.teaCake,
    alt: "A slice of tea cake served with a cup of tea",
    span: "small",
  },
  {
    name: "Muffins",
    slug: "muffins",
    cta: "Explore",
    subtitle: "Minimum Order of 4",
    image: images.muffins,
    alt: "Stacked blueberry muffins dusted with powdered sugar",
    span: "small",
  },
  {
    name: "Donuts",
    slug: "donuts",
    cta: "Explore",
    subtitle: "Minimum Pack of 6",
    image: images.donuts,
    alt: "Stacked glazed donuts drizzled with chocolate",
    span: "small",
  },
];

export interface SignatureCreation {
  name: string;
  startingPrice: string;
  badge?: "Signature" | "Popular";
  image: string;
  alt: string;
}

export const signatureCreations: SignatureCreation[] = [
  {
    name: "Signature Chocolate Cake",
    startingPrice: "From ₹650",
    badge: "Signature",
    image: images.chocolateCake,
    alt: "Signature chocolate layer cake, sliced",
  },
  {
    name: "Belgian Chocolate Cheesecake",
    startingPrice: "From ₹600",
    badge: "Popular",
    image: images.cheesecakeSlice,
    alt: "Belgian chocolate cheesecake slice",
  },
  {
    name: "Rose & Pearl Cupcake Box",
    startingPrice: "From ₹90 / piece",
    image: images.cupcake,
    alt: "Box of frosted cupcakes",
  },
];

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
  span?: "wide" | "tall";
}

export const moments: MomentTile[] = [
  {
    image: images.rosesWithRibbon,
    alt: "A bouquet of pink roses tied with white ribbon",
    span: "tall",
  },
  { image: images.chocolateCake, alt: "Chocolate cake, sliced" },
  { image: images.pearlNecklace, alt: "A pearl necklace laid on linen" },
  {
    image: images.cheesecakeSlice,
    alt: "Chocolate cheesecake slice close-up",
  },
  {
    image: images.vintageRoses,
    alt: "Close-up of vintage pink roses",
  },
  { image: images.cupcake, alt: "Frosted cupcake with buttercream swirl" },
];
