import { featuredCollections, indexedCategories } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";
import NextLink from "next/link";

const CategoryShortcuts = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="mb-10 flex max-w-[60ch] flex-col gap-3 lg:mb-14">
        <h2 className="m-0 font-display text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
          The Collections
        </h2>
        <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          Nine collections, each sized and priced for how you actually order —
          by weight, by box, or by the piece.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredCollections.map((collection, index) => {
            return (
              <NextLink
                key={collection.slug}
                href={`/menu/${collection.slug}`}
                className={`group relative block overflow-hidden ${
                  index === 0 ? "sm:col-span-2 sm:aspect-video" : "aspect-4/5"
                }`}
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-4"
                  style={{
                    background:
                      "linear-gradient(0deg, hsl(var(--color-neutral-950-base) / 0.75) 0%, transparent 70%)",
                  }}
                >
                  <span className="mb-[0.15em] text-(length:--fs-1xs) leading-normal font-semibold tracking-normal text-neutral-50">
                    {collection.name}
                  </span>
                  <p className="m-0 text-(length:--fs-4xs) leading-normal font-normal tracking-normal text-neutral-200">
                    {collection.description}
                  </p>
                </div>
              </NextLink>
            );
          })}
        </div>

        <div
          className="flex flex-col p-8"
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
          }}
        >
          <span className="mb-4 font-cursive text-headline/normal font-normal tracking-normal text-accent-700">
            Also in the book
          </span>
          <ul className="flex flex-col">
            {indexedCategories.map((category) => {
              return (
                <li
                  key={category.slug}
                  className="border-b border-(--color-border) last:border-0"
                >
                  <NextLink
                    href={`/menu/${category.slug}`}
                    className="group flex items-center justify-between gap-3 py-3"
                  >
                    <span className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-800 transition-colors group-hover:text-accent-700">
                      {category.name}
                    </span>
                    <span
                      className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-accent-700 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    >
                      →
                    </span>
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

CategoryShortcuts.displayName = "CategoryShortcuts";

export default CategoryShortcuts;
