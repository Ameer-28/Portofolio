"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import { Menu, X, FileText } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("about");

  React.useEffect(() => {
    const ids = ["about", "skills", "projects", "experience", "contact"];
    const handleScroll = () => {
      const pos = window.scrollY + 220;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) {
          setActiveSection(ids[i]);
          return;
        }
      }
      setActiveSection("about");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-3.5 sm:top-5 z-50 w-full px-3 sm:px-6 pointer-events-none">
      <div className="mx-auto w-full md:w-fit max-w-sm md:max-w-4xl">
        {/* Floating Capsule Navbar */}
        <div className="pointer-events-auto rounded-full border border-white/15 bg-black/85 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.8)] transition-all flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-1.5 sm:py-2 overflow-hidden">

          {/* Brand / Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-tight text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2 py-1"
            onClick={closeMenu}
          >
            amralln_
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = item.href === `#${activeSection}`;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-4 w-px bg-white/15 hidden md:block" aria-hidden="true" />

          {/* Desktop CV button */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              href={profileData.cv.url}
              download
              isExternal
              className="font-mono text-xs rounded-full px-4 h-8 bg-white text-black hover:bg-neutral-200 transition-all font-semibold shadow-xs"
            >
              <FileText className="h-3.5 w-3.5 mr-1" />
              Download CV
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-8 w-8 rounded-full text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            className="pointer-events-auto md:hidden mt-2 p-4 rounded-2xl border border-white/15 bg-black/95 backdrop-blur-xl shadow-2xl space-y-4 animate-in fade-in-0 zoom-in-95 duration-150"
            role="region"
            aria-label="Mobile Navigation"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-white/10 rounded-xl transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-3 border-t border-white/10">
              <Button
                variant="primary"
                size="md"
                href={profileData.cv.url}
                download
                isExternal
                onClick={closeMenu}
                className="w-full justify-center font-mono text-xs rounded-full bg-white text-black hover:bg-neutral-200 h-9 font-semibold"
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
