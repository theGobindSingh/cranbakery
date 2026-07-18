import { customizationContent } from "@app/about/constants";
import FullWidthWrapper from "@components/full-width-wrapper";

const CustomizationSection = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="mx-auto flex max-w-[65ch] flex-col items-center gap-5 text-center">
        <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-700">
          {customizationContent.eyebrow}
        </span>
        <h2 className="m-0 font-gothic text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
          {customizationContent.title}
        </h2>
        <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          {customizationContent.intro}
        </p>
      </div>
      <ul className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-3">
        {customizationContent.options.map((option) => {
          return (
            <li
              key={option.label}
              className="flex flex-col gap-3 p-6"
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <span
                aria-hidden="true"
                className="size-2"
                style={{
                  background: "var(--color-accent-300)",
                  borderRadius: "var(--radius-pill)",
                }}
              />
              <span className="font-display text-(length:--fs-s) font-semibold tracking-normal text-neutral-950">
                {option.label}
              </span>
              <p className="m-0 text-(length:--fs-1xs) leading-normal font-normal tracking-normal text-neutral-700">
                {option.detail}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mx-auto mt-8 max-w-[65ch] text-center text-(length:--fs-xs) leading-normal font-normal tracking-normal text-neutral-600 italic">
        {customizationContent.closing}
      </p>
    </FullWidthWrapper>
  );
};

CustomizationSection.displayName = "CustomizationSection";

export default CustomizationSection;
