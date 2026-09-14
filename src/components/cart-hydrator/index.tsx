"use client";

import { useCartStore } from "@store/cart";
import { useEffect } from "react";

// Separate leaf (not folded into the header badge) so persistence doesn't
// silently break if the header is ever restructured.
const CartHydrator = () => {
  useEffect(() => {
    void useCartStore.persist.rehydrate();
  }, []);

  return null;
};

export default CartHydrator;
