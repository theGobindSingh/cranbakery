import { Button } from "@components/button";
import type { ColorFamily, ColorWeight } from "@components/button/styles";

const COLORS: {
  color: ColorFamily;
  weight: ColorWeight;
  textColor?: ColorFamily;
  textWeight?: ColorWeight;
}[] = [
  { color: "primary", weight: 600 },
  { color: "secondary", weight: 500, textColor: "grey", textWeight: 900 },
  { color: "accent", weight: 600 },
  { color: "grey", weight: 900 },
  { color: "neutral", weight: 700 },
];

const VARIANTS = ["filled", "outlined", "text"] as const;

const ButtonMatrix = () => {
  return (
    <div className="flex flex-col gap-6">
      {VARIANTS.map((variant) => {
        return (
          <div key={variant} className="flex flex-wrap items-center gap-4">
            <span className="w-20 shrink-0 font-mono text-[0.65rem] text-grey-600 uppercase">
              {variant}
            </span>
            {COLORS.map((c) => {
              return (
                <Button
                  key={`${variant}-${c.color}`}
                  variant={variant}
                  color={c.color}
                  colorWeight={c.weight}
                  textColor={c.textColor}
                  textColorWeight={c.textWeight}
                >
                  {c.color}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonMatrix;
