import FullWidthWrapper from "@components/full-width-wrapper";
import { tw } from "@utils/tailwind";
import type { CSSProperties } from "react";
import Nav from "./nav";
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
        wrapperClassName={tw`fixed inset-x-0 top-0`}
        wrapperProps={{
          style: {
            borderBottom: "1px solid var(--color-border)",
            zIndex: "var(--z-nav)",
            paddingTop: "env(safe-area-inset-top)",
          },
        }}
        // glass lives on this sibling, not the <header> itself — backdrop-filter
        // on the header would make it a containing block for its fixed-position
        // descendants (the mobile nav sheet), breaking their positioning
        beforeContainer={
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={GLASS_STYLE}
          />
        }
      >
        <div className="relative flex h-(--header-height) w-full items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Wordmark />
          <div className="flex items-center gap-3 lg:contents">
            <Nav />
            <UtilityIcons />
          </div>
        </div>
      </FullWidthWrapper>
    </>
  );
};

export default Header;
