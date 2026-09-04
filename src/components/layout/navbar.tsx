"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import GooeyNav from "@/components/ui/gooey-nav";
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
  const [activeSection, setActiveSection] = React.useState<string>("about");

  // Scroll spy to keep active tab aligned with page section
  React.useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.href === `#${activeSection}`)
  );

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
        {/* Floating Capsule Navbar (Bayu Raja Syah Avant-Garde Style) */}
        <div className="pointer-events-auto rounded-full border border-neutral-200/80 dark:border-white/15 bg-white/90 dark:bg-black/85 backdrop-blur-md shadow-lg dark:shadow-[0_12px_32px_rgba(0,0,0,0.8)] transition-all flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-1.5 sm:py-2">
          {/* Brand */}
          <Link
            href="/"
            className="font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2 py-1"
            onClick={closeMenu}
          >
            {profileData.brandName}
          </Link>

          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:flex items-center">
            <GooeyNav
              items={navItems}
              className="gooey-nav--navbar"
              activeIndex={activeIndex}
              onActiveChange={(idx) => {
                const target = navItems[idx]?.href.replace("#", "") || "about";
                setActiveSection(target);
              }}
              animationTime={450}
              particleCount={12}
              particleDistances={[50, 10]}
              particleR={80}
              colors={[1, 2, 3, 1, 4]}
            />
          </div>

          {/* Divider */}
          <div
            className="h-4 w-px bg-neutral-200 dark:bg-white/15 hidden md:block"
            aria-hidden="true"
          />

          {/* Desktop Actions: Theme Toggle + High-contrast Pill Download CV */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              href={profileData.cv.url}
              download
              isExternal
              className="font-mono text-xs rounded-full px-4 h-8 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all font-semibold shadow-xs"
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
            className="pointer-events-auto md:hidden mt-2 p-4 rounded-2xl border border-neutral-200/80 dark:border-white/15 bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl space-y-4 animate-in fade-in-0 zoom-in-95 duration-150"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-3 border-t border-neutral-200 dark:border-white/10">
              <Button
                variant="primary"
                size="md"
                href={profileData.cv.url}
                download
                isExternal
                onClick={closeMenu}
                className="w-full justify-center font-mono text-xs rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 h-9 font-semibold"
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
