import ClosingCta from "@components/closing-cta";
import { WHATSAPP_HREF } from "@components/header/constants";
import ScrollReveal from "@components/scroll-reveal";
import Testimonials from "@components/testimonials";
import type { Metadata } from "next";
import CustomizationSection from "./customization";
import FounderSection from "./founder";
import GallerySection from "./gallery";
import HeroSection from "./hero";
import IngredientHygieneSection from "./ingredients-hygiene";
import StatsBadgesSection from "./stats-badges";

export const metadata: Metadata = {
  title: "About Cranbakery — Premium Belgian Chocolate Cakes & Desserts",
  description:
    "Meet Cranbakery: handcrafted desserts using Belgian Callebaut chocolate, premium ingredients, and rigorous hygiene standards. Discover our story, customization options, and what makes every treat special.",
  alternates: {
    canonical: "https://cranbakery.com/about",
  },
  openGraph: {
    title: "About Cranbakery — Premium Belgian Chocolate Cakes & Desserts",
    description:
      "Handcrafted desserts using Belgian Callebaut chocolate, premium ingredients, and rigorous hygiene standards.",
    type: "website",
    url: "https://cranbakery.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cranbakery — Premium Belgian Chocolate Cakes & Desserts",
    description:
      "Handcrafted desserts using Belgian Callebaut chocolate, premium ingredients, and rigorous hygiene standards.",
  },
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <StatsBadgesSection />
      <IngredientHygieneSection />
      <CustomizationSection />
      <GallerySection />
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <ClosingCta
          secondaryAction={{ href: WHATSAPP_HREF, label: "Chat on WhatsApp" }}
        />
      </ScrollReveal>
    </>
  );
};

export default AboutPage;
