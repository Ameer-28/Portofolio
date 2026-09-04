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

export default function LogoLoopDemo() {
  const backendStack: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Server className="h-4 w-4 text-rose-400" />
          <span>NestJS</span>
        </div>
      ),
      title: "NestJS Framework",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Code2 className="h-4 w-4 text-blue-400" />
          <span>TypeScript</span>
        </div>
      ),
      title: "TypeScript",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Database className="h-4 w-4 text-sky-400" />
          <span>PostgreSQL</span>
        </div>
      ),
      title: "PostgreSQL Database",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>Prisma ORM</span>
        </div>
      ),
      title: "Prisma ORM",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Cpu className="h-4 w-4 text-red-400" />
          <span>Redis</span>
        </div>
      ),
      title: "Redis In-Memory Cache",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Boxes className="h-4 w-4 text-cyan-400" />
          <span>Docker</span>
        </div>
      ),
      title: "Docker Containers",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Globe className="h-4 w-4 text-white" />
          <span>Next.js</span>
        </div>
      ),
      title: "Next.js Framework",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Terminal className="h-4 w-4 text-amber-400" />
          <span>REST API</span>
        </div>
      ),
      title: "REST Architecture",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>JWT & OAuth</span>
        </div>
      ),
      title: "Authentication",
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold shadow-xs">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span>CI/CD & Testing</span>
        </div>
      ),
      title: "Automation",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-8 bg-black rounded-2xl border border-border/60 overflow-hidden relative space-y-8">
      <div className="text-center">
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
          Infinite Logo Marquee Loop
        </p>
        <p className="text-xs text-neutral-500">
          Smooth ticker loop with deceleration on hover and edge gradients
        </p>
      </div>

      {/* Horizontal Left Loop */}
      <div className="w-full relative overflow-hidden py-2">
        <LogoLoop
          logos={backendStack}
          speed={70}
          direction="left"
          logoHeight={36}
          gap={24}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Backend technology stack"
        />
      </div>

      {/* Reverse Right Loop */}
      <div className="w-full relative overflow-hidden py-2">
        <LogoLoop
          logos={backendStack}
          speed={60}
          direction="right"
          logoHeight={36}
          gap={24}
          hoverSpeed={15}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Reverse technology loop"
        />
      </div>
    </div>
  );
}
