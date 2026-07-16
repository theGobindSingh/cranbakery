"use client";

import { images } from "@app/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { H1, P, Span } from "@components/html";
import Link from "@components/link";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useLenis((lenis) => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = `translateY(${lenis.animatedScroll * 0.5}px)`;
  }, []);

  return (
    <FullWidthWrapper
      element="section"
      wrapperClassName="isolate"
      wrapperProps={{
        style: { position: "relative", overflow: "hidden", height: "100svh" },
      }}
      beforeContainer={
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
      }
    >
      <div className="relative z-10 flex max-w-[38ch] flex-col gap-5 py-24">
        <Span
          className="font-cursive"
          $size="l"
          $color="accent"
          $colorWeight="950"
        >
          Life is too short to skip dessert.
        </Span>
        <H1
          className="font-display"
          style={{
            color: "var(--color-neutral-700)",
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            letterSpacing: "-0.02em",
          }}
          $color="white"
        >
          We bake{" "}
          <Span
            $color="accent"
            $colorWeight="700"
            style={{ fontSize: "inherit", fontWeight: "inherit" }}
          >
            happiness
          </Span>
          .
        </H1>
        <P $color="neutral" $colorWeight="700" $size="s">
          Callebaut Belgian chocolate, made to order, delivered across Mohali
          and Chandigarh.
        </P>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
          <Link
            href="/menu"
            variant="filled"
            color="accent"
            colorWeight={700}
            size="lg"
          >
            Browse the Menu
          </Link>
          <Link
            href="https://instagram.com/cranbakery"
            variant="text"
            className="text-neutral-700"
            color="neutral"
            colorWeight={700}
            hoverBgColorWeight={500}
          >
            @cranbakery
          </Link>
        </div>
      </div>
    </FullWidthWrapper>
  );
};

Hero.displayName = "Hero";

export default Hero;
