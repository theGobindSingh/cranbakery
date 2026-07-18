export const hero = {
  eyebrow: "A little about us",
  headline: "Our story, one box at a time.",
  body: "Cranbakery began as a home kitchen experiment with Belgian chocolate and grew, order by order, into a made-to-order patisserie — still small enough to hand-pack every box ourselves.",
};

export const customizationContent = {
  eyebrow: "The Finishing Touches",
  title: "Every order, finished the way you'd want it",
  intro:
    "A ribbon, a fresh flower, a topper — the small details that turn a box into a gift. We build them into every order on request, at no extra charge, rather than charging for them as add-ons.",
  options: [
    {
      label: "Ribbon",
      detail: "A satin ribbon tied around the box, ready to hand over as-is.",
    },
    {
      label: "Flower or topper",
      detail:
        "A fresh flower or a topper set on the cake to match the occasion.",
    },
    {
      label: "Cake tub, sliced",
      detail:
        "Ask for the tub version pre-sliced and packed like a full cake — same recipe, easier to serve.",
    },
  ],
  closing:
    "None of it needs to be requested weeks in advance — mention it when you order, and it's built in.",
};

export const ingredientsHygieneContent = {
  eyebrow: "The Standard",
  title: "Ingredients and hygiene, held to one standard",
  image: "/assets/images/cakes/cake28.jpg",
  imageAlt: "Chocolate cake, sliced, showing Callebaut chocolate crumb",
  paragraphs: [
    "Every cake, cheesecake, and dessert box we make starts with Callebaut Belgian chocolate. It is our sourcing standard, not an upgrade or a substitute we reach for on request — every batch, every order, the same couverture.",
    "That standard extends to how the kitchen runs. We hold to full hygiene protocol at every stage: sanitized surfaces and tools before each batch, gloved handling from mixing through decoration, and sealed, food-safe packaging at the end of the line. It's the discipline of a commercial kitchen, applied to a box that's still made to order for one customer at a time.",
  ],
  checklist: [
    "Callebaut Belgian chocolate in every batch — no substitutions",
    "Sanitized stations and tools reset before each order",
    "Gloved handling from mixing to final decoration",
    "Sealed, food-safe packaging at the point of dispatch",
  ],
};

const unsplash = (photoId: string): string => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&q=80`;
};

export const images = {
  // baker's hands shaping dough — reused from the homepage's Unsplash set, no local equivalent yet
  heroRosesWithRibbon: unsplash("1689778560408-78595f912b97"),
};

export const founder = {
  eyebrow: "Meet the Baker",
  name: "Chef Devpriya",
  role: "Founder & Head Baker",
  established: "Est. 2024",
  image: "/assets/images/ceo/devpriya.jpg",
  imageAlt:
    "Chef Devpriya, in kitchen whites, receiving her professional pastry certification",
  quote: "Every box that leaves this kitchen is one I'd hand to my own family.",
  paragraphs: [
    "Cranbakery began the way most good things do — quietly, in a home kitchen in Kanpur, with no name and no website. Just a standing mixer, a stack of orders scrawled on paper, and a decision that box-mix would never touch the oven.",
    "Devpriya trained through a professional pastry certification before she ever took an order — the standing mixer came after the training, not instead of it. What started in 2024 as a handful of birthday cakes for friends turned into orders taken over WhatsApp, one photo and one message at a time, and word travelled the way it does in this city: a coworker who tasted a slice, a mother who wanted the same cake for her daughter's next birthday.",
    "This website is new. What it stands on is not — Devpriya still checks the last order before the kitchen closes for the night.",
  ],
};

export interface GalleryTile {
  image: string;
  alt: string;
  /** controls how many grid columns/rows the tile spans in the mosaic gallery */
  size: "small" | "wide" | "tall" | "large";
}

export const galleryHeading = {
  title: "Behind the Bakes",
  description:
    "A look inside the kitchen — the batches, the boxes, and the details that don't make it to the final delivery photo.",
};

export const galleryTiles: GalleryTile[] = [
  {
    image: "/assets/images/cakes/cake15.jpg",
    alt: "A tiered celebration cake, layered and ready for delivery",
    size: "large",
  },
  {
    image: "/assets/images/cookies/cookie3.jpg",
    alt: "A stack of freshly iced cookies",
    size: "small",
  },
  {
    image: "/assets/images/cake-tubs/cake-tub3.jpg",
    alt: "A cake tub finished with sugar florals",
    size: "wide",
  },
  {
    image: "/assets/images/donuts/donut2.jpg",
    alt: "A glazed donut with a delicate drizzle finish",
    size: "tall",
  },
  {
    image: "/assets/images/brownies/brownie2.jpg",
    alt: "Fudge brownie squares, freshly cut",
    size: "small",
  },
  {
    image: "/assets/images/cake-tubs/cake-tub7.jpg",
    alt: "A cake tub finished with a gold ribbon accent",
    size: "wide",
  },
];

export interface StatBadge {
  label: string;
  caption: string;
}

export const statBadges: StatBadge[] = [
  { label: "Est. 2024", caption: "Fresh to the craft, obsessive about it" },
  {
    label: "Callebaut Chocolate",
    caption: "Premium Belgian chocolate, always",
  },
  {
    label: "100% Hygiene",
    caption: "Held to strict standards, order to package",
  },
  { label: "Delivery Only", caption: "No storefront — made to order for you" },
];
