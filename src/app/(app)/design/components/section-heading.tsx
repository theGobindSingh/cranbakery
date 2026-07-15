import { H2, P } from "@components/html";

interface SectionHeadingProps {
  index: string;
  title: string;
  description: string;
}

const SectionHeading = ({ index, title, description }: SectionHeadingProps) => {
  return (
    <div className="mb-10 flex flex-col gap-2 border-b border-grey-300 pb-6">
      <span
        className="font-mono text-[0.7rem] tracking-[0.15em] text-primary-600 uppercase"
        aria-hidden
      >
        {index}
      </span>
      <H2
        className="font-display"
        $margin="0"
        style={{ fontSize: "var(--fs-1xl)" }}
      >
        {title}
      </H2>
      <P className="text-grey-700" style={{ maxWidth: "60ch" }}>
        {description}
      </P>
    </div>
  );
};

export default SectionHeading;
