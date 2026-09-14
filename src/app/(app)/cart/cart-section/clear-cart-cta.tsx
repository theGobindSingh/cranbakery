"use client";

import { Button } from "@components/button";
import Dialog from "@components/dialog";
import { clearCart } from "@store/cart";
import { useRef } from "react";

const ClearCartCta = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleConfirm = () => {
    clearCart();
    dialogRef.current?.close();
  };

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="accent"
        colorWeight={600}
        size="lg"
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      >
        Clear Cart
      </Button>

      <Dialog ref={dialogRef} title="Clear cart?">
        <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          This removes everything from your cart. This can&apos;t be undone.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="outlined"
            color="accent"
            colorWeight={600}
            onClick={() => {
              dialogRef.current?.close();
            }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="filled"
            color="accent"
            colorWeight={600}
            hoverBgColorWeight={800}
            onClick={handleConfirm}
          >
            Clear Cart
          </Button>
        </div>
      </Dialog>
    </>
  );
};

ClearCartCta.displayName = "ClearCartCta";

export default ClearCartCta;
