import { moments } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import Image from "next/image";

const InstagramTeaser = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14">
        <div className="flex max-w-[52ch] flex-col gap-3">
          <h2 className="m-0 font-display text-(length:--fs-2xl) leading-normal font-bold tracking-normal text-neutral-950">
            Finishing Touches
          </h2>
          <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            Ribbons, pearls, toppers — the small details we build into every
            order, and the moments they belong to.
          </p>
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
