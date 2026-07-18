import { moments, type MomentTile } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";
import ScrollReveal from "@components/scroll-reveal";
import SectionHeading from "@components/section-heading";
import Image from "next/image";

const spanClass: Record<MomentTile["size"], string> = {
  small: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-2 row-span-2",
};

const InstagramTeaser = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-14 sm:py-20 lg:py-28">
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
      <div className="grid grid-flow-row-dense auto-rows-25 grid-cols-4 gap-2 sm:auto-rows-30 sm:grid-cols-6 sm:gap-3 lg:auto-rows-37.5 lg:grid-cols-8 lg:gap-4">
        {moments.map((moment, index) => {
          return (
            <ScrollReveal
              key={moment.image}
              element="div"
              className={`group relative overflow-hidden transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_var(--color-accent-200)] ${spanClass[moment.size]}`}
              wrapperProps={{
                style: {
                  transitionDelay: `${(index % 6) * 70}ms`,
                  borderRadius: "var(--radius-sm)",
                },
              }}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </ScrollReveal>
          );
        })}
      </div>
    </FullWidthWrapper>
  );
};

InstagramTeaser.displayName = "InstagramTeaser";

export default InstagramTeaser;
