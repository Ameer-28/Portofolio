"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { gsap } from "gsap";
import "./pill-nav.css";

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  brand?: string;
  brandHref?: string;
  logoSrc?: string;
  items: PillNavItem[];
  activeHref?: string;
  cvUrl?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
  className?: string;
}

export function PillNav({
  brand,
  brandHref = "/",
  logoSrc,
  items,
  activeHref,
  cvUrl,
  ease = "power3.out",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  initialLoadAnimation = true,
  className = "",
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
  } as CSSProperties;

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        if (!w || !h) return;

        const R = (w * w / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hover = pill.querySelector<HTMLElement>(".pill-label-hover");
        if (label) gsap.set(label, { y: 0 });
        if (hover) gsap.set(hover, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (hover) {
          gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);
    document.fonts?.ready?.then(layout).catch(() => {});

    if (initialLoadAnimation) {
      const brandEl = brandRef.current;
      const navItemsEl = navItemsRef.current;
      if (brandEl) {
        gsap.set(brandEl, { scale: 0 });
        gsap.to(brandEl, { scale: 1, duration: 0.6, ease });
      }
      if (navItemsEl) {
        gsap.set(navItemsEl, { width: 0, overflow: "hidden" });
        gsap.to(navItemsEl, { width: "auto", duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const animateMobileMenu = (open: boolean) => {
    const hamburger = hamburgerRef.current;
    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>(".hamburger-line");
      if (open) {
        gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.25, ease });
        gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.25, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.25, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.25, ease });
      }
    }
    const menu = mobileMenuRef.current;
    if (menu) {
      if (open) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, ease });
      } else {
        gsap.to(menu, { opacity: 0, y: 8, duration: 0.18, ease, onComplete: () => gsap.set(menu, { visibility: "hidden" }) });
      }
    }
  };

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    animateMobileMenu(next);
  };

  const closeMobile = () => {
    if (!isMobileOpen) return;
    setIsMobileOpen(false);
    animateMobileMenu(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMobile(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className={`pill-nav-container ${className}`} style={cssVars}>
      <nav className="pill-nav" aria-label="Primary navigation">
        {brand && (
          <a ref={brandRef} href={brandHref} className="pill-nav-brand" aria-label={brand}>
            {logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoSrc} alt={brand} className="pill-nav-logo-img" />
            ) : (
              brand
            )}
          </a>
        )}

        {/* Desktop pills + CV */}
        <div className="pill-nav-desktop">
          <div className="pill-nav-items" ref={navItemsRef}>
            <ul className="pill-list" role="menubar">
              {items.map((item, i) => (
                <li key={item.href} role="none">
                  <a
                    role="menuitem"
                    href={item.href}
                    aria-label={item.ariaLabel ?? item.label}
                    className={`pill${activeHref === item.href ? " is-active" : ""}`}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => { circleRefs.current[i] = el; }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {cvUrl && (
            <a href={cvUrl} download className="pill-nav-cv" aria-label="Download CV">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              CV
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          type="button"
          className="pill-nav-mobile-btn"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={toggleMobile}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className="pill-nav-mobile-menu"
        style={{ visibility: "hidden" }}
        role="region"
        aria-label="Mobile navigation"
      >
        <ul className="mobile-menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                onClick={closeMobile}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {cvUrl && (
          <a href={cvUrl} download className="pill-nav-mobile-cv" onClick={closeMobile}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        )}
      </div>
    </div>
  );
}

export default PillNav;
