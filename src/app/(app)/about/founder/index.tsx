import { founder } from "@app/about/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";

const FounderSection = () => {
  return (
    <section aria-label="Founder section">
      <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
        <div className="mx-auto flex max-w-[65ch] flex-col items-center gap-6 text-center">
          <div
            className="relative aspect-4/3 h-screen max-h-[600px] w-auto overflow-hidden"
            style={{
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border-strong)",
            }}
          >
            <Image
              src={founder.image}
              alt={founder.imageAlt}
              fill
              sizes="(min-width: 1024px) 600px, (min-width: 640px) 520px, 420px"
              className="object-cover object-[center_58%]"
              priority
            />
          </div>
          <span className="m-0 font-cursive text-headline/normal font-normal tracking-normal text-accent-700">
            {founder.eyebrow}
          </span>
          <h2 className="m-0 font-gothic text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
            {founder.name}
          </h2>
          <span className="flex items-center gap-2 text-(length:--fs-1xs) leading-normal font-normal tracking-normal text-neutral-600">
            {founder.role}
            <span
              aria-hidden="true"
              className="inline-block size-1"
              style={{
                background: "var(--color-accent-300)",
                borderRadius: "var(--radius-pill)",
              }}
            />
            {founder.established}
          </span>
          <p className="m-0 font-display text-(length:--fs-l) leading-normal font-normal tracking-normal text-neutral-800 italic">
            &ldquo;{founder.quote}&rdquo;
          </p>
          <div
            className="my-1 h-px w-16"
            style={{ background: "var(--color-accent-200)" }}
          />
          {founder.paragraphs.map((paragraph) => {
            return (
              <p
                key={paragraph}
                className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </FullWidthWrapper>
    </section>
  );
};

FounderSection.displayName = "FounderSection";

export default FounderSection;
