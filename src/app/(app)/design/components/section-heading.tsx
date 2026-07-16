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
      <h2 className="m-0 font-display text-headline/normal font-bold tracking-normal">
        {title}
      </h2>
      <p className="m-0 max-w-[60ch] text-(length:--fs-2xs) leading-normal font-normal tracking-normal text-grey-700">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
