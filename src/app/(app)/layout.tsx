import Footer from "@components/footer";
import Header from "@components/header";
import SmoothScroll from "@components/smooth-scroll";
import ThemeSetter from "@components/theme-setter";
import ThemeToggle from "@components/theme-toggle";
import "@styles/globals.css";
import type { Metadata, Viewport } from "next";
import {
  Bonheur_Royale as BonheurRoyale,
  DM_Mono as DmMono,
  EB_Garamond as EbGaramond,
  Karla,
} from "next/font/google";
import localFont from "next/font/local";
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

// eslint-disable-next-line react-refresh/only-export-components -- PWA
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#8b1828",
};

export const metadata: Metadata = {
  title: "Cranbakery — Belgian Chocolate Cakes & Desserts, Made to Order",
  description:
    "Cranbakery is a five-star patisserie experience: Callebaut Belgian chocolate cakes, cheesecakes, and confections made to order and delivered across India.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    // "default": opaque native status bar reserving its own space, so page
    // content can never render behind it — sidesteps iOS Safari's fixed-element
    // clipping bug in normal browser tabs, which "black-translucent" would re-introduce
    capable: true,
    statusBarStyle: "default",
    title: "Cranbakery",
  },
  icons: {
    icon: [
      {
        url: "/assets/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  // Next only emits the newer unprefixed "mobile-web-app-capable" from
  // appleWebApp.capable; iOS itself still keys off the legacy apple- prefix
  other: { "apple-mobile-web-app-capable": "yes" },
};

const RootLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <html
      lang="en"
      // eslint-disable-next-line better-tailwindcss/no-unknown-classes -- theme
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontCursive.variable} ${fontMono.variable} ${fontGothic.variable} light`}
    >
      <head />
      <body>
        <ThemeSetter />
        <Header />
        <main className="relative">
          {children}
          <ThemeToggle />
        </main>

        <Footer />
        <SmoothScroll />
      </body>
    </html>
  );
};

export default RootLayout;
