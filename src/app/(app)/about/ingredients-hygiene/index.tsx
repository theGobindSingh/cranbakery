import { ingredientsHygieneContent } from "@app/about/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { Check } from "lucide-react";
import Image from "next/image";

const IngredientHygieneSection = () => {
  const { eyebrow, title, image, imageAlt, paragraphs, checklist } =
    ingredientsHygieneContent;

  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        <div className="order-2 flex flex-col gap-5 lg:order-1">
          <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-700">
            {eyebrow}
          </span>
          <h2 className="m-0 font-gothic text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
            {title}
          </h2>
          {paragraphs.map((paragraph) => {
            return (
              <p
                key={paragraph}
                className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700"
              >
                {paragraph}
              </p>
            );
          })}
          <div
            className="my-1 h-px w-16"
            style={{ background: "var(--color-accent-200)" }}
          />
          <ul className="m-0 flex flex-col gap-3 p-0">
            {checklist.map((item) => {
              return (
                <li
                  key={item}
                  className="flex items-start gap-3 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-accent-700"
                  />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="relative order-1 aspect-4/5 w-full overflow-hidden lg:order-2"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            style={{ filter: "sepia(0.18) saturate(1.05)" }}
          />
        </div>
      </div>
    </FullWidthWrapper>
  );
};

IngredientHygieneSection.displayName = "IngredientHygieneSection";

export default IngredientHygieneSection;
