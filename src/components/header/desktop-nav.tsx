"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";
import MenuFlyout from "./menu-flyout";
import { NAV_LINK_ACTIVE_CLASS, NAV_LINK_CLASS } from "./styles";
import type { NavLink } from "./types";

const NavItem = ({ link, pathname }: { link: NavLink; pathname: string }) => {
  const isActive = pathname === link.href;
  return (
    <NextLink
      href={link.href}
      className={[NAV_LINK_CLASS, isActive && NAV_LINK_ACTIVE_CLASS]
        .filter(Boolean)
        .join(" ")}
    >
      {link.label}
    </NextLink>
  );
};

const [home, about, contact] = NAV_LINKS;

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
      <NavItem link={home} pathname={pathname} />
      <NavItem link={about} pathname={pathname} />
      <MenuFlyout />
      <NavItem link={contact} pathname={pathname} />
    </nav>
  );
};

export default DesktopNav;
