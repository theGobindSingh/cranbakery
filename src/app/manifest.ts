/* eslint-disable camelcase -- PWA */
import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Cranbakery — Belgian Chocolate Cakes & Desserts",
    short_name: "Cranbakery",
    description:
      "Cranbakery is a five-star patisserie experience: Callebaut Belgian chocolate cakes, cheesecakes, and confections made to order and delivered across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf4",
    theme_color: "#8b1828",
    icons: [
      {
        src: "/assets/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icons/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
};

export default manifest;
