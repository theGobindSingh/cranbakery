import { formatPriceRange, type MenuItem } from "@app/menu/lib/menu-data";
import WaxSealBadge from "@app/menu/wax-seal-badge";
import Image from "next/image";
import NextLink from "next/link";

interface ProductCardProps {
  item: MenuItem;
  categoryId: string;
  imageSrc: string;
}

const ProductCard = ({ item, categoryId, imageSrc }: ProductCardProps) => {
  return (
    <NextLink
      href={`/menu/${categoryId}/${item.slug}`}
      className="group flex flex-col gap-3"
    >
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ borderRadius: "var(--radius-sm)" }}
      >
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, 45vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {"isSignatureProduct" in item && item.isSignatureProduct && (
          <WaxSealBadge className="absolute top-3 left-3" />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="m-0 font-display text-title/normal font-semibold tracking-normal text-neutral-950">
          {item.name}
        </h3>
        <span className="m-0 font-mono text-(length:--fs-2xs) leading-normal font-normal tracking-widest text-accent-700 uppercase">
          {formatPriceRange(item)}
        </span>
      </div>
    </NextLink>
  );
};

ProductCard.displayName = "ProductCard";

export default ProductCard;
