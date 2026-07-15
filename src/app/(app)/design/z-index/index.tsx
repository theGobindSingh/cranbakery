import SectionHeading from "@/app/(app)/design/components/section-heading";
import TokenChip from "@/app/(app)/design/components/token-chip";

const LAYERS = [
  { token: "--z-grid", value: 0, label: "Grid / background" },
  { token: "--z-content", value: 10, label: "Page content" },
  { token: "--z-overlay", value: 40, label: "Overlays, modals" },
  { token: "--z-nav", value: 50, label: "Navigation" },
  { token: "--z-wipe", value: 9998, label: "Page-transition wipe" },
  { token: "--z-cursor", value: 9999, label: "Custom cursor" },
];

const ZIndexSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading
        index="06 — Z-index"
        title="Stacking ladder"
        description="A fixed semantic order, low to high — never an arbitrary 999. Each layer only stacks above what it must."
      />
      <div className="flex flex-col-reverse gap-2">
        {LAYERS.map((layer, i) => {
          return (
            <div
              key={layer.token}
              className="flex items-center gap-4 border border-grey-300 bg-grey-100 p-3"
              style={{
                borderRadius: "var(--radius-sm)",
                marginLeft: `${i * 1.25}rem`,
              }}
            >
              <span className="w-10 shrink-0 text-right font-mono text-[0.7rem] text-primary-600">
                {layer.value}
              </span>
              <span className="flex-1 text-[0.75rem] text-grey-800">
                {layer.label}
              </span>
              <TokenChip label={layer.token} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZIndexSection;
