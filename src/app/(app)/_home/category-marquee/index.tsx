import { categoryMarqueeWords } from "@app/_home/constants";
import Marquee from "@components/marquee";

const CategoryMarquee = () => {
  return (
    <section
      className="border-y py-6 lg:py-8"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <Marquee
        items={categoryMarqueeWords}
        itemClassName="font-display text-(length:--fs-2xl) leading-none font-bold tracking-normal text-neutral-950 uppercase not-md:text-(length:--fs-1xl)"
        className="px-4"
      />
    </section>
  );
};

CategoryMarquee.displayName = "CategoryMarquee";

export default CategoryMarquee;
