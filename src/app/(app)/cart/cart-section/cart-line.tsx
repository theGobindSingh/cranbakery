import QuantityStepper from "@components/quantity-stepper";
import type { ResolvedCartLine } from "../lib/resolve-cart-lines";

interface CartLineRowProps {
  line: ResolvedCartLine;
}

const CartLineRow = ({ line }: CartLineRowProps) => {
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 border-b border-(--color-border) pb-4">
      <div className="flex flex-col gap-1">
        <span className="text-(length:--fs-4xs) font-medium tracking-normal text-accent-700">
          {line.categoryName}
        </span>
        <span className="text-(length:--fs-s) font-normal tracking-normal text-neutral-950">
          {line.itemName}
        </span>
        <span className="text-(length:--fs-4xs) font-normal tracking-normal text-neutral-500">
          {line.size} · ₹{line.price} each
        </span>
      </div>
      <span className="flex items-center gap-4">
        <QuantityStepper
          cartKey={line.key}
          label={`${line.itemName} (${line.size})`}
        />
        <span className="w-16 text-right font-mono text-(length:--fs-s) tracking-normal text-neutral-950">
          ₹{line.lineTotal}
        </span>
      </span>
    </li>
  );
};

CartLineRow.displayName = "CartLineRow";

export default CartLineRow;
