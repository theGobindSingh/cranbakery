import TokenChip from "@/app/(app)/design/components/token-chip";

const ROLES: {
  token: string;
  label: string;
  preview: "fill" | "text" | "border";
}[] = [
  { token: "--color-bg", label: "Page background", preview: "fill" },
  { token: "--color-surface", label: "Muted panel", preview: "fill" },
  {
    token: "--color-surface-raised",
    label: "Card / elevated",
    preview: "fill",
  },
  { token: "--color-text", label: "Primary ink", preview: "text" },
  { token: "--color-text-muted", label: "Secondary text", preview: "text" },
  { token: "--color-text-subtle", label: "Captions", preview: "text" },
  { token: "--color-border", label: "Hairline rule", preview: "border" },
  { token: "--color-border-strong", label: "Solid border", preview: "border" },
  { token: "--color-focus", label: "Focus ring", preview: "border" },
];

const SemanticRoles = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {ROLES.map((role) => {
        return (
          <div
            key={role.token}
            className="flex flex-col gap-3 border border-grey-300 p-4"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <div
              className="flex h-14 items-center justify-center text-sm"
              style={{
                borderRadius: "var(--radius-sm)",
                background:
                  role.preview === "fill"
                    ? `var(${role.token})`
                    : "var(--color-grey-100)",
                color:
                  role.preview === "text"
                    ? `var(${role.token})`
                    : "var(--color-text)",
                border:
                  role.preview === "border"
                    ? `2px solid var(${role.token})`
                    : "1px solid transparent",
                fontWeight: role.preview === "text" ? 600 : 400,
              }}
            >
              {role.preview === "text" ? "Aa" : ""}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.7rem] text-grey-700">{role.label}</span>
              <TokenChip label={role.token} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SemanticRoles;
