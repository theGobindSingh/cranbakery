const unsplash = (photoId: string) => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&q=80`;
};

const imagePools: Record<string, string[]> = {
  cakes: [
    "/assets/images/cakes/cake28.jpg",
    "/assets/images/cakes/cake2.jpg",
    "/assets/images/cakes/cake15.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  "cake-tubs-and-tins": [
    "/assets/images/cake-tubs/cake-tub1.jpg",
    "/assets/images/cake-tubs/cake-tub3.jpg",
    "/assets/images/cake-tubs/cake-tub7.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  cookies: [
    "/assets/images/cookies/cookie1.jpg",
    "/assets/images/cookies/cookie3.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  brownies: [
    "/assets/images/brownies/brownie1.jpg",
    "/assets/images/brownies/brownie2.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  "tea-cakes": [
    "/assets/images/tea-cakes/tea-cake1.jpg",
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
    "/assets/images/cupcakes/cupcake1.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
  donuts: [
    "/assets/images/donuts/donut1.jpg",
    "/assets/images/donuts/donut2.jpg",
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
    unsplash("1625631980683-825234bfb7d5"),
  ],
};

export const getItemImage = (categoryId: string, itemIndex: number): string => {
  const pool = (imagePools[categoryId] ?? imagePools.cakes)!;
  return pool[itemIndex % pool.length]!;
};
