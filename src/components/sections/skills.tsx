import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Server, Code2, Wrench, Database, Terminal } from "lucide-react";

export function Skills() {
  const backendSkills = [
    { name: "NestJS", isPrimary: true },
    { name: "PostgreSQL", isPrimary: true },
    { name: "Prisma ORM", isPrimary: true },
    { name: "TypeScript", isPrimary: true },
    { name: "RESTful API", isPrimary: true },
    { name: "Passport JWT (RBAC)", isSecondary: true },
    { name: "Swagger / OpenAPI", isSecondary: true },
    { name: "Bcrypt Hashing", isSecondary: true },
    { name: "MySQL", isSecondary: true },
  ];

  const languageSkills = [
    { name: "TypeScript", isPrimary: true },
    { name: "Node.js", isPrimary: true },
    { name: "JavaScript (ES6+)", isSecondary: true },
    { name: "Java", isSecondary: true },
    { name: "SQL", isSecondary: true },
  ];

  const toolsSkills = [
    { name: "Docker", isPrimary: true },
    { name: "Git", isPrimary: true },
    { name: "GitHub", isPrimary: true },
    { name: "Postman", isSecondary: true },
    { name: "Railway", isSecondary: true },
    { name: "Vercel", isSecondary: true },
    { name: "VS Code", isSecondary: false },
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

        {/* Bento Grid Pure Backend Skills Layout (Bayu Raja Syah High Contrast Minimalist) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Primary Bento: Backend Architecture & Database (8 cols on lg) */}
          <div className="lg:col-span-8 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-white/25 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                    <Server className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      Backend Architecture & Database
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      Spesialisasi Inti, Arsitektur Server & Relasi Data
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Core Specialization
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Perancangan arsitektur server modular berbasis Dependency Injection, skema relasional terstruktur dengan Prisma ORM & PostgreSQL, otentikasi JWT RBAC, dan dokumentasi OpenAPI.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all ${
                      skill.isPrimary
                        ? "bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs hover:opacity-90"
                        : "border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-white/5 text-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Secondary Bento: Languages & Runtime Environments (4 cols on lg) */}
          <div className="lg:col-span-4 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-white/25 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                  <Code2 className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Languages & Runtime
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Ekosistem Pemrograman Server
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Bahasa pemrograman dan runtime backend untuk membangun logika bisnis yang type-safe, efisien, dan terstruktur.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {languageSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all ${
                      skill.isPrimary
                        ? "bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs hover:opacity-90"
                        : "border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-white/5 text-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Third Bento: Tools, DevOps & Platforms (12 cols on lg) */}
          <div className="lg:col-span-12 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg hover:border-white/20 transition-all">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-foreground shrink-0">
                  <Wrench className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    DevOps, Testing & Cloud Infrastructure
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Pengujian Endpoint, Version Control & Deployment
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Pengujian endpoint API otomatis dan manual via Postman, version control Git kolaboratif, containerization Docker, serta deployment cloud Railway.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {toolsSkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all ${
                    skill.isPrimary
                      ? "border border-neutral-300 dark:border-white/20 bg-neutral-200/60 dark:bg-white/10 text-foreground font-medium"
                      : "border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-muted-foreground"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
