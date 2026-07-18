import { statBadges } from "@app/about/constants";
import FullWidthWrapper from "@components/full-width-wrapper";

const StatsBadgesSection = () => {
  return (
    <FullWidthWrapper
      element="section"
      wrapperProps={{ "aria-label": "Cranbakery at a glance" }}
      wrapperClassName="py-12 lg:py-16"
    >
      <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4">
        {statBadges.map((badge) => {
          return (
            <li
              key={badge.label}
              className="flex flex-col gap-1.5 border p-5 text-center"
              style={{
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <span className="font-display text-(length:--fs-1xs) font-semibold tracking-normal text-neutral-950">
                {badge.label}
              </span>
              <span className="text-(length:--fs-4xs) leading-normal font-normal tracking-normal text-neutral-700">
                {badge.caption}
              </span>
            </li>
          );
        })}
      </ul>
    </FullWidthWrapper>
  );
};

StatsBadgesSection.displayName = "StatsBadgesSection";

export default StatsBadgesSection;
