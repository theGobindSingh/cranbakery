"use client";

import { getItemImage } from "@app/menu/lib/images";
import { getMenuItems } from "@app/menu/lib/menu-data";
import ProductCard from "@app/menu/product-card";
import { Button } from "@components/button";
import FullWidthWrapper from "@components/full-width-wrapper";
import { useMemo, useState } from "react";

interface FilterableItemGridProps {
  category: string;
}

interface Filters {
  signatureOnly: boolean;
  allergenFree: boolean;
}

const FilterableItemGrid = ({ category }: FilterableItemGridProps) => {
  const items = useMemo(() => {
    return getMenuItems(category);
  }, [category]);
  const [filters, setFilters] = useState<Filters>({
    signatureOnly: false,
    allergenFree: false,
  });

  const filteredItems = items
    .map((item, index) => {
      return { item, index };
    })
    .filter(({ item }) => {
      const isSignature =
        "isSignatureProduct" in item && item.isSignatureProduct;
      const allergens = "allergens" in item ? item.allergens : undefined;
      if (filters.signatureOnly && !isSignature) return false;
      if (filters.allergenFree && (allergens?.length ?? 0) > 0) return false;
      return true;
    });

  const toggle = (key: keyof Filters) => {
    setFilters((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  const clearFilters = () => {
    setFilters({ signatureOnly: false, allergenFree: false });
  };

  return (
    <FullWidthWrapper wrapperClassName="py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant={filters.signatureOnly ? "filled" : "outlined"}
            size="sm"
            aria-pressed={filters.signatureOnly}
            onClick={() => {
              return toggle("signatureOnly");
            }}
          >
            Signature only
          </Button>
          <Button
            type="button"
            variant={filters.allergenFree ? "filled" : "outlined"}
            size="sm"
            aria-pressed={filters.allergenFree}
            onClick={() => {
              return toggle("allergenFree");
            }}
          >
            Allergen-free
          </Button>
        </div>

        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-start gap-4 py-12">
            <p className="m-0 text-(length:--fs-s) text-neutral-700">
              No items match these filters.
            </p>
            <Button
              type="button"
              variant="outlined"
              size="sm"
              onClick={clearFilters}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {filteredItems.map(({ item, index }) => {
              return (
                <ProductCard
                  key={item.slug}
                  item={item}
                  categoryId={category}
                  imageSrc={getItemImage(category, index)}
                />
              );
            })}
          </div>
        )}
      </div>
    </FullWidthWrapper>
  );
};

FilterableItemGrid.displayName = "FilterableItemGrid";

export default FilterableItemGrid;
