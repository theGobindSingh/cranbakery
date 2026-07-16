import { signatureCreations } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";

const SignatureProducts = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <div className="mb-10 flex max-w-[60ch] flex-col gap-3 lg:mb-14">
        <h2 className="m-0 font-display text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
          Signature Creations
        </h2>
        <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          The ones customers order again and again.
        </p>
      </div>
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {signatureCreations.map((product) => {
          return (
            <div key={product.name} className="flex flex-col gap-4">
              <div
                className="relative aspect-4/5 w-full overflow-hidden"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
                {product.badge && (
                  <span
                    className="absolute top-4 left-4 flex size-16 -rotate-6 items-center justify-center text-center"
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
              <div className="flex items-baseline justify-between gap-3">
                <span className="m-0 text-(length:--fs-s) leading-normal font-semibold tracking-normal text-neutral-950">
                  {product.name}
                </span>
                <span className="m-0 text-(length:--fs-1xs) leading-normal font-medium tracking-normal text-accent-700">
                  {product.startingPrice}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </FullWidthWrapper>
  );
};

SignatureProducts.displayName = "SignatureProducts";

export default SignatureProducts;
