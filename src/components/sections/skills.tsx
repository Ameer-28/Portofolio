"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagicBento } from "@/components/ui/magic-bento";
import type { BentoCardData } from "@/components/ui/magic-bento";
import { Server, Database, ShieldCheck, Terminal } from "lucide-react";

const Tag = ({ name, primary }: { name: string; primary?: boolean }) => (
  <span
    className={`font-mono text-[11px] px-3 py-1 rounded-full transition-all duration-200 select-none ${
      primary
        ? "bg-white text-black font-semibold shadow-sm hover:bg-neutral-200"
        : "border border-white/15 bg-white/5 text-white/70 hover:border-white/35 hover:text-white"
    }`}
  >
    {name}
  </span>
);

export function Skills() {
  const bentoCards: BentoCardData[] = [
    {
      title: "Arsitektur Server & Runtime",
      label: "Core Framework",
      icon: <Server className="h-4 w-4 text-emerald-400" />,
      description:
        "Pengembangan layanan backend modular berbasis Dependency Injection, routing terstruktur, dan performa I/O asinkron.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { name: "NestJS", primary: true },
            { name: "TypeScript", primary: true },
            { name: "Node.js", primary: true },
            { name: "Express.js", primary: false },
            { name: "RESTful API", primary: true },
            { name: "JavaScript (ES6+)", primary: false },
          ].map((s) => (
            <Tag key={s.name} name={s.name} primary={s.primary} />
          ))}
        </div>
      ),
      color: "#100e16",
    },
    {
      title: "Basis Data & Pemodelan Relasi",
      label: "Database & ORM",
      icon: <Database className="h-4 w-4 text-sky-400" />,
      description:
        "Perancangan skema relasional, manajemen migrasi, penulisan query teroptimasi, serta integritas data dengan ORM modern.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { name: "PostgreSQL", primary: true },
            { name: "Prisma ORM", primary: true },
            { name: "MySQL", primary: false },
            { name: "Relational Schema", primary: true },
            { name: "Database Migration", primary: false },
            { name: "SQL", primary: true },
          ].map((s) => (
            <Tag key={s.name} name={s.name} primary={s.primary} />
          ))}
        </div>
      ),
      color: "#100e16",
    },
    {
      title: "Keamanan API & Standardisasi",
      label: "Security & Standards",
      icon: <ShieldCheck className="h-4 w-4 text-amber-400" />,
      description:
        "Pengamanan endpoint dengan otentikasi token, otorisasi berbasis peran (RBAC), validasi skema input ketat, dan dokumentasi OpenAPI.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { name: "Passport JWT", primary: true },
            { name: "RBAC (Role-Based)", primary: true },
            { name: "Bcrypt Hashing", primary: false },
            { name: "DTO Validation", primary: true },
            { name: "Swagger / OpenAPI", primary: true },
          ].map((s) => (
            <Tag key={s.name} name={s.name} primary={s.primary} />
          ))}
        </div>
      ),
      color: "#100e16",
    },
    {
      title: "Workflow, Testing & Deployment",
      label: "DevOps & Tooling",
      icon: <Terminal className="h-4 w-4 text-purple-400" />,
      description:
        "Pengujian fungsionalitas API, isolasi environment berbasis container, version control terdistribusi, dan otomasi deployment cloud.",
      extra: (
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { name: "Docker", primary: true },
            { name: "Postman", primary: true },
            { name: "Git & GitHub", primary: true },
            { name: "Railway", primary: false },
            { name: "Linux / Bash", primary: false },
            { name: "Vercel", primary: false },
          ].map((s) => (
            <Tag key={s.name} name={s.name} primary={s.primary} />
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
          description="Rangkaian teknologi, alat pengujian, dan metodologi rekayasa perangkat lunak yang saya gunakan untuk membangun sistem backend yang tangguh."
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

