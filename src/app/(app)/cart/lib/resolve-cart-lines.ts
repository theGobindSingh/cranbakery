import { getCategory, getMenuItem } from "@app/menu/lib/menu-data";
import type { CartLines } from "@store/cart/types";
import { parseCartKey } from "@store/cart/utils";

export interface ResolvedCartLine {
  key: string;
  categoryName: string;
  itemName: string;
  size: string;
  qty: number;
  price: number;
  lineTotal: number;
}

// Cart lines are just "category/item/size" -> qty, so every render re-joins
// them against menu.json. A key that no longer resolves (menu item removed,
// cookie hand-edited) is dropped rather than shown broken — same trust
// boundary as sanitizeLines.
export const resolveCartLines = (lines: CartLines): ResolvedCartLine[] => {
  return Object.entries(lines).reduce<ResolvedCartLine[]>((acc, [key, qty]) => {
    const { category, item, size } = parseCartKey(key);
    const categoryData = getCategory(category);
    const itemData = getMenuItem(category, item);
    const variant = itemData?.variants.find((v) => {
      return v.size === size;
    });

    if (
      !categoryData ||
      !itemData ||
      !variant ||
      typeof variant.price !== "number"
    ) {
      return acc;
    }

    acc.push({
      key,
      categoryName: categoryData.name,
      itemName: itemData.name,
      size,
      qty,
      price: variant.price,
      lineTotal: variant.price * qty,
    });
    return acc;
  }, []);
};
