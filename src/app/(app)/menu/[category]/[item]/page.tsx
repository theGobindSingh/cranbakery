import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategory,
  getMenuCategories,
  getMenuItem,
  getMenuItems,
} from "../../lib/menu-data";
import ItemDetail from "./item-detail";

interface ItemPageProps {
  params: Promise<{ category: string; item: string }>;
}

export const generateStaticParams = () => {
  return getMenuCategories().flatMap((category) => {
    return getMenuItems(category.id).map((item) => {
      return {
        category: category.id,
        item: item.slug,
      };
    });
  });
};

export const generateMetadata = async (
  props: ItemPageProps,
): Promise<Metadata> => {
  const params = await props.params;
  const category = getCategory(params.category);

  if (!category) {
    return {};
  }

  const item = getMenuItem(params.category, params.item);

  if (!item) {
    return {};
  }

  const title = `${item.name} — ${category.name} | Cranbakery`;
  const description =
    (item as { description?: string }).description ??
    `${item.name} from Cranbakery's ${category.name.toLowerCase()}. Handcrafted with premium Belgian chocolate.`;
  const url = `https://cranbakery.com/menu/${params.category}/${params.item}`;

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

const ItemPage = async (props: ItemPageProps) => {
  const params = await props.params;
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const item = getMenuItem(params.category, params.item);

  if (!item) {
    notFound();
  }

  return <ItemDetail category={params.category} item={params.item} />;
};

export default ItemPage;
