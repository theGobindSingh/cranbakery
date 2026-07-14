"use client";

import { MoonIcon, SunIcon } from "@/icons";
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
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [dark]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggle}
      className="fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full border border-grey-300 bg-grey-200 text-grey-900 transition-all duration-200 hover:border-accent hover:shadow-[0_0_20px_-4px_var(--color-accent-400)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
