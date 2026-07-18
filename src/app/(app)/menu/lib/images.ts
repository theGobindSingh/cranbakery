const unsplash = (photoId: string) => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&q=80`;
};

const imagePools: Record<string, string[]> = {
  cakes: [
    "/assets/images/cakes/cake28.jpg",
    "/assets/images/cakes/cake2.jpg",
    "/assets/images/cakes/cake15.jpg",
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
  ],
  "cake-tubs-and-tins": [
    "/assets/images/cake-tubs/cake-tub1.jpg",
    "/assets/images/cake-tubs/cake-tub3.jpg",
    "/assets/images/cake-tubs/cake-tub7.jpg",
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
  ],
  cookies: [
    "/assets/images/cookies/cookie1.jpg",
    "/assets/images/cookies/cookie3.jpg",
    unsplash("1584880645407-8b84e32d3f31"),
    unsplash("1584880645407-8b84e32d3f31"),
    unsplash("1584880645407-8b84e32d3f31"),
  ],
  brownies: [
    "/assets/images/brownies/brownie1.jpg",
    "/assets/images/brownies/brownie2.jpg",
    unsplash("1607623814075-e51df1bdc82f"),
    unsplash("1607623814075-e51df1bdc82f"),
    unsplash("1607623814075-e51df1bdc82f"),
  ],
  "tea-cakes": [
    "/assets/images/tea-cakes/tea-cake1.jpg",
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
  ],
  muffins: [
    unsplash("1722251172903-cc8774501df7"),
    unsplash("1607623814075-e51df1bdc82f"),
    unsplash("1607623814075-e51df1bdc82f"),
    unsplash("1607623814075-e51df1bdc82f"),
  ],
  cupcakes: [
    "/assets/images/cupcakes/cupcake1.jpg",
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
    unsplash("1578985545062-20fda8d5ad7d"),
  ],
  donuts: [
    "/assets/images/donuts/donut1.jpg",
    "/assets/images/donuts/donut2.jpg",
    unsplash("1585518459031-8ac82e584dcb"),
    unsplash("1585518459031-8ac82e584dcb"),
    unsplash("1585518459031-8ac82e584dcb"),
  ],
};

export const getItemImage = (categoryId: string, itemIndex: number): string => {
  const pool = (imagePools[categoryId] ?? imagePools.cakes)!;
  return pool[itemIndex % pool.length]!;
};
