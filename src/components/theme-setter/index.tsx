"use client";

import { clientCookies } from "@utils/cookies";
import { useLayoutEffect } from "react";

export default function ThemeSetter() {
  useLayoutEffect(() => {
    const queryTheme = new URLSearchParams(window.location.search).get("theme");
    const cookieTheme = clientCookies.get("theme");

    // Light is the committed default for this brand — never infer from
    // prefers-color-scheme. An explicit ?theme= query param always wins,
    // then a returning visitor's stored choice, then default light.
    const theme =
      queryTheme === "light" || queryTheme === "dark"
        ? queryTheme
        : (cookieTheme ?? "light");

    clientCookies.set("theme", theme);

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, []);

  return null;
}
