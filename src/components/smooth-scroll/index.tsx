"use client";

import { LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";

const SmoothScroll = () => {
  const lenisRef = useRef<LenisRef>(null);

  return <ReactLenis root ref={lenisRef} />;
};

export default SmoothScroll;
