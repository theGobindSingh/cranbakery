import { images } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";

const BrandStory = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
        <div
          className="relative aspect-4/5 w-full overflow-hidden"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          <Image
            src={images.handsShapingDough}
            alt="A baker's hands shaping dough on a wooden board"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            style={{ filter: "sepia(0.18) saturate(1.05)" }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-700">
            The Atelier
          </span>
          <h2 className="m-0 font-display text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
            What goes into every order
          </h2>
          <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            Every cake starts with Callebaut Belgian chocolate, not a
            substitute. Our kitchen holds to full hygiene protocol at every
            stage of production and packaging — the discipline of a commercial
            kitchen, applied to a made-to-order box.
          </p>
          <div
            className="my-1 h-px w-16"
            style={{ background: "var(--color-accent-200)" }}
          />
          <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            Ask for a ribbon, a topper, or a cake tub sliced and packed like a
            full cake — customization is built into the order, at no extra
            charge.
          </p>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

BrandStory.displayName = "BrandStory";

export default BrandStory;
