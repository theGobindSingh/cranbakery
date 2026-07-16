import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";

const ClosingCta = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 text-center"
      wrapperProps={{
        style: {
          background: "var(--color-accent-700)",
          borderTop: "1px solid hsl(var(--color-secondary-400-base) / 0.6)",
        },
      }}
    >
      <span className="mb-2 font-cursive text-headline/normal font-normal tracking-normal text-neutral-50">
        With love, from our kitchen.
      </span>
      <h2 className="mb-3 font-display text-(length:--fs-2xl) leading-normal font-semibold tracking-normal text-neutral-50">
        Order your next dessert
      </h2>
      <p className="m-0 mx-auto max-w-[50ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-50/85">
        Browse the menu, build your order, and send it to us on WhatsApp. Takes
        two minutes.
      </p>
      <Link
        href="/menu"
        variant="filled"
        color="neutral"
        colorWeight={50}
        textColor="accent"
        textColorWeight={700}
        hoverBgColor="neutral"
        hoverBgColorWeight={200}
        size="lg"
      >
        Browse the Menu
      </Link>
    </FullWidthWrapper>
  );
};

ClosingCta.displayName = "ClosingCta";

export default ClosingCta;
