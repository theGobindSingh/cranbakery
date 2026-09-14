"use client";

import { X } from "lucide-react";
import type { PropsWithChildren, Ref } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

export interface DialogProps extends PropsWithChildren {
  title: string;
  onClose?: () => void;
  className?: string;
}

const DialogWithoutRef = (
  { title, onClose, className, children }: DialogProps,
  ref: Ref<HTMLDialogElement>,
) => {
  const localRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return localRef.current!;
  });

  // Clicking the ::backdrop reports its target as the dialog element itself
  // (content clicks target an inner element instead) — the standard way to
  // detect an outside click without a separate overlay element.
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === localRef.current) {
      localRef.current?.close();
    }
  };

  return (
    <dialog
      ref={localRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className={`m-auto max-w-104 border-0 p-0 backdrop:bg-neutral-950/60 backdrop:backdrop-blur-sm ${className ?? ""}`}
      style={{
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-lg, 0 20px 40px -10px rgb(0 0 0 / 0.25))",
      }}
    >
      <div className="relative flex flex-col gap-4 bg-neutral-50 p-6">
        <button
          type="button"
          aria-label="Close"
          onClick={() => {
            localRef.current?.close();
          }}
          className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
          <X size="1.05rem" aria-hidden="true" />
        </button>

        <h2 className="m-0 pr-8 font-gothic text-(length:--fs-l) font-semibold tracking-normal text-neutral-950">
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  );
};

// eslint-disable-next-line @eslint-react/no-forward-ref -- ignore
const Dialog = forwardRef<HTMLDialogElement, DialogProps>(DialogWithoutRef);

Dialog.displayName = "Dialog";

export default Dialog;
