"use client";

import { ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;          // ms
  duration?: number;       // ms
  translateY?: number;     // px, default 24
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  translateY = 24,
  threshold = 0.12,
  once = true,
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold, once });

  const style: CSSProperties = {
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${translateY}px)`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default Reveal;
