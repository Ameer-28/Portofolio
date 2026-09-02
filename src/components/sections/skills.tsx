import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Server, Code2, Wrench, Database, Cpu, Layers } from "lucide-react";

export function Skills() {
  const backendSkills = [
    { name: "NestJS", isPrimary: true },
    { name: "TypeScript", isPrimary: true },
    { name: "Prisma ORM", isPrimary: true },
    { name: "PostgreSQL", isPrimary: true },
    { name: "RESTful API", isPrimary: true },
    { name: "Passport JWT (RBAC)", isSecondary: true },
    { name: "Swagger / OpenAPI", isSecondary: true },
    { name: "Bcrypt", isSecondary: true },
    { name: "MySQL", isSecondary: true },
  ];

  const languageSkills = [
    { name: "Node.js", isPrimary: true },
    { name: "TypeScript", isPrimary: true },
    { name: "JavaScript", isSecondary: true },
    { name: "Next.js", isSecondary: true },
    { name: "Tailwind CSS", isSecondary: true },
    { name: "Java", isSecondary: true },
    { name: "HTML5 / CSS3", isSecondary: false },
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
      className="py-16 sm:py-24 border-t border-border/60 bg-muted/10 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Technical Stack"
          title="Keahlian & Penguasaan Teknologi"
          description="Kompilasi teknologi yang digunakan secara aktif dalam membangun arsitektur backend, pemodelan basis data relasional, dan integrasi antarmuka web modern."
        />

        {/* Bento Grid Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Primary Bento: Backend & Database (8 cols on lg) */}
          <div className="lg:col-span-8 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/50 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      Backend Architecture & Database
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      Spesialisasi Inti & Pemodelan Data
                    </p>
                  </div>
                </div>
                <Badge variant="default" size="sm" className="hidden sm:inline-flex font-mono text-[10px]">
                  Core Focus
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Perancangan arsitektur server modular berbasis Dependency Injection, query database type-safe, serta standardisasi endpoint REST API dengan proteksi keamanan.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={skill.isPrimary ? "default" : "secondary"}
                    size="md"
                    className={`font-mono text-xs ${
                      skill.isPrimary
                        ? "shadow-xs border border-primary/20"
                        : "border border-border/70 text-foreground bg-muted/60"
                    }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Secondary Bento: Languages & Frameworks (4 cols on lg) */}
          <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-accent/50 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Languages & Frontend
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Integrasi Client & Scripting
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Bahasa pemrograman utama serta kapabilitas integrasi web client modern menggunakan Next.js dan Tailwind CSS.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {languageSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={skill.isPrimary ? "default" : "secondary"}
                    size="md"
                    className={`font-mono text-xs ${
                      skill.isPrimary
                        ? "shadow-xs border border-accent/20 bg-accent text-accent-foreground"
                        : "border border-border/70 text-foreground bg-muted/60"
                    }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Third Bento: Tools, DevOps & Platforms (12 cols on lg) */}
          <div className="lg:col-span-12 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs hover:border-border transition-all">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-muted/80 border border-border/60 flex items-center justify-center text-foreground shrink-0">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Tools, DevOps & Cloud Platforms
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Workflow, Version Control & Deployment
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Ekosistem alat kerja pengujian endpoint API, version control kolaboratif, containerization, dan platform deployment cloud.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {toolsSkills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant={skill.isPrimary ? "secondary" : "outline"}
                  size="md"
                  className="font-mono text-xs border border-border/70 text-foreground bg-muted/60"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
