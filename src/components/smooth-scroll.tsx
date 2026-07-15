"use client";

import { ReactLenis } from "lenis/react";
import { type PropsWithChildren, useEffect, useState } from "react";

const SmoothScroll = ({ children }: PropsWithChildren<unknown>) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (prefersReducedMotion !== false) {
    return children;
  }

  return (
    <ReactLenis root options={{ autoRaf: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
