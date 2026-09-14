import { clientCookies } from "@utils/cookies";
import type { StateStorage } from "zustand/middleware";
import type { CartLines } from "./types";

export const COOKIE_NAME = "cb_cart";

export const cartKey = (
  category: string,
  item: string,
  size: string,
): string => {
  return `${category}/${item}/${size}`;
};

// Inverse of cartKey. Sizes are free text ("600 grams") so only the first
// two segments are fixed; whatever remains (rejoined) is the size.
export const parseCartKey = (
  key: string,
): { category: string; item: string; size: string } => {
  const [category = "", item = "", ...sizeParts] = key.split("/");
  return { category, item, size: sizeParts.join("/") };
};

// Cookies are user-editable, so this is the trust boundary: keep only entries
// whose value is a positive finite integer, drop everything else silently.
export const sanitizeLines = (raw: unknown): CartLines => {
  if (typeof raw !== "object" || raw === null) return {};

  return Object.entries(raw as Record<string, unknown>).reduce<CartLines>(
    (lines, [key, value]) => {
      if (typeof value === "number" && Number.isInteger(value) && value > 0) {
        lines[key] = value;
      }
      return lines;
    },
    {},
  );
};

// ponytail: cookies cap out around 4KB — fine for a cart's worth of lines,
// swap for localStorage if the cart ever needs to hold a lot more.
export const cookieStorage: StateStorage = {
  getItem: (name) => {
    return clientCookies.get(name) ?? null;
  },
  setItem: (name, value) => {
    clientCookies.set(name, value, { days: 30, path: "/", sameSite: "Lax" });
  },
  removeItem: (name) => {
    clientCookies.remove(name);
  },
};
