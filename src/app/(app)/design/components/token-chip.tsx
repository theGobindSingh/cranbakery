"use client";

import { CheckmarkSmallIcon, CopyIcon } from "@/icons";
import { useState } from "react";

interface TokenChipProps {
  label: string;
  className?: string;
}

const TokenChip = ({ label, className }: TokenChipProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(label);
      setCopied(true);
      setTimeout(() => {
        return setCopied(false);
      }, 1200);
    } catch {
      // clipboard unavailable — no-op, chip still displays the token name
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        return void handleCopy();
      }}
      className={`group inline-flex items-center gap-1 font-mono text-[0.65rem] text-grey-700 transition-colors hover:text-primary-600 ${className ?? ""}`}
      aria-label={`Copy ${label}`}
    >
      <span>{label}</span>
      {copied ? (
        <CheckmarkSmallIcon className="size-3 shrink-0 text-success-600" />
      ) : (
        <CopyIcon className="size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </button>
  );
};

export default TokenChip;
