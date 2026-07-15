const TAGS = ["Signature", "Popular", "New"];

const MerchBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => {
          return (
            <span
              key={tag}
              className="bg-accent-600 px-3 py-1 text-[0.7rem] font-medium text-white"
              style={{ borderRadius: "var(--radius-pill)" }}
            >
              {tag}
            </span>
          );
        })}
      </div>
      <p className="text-[0.7rem] text-grey-600">
        Product/category tags reuse the same accent as CTAs, links, and focus
        rings — one color, every interactive/highlight role.
      </p>
    </div>
  );
};

export default MerchBadges;
