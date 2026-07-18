import { directContact } from "@app/contact/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { INSTAGRAM_HREF, WHATSAPP_HREF } from "@components/header/constants";
import Link from "@components/link";
import SectionHeading from "@components/section-heading";

const DirectContactSection = () => {
  return (
    <FullWidthWrapper wrapperClassName="py-14 not-md:py-10">
      <SectionHeading
        className="mb-8"
        title={directContact.title}
        description={directContact.description}
      />
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={WHATSAPP_HREF}
          variant="filled"
          color="accent"
          colorWeight={600}
          hoverBgColorWeight={800}
          size="lg"
        >
          Chat on WhatsApp
        </Link>
        <Link
          href={INSTAGRAM_HREF}
          variant="outlined"
          color="accent"
          colorWeight={700}
          size="lg"
        >
          @cranbakery
        </Link>
      </div>
      <p className="m-0 mt-8 max-w-[55ch] text-(length:--fs-4xs) leading-normal font-normal tracking-normal text-neutral-700">
        {directContact.deliveryNote}
      </p>
    </FullWidthWrapper>
  );
};

DirectContactSection.displayName = "DirectContactSection";

export default DirectContactSection;
