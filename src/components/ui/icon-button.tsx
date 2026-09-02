import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type IconButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  href?: string;
  isExternal?: boolean;
}

const variantStyles: Record<IconButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm active:translate-y-[1px]",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:translate-y-[1px]",
  outline:
    "border border-border bg-background text-foreground hover:bg-muted active:translate-y-[1px]",
  ghost:
    "text-foreground hover:bg-muted active:translate-y-[1px]",
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 rounded-md p-1.5",
  md: "h-10 w-10 rounded-md p-2",
  lg: "h-12 w-12 rounded-lg p-2.5",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "ghost",
      size = "md",
      "aria-label": ariaLabel,
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal || href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            title={ariaLabel}
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          aria-label={ariaLabel}
          title={ariaLabel}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
