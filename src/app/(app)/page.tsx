import BrandStory from "@app/_home/brand-story";
import CategoryMarquee from "@app/_home/category-marquee";
import CategoryShortcuts from "@app/_home/category-shortcuts";
import Hero from "@app/_home/hero";
import InstagramTeaser from "@app/_home/instagram-teaser";
import SignatureProducts from "@app/_home/signature-products";
import ClosingCta from "@components/closing-cta";
import ScrollReveal from "@components/scroll-reveal";
import Testimonials from "@components/testimonials";

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
