import TokenChip from "@/app/(app)/design/components/token-chip";

const STEPS = [
  "4xs",
  "3xs",
  "2xs",
  "1xs",
  "s",
  "m",
  "l",
  "1xl",
  "2xl",
  "3xl",
  "4xl",
];

const TypeScale = () => {
  return (
    <div className="flex flex-col gap-4">
      {STEPS.map((step) => {
        return (
          <div
            key={step}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-grey-200 pb-3"
          >
            <span
              className="font-display"
              style={{
                fontSize: `var(--fs-${step})`,
                color: "var(--color-text)",
              }}
            >
              Aa Cranbakery
            </span>
            <TokenChip label={`--fs-${step}`} />
          </div>
        );
      })}
      <div className="mt-6 flex flex-col gap-6 border-t border-grey-300 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-grey-600">
            Display tier — hand-tuned clamp() for hero / section openers only.
            --fs-display-hero scales up to 16rem; shown here at section scale to
            stay legible on this page.
          </span>
        </div>
        <div className="overflow-x-auto">
          <p
            className="font-display whitespace-nowrap"
            style={{
              fontSize: "var(--fs-display-section)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Section
          </p>
        </div>
        <TokenChip label="--fs-display-section" />
      </div>
    </div>
  );
};

export default TypeScale;
