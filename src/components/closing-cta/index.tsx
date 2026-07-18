import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import type { ClosingCtaProps } from "./types";

const ClosingCta = ({
  tagline = "With love, from our kitchen.",
  heading = "Order your next dessert",
  body = "Browse the menu, build your order, and send it to us on WhatsApp. Takes two minutes.",
  primaryAction = { href: "/menu", label: "Browse the Menu" },
  secondaryAction,
}: ClosingCtaProps) => {
  return (
    <FullWidthWrapper
      className="flex flex-col items-center justify-center gap-4"
      wrapperClassName="py-20 text-center"
      wrapperProps={{
        style: {
          background: "var(--color-accent-700)",
          borderTop: "1px solid hsl(var(--color-secondary-400-base) / 0.6)",
        },
      }}
    >
      <span className="font-cursive text-headline/normal font-normal tracking-normal text-neutral-50">
        {tagline}
      </span>
      <h2 className="m-0 font-gothic text-(length:--fs-2xl) leading-normal font-semibold tracking-normal text-neutral-50 [text-box:trim-both_cap_text]">
        {heading}
      </h2>
      <p className="m-0 max-w-[50ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-50/85">
        {body}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={primaryAction.href}
          variant="filled"
          color="neutral"
          colorWeight={50}
          textColor="accent"
          textColorWeight={700}
          hoverBgColor="neutral"
          hoverBgColorWeight={200}
          size="lg"
        >
          {primaryAction.label}
        </Link>
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            variant="outlined"
            color="neutral"
            colorWeight={50}
            textColor="neutral"
            textColorWeight={50}
            size="lg"
          >
            {secondaryAction.label}
          </Link>
        )}
      </div>
    </FullWidthWrapper>
  );
};

ClosingCta.displayName = "ClosingCta";

export default ClosingCta;
