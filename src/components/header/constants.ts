import menu from "@/data/menu.json";
import type { MenuCategoryLink, NavLink } from "./types";

export const NAV_LINKS: [home: NavLink, about: NavLink, contact: NavLink] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const MENU_CATEGORIES: MenuCategoryLink[] = menu.categories.map(
  (category) => {
    return { name: category.name, href: `/menu/${category.id}` };
  },
);
