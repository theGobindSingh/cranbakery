"use client";

import { MoonIcon, SunIcon } from "@/icons";
import { clientCookies } from "@utils/cookies";
import { useCallback, useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
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
      onClick={toggle}
      style={{
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        color: "var(--color-text-muted)",
        zIndex: "var(--z-nav)",
        transitionDuration: "var(--dur-base)",
      }}
      className="fixed top-4 right-4 flex size-9 items-center justify-center transition-colors hover:border-accent-700 hover:text-accent-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:top-6 sm:right-6"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <SunIcon width="1rem" height="1rem" />
      ) : (
        <MoonIcon width="1rem" height="1rem" />
      )}
    </button>
  );
};

export default ThemeToggle;
