import ThemeSetter from "@app/theme-setter";
import SmoothScroll from "@components/smooth-scroll";
import ThemeToggle from "@components/theme-toggle";
import "@styles/globals.css";
import type { Metadata } from "next";
import {
  Bonheur_Royale as BonheurRoyale,
  DM_Mono as DmMono,
  EB_Garamond as EbGaramond,
  Karla,
} from "next/font/google";
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

export const metadata: Metadata = {
  title: "Cranbakery — Belgian Chocolate Cakes & Desserts, Made to Order",
  description:
    "Cranbakery is a five-star patisserie experience: Callebaut Belgian chocolate cakes, cheesecakes, and confections made to order and delivered across Mohali and Chandigarh.",
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
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontCursive.variable} ${fontMono.variable} ${theme === "dark" ? "dark" : "light"}`}
    >
      <head />
      <body>
        <ThemeSetter />
        <ThemeToggle />
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
};

export default RootLayout;
