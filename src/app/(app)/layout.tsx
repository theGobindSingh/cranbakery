import Header from "@components/header";
import SmoothScroll from "@components/smooth-scroll";
import ThemeSetter from "@components/theme-setter";
import ThemeToggle from "@components/theme-toggle";
import "@styles/globals.css";
import type { Metadata } from "next";
import {
  Bonheur_Royale as BonheurRoyale,
  DM_Mono as DmMono,
  EB_Garamond as EbGaramond,
  Karla,
} from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { type PropsWithChildren } from "react";

const fontDisplay = EbGaramond({
  variable: "--ff-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const fontSans = Karla({
  variable: "--ff-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const fontCursive = BonheurRoyale({
  variable: "--ff-cursive",
  weight: ["400"],
  subsets: ["latin"],
});

const fontMono = DmMono({
  variable: "--ff-mono",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});

// self-hosted: Next's bundled metrics table has no entry for "Special Gothic
// Expanded One", so next/font/google's Turbopack loader always logs a fallback
// warning for it — next/font/local sidesteps the lookup entirely
const fontGothic = localFont({
  variable: "--ff-gothic",
  src: [
    {
      path: "../../../public/assets/fonts/special-gothic-expanded-one-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/special-gothic-expanded-one-latin-ext.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Cranbakery — Belgian Chocolate Cakes & Desserts, Made to Order",
  description:
    "Cranbakery is a five-star patisserie experience: Callebaut Belgian chocolate cakes, cheesecakes, and confections made to order and delivered across India.",
};

const getTheme = async () => {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("theme")?.value ?? null;
  } catch {
    return null;
  }
};

const RootLayout = async ({ children }: PropsWithChildren<unknown>) => {
  const theme = await getTheme();
  return (
    <html
      lang="en"
      // eslint-disable-next-line better-tailwindcss/no-unknown-classes -- theme
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontCursive.variable} ${fontMono.variable} ${fontGothic.variable} ${theme === "dark" ? "dark" : "light"}`}
    >
      <head />
      <body>
        <ThemeSetter />
        <main className="relative">
          <Header />
          <div id="main-content" className="pt-(--header-height)">
            {children}
          </div>
          <ThemeToggle />
        </main>
        <SmoothScroll />
      </body>
    </html>
  );
};

export default RootLayout;
