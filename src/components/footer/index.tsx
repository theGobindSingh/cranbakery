import FullWidthWrapper from "@components/full-width-wrapper";
import {
  INSTAGRAM_HREF,
  MENU_CATEGORIES,
  NAV_LINKS,
  WHATSAPP_HREF,
} from "@components/header/constants";
import Wordmark from "@components/header/wordmark";
import NextLink from "next/link";

const LINK_CLASS =
  "text-(length:--fs-4xs) text-neutral-700 transition-colors hover:text-accent-700";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FullWidthWrapper
      element="footer"
      wrapperClassName="py-14 not-md:py-10"
      wrapperProps={{
        style: { borderTop: "1px solid var(--color-border)" },
      }}
    >
      <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-4">
        <div className="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
          <Wordmark />
          <p className="m-0 max-w-[30ch] text-(length:--fs-4xs) leading-normal text-neutral-700">
            Belgian chocolate cakes and confections, made to order and delivered
            across Kanpur.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-(length:--fs-5xs) font-semibold tracking-wide text-neutral-800 uppercase">
            Explore
          </span>
          {NAV_LINKS.map((link) => {
            return (
              <NextLink key={link.href} href={link.href} className={LINK_CLASS}>
                {link.label}
              </NextLink>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-(length:--fs-5xs) font-semibold tracking-wide text-neutral-800 uppercase">
            Menu
          </span>
          {MENU_CATEGORIES.map((category) => {
            return (
              <NextLink
                key={category.href}
                href={category.href}
                className={LINK_CLASS}
              >
                {category.name}
              </NextLink>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-(length:--fs-5xs) font-semibold tracking-wide text-neutral-800 uppercase">
            Connect
          </span>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            Instagram
          </a>
        </div>
      </div>

      <div
        className="mt-10 flex w-full flex-wrap items-center justify-between gap-2 border-t pt-6 text-(length:--fs-5xs) text-neutral-600"
        style={{ borderColor: "var(--color-border)" }}
      >
        <span>© {year} Cranbakery. All rights reserved.</span>
        <span>Made with love in Kanpur.</span>
      </div>
    </FullWidthWrapper>
  );
};

Footer.displayName = "Footer";

export default Footer;
