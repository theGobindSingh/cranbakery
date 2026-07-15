import SectionHeading from "@/app/(app)/design/components/section-heading";
import ColorRamp from "./color-ramp";
import MerchBadges from "./merch-badges";
import SemanticRoles from "./semantic-roles";

const RAMPS: { family: string; name: string; role: string }[] = [
  {
    family: "grey",
    name: "Grey",
    role: "Structural neutral — backs bg/surface/text semantic roles",
  },
  {
    family: "neutral",
    name: "Neutral",
    role: "Cream & Ink — warm content neutral, not wired to semantics yet",
  },
  { family: "primary", name: "Primary", role: "Rust — CTAs, hover/dark" },
  {
    family: "secondary",
    name: "Secondary",
    role: "Mustard — supporting accent",
  },
  {
    family: "accent",
    name: "Accent",
    role: "Cranberry — CTAs, links, focus rings, and merchandising tags",
  },
  { family: "success", name: "Success", role: "Order sent, confirmations" },
  { family: "caution", name: "Caution", role: "Out of stock, warnings" },
  { family: "info", name: "Info", role: "Informational notices" },
  { family: "error", name: "Error", role: "Failed / destructive states" },
];

const ColorsSection = () => {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        index="01 — Color"
        title="Ramps & semantic roles"
        description="Nine families, 11 stops each (50→950), stored as raw HSL and resolved to hsl(). Click any swatch or chip to copy its token."
      />
      <div className="flex flex-col gap-8">
        {RAMPS.map((ramp) => {
          return <ColorRamp key={ramp.family} {...ramp} />;
        })}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-[0.7rem] tracking-widest text-grey-700 uppercase">
          Accent — merchandising tags
        </h3>
        <MerchBadges />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-[0.7rem] tracking-widest text-grey-700 uppercase">
          Semantic aliases
        </h3>
        <SemanticRoles />
      </div>
    </div>
  );
};

export default ColorsSection;
