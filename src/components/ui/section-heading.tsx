import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2.5 mb-8 sm:mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <div>
          <span className="inline-flex items-center rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground font-mono">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
