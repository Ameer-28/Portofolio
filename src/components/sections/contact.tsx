"use client";

import * as React from "react";
import { useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { Clock, Copy, Check, FileText, Mail, MapPin, ArrowUpRight } from "lucide-react";

const GLOW_COLOR = "255,255,255";
const PARTICLE_COUNT = 8;

function createParticle(x: number, y: number) {
  const el = document.createElement("div");
  el.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(${GLOW_COLOR},1);box-shadow:0 0 6px rgba(${GLOW_COLOR},0.6);pointer-events:none;z-index:100;left:${x}px;top:${y}px;`;
  return el;
}

export function Contact() {
  const [copied, setCopied] = React.useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);

  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m} ${ampm}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  };

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((p) =>
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => p.parentNode?.removeChild(p) })
    );
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    const { width, height } = card.getBoundingClientRect();
    Array.from({ length: PARTICLE_COUNT }).forEach((_, i) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = createParticle(Math.random() * width, Math.random() * height);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, duration: 2 + Math.random() * 2, ease: "none", repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, i * 100);
      timeoutsRef.current.push(id);
    });
  }, []);

  // Spotlight glow on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--glow-x", `${x}%`);
      card.style.setProperty("--glow-y", `${y}%`);
      card.style.setProperty("--glow-intensity", "1");
    };

    const onEnter = () => {
      isHoveredRef.current = true;
      spawnParticles();
    };

    const onLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
      card.style.setProperty("--glow-intensity", "0");
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      clearParticles();
    };
  }, [spawnParticles, clearParticles]);

  const socialLinks = [
    { name: "GitHub",    handle: "@Ameer-28",       url: profileData.social.github,    icon: GithubIcon },
    { name: "LinkedIn",  handle: "Muhammad Amin",   url: profileData.social.linkedin,  icon: LinkedinIcon },
    { name: "Instagram", handle: "@aameeerr__",     url: profileData.social.instagram, icon: InstagramIcon },
  ];

  return (
    <section
      id="contact"
      aria-label="Kontak"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="xl">
        <SectionHeading
          badge="Get in Touch"
          title="Mari Terhubung & Berkolaborasi"
          description="Terbuka untuk peluang magang, kolaborasi teknis, maupun diskusi profesional."
        />

        {/* Single wide bento-style card */}
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#100e16] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
          style={{
            "--glow-x": "50%",
            "--glow-y": "50%",
            "--glow-intensity": "0",
            "--glow-radius": "400px",
          } as React.CSSProperties}
        >
          {/* Border glow overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[20px] z-10"
            style={{
              padding: "1px",
              background: `radial-gradient(var(--glow-radius, 400px) circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${GLOW_COLOR}, calc(var(--glow-intensity, 0) * 0.5)) 0%, rgba(${GLOW_COLOR}, calc(var(--glow-intensity, 0) * 0.2)) 30%, transparent 60%)`,
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-white/8">

            {/* ── Col 1: Profile ── */}
            <div className="flex items-center gap-5 p-6 lg:p-8 lg:min-w-[260px] lg:max-w-[300px]">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15">
                <Image
                  src={profileData.profileImage.src}
                  alt={profileData.displayName}
                  fill sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 space-y-1.5">
                <p className="font-bold text-sm leading-tight">{profileData.fullName}</p>
                <p className="text-xs text-white/50">{profileData.primaryRole}</p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse inline-block" />
                  Open for Internship
                </div>
              </div>
            </div>

            {/* ── Col 2: Info ── */}
            <div className="flex flex-col justify-center gap-1.5 p-6 lg:p-8 text-[11px] font-mono text-white/40 lg:min-w-[200px]">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                {timeText}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {profileData.location}
              </div>
              <div className="flex items-center gap-2 break-all">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                {profileData.social.email}
              </div>
            </div>

            {/* ── Col 3: Actions ── */}
            <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-2.5 p-6 lg:p-8">
              <a
                href={`mailto:${profileData.social.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 transition-colors text-sm font-medium whitespace-nowrap"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="h-4 w-4 shrink-0" />
                Kirim Email
              </a>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleCopy(); }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                {copied
                  ? <><Check className="h-4 w-4 shrink-0" />Copied!</>
                  : <><Copy className="h-4 w-4 shrink-0" />Copy Email</>}
              </button>
              <a
                href={profileData.cv.url}
                download
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-semibold whitespace-nowrap"
                onClick={(e) => e.stopPropagation()}
              >
                <FileText className="h-4 w-4 shrink-0" />
                Download CV
              </a>
            </div>

            {/* ── Col 4: Social links ── */}
            <div className="flex flex-wrap lg:flex-col justify-center gap-2 p-6 lg:p-8 flex-1">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all text-xs text-white/60"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {s.handle}
                    <ArrowUpRight className="h-3 w-3 opacity-40 ml-auto" />
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
