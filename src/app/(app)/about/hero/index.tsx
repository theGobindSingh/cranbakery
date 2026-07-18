import { hero, images } from "@app/about/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";

const HeroSection = () => {
  return (
    <FullWidthWrapper
      element="section"
      wrapperClassName="isolate relative overflow-hidden min-h-[70svh]"
      beforeContainer={
        <>
          <Image
            src={images.heroRosesWithRibbon}
            alt="A baker's hands shaping dough by hand"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="absolute top-0 left-0 object-cover select-none"
            style={{ filter: "sepia(0.18) saturate(1.05)" }}
          />
          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(90deg, var(--color-neutral-300), hsla(var(--color-neutral-300-base), 0.75), transparent)",
            }}
          />
        </>
      }
    >
      <div className="relative z-10 flex flex-col gap-5 py-24 not-md:py-16">
        <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-950">
          {hero.eyebrow}
        </span>
        <h1 className="m-0 max-w-[16ch] font-gothic text-(length:--fs-display-section) leading-[1.05] font-bold tracking-[-0.02em] text-balance text-neutral-950">
          {hero.headline}
        </h1>
        <p className="m-0 max-w-[45ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700 not-md:max-w-[65vw]">
          {hero.body}
        </p>
      </div>
    </FullWidthWrapper>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
