import { moments } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { H2, P } from "@components/html";
import Link from "@components/link";
import Image from "next/image";

const InstagramTeaser = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14">
        <div className="flex max-w-[52ch] flex-col gap-3">
          <H2 className="font-display text-neutral-950" $size="2xl" $margin="0">
            Finishing Touches
          </H2>
          <P className="text-neutral-700" $size="s">
            Ribbons, pearls, toppers — the small details we build into every
            order, and the moments they belong to.
          </P>
        </div>
        <Link
          href="https://instagram.com/cranbakery"
          variant="outlined"
          color="accent"
          colorWeight={700}
        >
          @cranbakery
        </Link>
      </div>
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gridAutoRows: "160px",
        }}
      >
        {moments.map((moment) => {
          return (
            <div
              key={moment.image}
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-sm)",
                gridRow: moment.span === "tall" ? "span 2" : undefined,
              }}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </FullWidthWrapper>
  );
};

InstagramTeaser.displayName = "InstagramTeaser";

export default InstagramTeaser;
