import SectionHeading from "@app/design/components/section-heading";
import TokenChip from "@app/design/components/token-chip";

const STEPS = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32];
const MAX_REM = 8;

const SpacingSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        index="03 — Spacing"
        title="Spacing scale"
        description="4px base scale used for internal rhythm — padding, gaps, margins between elements within a section."
      />
      <div className="flex flex-col gap-3">
        {STEPS.map((step) => {
          const rem = step * 0.25;
          const widthPct = Math.min((rem / MAX_REM) * 100, 100);
          return (
            <div key={step} className="flex items-center gap-4">
              <TokenChip
                label={`--space-${step}`}
                className="w-24 shrink-0 justify-start"
              />
              <div className="h-3 flex-1 bg-grey-200">
                <div
                  className="h-full bg-primary-500"
                  style={{
                    width: `${widthPct}%`,
                    borderRadius: "var(--radius-sm)",
                  }}
                />
              </div>
              <span className="w-14 shrink-0 text-right font-mono text-[0.65rem] text-grey-600">
                {rem}rem
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpacingSection;
