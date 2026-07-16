import SectionHeading from "@app/design/components/section-heading";
import FontRoles from "./font-roles";
import TypeScale from "./type-scale";

const TypographySection = () => {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        index="02 — Typography"
        title="Font roles & type scale"
        description="Five font roles wired via next/font into --ff-* vars, registered as font-display/sans/serif/cursive/mono. Body text runs on the discrete --fs-* scale; the clamp() display tier is reserved for hero and section-opener moments."
      />
      <FontRoles />
      <TypeScale />
    </div>
  );
};

export default TypographySection;
