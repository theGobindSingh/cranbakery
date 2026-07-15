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
};

export interface FeaturedCollection {
  name: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
}

export const featuredCollections: FeaturedCollection[] = [
  {
    name: "Cakes",
    slug: "cakes",
    description: "Signature sponge, sliced and boxed like a keepsake.",
    image: images.chocolateCake,
    alt: "A rich chocolate layer cake with a slice cut away, revealing the crumb",
  },
  {
    name: "Cheesecakes",
    slug: "cheesecakes",
    description: "Baked slow, finished with Callebaut chocolate.",
    image: images.cheesecakeSlice,
    alt: "A close-up slice of chocolate cheesecake on a plate",
  },
  {
    name: "Cupcakes",
    slug: "cupcakes",
    description: "Boxed in fours, sixes, and nines for the table.",
    image: images.cupcake,
    alt: "A frosted cupcake with piped buttercream swirl",
  },
];

export const indexedCategories: { name: string; slug: string }[] = [
  { name: "Cake Tubs", slug: "cake-tubs" },
  { name: "Cookies", slug: "cookies" },
  { name: "Brownies", slug: "brownies" },
  { name: "Tea Cakes", slug: "tea-cakes" },
  { name: "Muffins", slug: "muffins" },
  { name: "Donuts", slug: "donuts" },
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
      "I ordered the Black Forest for my daughter's birthday and it was gone in ten minutes. Three guests asked which bakery in Chandigarh we'd bought it from.",
    name: "Ritika S.",
    location: "Mohali",
  },
  {
    quote:
      "You can taste the actual chocolate in their cakes, not just sugar. I messaged on WhatsApp, picked my pack size, and had it confirmed in five minutes.",
    name: "Arjun M.",
    location: "Chandigarh",
  },
  {
    quote:
      "We ordered a cookie box for a work event and people kept asking about it for a week. Cranbakery is our go-to for office orders now.",
    name: "Priya K.",
    location: "Zirakpur",
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
