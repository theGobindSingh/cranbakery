import { getMenuCategories } from "@app/menu/lib/menu-data";
import FullWidthWrapper from "@components/full-width-wrapper";
import CategoryBlock from "./category-block";

const CategoryOverview = () => {
  const categories = getMenuCategories();

  return (
    <FullWidthWrapper
      wrapperClassName="py-20 lg:py-28"
      wrapperProps={{ style: { background: "var(--color-surface)" } }}
    >
      <div className="flex flex-col gap-20 lg:gap-28">
        <div className="flex flex-col gap-4">
          <h1 className="m-0 max-w-[20ch] font-gothic text-(length:--fs-3xl) leading-[1.05] font-semibold tracking-[-0.02em] text-balance text-neutral-950">
            Our Menu
          </h1>
          <p className="m-0 max-w-[60ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            Every dessert is handcrafted with premium ingredients, including
            Belgian chocolate sourced from Callebaut. Browse by category below.
          </p>
        </div>

        {categories.map((category) => {
          return (
            <CategoryBlock
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
            />
          );
        })}
      </div>
    </FullWidthWrapper>
  );
};

CategoryOverview.displayName = "CategoryOverview";

export default CategoryOverview;
