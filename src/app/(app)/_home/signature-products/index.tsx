import { signatureCreations } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import ScrollReveal from "@components/scroll-reveal";
import SectionHeading from "@components/section-heading";
import Image from "next/image";

const featuredSignatures = signatureCreations.slice(0, 2);

const SignatureProducts = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <SectionHeading
        className="mb-14 lg:mb-20"
        title="Signature Creations"
        description="The ones customers order again and again — the recipes we get asked for by name."
      />

      <div className="flex flex-col gap-16 lg:gap-24">
        {featuredSignatures.map((product, index) => {
          const isReversed = index % 2 === 1;
          return (
            <ScrollReveal
              key={product.name}
              className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-20"
              wrapperProps={{
                style: { transitionDelay: `${index * 80}ms` },
              }}
            >
              <div
                className={`relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4 lg:h-[75vh] lg:w-auto lg:max-w-[50%] lg:shrink-0 lg:grow-0 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                {product.badge && (
                  <span
                    className="absolute top-5 left-5 flex size-16 -rotate-6 items-center justify-center text-center"
                    style={{
                      borderRadius: "var(--radius-pill)",
                      background: "var(--color-accent-700)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <span className="m-0 font-cursive text-(length:--fs-s) leading-none font-normal tracking-normal text-neutral-50">
                      {product.badge}
                    </span>
                  </span>
                )}
              </div>

              <div
                className={`flex flex-col gap-5 lg:w-1/2 lg:max-w-[46ch] lg:shrink-0 lg:grow-0 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="m-0 text-(length:--fs-1xs) leading-normal font-medium tracking-normal text-accent-700">
                  {product.startingPrice}
                </span>
                <h3 className="m-0 font-display text-(length:--fs-xl) leading-normal font-semibold tracking-normal text-neutral-950">
                  {product.name}
                </h3>
                <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
                  {product.description}
                </p>
                <div
                  className="my-1 h-px w-16"
                  style={{ background: "var(--color-accent-200)" }}
                />
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center lg:mt-24">
        <Link
          href="/menu"
          variant="filled"
          color="accent"
          colorWeight={700}
          size="lg"
        >
          Check All Signature Products
        </Link>
      </div>
    </FullWidthWrapper>
  );
};

SignatureProducts.displayName = "SignatureProducts";

export default SignatureProducts;
