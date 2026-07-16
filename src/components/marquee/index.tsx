import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

export interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
  /** seconds for one full loop */
  speed?: number;
}

const Marquee = ({
  items,
  className,
  itemClassName,
  separator = "✱",
  speed = 32,
}: MarqueeProps) => {
  const track = (copy: "primary" | "duplicate") => {
    const ariaHidden = copy === "duplicate";
    const itemsMapper = (item: string) => {
      return (
        <Fragment key={`${copy}-${item}`}>
          <span
            className={["px-4 sm:px-8", itemClassName]
              .filter(Boolean)
              .join(" ")}
            role={ariaHidden ? undefined : "listitem"}
          >
            {item}
          </span>
          <span
            aria-hidden
            className="shrink-0 text-(length:--fs-1xl) text-accent-500"
          >
            {separator}
          </span>
        </Fragment>
      );
    };
    return (
      <div
        className="flex items-center"
        aria-hidden={ariaHidden}
        role={ariaHidden ? undefined : "list"}
      >
        {items.map(itemsMapper)}
      </div>
    );
  };

  return (
    <div className={["overflow-hidden", className].filter(Boolean).join(" ")}>
      <div
        className="marquee-row"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {track("primary")}
        {track("duplicate")}
      </div>
    </div>
  );
};

Marquee.displayName = "Marquee";

export default Marquee;
