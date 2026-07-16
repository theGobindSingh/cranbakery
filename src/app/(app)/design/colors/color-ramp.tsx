import TokenChip from "@app/design/components/token-chip";
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
          <h3 className="m-0 text-(length:--fs-2xs) leading-normal font-medium tracking-normal">
            {name}
          </h3>
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
