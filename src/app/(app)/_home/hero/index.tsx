import { HomeHeroImg } from "@app/_home/hero/img";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import { tw } from "@utils/tailwind";

const Hero = () => {
  return (
    <FullWidthWrapper
      element="section"
      wrapperClassName={tw`isolate relative overflow-hidden h-svh`}
      beforeContainer={<HomeHeroImg />}
    >
      <div className="relative z-10 flex flex-col gap-5 py-24">
        <span className="m-0 font-cursive text-(length:--fs-3xl) leading-normal font-normal tracking-normal text-accent-950">
          Life is too short to skip dessert.
        </span>
        <h1 className="m-0 font-display text-hero-headline/4 font-bold tracking-[-0.02em] text-neutral-700 [text-box:trim-both_cap_text]">
          <span className="">We bake </span>
          <br />
          <span className="m-0 font-[inherit] leading-normal tracking-normal text-accent-700">
            happiness
          </span>
          <span className="">.</span>
        </h1>
        <p className="m-0 max-w-[35ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          Callebaut Belgian chocolate, made to order, delivered across Mohali
          and Chandigarh.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
          <Link
            href="/menu"
            variant="filled"
            color="accent"
            colorWeight={700}
            size="lg"
          >
            Browse the Menu
          </Link>
          <Link
            href="https://instagram.com/cranbakery"
            variant="text"
            className="text-neutral-700"
            color="neutral"
            colorWeight={700}
            hoverBgColorWeight={500}
          >
            @cranbakery
          </Link>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

Hero.displayName = "Hero";

export default Hero;
