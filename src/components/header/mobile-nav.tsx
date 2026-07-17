"use client";

import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { INSTAGRAM_HREF, NAV_LINKS, WHATSAPP_HREF } from "./constants";
import MobileMenuSection from "./mobile-menu-section";
import { GLASS_STYLE, ICON_BUTTON_CLASS, ICON_BUTTON_STYLE } from "./styles";

const [home, about, contact] = NAV_LINKS;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

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

      {mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            data-open={open}
            className="header-mobile-panel fixed inset-x-0 bottom-0 flex flex-col overflow-y-auto"
            style={{
              ...GLASS_STYLE,
              top: "var(--header-height)",
              borderTop: "1px solid var(--color-border)",
              zIndex: "var(--z-nav)",
            }}
          >
            <nav
              aria-label="Primary"
              className="flex flex-1 flex-col gap-1 p-6"
            >
              <NextLink
                href={home.href}
                onClick={close}
                className="border-b py-4 font-gothic text-(length:--fs-m) text-neutral-950 uppercase"
                style={{ borderColor: "var(--color-border)" }}
              >
                {home.label}
              </NextLink>
              <NextLink
                href={about.href}
                onClick={close}
                className="border-b py-4 font-gothic text-(length:--fs-m) text-neutral-950 uppercase"
                style={{ borderColor: "var(--color-border)" }}
              >
                {about.label}
              </NextLink>
              <MobileMenuSection onNavigate={close} />
              <NextLink
                href={contact.href}
                onClick={close}
                className="border-b py-4 font-gothic text-(length:--fs-m) text-neutral-950 uppercase"
                style={{ borderColor: "var(--color-border)" }}
              >
                {contact.label}
              </NextLink>
            </nav>

            <div
              className="flex flex-col gap-4 border-t p-6"
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
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileNav;
