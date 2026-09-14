"use client";

import { Button } from "@components/button";
import Dialog from "@components/dialog";
import { clearCart } from "@store/cart";
import { useRef, useState } from "react";
import {
  buildWhatsAppOrderHref,
  buildWhatsAppOrderMessage,
} from "../lib/build-whatsapp-order-href";
import type { ResolvedCartLine } from "../lib/resolve-cart-lines";

interface OrderCtaProps {
  lines: ResolvedCartLine[];
}

const OrderCta = ({ lines }: OrderCtaProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);

  const handleOrder = async () => {
    const message = buildWhatsAppOrderMessage(lines);

    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      // clipboard access can be denied/unavailable — the redirect below is
      // still the primary path, so this is a best-effort fallback only
      setCopied(false);
    }

    window.open(
      buildWhatsAppOrderHref(message),
      "_blank",
      "noopener,noreferrer",
    );
    dialogRef.current?.showModal();
  };

  // Every way out of the dialog — the ✕, "Okay", Esc, and a backdrop click —
  // ends in dialog.close() or the browser's own Esc handling, both of which
  // fire this native event once, so it's the single place the cart clears.
  const handleDialogClose = () => {
    clearCart();
  };

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="accent"
        colorWeight={600}
        hoverBgColorWeight={800}
        size="lg"
        onClick={() => {
          void handleOrder();
        }}
      >
        Order Now
      </Button>

      <Dialog
        ref={dialogRef}
        title="Order confirmed"
        onClose={handleDialogClose}
      >
        <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
          Opening WhatsApp for you now.
          {copied
            ? " We've also copied your order to the clipboard, in case it doesn't open."
            : ""}
        </p>

        <Button
          type="button"
          variant="filled"
          color="accent"
          colorWeight={600}
          hoverBgColorWeight={800}
          className="self-start"
          onClick={() => {
            dialogRef.current?.close();
          }}
        >
          Okay
        </Button>
      </Dialog>
    </>
  );
};

OrderCta.displayName = "OrderCta";

export default OrderCta;
