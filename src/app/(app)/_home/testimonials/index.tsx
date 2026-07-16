import { testimonials } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { H2, P, Span } from "@components/html";

const Testimonials = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <H2
        className="font-display text-neutral-950"
        $size="2xl"
        $margin="0 0 2.5rem 0"
      >
        Love Notes
      </H2>
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {testimonials.map((testimonial) => {
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
              <P
                className="font-display text-neutral-800 italic"
                $size="s"
                $margin="0"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </P>
              <div
                className="h-px w-10"
                style={{ background: "var(--color-accent-200)" }}
              />
              <span className="flex items-center gap-2">
                <Span className="text-neutral-700" $size="1xs" $weight="600">
                  {testimonial.name}
                </Span>
                <span
                  aria-hidden
                  className="inline-block size-1"
                  style={{
                    background: "var(--color-accent-300)",
                    borderRadius: "var(--radius-pill)",
                  }}
                />
                <Span className="text-neutral-600" $size="1xs">
                  {testimonial.location}
                </Span>
              </span>
            </div>
          );
        })}
      </div>
    </FullWidthWrapper>
  );
};

Testimonials.displayName = "Testimonials";

export default Testimonials;
