import { HomeHeroImg } from "@app/_home/hero/img";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import { tw } from "@utils/tailwind";

const H1 = () => {
  return (
    <h1 className="m-0 font-gothic text-hero-headline/4 font-bold tracking-[-0.02em] text-neutral-700 [text-box:trim-both_cap_text]">
      <span className="">We bake </span>
      <br />
      <span className="m-0 font-[inherit] leading-normal tracking-normal text-accent-600">
        happiness
      </span>
      <span className="">.</span>
    </h1>
  );
};

const Hero = () => {
  return (
    <FullWidthWrapper
      element="section"
      wrapperClassName={tw`isolate relative overflow-hidden h-[calc(100svh-3.75rem)]`}
      beforeContainer={<HomeHeroImg />}
    >
      <div className="relative z-10 flex flex-col gap-5 pt-[calc(6rem+var(--header-height)+env(safe-area-inset-top))] pb-24">
        <span className="m-0 font-cursive text-(length:--fs-3xl) leading-normal font-normal tracking-normal text-accent-950 not-md:text-[calc(var(--fs-4xl)-var(--fs-m))]">
          Life is too short to skip dessert.
        </span>
        <H1 />
        <p className="m-0 max-w-[35ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700 not-md:max-w-[50vw]">
          Callebaut Belgian chocolate, made to order, delivered across India.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1 not-md:flex-col not-md:items-start">
          <Link
            href="/menu"
            variant="filled"
            color="accent"
            colorWeight={600}
            hoverBgColorWeight={800}
            size="lg"
          >
            Browse the Menu
          </Link>
          <Link
            href="https://instagram.com/cranbakery"
            className="text-neutral-700"
            variant="text"
            color="neutral"
            hoverBgColor="neutral"
            hoverBgColorWeight={950}
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
