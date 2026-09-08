"use client";

import { useRef, useEffect, useCallback, useState, ReactNode } from "react";
import { gsap } from "gsap";
import "./magic-bento.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BentoCardData {
  color?: string;
  label?: string;
  title: string;
  description?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  technologies?: string[];
  /** Extra content rendered below description */
  extra?: ReactNode;
}

export interface MagicBentoProps {
  cards: BentoCardData[];
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  textAutoHide?: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MOBILE_BREAKPOINT = 768;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const createParticleElement = (x: number, y: number, color: string) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position:absolute;width:4px;height:4px;border-radius:50%;
    background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.6);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;
  `;
  return el;
};

const updateCardGlow = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  intensity: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--glow-x", `${((mouseX - rect.left) / rect.width) * 100}%`);
  card.style.setProperty("--glow-y", `${((mouseY - rect.top) / rect.height) * 100}%`);
  card.style.setProperty("--glow-intensity", String(intensity));
  card.style.setProperty("--glow-radius", `${radius}px`);
};

// ─── ParticleCard ─────────────────────────────────────────────────────────────

interface ParticleCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableAnimations?: boolean;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

function ParticleCard({
  children,
  className = "",
  style,
  disableAnimations = false,
  particleCount = 12,
  glowColor = "132,0,255",
  enableTilt = false,
  clickEffect = false,
  enableMagnetism = false,
}: ParticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLElement[]>([]);
  const particlesInitialized = useRef(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const magnetismRef = useRef<any>(null);

  const initParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismRef.current?.kill();
    particlesRef.current.forEach((p) =>
      gsap.to(p, {
        scale: 0, opacity: 0, duration: 0.3, ease: "back.in(1.7)",
        onComplete: () => p.parentNode?.removeChild(p),
      })
    );
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initParticles();
    memoizedParticles.current.forEach((particle, idx) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: "none", repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, idx * 100);
      timeoutsRef.current.push(id);
    });
  }, [initParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const el = cardRef.current;

    const onEnter = () => {
      isHoveredRef.current = true;
      spawnParticles();
      if (enableTilt) gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: "power2.out", transformPerspective: 1000 });
    };
    const onLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
      if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: "power2.out" });
      if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    };
    const onMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2, cy = rect.height / 2;
      if (enableTilt) gsap.to(el, { rotateX: ((y - cy) / cy) * -10, rotateY: ((x - cx) / cx) * 10, duration: 0.1, ease: "power2.out", transformPerspective: 1000 });
      if (enableMagnetism) {
        magnetismRef.current = gsap.to(el, { x: (x - cx) * 0.05, y: (y - cy) * 0.05, duration: 0.3, ease: "power2.out" });
      }
    };
    const triggerRipple = (clientX: number, clientY: number) => {
      if (!clickEffect) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left, y = clientY - rect.top;
      const maxD = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
      const ripple = document.createElement("div");
      ripple.style.cssText = `position:absolute;width:${maxD*2}px;height:${maxD*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.4) 0%,rgba(${glowColor},0.2) 30%,transparent 70%);left:${x-maxD}px;top:${y-maxD}px;pointer-events:none;z-index:1000;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => ripple.remove() });
    };

    const onClick = (e: MouseEvent) => {
      triggerRipple(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      onEnter();
      if (e.touches && e.touches[0]) {
        triggerRipple(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      setTimeout(onLeave, 1200);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("click", onClick);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      isHoveredRef.current = false;
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("click", onClick);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      clearParticles();
    };
  }, [spawnParticles, clearParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} particle-container`} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
}

// ─── GlobalSpotlight ──────────────────────────────────────────────────────────

function GlobalSpotlight({
  gridRef,
  disableAnimations,
  spotlightRadius,
  glowColor,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations: boolean;
  spotlightRadius: number;
  glowColor: string;
}) {
  useEffect(() => {
    if (disableAnimations || !gridRef.current) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position:fixed;width:800px;height:800px;border-radius:50%;
      pointer-events:none;
      background:radial-gradient(circle,rgba(${glowColor},0.15) 0%,rgba(${glowColor},0.08) 15%,rgba(${glowColor},0.04) 25%,rgba(${glowColor},0.02) 40%,rgba(${glowColor},0.01) 65%,transparent 70%);
      z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;
    `;
    document.body.appendChild(spotlight);

    const proximity = spotlightRadius * 0.5;
    const fadeDistance = spotlightRadius * 0.75;

    const onPointerPos = (clientX: number, clientY: number) => {
      if (!gridRef.current) return;
      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const inside = rect && clientX >= rect.left - 50 && clientX <= rect.right + 50 && clientY >= rect.top - 50 && clientY <= rect.bottom + 50;
      const cards = gridRef.current.querySelectorAll<HTMLElement>(".magic-bento-card");

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: "power2.out" });
        cards.forEach((c) => c.style.setProperty("--glow-intensity", "0"));
        return;
      }

      let minDist = Infinity;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const dist = Math.max(0, Math.hypot(clientX - (r.left + r.width / 2), clientY - (r.top + r.height / 2)) - Math.max(r.width, r.height) / 2);
        minDist = Math.min(minDist, dist);
        const intensity = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance - dist) / (fadeDistance - proximity) : 0;
        updateCardGlow(card, clientX, clientY, intensity, spotlightRadius);
      });

      gsap.to(spotlight, { left: clientX, top: clientY, duration: 0.1, ease: "power2.out" });
      const targetOpacity = minDist <= proximity ? 0.8 : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: "power2.out" });
    };

    const onMove = (e: MouseEvent) => {
      onPointerPos(e.clientX, e.clientY);
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        onPointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onLeave = () => {
      gridRef.current?.querySelectorAll<HTMLElement>(".magic-bento-card").forEach((c) => c.style.setProperty("--glow-intensity", "0"));
      gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: "power2.out" });
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("touchstart", onTouch, { passive: true });
    document.addEventListener("touchmove", onTouch, { passive: true });
    document.addEventListener("touchend", onLeave, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("touchstart", onTouch);
      document.removeEventListener("touchmove", onTouch);
      document.removeEventListener("touchend", onLeave);
      spotlight.parentNode?.removeChild(spotlight);
    };
  }, [gridRef, disableAnimations, spotlightRadius, glowColor]);

  return null;
}

// ─── MagicBento ───────────────────────────────────────────────────────────────

export function MagicBento({
  cards,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 300,
  particleCount = 12,
  enableTilt = false,
  glowColor = "132,0,255",
  clickEffect = true,
  enableMagnetism = true,
  textAutoHide = true,
}: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const noAnim = disableAnimations;
  const effectiveTilt = enableTilt && !isMobile;
  const effectiveMagnetism = enableMagnetism && !isMobile;

  const cardClass = [
    "magic-bento-card",
    textAutoHide ? "magic-bento-card--text-autohide" : "",
    enableBorderGlow ? "magic-bento-card--border-glow" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={noAnim}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <div className="card-grid bento-section" ref={gridRef}>
        {cards.map((card, i) => {
          const cardStyle: React.CSSProperties = {
            backgroundColor: card.color ?? "#120F17",
            // @ts-expect-error custom CSS var
            "--glow-color": glowColor,
          };

          const inner = (
            <>
              {/* Header row */}
              <div className="magic-bento-card__header">
                {card.label && (
                  <span className="magic-bento-card__label">{card.label}</span>
                )}
                {card.liveUrl && (
                  <span className="magic-bento-card__live">
                    <span className="magic-bento-card__live-dot" />
                    Live
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="magic-bento-card__content">
                <h3 className="magic-bento-card__title">{card.title}</h3>
                {card.description && (
                  <p className="magic-bento-card__description">{card.description}</p>
                )}
                {card.technologies && card.technologies.length > 0 && (
                  <div className="magic-bento-card__tech">
                    {card.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="magic-bento-card__tech-badge">{t}</span>
                    ))}
                    {card.technologies.length > 5 && (
                      <span className="magic-bento-card__tech-badge">+{card.technologies.length - 5}</span>
                    )}
                  </div>
                )}
                {card.extra}

                {/* Footer links */}
                {(card.caseStudyUrl || card.liveUrl || card.githubUrl) && (
                  <div className="magic-bento-card__footer">
                    {card.caseStudyUrl && (
                      <a href={card.caseStudyUrl} className="magic-bento-card__btn magic-bento-card__btn--primary" onClick={(e) => e.stopPropagation()}>
                        Case Study →
                      </a>
                    )}
                    {card.liveUrl && (
                      <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="magic-bento-card__btn magic-bento-card__btn--ghost" onClick={(e) => e.stopPropagation()}>
                        ↗ Live
                      </a>
                    )}
                    {card.githubUrl && (
                      <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="magic-bento-card__btn magic-bento-card__btn--ghost magic-bento-card__btn--ml-auto" onClick={(e) => e.stopPropagation()}>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          );

          return enableStars ? (
            <ParticleCard
              key={i}
              className={cardClass}
              style={cardStyle}
              disableAnimations={noAnim}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={effectiveTilt}
              clickEffect={clickEffect}
              enableMagnetism={effectiveMagnetism}
            >
              {inner}
            </ParticleCard>
          ) : (
            <div key={i} className={cardClass} style={cardStyle}>
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MagicBento;
