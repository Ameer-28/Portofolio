"use client";

import React from "react";
import { SlideTabs } from "@/components/ui/slide-tabs";

export default function SlideTabsDemo() {
  return (
    <div className="w-full grid min-h-[300px] place-content-center bg-background p-8 rounded-2xl border border-border">
      <SlideTabs />
    </div>
  );
}
