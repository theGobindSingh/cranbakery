import TokenChip from "@/app/(app)/design/components/token-chip";

const ROLES: {
  token: string;
  utility: string;
  family: string;
  usage: string;
  sample: string;
  size: string;
  italic?: boolean;
}[] = [
  {
    token: "--ff-display",
    utility: "font-display",
    family: "Quicksand",
    usage: "Headings, brand moments",
    sample: "Life is too short",
    size: "var(--fs-1xl)",
  },
  {
    token: "--ff-sans",
    utility: "font-sans",
    family: "Poppins",
    usage: "Body copy, UI, default",
    sample: "The quick brown fox jumps",
    size: "var(--fs-s)",
  },
  {
    token: "--ff-serif",
    utility: "font-serif",
    family: "Fraunces (italic)",
    usage: "Taglines, pull-quotes",
    sample: "to skip dessert!",
    size: "var(--fs-s)",
    italic: true,
  },
  {
    token: "--ff-cursive",
    utility: "font-cursive",
    family: "Caveat",
    usage: "Sparing personal touch",
    sample: "baked with love",
    size: "var(--fs-m)",
  },
  {
    token: "--ff-mono",
    utility: "font-mono",
    family: "DM Mono",
    usage: "SKUs, weights, meta text",
    sample: "600G / BOX OF 8",
    size: "var(--fs-2xs)",
  },
];

const FontRoles = () => {
  return (
    <div className="flex flex-col divide-y divide-grey-300 border-y border-grey-300">
      {ROLES.map((role) => {
        return (
          <div
            key={role.token}
            className="grid grid-cols-1 items-center gap-3 py-6 sm:grid-cols-[14rem_1fr]"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[0.7rem] font-medium text-grey-900">
                {role.family}
              </span>
              <span className="text-[0.7rem] text-grey-600">{role.usage}</span>
              <div className="flex flex-wrap gap-2 pt-1">
                <TokenChip label={role.token} />
                <TokenChip label={role.utility} />
              </div>
            </div>
            <p
              className={role.utility}
              style={{
                fontSize: role.size,
                fontStyle: role.italic ? "italic" : "normal",
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              {role.sample}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FontRoles;
