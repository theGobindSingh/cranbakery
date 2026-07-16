import SectionHeading from "@app/design/components/section-heading";
import TokenChip from "@app/design/components/token-chip";
import DurationDemo from "./duration-demo";
import EasingCurve from "./easing-curve";

const MotionSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        index="05 — Motion"
        title="Duration & easing"
        description="A universal transition covers most hover/focus/theme changes by default; these tokens layer on finer control. Hover a row to see its duration. prefers-reduced-motion zeroes all of this globally."
      />
      <DurationDemo />
      <div className="flex flex-wrap gap-12 border-t border-grey-300 pt-8">
        <div className="flex flex-col items-center gap-3">
          <EasingCurve token="--ease-out" p1={[16, 100]} p2={[30, 100]} />
          <TokenChip label="--ease-out" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <EasingCurve token="--ease-inout" p1={[65, 0]} p2={[35, 100]} />
          <TokenChip label="--ease-inout" />
        </div>
      </div>
    </div>
  );
};

export default MotionSection;
