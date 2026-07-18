interface WaxSealBadgeProps {
  label?: string;
  className?: string;
}

const WaxSealBadge = ({
  label = "Signature",
  className,
}: WaxSealBadgeProps) => {
  return (
    <span
      className={`flex size-16 -rotate-6 items-center justify-center text-center ${className ?? ""}`}
      style={{
        borderRadius: "var(--radius-pill)",
        background: "var(--color-accent-700)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <span className="m-0 font-cursive text-(length:--fs-s) leading-none font-normal tracking-normal text-neutral-50">
        {label}
      </span>
    </span>
  );
};

WaxSealBadge.displayName = "WaxSealBadge";

export default WaxSealBadge;
