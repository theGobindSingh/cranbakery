import { collections } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import ScrollReveal from "@components/scroll-reveal";
import Image from "next/image";
import NextLink from "next/link";

const collectionsMapper = (
  collection: (typeof collections)[number],
  index: number,
) => {
  const isLarge = collection.span === "large";
  const isLong = collection.span === "long";
  const getSizeStyles = () => {
    if (isLarge) {
      return "col-span-2 row-span-2";
    }
    if (isLong) {
      return "col-span-2";
    }
    return "col-span-2 row-span-1 sm:col-span-1";
  };
  return (
    <ScrollReveal
      key={collection.slug}
      className={[
        "group relative overflow-hidden bg-neutral-50",
        getSizeStyles(),
      ].join(" ")}
      wrapperProps={{
        style: { transitionDelay: `${index * 70}ms` },
      }}
    >
      <NextLink
        href={`/menu/${collection.slug}`}
        className="absolute inset-0 block"
      >
        <Image
          src={collection.image}
          alt={collection.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, var(--color-neutral-600), hsla(var(--color-neutral-600-base), 0) 65%, transparent)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <h3
            className={`m-0 block font-display leading-tight font-bold tracking-[-0.01em] text-neutral-50 ${
              isLarge
                ? "mb-3 text-(length:--fs-2xl)"
                : "mb-2 text-(length:--fs-l)"
            }`}
          >
            {collection.name}
          </h3>
          {collection.subtitle && (
            <p className="m-0 text-(length:--fs-4xs) leading-normal font-normal tracking-widest text-neutral-200 uppercase">
              {collection.subtitle}
            </p>
          )}
          {(isLarge || isLong) && collection.cta && (
            <span className="inline-flex items-center gap-2 border-b-2 border-neutral-50 pb-1 text-(length:--fs-4xs) leading-normal font-semibold tracking-widest text-neutral-50 uppercase transition-all duration-300 group-hover:translate-x-1 group-hover:border-secondary-400 group-hover:text-secondary-200">
              {collection.cta}
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
      </NextLink>
    </ScrollReveal>
  );
};

const CategoryShortcuts = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-24"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <h2 className="sr-only">The Collections</h2>
      <p className="sr-only">
        Nine collections, each sized and priced for how you actually order — by
        weight, by box, or by the piece.
      </p>

      <div className="mx-auto grid max-w-330 grid-flow-row-dense auto-rows-55 grid-cols-2 gap-4 sm:grid-cols-4 lg:auto-rows-75 lg:gap-6">
        {collections.map(collectionsMapper)}
      </div>
    </FullWidthWrapper>
  );
};

CategoryShortcuts.displayName = "CategoryShortcuts";

export default CategoryShortcuts;
