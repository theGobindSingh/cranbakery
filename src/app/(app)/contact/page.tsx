import ClosingCta from "@components/closing-cta";
import { WHATSAPP_HREF } from "@components/header/constants";
import ScrollReveal from "@components/scroll-reveal";
import type { Metadata } from "next";
import ContactFormSection from "./contact-form";
import DirectContactSection from "./direct-contact";
import HeroSection from "./hero";

export const metadata: Metadata = {
  title: "Contact Cranbakery — WhatsApp Us or Send a Message",
  description:
    "Get in touch with Cranbakery on WhatsApp or Instagram, or send us a message directly. Delivery-only, serving Kanpur, Uttar Pradesh.",
  alternates: {
    canonical: "https://cranbakery.com/contact",
  },
  openGraph: {
    title: "Contact Cranbakery — WhatsApp Us or Send a Message",
    description:
      "Get in touch with Cranbakery on WhatsApp or Instagram, or send us a message directly.",
    type: "website",
    url: "https://cranbakery.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cranbakery — WhatsApp Us or Send a Message",
    description:
      "Get in touch with Cranbakery on WhatsApp or Instagram, or send us a message directly.",
  },
};

const ContactPage = () => {
  return (
    <>
      <HeroSection />
      <DirectContactSection />
      <ContactFormSection />
      <ScrollReveal>
        <ClosingCta
          secondaryAction={{ href: WHATSAPP_HREF, label: "Chat on WhatsApp" }}
        />
      </ScrollReveal>
    </>
  );
};

export default ContactPage;
