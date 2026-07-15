import FullWidthWrapper from "@components/full-width-wrapper";
import { H2, P, Span } from "@components/html";
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
      <Span
        className="font-cursive text-neutral-50"
        $size="1xl"
        $margin="0 0 0.5rem 0"
      >
        With love, from our kitchen.
      </Span>
      <H2
        className="font-display text-neutral-50"
        $size="2xl"
        $weight="600"
        $margin="0 0 0.75rem 0"
      >
        Order your next dessert
      </H2>
      <P className="mx-auto mb-8 max-w-[50ch] text-neutral-50/85" $size="s">
        Browse the menu, build your order, and send it to us on WhatsApp. Takes
        two minutes.
      </P>
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
