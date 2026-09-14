import { WHATSAPP_HREF } from "@constants";
import type { ResolvedCartLine } from "./resolve-cart-lines";

// "I like this website, let's talk business!\nBy the way, this is what I selected on the website:\n1. Signature Chocolate (600 grams) x2 - ₹1560\n...\nTotal: ₹XXXX"
// Kept as plain text too (not just URL-encoded) — the order CTA also copies
// this to the clipboard as a fallback if the WhatsApp redirect doesn't land.
export const buildWhatsAppOrderMessage = (
  lines: ResolvedCartLine[],
): string => {
  const items = lines
    .map((line, i) => {
      return `${i + 1}. ${line.itemName} (${line.size}) x${line.qty} - ₹${line.lineTotal}`;
    })
    .join("\n");
  const total = lines.reduce((sum, line) => {
    return sum + line.lineTotal;
  }, 0);

  return `I like this website, let's talk business!\nBy the way, this is what I selected on the website:\n${items}\n\nTotal: ₹${total}`;
};

export const buildWhatsAppOrderHref = (message: string): string => {
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`;
};
