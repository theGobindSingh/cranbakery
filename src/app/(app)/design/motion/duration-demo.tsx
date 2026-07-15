import TokenChip from "@/app/(app)/design/components/token-chip";

const DURATIONS = [
  { token: "--dur-fast", label: "0.2s", widthPct: 29 },
  { token: "--dur-base", label: "0.3s", widthPct: 43 },
  { token: "--dur-slow", label: "0.5s", widthPct: 71 },
  { token: "--dur-reveal", label: "0.7s", widthPct: 100 },
];

const DurationDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      {DURATIONS.map((d) => {
        return (
          <div key={d.token} className="group flex items-center gap-4">
            <TokenChip
              label={d.token}
              className="w-28 shrink-0 justify-start"
            />
            <div className="h-8 w-40 shrink-0 overflow-hidden bg-grey-200">
              <div
                className="size-8 translate-x-0 bg-primary-500 transition-transform ease-out group-hover:translate-x-32"
                style={{
                  borderRadius: "var(--radius-sm)",
                  transitionDuration: `var(${d.token})`,
                }}
              />
            </div>
            <span className="font-mono text-[0.65rem] text-grey-600">
              {d.label} · hover row
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DurationDemo;
