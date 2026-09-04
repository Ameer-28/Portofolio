"use client";

import React from "react";
import GooeyNav from "@/components/ui/gooey-nav";

export default function GooeyNavDemo() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[350px] bg-black p-8 rounded-2xl border border-border/60 overflow-hidden relative">
      <div className="text-center mb-8">
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
          Interactive Bubble Navigation
        </p>
        <p className="text-xs text-neutral-500">
          Click tabs to trigger dynamic liquid bubble particle transition
        </p>
      </div>

      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}
