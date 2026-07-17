import type { ReactNode } from "react";

export interface SectionHeadingProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  action,
  className,
}: SectionHeadingProps) => {
  const heading = (
    <h2 className="m-0 max-w-[24ch] font-gothic text-(length:--fs-3xl) leading-[1.05] font-semibold tracking-[-0.02em] text-balance text-neutral-950">
      {title}
    </h2>
  );

  if (action) {
    return (
      <div
        className={["flex flex-col gap-4 border-b pb-10", className]
          .filter(Boolean)
          .join(" ")}
        style={{ borderColor: "var(--color-border)" }}
      >
        {heading}
        <div className="flex flex-wrap items-end justify-between gap-4">
          {description && (
            <p className="m-0 max-w-[60ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
              {description}
            </p>
          )}
          {action}
        </div>
      </div>
    );
  }

  return (
    <div
      className={[
        "flex flex-col gap-5 border-b pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "var(--color-border)" }}
    >
      {heading}
      {description && (
        <p className="m-0 max-w-[38ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700 lg:text-right">
          {description}
        </p>
      )}
    </div>
  );
};

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
