import BrandStory from "@app/_home/brand-story";
import CategoryMarquee from "@app/_home/category-marquee";
import CategoryShortcuts from "@app/_home/category-shortcuts";
import ClosingCta from "@app/_home/closing-cta";
import Hero from "@app/_home/hero";
import InstagramTeaser from "@app/_home/instagram-teaser";
import SignatureProducts from "@app/_home/signature-products";
import Testimonials from "@app/_home/testimonials";
import ScrollReveal from "@components/scroll-reveal";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <CategoryShortcuts />
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
    </>
  );
};

export default HomePage;
