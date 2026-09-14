"use client";

import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import SectionHeading from "@components/section-heading";
import { useCartStore } from "@store/cart";
import { useMemo } from "react";
import { cartCopy } from "../constants";
import { resolveCartLines } from "../lib/resolve-cart-lines";
import CartLineRow from "./cart-line";
import ClearCartCta from "./clear-cart-cta";
import OrderCta from "./order-cta";

const CartSection = () => {
  // select the raw record (referentially stable between renders) and derive
  // the resolved list in a memo — deriving a new array inside the selector
  // itself breaks zustand's snapshot equality check and loops forever
  const rawLines = useCartStore((s) => {
    return s.lines;
  });
  const lines = useMemo(() => {
    return resolveCartLines(rawLines);
  }, [rawLines]);
  const total = lines.reduce((sum, line) => {
    return sum + line.lineTotal;
  }, 0);

  if (lines.length === 0) {
    return (
      <FullWidthWrapper
        className="flex flex-col items-center gap-4 text-center"
        wrapperClassName="py-24"
      >
        <h1 className="m-0 font-gothic text-(length:--fs-2xl) font-semibold tracking-normal text-neutral-950">
          {cartCopy.emptyTitle}
        </h1>
        <p className="m-0 max-w-[40ch] text-(length:--fs-s) font-normal tracking-normal text-neutral-700">
          {cartCopy.emptyBody}
        </p>
        <Link href="/menu" variant="filled" color="accent" size="lg">
          Browse the Menu
        </Link>
      </FullWidthWrapper>
    );
  }

  return (
    <FullWidthWrapper wrapperClassName="py-16 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-10 lg:max-w-[720px]">
        <SectionHeading
          title={cartCopy.title}
          description={cartCopy.description}
        />

        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {lines.map((line) => {
            return <CartLineRow key={line.key} line={line} />;
          })}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-(length:--fs-m) font-medium tracking-normal text-neutral-950">
            Total: <span className="font-mono">₹{total}</span>
          </span>
          <span className="flex flex-wrap items-center gap-3">
            <ClearCartCta />
            <OrderCta lines={lines} />
          </span>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

CartSection.displayName = "CartSection";

export default CartSection;
