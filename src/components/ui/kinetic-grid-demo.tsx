"use client";

import React from "react";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function KineticGridDemo() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border/80 relative min-h-[420px]">
      <KineticGrid className="min-h-[420px]">
        <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-white/80 shadow-xs">
            Interactive Canvas
          </span>
          <h2 className="max-w-xl text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Move your cursor. Click anywhere.
          </h2>
          <p className="mt-3 max-w-md text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            A kinetic grid that dynamically warps toward the pointer and radiates shockwave ripples on every click.
          </p>
        </div>
      </KineticGrid>
    </div>
  );
}
