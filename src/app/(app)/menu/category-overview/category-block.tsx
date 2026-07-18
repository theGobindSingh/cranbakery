import { categoryIntros } from "@app/menu/constants";
import { getItemImage } from "@app/menu/lib/images";
import { getMenuItems } from "@app/menu/lib/menu-data";
import ProductCard from "@app/menu/product-card";
import Link from "@components/link";
import ScrollReveal from "@components/scroll-reveal";

interface CategoryBlockProps {
  categoryId: string;
  categoryName: string;
}

const PREVIEW_COUNT = 3;

const CategoryBlock = ({ categoryId, categoryName }: CategoryBlockProps) => {
  const items = getMenuItems(categoryId).slice(0, PREVIEW_COUNT);
  const intro = categoryIntros[categoryId];

  return (
    <ScrollReveal className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="m-0 font-gothic text-(length:--fs-2xl) leading-[1.05] font-semibold tracking-[-0.02em] text-neutral-950">
          {categoryName}
        </h2>
        {intro && (
          <p className="m-0 max-w-[70ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            {intro}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {items.map((item, index) => {
          return (
            <ProductCard
              key={item.slug}
              item={item}
              categoryId={categoryId}
              imageSrc={getItemImage(categoryId, index)}
            />
          );
        })}
      </div>

      <div>
        <Link href={`/menu/${categoryId}`} variant="text" color="accent">
          View all {categoryName} →
        </Link>
      </div>
    </ScrollReveal>
  );
};

CategoryBlock.displayName = "CategoryBlock";

export default CategoryBlock;
