import { getItemImage } from "@app/menu/lib/images";
import { getCategory, getMenuItem } from "@app/menu/lib/menu-data";
import WaxSealBadge from "@app/menu/wax-seal-badge";
import { Button } from "@components/button";
import FullWidthWrapper from "@components/full-width-wrapper";
import Image from "next/image";
import VariantList from "./variant-list";

interface ItemDetailProps {
  category: string;
  item: string;
}

// menu.json item shapes vary per-entry (TS infers a union rather than one
// interface with optional fields), so these meta fields need a structural cast
interface ItemMeta {
  description?: string;
  isSignatureProduct?: boolean;
  allergens?: string[];
  minimumOrder?: string;
  note?: string;
}

const ItemDetail = (props: ItemDetailProps) => {
  const category = getCategory(props.category);
  const rawItem = getMenuItem(props.category, props.item);

  if (!category || !rawItem) return null;

  const item = rawItem as typeof rawItem & ItemMeta;
  const image = getItemImage(props.category, 0);

  return (
    <FullWidthWrapper wrapperClassName="py-16 lg:py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div
          className="relative aspect-4/5 w-full overflow-hidden lg:w-1/2"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          <Image
            src={image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
            priority
          />
          {item.isSignatureProduct && (
            <WaxSealBadge className="absolute top-5 left-5" />
          )}
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2 lg:max-w-[52ch]">
          <div className="flex flex-col gap-2">
            <span className="text-(length:--fs-1xs) font-medium tracking-normal text-accent-700">
              {category.name}
            </span>
            <h1 className="m-0 font-display text-headline/normal font-semibold tracking-normal text-neutral-950">
              {item.name}
            </h1>
          </div>

          <p className="m-0 text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-700">
            {item.description}
          </p>

          <VariantList variants={item.variants} />

          {item.allergens && item.allergens.length > 0 && (
            <p className="m-0 text-(length:--fs-4xs) font-normal tracking-normal text-neutral-500">
              Contains: {item.allergens.join(", ")}
            </p>
          )}

          {item.minimumOrder && (
            <p className="m-0 text-(length:--fs-4xs) font-normal tracking-normal text-neutral-500">
              Minimum order: {item.minimumOrder}
            </p>
          )}

          {item.note && (
            <p className="m-0 text-(length:--fs-4xs) font-normal tracking-normal text-neutral-500">
              {item.note}
            </p>
          )}

          <Button
            variant="filled"
            color="accent"
            colorWeight={600}
            size="lg"
            className="w-fit"
          >
            Order Now
          </Button>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

ItemDetail.displayName = "ItemDetail";

export default ItemDetail;
