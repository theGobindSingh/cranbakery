import { hero } from "@app/contact/constants";
import FullWidthWrapper from "@components/full-width-wrapper";

const HeroSection = () => {
  return (
    <FullWidthWrapper element="section" wrapperClassName="py-20 not-md:py-14">
      <div className="flex flex-col gap-5">
        <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-950">
          {hero.eyebrow}
        </span>
        <h1 className="m-0 max-w-[16ch] font-gothic text-(length:--fs-display-section) leading-[1.05] font-bold tracking-[-0.02em] text-balance text-neutral-950">
          {hero.headline}
        </h1>
        <p className="m-0 max-w-[50ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          {hero.body}
        </p>
      </div>
    </FullWidthWrapper>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
