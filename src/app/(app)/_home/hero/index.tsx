"use client";

import { images } from "@/app/(app)/_home/constants";
import FullWidthWrapper from "@components/full-width-wrapper";
import { H1, P, Span } from "@components/html";
import Link from "@components/link";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

const PARALLAX_SPEED = 0.5;

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useLenis(() => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = `translateY(${window.scrollY * PARALLAX_SPEED}px)`;
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
            className="absolute top-0 left-0 h-[110%] w-full object-cover will-change-transform select-none"
          />
          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in srgb, var(--color-neutral-950) 88%, transparent) 0%, color-mix(in srgb, var(--color-neutral-950) 88%, transparent) 38%, color-mix(in srgb, var(--color-neutral-950) 20%, transparent) 62%, transparent 85%)",
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
          $colorWeight="100"
          style={{
            textShadow:
              "0 2px 12px color-mix(in srgb, var(--color-neutral-950) 60%, transparent)",
          }}
        >
          Life is too short to skip dessert.
        </Span>
        <H1
          className="font-display"
          style={{
            color: "var(--color-text-inverse)",
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            letterSpacing: "-0.02em",
            textShadow:
              "0 2px 24px color-mix(in srgb, var(--color-neutral-950) 35%, transparent)",
          }}
          $margin="0"
        >
          We bake{" "}
          <Span
            $color="accent"
            $colorWeight="200"
            style={{ fontSize: "inherit", fontWeight: "inherit" }}
          >
            happiness
          </Span>
          .
        </H1>
        <P style={{ color: "var(--color-text-inverse)" }} $size="s">
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
            className="text-neutral-50"
            color="neutral"
            colorWeight={50}
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
