import Image from "next/image";
import NextLink from "next/link";

const Wordmark = () => {
  return (
    <NextLink
      href="/"
      aria-label="Cranbakery — home"
      className="relative h-10 w-40 shrink-0 overflow-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
      style={{ borderRadius: "var(--radius-sm)" }}
    >
      <Image
        src="/assets/images/company/logo.png"
        alt=""
        fill
        priority
        sizes="160px"
        className="object-contain object-left"
      />
    </NextLink>
  );
};

export default Wordmark;
