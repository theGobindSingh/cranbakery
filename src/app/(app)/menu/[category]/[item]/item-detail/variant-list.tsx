import type { MenuItem } from "@app/menu/lib/menu-data";
import QuantityStepper from "@components/quantity-stepper";
import { cartKey } from "@store/cart/utils";

interface VariantListProps {
  category: string;
  item: string;
  variants: MenuItem["variants"];
}

const VariantList = ({ category, item, variants }: VariantListProps) => {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {variants.map((variant) => {
        // originalPrice only exists on some variant entries, same union-inference
        // quirk as the item-level meta fields
        const { originalPrice } = variant as { originalPrice?: number };
        return (
          <li
            key={variant.size}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-(--color-border) pb-3"
          >
            <span className="text-(length:--fs-s) font-normal tracking-normal text-neutral-700">
              {variant.size}
            </span>
            <span className="flex items-center gap-4">
              <span className="flex items-baseline gap-2 font-mono text-(length:--fs-s) tracking-normal text-neutral-950">
                {originalPrice && (
                  <span className="text-(length:--fs-4xs) text-neutral-400 line-through">
                    ₹{originalPrice}
                  </span>
                )}
                {typeof variant.price === "number"
                  ? `₹${variant.price}`
                  : "Contact for pricing"}
              </span>
              <QuantityStepper
                cartKey={cartKey(category, item, variant.size)}
                label={variant.size}
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

VariantList.displayName = "VariantList";

export default VariantList;
