"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Lanyard3D with SSR disabled (Rapier WASM + WebGL requires browser environment)
const Lanyard3D = dynamic(() => import("./lanyard-3d"), {
  ssr: false,
  loading: () => <LanyardSkeleton />,
});

function LanyardSkeleton() {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center lg:items-end justify-center animate-pulse select-none lg:pr-32"
      aria-hidden="true"
    >
      {/* Strap skeleton */}
      <div className="w-10 h-44 bg-neutral-900 border-x border-white/10 rounded-xs flex flex-col justify-around items-center py-4">
        <div className="w-6 h-2 bg-neutral-800 rounded-xs" />
        <div className="w-6 h-2 bg-neutral-800 rounded-xs" />
        <div className="w-6 h-2 bg-neutral-800 rounded-xs" />
      </div>

      {/* Metallic clip ring */}
      <div className="w-6 h-5 rounded-md bg-neutral-700 -mt-1 shadow-sm" />

      {/* Card skeleton */}
      <div className="w-[240px] sm:w-[270px] h-[360px] sm:h-[400px] rounded-[22px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center shadow-xl -mt-2">
        <div className="w-10 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 mb-4" />
        <div className="w-full flex-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 mb-4" />
        <div className="w-32 h-4 rounded bg-neutral-200 dark:bg-neutral-800 mb-2" />
        <div className="w-20 h-3 rounded bg-neutral-100 dark:bg-neutral-800/60" />
      </div>
    </div>
  );
}

interface InteractiveLanyardProps {
  className?: string;
}

export function InteractiveLanyard({ className = "" }: InteractiveLanyardProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Lanyard3D />
      <div className="absolute bottom-4 right-4 sm:right-8 z-20 pointer-events-none hidden sm:block">
        <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10 select-none">
          ✦ Tarik kartu untuk mengayun &middot; Drag to interact
        </p>
      </div>
    </div>
  );
}

export default InteractiveLanyard;
