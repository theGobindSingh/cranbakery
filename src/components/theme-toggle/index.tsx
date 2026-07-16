"use client";

import { clientCookies } from "@utils/cookies";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";

const DURATION = 400;

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const toggleId = useId();
  const clipMainId = `theme-toggle-spin-${toggleId}`;

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
      type="button"
      onClick={toggle}
      style={{
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        color: "var(--color-text-muted)",
        zIndex: "var(--z-nav)",
        transitionDuration: "var(--dur-base)",
      }}
      className="fixed top-4 right-4 flex size-9 cursor-pointer items-center justify-center transition-colors hover:border-accent-700 hover:text-accent-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:top-6 sm:right-6"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ "--toggle-spin-duration": `${DURATION}ms` } as CSSProperties}
      >
        <defs>
          <clipPath id={clipMainId}>
            <path
              d={"M0 0h25a1 1 0 0010 10v14H0Z"}
              className="transition-[d,translate] duration-(--toggle-spin-duration) dark:delay-[calc(var(--toggle-spin-duration)*0.15)] dark:[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:not-supports-[d:path('M0_0')]:translate-y-0.5"
            />
          </clipPath>
        </defs>
        <g stroke="currentColor" strokeLinecap="round">
          <circle
            cx={12}
            cy={12}
            r={5}
            fill="currentColor"
            clipPath={`url(#${clipMainId})`}
            className="origin-center transition-transform duration-(--toggle-spin-duration) dark:scale-170"
          />
          <path
            d={"M12 1.4v2.4"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"m20.3 3.7-2.5 2.5"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"M22.6 12h-2.4"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"M12 22.6v-2.4"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"M1.4 12h2.4"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"m20.3 20.3-2.5-2.5"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"m3.7 20.3 2.5-2.5"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
          <path
            d={"m3.7 3.7 2.5 2.5"}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={0}
            paintOrder="stroke markers fill"
            className="origin-center transition-transform delay-[calc(var(--toggle-spin-duration)*0.15)] duration-(--toggle-spin-duration) dark:scale-0 dark:rotate-45 dark:delay-0"
          />
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
