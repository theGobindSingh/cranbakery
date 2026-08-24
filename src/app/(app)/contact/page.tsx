import ClosingCta from "@components/closing-cta";
import ScrollReveal from "@components/scroll-reveal";
import { WHATSAPP_HREF } from "@constants";
import type { Metadata } from "next";
import ContactFormSection from "./contact-form";
import DirectContactSection from "./direct-contact";
import HeroSection from "./hero";

export const metadata: Metadata = {
  title: "Contact Your Brand Name — WhatsApp Us or Send a Message",
  description:
    "Get in touch with Your Brand Name on WhatsApp or Instagram, or send us a message directly. Delivery-only, serving Kanpur, Uttar Pradesh.",
  alternates: {
    canonical: "https://yourbrand.com/contact",
  },
  openGraph: {
    title: "Contact Your Brand Name — WhatsApp Us or Send a Message",
    description:
      "Get in touch with Your Brand Name on WhatsApp or Instagram, or send us a message directly.",
    type: "website",
    url: "https://yourbrand.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Your Brand Name — WhatsApp Us or Send a Message",
    description:
      "Get in touch with Your Brand Name on WhatsApp or Instagram, or send us a message directly.",
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
