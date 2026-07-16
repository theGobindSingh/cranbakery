"use client";

import { images } from "@app/_home/constants";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

export const HomeHeroImg = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useLenis((lenis) => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = `translateY(${lenis.animatedScroll * 0.5}px)`;
  }, []);
  return (
    <>
      <Image
        ref={imgRef}
        src={images.heroBakeryWindow}
        alt="A patisserie window lined with cakes and pastries"
        width={2400}
        height={1600}
        priority
        sizes="100vw"
        quality={100}
        className="absolute top-0 left-0 h-[110%] w-full object-cover transition-[none] will-change-transform select-none"
      />
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(90deg, var(--color-neutral-300), hsla(var(--color-neutral-300-base), 0.75), transparent)",
        }}
      />
    </>
  );
};
