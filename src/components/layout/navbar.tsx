"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profileData } from "@/data/profile";
import { Menu, X, FileText } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close mobile menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-3.5 sm:top-5 z-50 w-full px-3 sm:px-6 pointer-events-none">
      <div className="mx-auto w-full md:w-fit max-w-sm md:max-w-4xl">
        {/* Floating Capsule Navbar */}
        <div className="pointer-events-auto rounded-full border border-border/80 bg-background/85 dark:bg-card/85 backdrop-blur-md shadow-xs dark:shadow-md transition-all flex items-center justify-between gap-3 sm:gap-5 px-3.5 sm:px-4 py-1.5 sm:py-2">
          {/* Brand */}
          <Link
            href="/"
            className="font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2.5 py-1"
            onClick={closeMenu}
          >
            {profileData.brandName}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5"
          >
            <ul className="flex items-center gap-0.5 text-xs font-medium text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-3 py-1.5 rounded-full transition-all hover:text-foreground hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div
            className="h-4 w-px bg-border/80 hidden md:block"
            aria-hidden="true"
          />

          {/* Desktop Actions: Theme Toggle + Download CV */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              href={profileData.cv.url}
              download
              isExternal
              className="font-mono text-xs rounded-full px-3.5 h-8 border-border hover:bg-muted"
            >
              <FileText className="h-3.5 w-3.5 mr-1" />
              Download CV
            </Button>
          </div>

          {/* Mobile Header Controls (Theme Toggle + Menu Button) */}
          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-8 w-8 rounded-full text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Dropdown Panel */}
        {isOpen && (
          <div
            id="mobile-navigation"
            role="region"
            aria-label="Mobile Navigation Menu"
            className="pointer-events-auto md:hidden mt-2 p-4 rounded-2xl border border-border/80 bg-background/95 dark:bg-card/95 backdrop-blur-lg shadow-xl space-y-4 animate-in fade-in-0 zoom-in-95 duration-150"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-3 border-t border-border/60">
              <Button
                variant="outline"
                size="md"
                href={profileData.cv.url}
                download
                isExternal
                onClick={closeMenu}
                className="w-full justify-center font-mono text-xs rounded-full border-border hover:bg-muted"
              >
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
