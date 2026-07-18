"use client";

import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  INSTAGRAM_HREF,
  MENU_CATEGORIES,
  NAV_LINKS,
  WHATSAPP_HREF,
} from "./constants";
import {
  ICON_BUTTON_CLASS,
  ICON_BUTTON_STYLE,
  NAV_GLASS_STYLE,
  NAV_LINK_ACTIVE_CLASS,
  NAV_LINK_CLASS,
  SUBMENU_LINK_CLASS,
} from "./styles";

const [home, about, contact] = NAV_LINKS;

const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isMenuActive = pathname === "/menu" || pathname.startsWith("/menu/");
  const lenis = useLenis();

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const linkClass = (href: string) => {
    return [NAV_LINK_CLASS, pathname === href && NAV_LINK_ACTIVE_CLASS]
      .filter(Boolean)
      .join(" ");
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    lenis?.stop();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, lenis]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen((value) => {
            return !value;
          });
        }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        style={ICON_BUTTON_STYLE}
        className={`${ICON_BUTTON_CLASS} lg:hidden`}
      >
        {open ? (
          <X size="1.05rem" aria-hidden="true" />
        ) : (
          <Menu size="1.05rem" aria-hidden="true" />
        )}
      </button>

      <nav
        aria-label="Primary"
        data-open={open}
        data-lenis-prevent
        className="header-nav lg:col-start-2 lg:justify-self-center"
        style={NAV_GLASS_STYLE}
      >
        <NextLink
          href={home.href}
          onClick={close}
          className={linkClass(home.href)}
          style={{ borderColor: "var(--color-border)" }}
        >
          {home.label}
        </NextLink>
        <NextLink
          href={about.href}
          onClick={close}
          className={linkClass(about.href)}
          style={{ borderColor: "var(--color-border)" }}
        >
          {about.label}
        </NextLink>

        <div className="header-menu-item">
          <NextLink
            href="/menu"
            onClick={close}
            className={[NAV_LINK_CLASS, isMenuActive && NAV_LINK_ACTIVE_CLASS]
              .filter(Boolean)
              .join(" ")}
            style={{ borderColor: "var(--color-border)" }}
          >
            Menu
          </NextLink>
          <div className="header-submenu">
            {MENU_CATEGORIES.map((category) => {
              return (
                <NextLink
                  key={category.href}
                  href={category.href}
                  onClick={close}
                  className={SUBMENU_LINK_CLASS}
                >
                  {category.name}
                </NextLink>
              );
            })}
          </div>
        </div>

        <NextLink
          href={contact.href}
          onClick={close}
          className={linkClass(contact.href)}
          style={{ borderColor: "var(--color-border)" }}
        >
          {contact.label}
        </NextLink>

        <div
          className="mt-4 flex flex-col gap-4 border-t pt-4 lg:hidden"
          style={{ borderColor: "var(--color-border)" }}
        >
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-filled"
            style={
              {
                "--c": "var(--color-accent-700)",
                "--c-hover": "var(--color-accent-600)",
              } as CSSProperties
            }
          >
            Chat on WhatsApp
          </a>
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-(length:--fs-3xs) text-neutral-700 transition-colors hover:text-accent-700"
          >
            @cranbakery on Instagram
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
