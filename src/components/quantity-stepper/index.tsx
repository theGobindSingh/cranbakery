"use client";

import { Button } from "@components/button";
import { addLine, removeLine, useCartStore } from "@store/cart";
import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  cartKey: string;
  label: string;
}

const QuantityStepper = ({ cartKey, label }: QuantityStepperProps) => {
  // primitive selector: this stepper re-renders only when its own qty changes
  const qty = useCartStore((s) => {
    return s.lines[cartKey] ?? 0;
  });

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outlined"
        color="accent"
        size="sm"
        disabled={qty === 0}
        aria-label={`Remove one ${label}`}
        onClick={() => {
          removeLine(cartKey);
        }}
      >
        <Minus size="0.9rem" aria-hidden="true" />
      </Button>
      <span
        aria-live="polite"
        className="w-6 text-center font-mono text-(length:--fs-s) text-neutral-950"
      >
        {qty}
      </span>
      <Button
        type="button"
        variant="outlined"
        color="accent"
        size="sm"
        aria-label={`Add one ${label}`}
        onClick={() => {
          addLine(cartKey);
        }}
      >
        <Plus size="0.9rem" aria-hidden="true" />
      </Button>
    </div>
  );
};

QuantityStepper.displayName = "QuantityStepper";

export default QuantityStepper;
