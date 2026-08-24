import Link from "@components/link";
import { INSTAGRAM_HREF } from "@constants";

const LinkDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Link href="/" color="primary" colorWeight={600}>
        Internal link →
      </Link>
      <Link href={INSTAGRAM_HREF} color="accent" colorWeight={600}>
        External link ↗
      </Link>
      <Link href="#" variant="outlined" color="secondary" colorWeight={600}>
        Outlined link
      </Link>
    </div>
  );
};

export default LinkDemo;
