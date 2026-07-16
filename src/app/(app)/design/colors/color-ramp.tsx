import TokenChip from "@app/design/components/token-chip";
import { H3 } from "@components/html";
import ColorSwatch from "./color-swatch";

const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

interface ColorRampProps {
  family: string;
  name: string;
  role: string;
}

const ColorRamp = ({ family, name, role }: ColorRampProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-3">
          <H3 $margin="0" style={{ fontSize: "var(--fs-2xs)" }}>
            {name}
          </H3>
          <span className="text-[0.7rem] text-grey-600">{role}</span>
        </div>
        <TokenChip label={`--color-${family}-*`} />
      </div>
      <div className="flex gap-2">
        {STOPS.map((stop) => {
          return <ColorSwatch key={stop} family={family} stop={stop} />;
        })}
      </div>
    </div>
  );
};

export default ColorRamp;
