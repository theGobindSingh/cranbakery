import type { Metadata } from "next";
import CategoryOverview from "./category-overview";

export const metadata: Metadata = {
  title: "Menu — Cranbakery",
  description:
    "Browse all of Cranbakery's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more. Premium Belgian chocolate, made to order.",
  alternates: {
    canonical: "https://cranbakery.com/menu",
  },
  openGraph: {
    title: "Menu — Cranbakery",
    description:
      "Browse all of Cranbakery's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more.",
    type: "website",
    url: "https://cranbakery.com/menu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu — Cranbakery",
    description:
      "Browse all of Cranbakery's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more.",
  },
};

const MenuPage = () => {
  return <CategoryOverview />;
};

export default MenuPage;
