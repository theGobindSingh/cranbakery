import { WhatsAppIcon } from "@icons";
import { ShoppingBag } from "lucide-react";
import { WHATSAPP_HREF } from "./constants";
import { ICON_BUTTON_CLASS, ICON_BUTTON_STYLE } from "./styles";

const UtilityIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={ICON_BUTTON_STYLE}
        className={`${ICON_BUTTON_CLASS} hidden lg:flex`}
      >
        <WhatsAppIcon width="1.05rem" height="1.05rem" />
      </a>
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label="Cart — coming soon"
        title="Cart — coming soon"
        style={ICON_BUTTON_STYLE}
        className={ICON_BUTTON_CLASS}
      >
        <ShoppingBag size="1.05rem" aria-hidden="true" />
      </button>
    </div>
  );
};

export default UtilityIcons;
