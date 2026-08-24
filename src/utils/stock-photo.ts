type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> =
  Exclude<Enumerate<T>, Enumerate<F>> | T;

interface UnsplashOptions {
  isPremium?: boolean;
  quality?: Range<0, 100>;
}

export const unsplash = (photoId: string, options: UnsplashOptions = {}) => {
  return `https://${options?.isPremium ? "plus" : "images"}.unsplash.com/${options?.isPremium ? "premium_photo" : "photo"}-${photoId}?auto=format&q=${options?.quality ?? 80}`;
};
