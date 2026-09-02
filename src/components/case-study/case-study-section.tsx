import * as React from "react";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
}

export function CaseStudySection({
  title,
  subtitle,
  className,
  children,
  ...props
}: CaseStudySectionProps) {
  return (
    <section className={cn("space-y-4 py-8 border-b border-border/40 last:border-0", className)} {...props}>
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="pt-2 text-sm sm:text-base text-foreground/90 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
