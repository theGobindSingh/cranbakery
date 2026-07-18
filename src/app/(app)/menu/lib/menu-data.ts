import menu from "@/data/menu.json";

export const slugify = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const getMenuCategories = () => {
  return menu.categories;
};

export const getCategory = (categoryId: string) => {
  return getMenuCategories().find((c) => {
    return c.id === categoryId;
  });
};

type RawMenuItem = (typeof menu.categories)[number]["items"][number];

export type MenuItem = RawMenuItem & {
  slug: string;
};

export const getMenuItems = (categoryId: string): MenuItem[] => {
  // collision-safe slug per item; no dupes exist in current data but content is
  // bakery-managed and could change, so a cheap suffix guard costs nothing
  const seen = new Map<string, number>();
  return (getCategory(categoryId)?.items ?? []).map((item) => {
    const base = slugify(item.name);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return {
      ...item,
      slug: count === 0 ? base : `${base}-${count + 1}`,
    };
  });
};

export const getMenuItem = (
  categoryId: string,
  itemSlug: string,
): MenuItem | undefined => {
  return getMenuItems(categoryId).find((i) => {
    return i.slug === itemSlug;
  });
};

export const formatPriceRange = (item: MenuItem): string => {
  const prices = item.variants
    .map((v) => {
      return v.price;
    })
    .filter((p): p is number => {
      return typeof p === "number";
    });

  if (prices.length === 0) return "Contact for pricing";
  if (prices.length === 1) return `₹${prices[0]}`;

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return `₹${min}`;
  if (min * 1.05 >= max) return `₹${min}`;

  return `₹${min} – ₹${max}`;
};
