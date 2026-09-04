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
      className="relative w-full h-[620px] sm:h-[700px] lg:h-[760px] flex flex-col items-center justify-center animate-pulse select-none"
      aria-hidden="true"
    >
      {/* Strap skeleton */}
      <div className="w-14 h-48 bg-neutral-900 border-x border-white/10 rounded-xs flex flex-col justify-around items-center py-4">
        <div className="w-8 h-2 bg-neutral-800 rounded-xs" />
        <div className="w-8 h-2 bg-neutral-800 rounded-xs" />
        <div className="w-8 h-2 bg-neutral-800 rounded-xs" />
      </div>

      {/* Metallic clip ring */}
      <div className="w-7 h-5 rounded-md bg-neutral-700 -mt-1 shadow-sm" />

      {/* Card skeleton */}
      <div className="w-[260px] sm:w-[290px] h-[380px] sm:h-[430px] rounded-[22px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center shadow-xl -mt-2">
        <div className="w-12 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 mb-4" />
        <div className="w-full flex-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 mb-4" />
        <div className="w-36 h-4 rounded bg-neutral-200 dark:bg-neutral-800 mb-2" />
        <div className="w-24 h-3 rounded bg-neutral-100 dark:bg-neutral-800/60" />
      </div>
    </div>
  );
}

interface InteractiveLanyardProps {
  className?: string;
}

export function InteractiveLanyard({ className = "" }: InteractiveLanyardProps) {
  return (
    <div className={`relative flex flex-col items-center w-full ${className}`}>
      <Lanyard3D />
      <p className="text-[11px] font-mono text-center text-neutral-400 dark:text-neutral-500 -mt-4 tracking-wider select-none">
        ✦ Tarik kartu untuk mengayun &middot; Drag to interact
      </p>
    </div>
  );
}

export default InteractiveLanyard;
