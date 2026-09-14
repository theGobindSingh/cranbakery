import type { Metadata } from "next";
import CartSection from "./cart-section";

export const metadata: Metadata = {
  title: "Your Cart — Your Brand Name",
  description: "Review your order and send it to Your Brand Name on WhatsApp.",
  alternates: {
    canonical: "https://yourbrand.com/cart",
  },
  robots: { index: false, follow: true },
};

const CartPage = () => {
  return <CartSection />;
};

export default CartPage;
