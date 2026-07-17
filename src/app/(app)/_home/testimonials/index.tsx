import { testimonials } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";

const testimonialsMapper = (testimonial: (typeof testimonials)[number]) => {
  return (
    <div
      key={testimonial.name}
      className="flex flex-col gap-5 p-7"
      style={{
        background: "var(--color-neutral-50)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border)",
      }}
    >
      <p className="m-0 font-display text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-800 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div
        className="mt-auto h-px w-10"
        style={{ background: "var(--color-accent-200)" }}
      />
      <span className="flex items-center gap-2">
        <span className="m-0 text-(length:--fs-1xs) leading-normal font-semibold tracking-normal text-neutral-700">
          {testimonial.name}
        </span>
        <span
          aria-hidden
          className="inline-block size-1"
          style={{
            background: "var(--color-accent-300)",
            borderRadius: "var(--radius-pill)",
          }}
        />
        <span className="m-0 text-(length:--fs-1xs) leading-normal font-normal tracking-normal text-neutral-600">
          {testimonial.location}
        </span>
      </span>
    </div>
  );
};

const Testimonials = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <h2 className="mb-10 font-gothic text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
        Love Notes
      </h2>
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {testimonials.map(testimonialsMapper)}
      </div>
    </FullWidthWrapper>
  );
};

Testimonials.displayName = "Testimonials";

export default Testimonials;
