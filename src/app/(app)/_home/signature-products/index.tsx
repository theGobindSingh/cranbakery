import { signatureCreations } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { H2, P, Span } from "@components/html";
import Image from "next/image";

const SignatureProducts = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <div className="mb-10 flex max-w-[60ch] flex-col gap-3 lg:mb-14">
        <H2 className="font-display text-neutral-950" $size="2xl" $margin="0">
          Signature Creations
        </H2>
        <P className="text-neutral-700" $size="s">
          The ones customers order again and again.
        </P>
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
                    <Span
                      className="font-cursive text-neutral-50"
                      $size="s"
                      $lineHeight="1"
                    >
                      {product.badge}
                    </Span>
                  </span>
                )}
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <Span className="text-neutral-950" $size="s" $weight="600">
                  {product.name}
                </Span>
                <Span className="text-accent-700" $size="1xs" $weight="500">
                  {product.startingPrice}
                </Span>
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
