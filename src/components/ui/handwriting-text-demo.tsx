"use client";

import React from "react";
import { HandwritingText } from "@/components/ui/handwriting-text";

export default function HandwritingTextDemo() {
  return (
    <div className="flex min-h-[360px] w-full flex-col items-center justify-center gap-8 px-6 py-10 bg-card rounded-2xl border border-border">
      <h2 className="max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        Building robust backend systems that are
        <br />
        <HandwritingText
          words={["scalable.", "modular.", "type-safe.", "production-ready."]}
          className="text-primary font-serif"
          height="1.2em"
        />
      </h2>

      <p className="text-xs sm:text-sm text-muted-foreground font-mono">
        Each word is dynamically traced letter by letter, then inked in with SVG paths.
      </p>
    </div>
  );
}
