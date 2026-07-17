"use client";

import { ChevronRightIcon } from "@icons";
import NextLink from "next/link";
import { useState } from "react";
import { MENU_CATEGORIES } from "./constants";

const MobileMenuSection = ({ onNavigate }: { onNavigate: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b" style={{ borderColor: "var(--color-border)" }}>
      <button
        type="button"
        onClick={() => {
          setExpanded((value) => {
            return !value;
          });
        }}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between py-4 font-gothic text-(length:--fs-m) text-neutral-950 uppercase"
      >
        Menu
        <ChevronRightIcon
          width="0.9rem"
          height="0.9rem"
          className={`text-neutral-500 transition-transform duration-(--dur-base) ${expanded ? "rotate-90" : ""}`}
        />
      </button>
      {expanded && (
        <div className="flex flex-col gap-1 pb-4 pl-2">
          <NextLink
            href="/menu"
            onClick={onNavigate}
            className="py-2 text-(length:--fs-2xs) font-semibold text-neutral-950"
          >
            All Menu
          </NextLink>
          {MENU_CATEGORIES.map((category) => {
            return (
              <NextLink
                key={category.href}
                href={category.href}
                onClick={onNavigate}
                className="py-2 text-(length:--fs-2xs) text-neutral-700"
              >
                {category.name}
              </NextLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenuSection;
