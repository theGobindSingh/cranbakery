"use client";

import { useCartStore } from "@store/cart";
import { ShoppingBag } from "lucide-react";
import NextLink from "next/link";
import { ICON_BUTTON_CLASS, ICON_BUTTON_STYLE } from "./styles";

const CartIcon = () => {
  // derived primitive: Object.is still short-circuits re-renders when the
  // total doesn't change (e.g. one line up, another down)
  const total = useCartStore((s) => {
    return Object.values(s.lines).reduce((a, b) => {
      return a + b;
    }, 0);
  });

  return (
    <NextLink
      href="/cart"
      aria-label={`Cart — ${total} items`}
      title="Cart"
      style={ICON_BUTTON_STYLE}
      className={`relative ${ICON_BUTTON_CLASS}`}
    >
      <ShoppingBag size="1.05rem" aria-hidden="true" />
      {total > 0 && (
        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-accent-600 text-(length:--fs-4xs) text-neutral-50"
        >
          {total}
        </span>
      )}
    </NextLink>
  );
};

export default CartIcon;
