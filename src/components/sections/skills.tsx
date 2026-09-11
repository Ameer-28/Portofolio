"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagicBento } from "@/components/ui/magic-bento";
import type { BentoCardData } from "@/components/ui/magic-bento";
import { Server, Code2, Wrench } from "lucide-react";

const Tag = ({ name, primary }: { name: string; primary?: boolean }) => (
  <span
    className={`font-mono text-[11px] px-3 py-1 rounded-full transition-all ${
      primary
        ? "bg-white text-black font-semibold"
        : "border border-white/15 bg-white/5 text-white/60"
    }`}
  >
    {name}
  </span>
);

export function Skills() {
  const bentoCards: BentoCardData[] = [
    {
      title: "Backend Architecture & Database",
      label: "Core Specialization",
      description: "Perancangan arsitektur server modular berbasis Dependency Injection, skema relasional dengan Prisma ORM & PostgreSQL, otentikasi JWT RBAC, dan dokumentasi OpenAPI.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { name: "NestJS",               primary: true  },
            { name: "PostgreSQL",           primary: true  },
            { name: "Prisma ORM",           primary: true  },
            { name: "REST API",             primary: true  },
            { name: "Passport JWT (RBAC)",  primary: false },
            { name: "Swagger / OpenAPI",    primary: false },
            { name: "Bcrypt Hashing",       primary: false },
            { name: "MySQL",                primary: false },
          ].map((s) => <Tag key={s.name} name={s.name} primary={s.primary} />)}
        </div>
      ),
      color: "#100e16",
    },
    {
      title: "Languages & Runtime",
      label: "Ekosistem Pemrograman",
      description: "Bahasa pemrograman dan runtime backend untuk membangun logika bisnis yang type-safe, efisien, dan terstruktur.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { name: "TypeScript",         primary: true  },
            { name: "Node.js",            primary: true  },
            { name: "JavaScript (ES6+)",  primary: false },
            { name: "Java",               primary: false },
            { name: "SQL",                primary: false },
          ].map((s) => <Tag key={s.name} name={s.name} primary={s.primary} />)}
        </div>
      ),
      color: "#100e16",
    },
    {
      title: "DevOps, Testing & Cloud",
      label: "Tools & Infrastructure",
      description: "Pengujian endpoint API via Postman, version control Git, containerization Docker, serta deployment cloud Railway & Vercel.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-4">
          {["Docker", "Git", "GitHub", "Postman", "Railway", "Vercel", "VS Code"].map((s) => (
            <Tag key={s} name={s} />
          ))}
        </div>
      ),
      color: "#100e16",
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Keahlian Teknis & Tech Stack"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Backend Tech Stack"
          title="Keahlian & Penguasaan Teknologi Backend"
          description="Kompilasi teknologi dan alat kerja yang digunakan secara aktif dalam merancang arsitektur server modular, pemodelan basis data relasional, dan keamanan API."
        />

        <MagicBento
          cards={bentoCards}
          gridClassName="card-grid--skills"
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableMagnetism={true}
          enableTilt={false}
          clickEffect={true}
          particleCount={10}
          spotlightRadius={300}
          glowColor="255,255,255"
          textAutoHide={false}
        />
      </Container>
    </section>
  );
}
