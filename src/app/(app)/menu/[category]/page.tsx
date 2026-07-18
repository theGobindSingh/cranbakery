import { getCategory, getMenuCategories } from "@app/menu/lib/menu-data";
import FullWidthWrapper from "@components/full-width-wrapper";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FilterableItemGrid from "./filterable-item-grid";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export const generateStaticParams = () => {
  return getMenuCategories().map((category) => {
    return {
      category: category.id,
    };
  });
};

export const generateMetadata = async (
  props: CategoryPageProps,
): Promise<Metadata> => {
  const params = await props.params;
  const category = getCategory(params.category);

  if (!category) {
    return {};
  }

  const title = `${category.name} — Cranbakery`;
  const description =
    category.description ??
    `Browse all ${category.name.toLowerCase()} from Cranbakery. Handcrafted with premium Belgian chocolate.`;
  const url = `https://cranbakery.com/menu/${params.category}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};

const CategoryPage = async (props: CategoryPageProps) => {
  const params = await props.params;
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  return (
    <>
      <FullWidthWrapper wrapperClassName="pt-16 lg:pt-24">
        <div className="flex flex-col gap-4">
          <h1 className="m-0 max-w-[20ch] font-gothic text-(length:--fs-3xl) leading-[1.05] font-semibold tracking-[-0.02em] text-balance text-neutral-950">
            {category.name}
          </h1>
          {category.description && (
            <p className="m-0 max-w-[60ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
              {category.description}
            </p>
          )}
        </div>
      </FullWidthWrapper>
      <FilterableItemGrid category={params.category} />
    </>
  );
};

export default CategoryPage;
