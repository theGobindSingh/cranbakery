import type { Metadata } from "next";
import CategoryOverview from "./category-overview";

export const metadata: Metadata = {
  title: "Menu — Your Brand Name",
  description:
    "Browse all of Your Brand Name's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more. Premium Belgian chocolate, made to order.",
  alternates: {
    canonical: "https://yourbrand.com/menu",
  },
  openGraph: {
    title: "Menu — Your Brand Name",
    description:
      "Browse all of Your Brand Name's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more.",
    type: "website",
    url: "https://yourbrand.com/menu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu — Your Brand Name",
    description:
      "Browse all of Your Brand Name's handcrafted desserts: cakes, cheesecakes, cookies, brownies, cupcakes, and more.",
  },
};

const MenuPage = () => {
  return <CategoryOverview />;
};

export default MenuPage;
