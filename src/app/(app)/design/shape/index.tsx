import SectionHeading from "@app/design/components/section-heading";
import TokenChip from "@app/design/components/token-chip";

const RADII = [
  { token: "--radius-none", label: "none" },
  { token: "--radius-sm", label: "sm · 2px" },
  { token: "--radius-md", label: "md · 8px" },
  { token: "--radius-pill", label: "pill" },
];

const SHADOWS = [
  { token: "--shadow-sm", label: "sm" },
  { token: "--shadow-md", label: "md" },
];

const BORDERS = [
  { token: "--border-hairline", label: "hairline", width: "1px" },
  { token: "--border-strong", label: "strong", width: "2px" },
];

const ShapeSection = () => {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        index="04 — Shape & elevation"
        title="Radius, shadow & border"
        description="Small, consistent rounding by default — pill reserved for chips. Shadows are ink-tinted and used sparingly, only for liftable/interactive surfaces."
      />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {RADII.map((r) => {
          return (
            <div key={r.token} className="flex flex-col items-center gap-3">
              <div
                className="size-20 border-2 border-primary-500 bg-grey-100"
                style={{ borderRadius: `var(${r.token})` }}
              />
              <span className="text-[0.7rem] text-grey-700">{r.label}</span>
              <TokenChip label={r.token} />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {SHADOWS.map((s) => {
          return (
            <div key={s.token} className="flex flex-col items-center gap-3">
              <div
                className="size-20"
                style={{
                  background: "var(--color-surface-raised)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: `var(${s.token})`,
                }}
              />
              <span className="text-[0.7rem] text-grey-700">{s.label}</span>
              <TokenChip label={s.token} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-8">
        {BORDERS.map((b) => {
          return (
            <div key={b.token} className="flex flex-col items-center gap-3">
              <div
                className="size-20 bg-grey-100"
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: `${b.width} solid var(--color-border-strong)`,
                }}
              />
              <span className="text-[0.7rem] text-grey-700">{b.label}</span>
              <TokenChip label={b.token} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeSection;
