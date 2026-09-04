"use client";

import React from "react";
import LogoLoop, { type LogoItem } from "@/components/ui/logo-loop";
import {
  Server,
  Code2,
  Database,
  Layers,
  Terminal,
  Cpu,
  Boxes,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function TechMarquee() {
  const logos: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Server className="h-4 w-4 text-rose-400" />
          <span>NestJS</span>
        </div>
      ),
      title: "NestJS Framework",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Code2 className="h-4 w-4 text-blue-400" />
          <span>TypeScript</span>
        </div>
      ),
      title: "TypeScript",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Database className="h-4 w-4 text-sky-400" />
          <span>PostgreSQL</span>
        </div>
      ),
      title: "PostgreSQL Database",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>Prisma ORM</span>
        </div>
      ),
      title: "Prisma ORM",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Cpu className="h-4 w-4 text-red-400" />
          <span>Redis</span>
        </div>
      ),
      title: "Redis Cache",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Boxes className="h-4 w-4 text-cyan-400" />
          <span>Docker</span>
        </div>
      ),
      title: "Docker Containerization",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Globe className="h-4 w-4 text-white" />
          <span>Next.js</span>
        </div>
      ),
      title: "Next.js Fullstack",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Terminal className="h-4 w-4 text-amber-400" />
          <span>REST API</span>
        </div>
      ),
      title: "REST Architecture",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>JWT & OAuth</span>
        </div>
      ),
      title: "Security & Auth",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-white font-mono text-xs font-semibold hover:border-white/30 transition-colors shadow-2xs">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span>CI/CD Automation</span>
        </div>
      ),
      title: "Automated Deployment",
    },
  ];

  return (
    <section
      aria-label="Core Backend Technologies Ticker"
      className="w-full border-y border-neutral-200 dark:border-white/10 bg-neutral-100/60 dark:bg-[#070709] py-4 sm:py-5 overflow-hidden relative select-none"
    >
      <LogoLoop
        logos={logos}
        speed={55}
        direction="left"
        logoHeight={36}
        gap={20}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Core backend engineering technology marquee"
      />
    </section>
  );
}

export default TechMarquee;
