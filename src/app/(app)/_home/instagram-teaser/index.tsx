import { moments } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import SectionHeading from "@components/section-heading";
import Image from "next/image";

const InstagramTeaser = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-20 lg:py-28">
      <SectionHeading
        className="mb-10 lg:mb-14"
        title="Finishing Touches"
        description="Ribbons, pearls, toppers — the small details we build into every order, and the moments they belong to."
        action={
          <Link
            href="https://instagram.com/cranbakery"
            variant="outlined"
            color="accent"
            colorWeight={700}
          >
            @cranbakery
          </Link>
        }
      />
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
