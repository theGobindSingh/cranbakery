"use client";

import { useState } from "react";

interface ColorSwatchProps {
  family: string;
  stop: number;
}

const ColorSwatch = ({ family, stop }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);
  const varName = `--color-${family}-${stop}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`var(${varName})`);
      setCopied(true);
      setTimeout(() => {
        return setCopied(false);
      }, 1000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        return void handleCopy();
      }}
      className="group flex flex-1 flex-col items-stretch gap-2 text-left"
      aria-label={`Copy ${varName}`}
    >
      <span
        className="h-16 w-full border border-black/5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md"
        style={{
          background: `var(${varName})`,
          borderRadius: "var(--radius-sm)",
        }}
      />
      <span className="flex items-center justify-between font-mono text-[0.65rem] text-grey-700">
        <span>{stop}</span>
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? "copied" : "copy"}
        </span>
      </span>
    </button>
  );
};

export default ColorSwatch;
