"use client";

import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ScrollRevealProps {
  children?: ReactNode;
  className?: string;
  element?: ElementType;
  threshold?: number;
  wrapperProps?: HTMLAttributes<HTMLElement>;
}

const ScrollReveal = ({
  children,
  className,
  element = "div",
  threshold = 0.15,
  wrapperProps,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);

    return () => {
      return observer.disconnect();
    };
  }, [threshold]);

  const Element = element;
  const { className: wrapperClassName, ...restWrapperProps } =
    wrapperProps ?? {};

  return (
    <Element
      ref={ref}
      className={[
        "transition-all ease-in-out duration-500",
        isRevealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
        wrapperClassName,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restWrapperProps}
    >
      {children}
    </Element>
  );
};

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
