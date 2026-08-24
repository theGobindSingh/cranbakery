import { unsplash } from "@utils/stock-photo";

const imagePools: Record<string, string[]> = {
  cakes: [
    unsplash("1517427294546-5aa121f68e8a"),
    unsplash("1702925614886-50ad13c88d3f"),
    unsplash("1780337092355-fdf7b9b7b2cc"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  "cake-tubs-and-tins": [
    unsplash("1745356979343-22178212faef"),
    unsplash("1673540324062-cb03978d0054"),
    unsplash("1645562270042-f7208b0a1321"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  cookies: [
    unsplash("1497051788611-2c64812349fa"),
    unsplash("1672351883507-212c1c70f9e9"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  brownies: [
    unsplash("1636743715220-d8f8dd900b87"),
    unsplash("1461009312844-e80697a81cc7"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  "tea-cakes": [
    unsplash("1505804750389-62ac45da38b7"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  muffins: [
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  cupcakes: [
    unsplash("1599785209796-786432b228bc"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  donuts: [
    unsplash("1551106652-a5bcf4b29ab6"),
    unsplash("1685779923216-5b386a173447"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
};

export const getItemImage = (categoryId: string, itemIndex: number): string => {
  const pool = (imagePools[categoryId] ?? imagePools.cakes)!;
  return pool[itemIndex % pool.length]!;
};
