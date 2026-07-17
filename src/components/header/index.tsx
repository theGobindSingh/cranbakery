import FullWidthWrapper from "@components/full-width-wrapper";
import type { CSSProperties } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { GLASS_STYLE } from "./styles";
import UtilityIcons from "./utility-icons";
import Wordmark from "./wordmark";

const Header = () => {
  return (
    <>
      <a
        href="#main-content"
        className="btn sr-only fixed top-2 left-2 btn-filled focus:not-sr-only"
        style={
          {
            "--c": "var(--color-accent-700)",
            "--c-hover": "var(--color-accent-600)",
            zIndex: "var(--z-nav)",
          } as CSSProperties
        }
      >
        Skip to content
      </a>
      <FullWidthWrapper
        element="header"
        wrapperClassName="fixed inset-x-0 top-0"
        wrapperProps={{
          style: {
            ...GLASS_STYLE,
            borderBottom: "1px solid var(--color-border)",
            zIndex: "var(--z-nav)",
          },
        }}
      >
        <div className="flex h-(--header-height) w-full items-center justify-between gap-6">
          <Wordmark />
          <DesktopNav />
          <div className="flex items-center gap-3">
            <UtilityIcons />
            <MobileNav />
          </div>
        </div>
      </FullWidthWrapper>
    </>
  );
};

export default Header;
