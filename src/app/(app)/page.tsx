import BrandStory from "@app/_home/brand-story";
import CategoryShortcuts from "@app/_home/category-shortcuts";
import ClosingCta from "@app/_home/closing-cta";
import Hero from "@app/_home/hero";
import InstagramTeaser from "@app/_home/instagram-teaser";
import SignatureProducts from "@app/_home/signature-products";
import Testimonials from "@app/_home/testimonials";
import ScrollReveal from "@components/scroll-reveal";

const HomePage = () => {
  return (
    <main className="relative">
      <Hero />
      <ScrollReveal>
        <CategoryShortcuts />
      </ScrollReveal>
      <ScrollReveal>
        <SignatureProducts />
      </ScrollReveal>
      <ScrollReveal>
        <BrandStory />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <InstagramTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <ClosingCta />
      </ScrollReveal>
    </main>
  );
};

export default HomePage;
