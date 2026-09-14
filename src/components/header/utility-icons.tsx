import { WHATSAPP_HREF } from "@constants";
import { WhatsAppIcon } from "@icons";
import CartIcon from "./cart-icon";
import { ICON_BUTTON_CLASS, ICON_BUTTON_STYLE } from "./styles";

const UtilityIcons = () => {
  return (
    <div className="flex items-center gap-2 lg:col-start-3 lg:justify-self-end">
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
      <CartIcon />
    </div>
  );
};

export default UtilityIcons;
