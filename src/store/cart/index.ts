import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartState } from "./types";
import { COOKIE_NAME, cookieStorage, sanitizeLines } from "./utils";

export const useCartStore = create<CartState>()(
  persist(
    () => {
      return { lines: {} };
    },
    {
      name: COOKIE_NAME,
      storage: createJSONStorage(() => {
        return cookieStorage;
      }),
      // rehydrate in an effect (see cart-hydrator), not at module-import time —
      // otherwise the first client render disagrees with the SSR'd HTML
      skipHydration: true,
      merge: (persisted, current) => {
        return {
          ...current,
          lines: sanitizeLines((persisted as CartState | undefined)?.lines),
        };
      },
    },
  ),
);

export const addLine = (key: string): void => {
  useCartStore.setState((s) => {
    return { lines: { ...s.lines, [key]: (s.lines[key] ?? 0) + 1 } };
  });
};

export const clearCart = (): void => {
  useCartStore.setState({ lines: {} });
};

export const removeLine = (key: string): void => {
  useCartStore.setState((s) => {
    const qty = s.lines[key] ?? 0;
    if (qty <= 1) {
      const rest = { ...s.lines };
      delete rest[key];
      return { lines: rest };
    }
    return { lines: { ...s.lines, [key]: qty - 1 } };
  });
};
