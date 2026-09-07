"use client";

import React from "react";
import LogoLoop, { type LogoItem } from "@/components/ui/logo-loop";
import {
  SiNestjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiNextdotjs,
  SiPostman,
  SiSwagger,
  SiGithub,
  SiLinux,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";

export function TechMarquee() {
  const logos: LogoItem[] = [
    {
      node: <SiNestjs className="h-9 w-9 text-neutral-400 hover:text-[#E0234E] transition-colors" />,
      title: "NestJS",
    },
    {
      node: <SiTypescript className="h-9 w-9 text-neutral-400 hover:text-[#3178C6] transition-colors" />,
      title: "TypeScript",
    },
    {
      node: <SiNodedotjs className="h-9 w-9 text-neutral-400 hover:text-[#5FA04E] transition-colors" />,
      title: "Node.js",
    },
    {
      node: <SiPostgresql className="h-9 w-9 text-neutral-400 hover:text-[#4169E1] transition-colors" />,
      title: "PostgreSQL",
    },
    {
      node: <SiPrisma className="h-9 w-9 text-neutral-400 hover:text-white transition-colors" />,
      title: "Prisma",
    },
    {
      node: <SiRedis className="h-9 w-9 text-neutral-400 hover:text-[#DC382D] transition-colors" />,
      title: "Redis",
    },
    {
      node: <SiDocker className="h-9 w-9 text-neutral-400 hover:text-[#2496ED] transition-colors" />,
      title: "Docker",
    },
    {
      node: <SiNextdotjs className="h-9 w-9 text-neutral-400 hover:text-white transition-colors" />,
      title: "Next.js",
    },
    {
      node: <SiPostman className="h-9 w-9 text-neutral-400 hover:text-[#FF6C37] transition-colors" />,
      title: "Postman",
    },
    {
      node: <SiSwagger className="h-9 w-9 text-neutral-400 hover:text-[#85EA2D] transition-colors" />,
      title: "Swagger",
    },
    {
      node: <SiGithub className="h-9 w-9 text-neutral-400 hover:text-white transition-colors" />,
      title: "GitHub",
    },
    {
      node: <SiLinux className="h-9 w-9 text-neutral-400 hover:text-[#FCC624] transition-colors" />,
      title: "Linux",
    },
    {
      node: <SiGit className="h-9 w-9 text-neutral-400 hover:text-[#F05032] transition-colors" />,
      title: "Git",
    },
    {
      node: <SiTailwindcss className="h-9 w-9 text-neutral-400 hover:text-[#06B6D4] transition-colors" />,
      title: "Tailwind CSS",
    },
  ];

  return (
    <section
      aria-label="Core Backend Technologies Ticker"
      className="w-full border-y border-white/10 bg-[#070709] py-5 sm:py-6 overflow-hidden relative select-none"
    >
      <LogoLoop
        logos={logos}
        speed={48}
        direction="left"
        logoHeight={40}
        gap={36}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Core backend engineering technology marquee"
      />
    </section>
  );
}

export default TechMarquee;

