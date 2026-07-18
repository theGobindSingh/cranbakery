"use client";

import ThemeIcon from "@components/theme-toggle/theme-icon";
import { clientCookies } from "@utils/cookies";
import { useCallback, useLayoutEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);

  useLayoutEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useLayoutEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = footer.getBoundingClientRect();

      // Amount of the footer currently inside the viewport.
      const overlap = Math.max(0, window.innerHeight - rect.top);

      setFooterOffset(overlap);

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => {
      return cancelAnimationFrame(frame);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !dark;
    const theme = next ? "dark" : "light";

    setDark(next);

    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);

    clientCookies.set("theme", theme, { days: 365 });
  }, [dark]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        color: "var(--color-text-muted)",
        zIndex: "var(--z-nav)",
        transitionDuration: "var(--dur-base)",
        transform: `translateY(-${footerOffset}px)`,
      }}
      className="fixed right-4 bottom-4 flex size-9 cursor-pointer items-center justify-center rounded-md border border-solid border-neutral-950 bg-[hsla(var(--color-neutral-50-base),0.75)] backdrop-blur-2xl transition-colors hover:border-accent-700 hover:text-accent-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:right-10 sm:bottom-20"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeIcon />
    </button>
  );
};

export default ThemeToggle;
