import SectionHeading from "@app/design/components/section-heading";
import ButtonMatrix from "./button-matrix";
import LinkDemo from "./link-demo";

const ComponentsShowcaseSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        index="07 — Components"
        title="Button & Link"
        description="The shared interaction primitive: color resolved into --c/--c-hover/--c-text CSS vars via colorStyleVars(), never a raw color prop. Radius stays sharp by design — brutalist edges against the otherwise soft palette."
      />
      <ButtonMatrix />
      <div className="border-t border-grey-300 pt-8">
        <LinkDemo />
      </div>
    </div>
  );
};

export default ComponentsShowcaseSection;
