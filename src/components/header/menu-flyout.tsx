"use client";

import { ChevronRightIcon } from "@icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MENU_CATEGORIES } from "./constants";
import { NAV_LINK_ACTIVE_CLASS, NAV_LINK_CLASS } from "./styles";

const MenuFlyout = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === "/menu" || pathname.startsWith("/menu/");
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const openNow = () => {
    clearTimeout(closeTimerRef.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        onClick={() => {
          setOpen((value) => {
            return !value;
          });
        }}
        aria-expanded={open}
        aria-haspopup="true"
        className={[NAV_LINK_CLASS, isActive && NAV_LINK_ACTIVE_CLASS]
          .filter(Boolean)
          .join(" ")}
      >
        Menu
      </button>
      {open && (
        <div
          className="absolute top-[calc(100%+0.75rem)] left-1/2 w-56 -translate-x-1/2 py-2"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--shadow-md)",
            zIndex: "var(--z-nav)",
          }}
        >
          <NextLink
            href="/menu"
            onClick={() => {
              setOpen(false);
            }}
            className="block px-4 py-2 text-(length:--fs-3xs) font-semibold text-neutral-950 transition-colors hover:text-accent-700"
          >
            All Menu
          </NextLink>
          <div
            className="my-1 h-px"
            style={{ background: "var(--color-border)" }}
          />
          {MENU_CATEGORIES.map((category) => {
            return (
              <NextLink
                key={category.href}
                href={category.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="flex items-center justify-between px-4 py-2 text-(length:--fs-3xs) text-neutral-700 transition-colors hover:text-accent-700"
              >
                {category.name}
                <ChevronRightIcon className="text-neutral-400" />
              </NextLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuFlyout;
