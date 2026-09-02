import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";
import {
  ExternalLink,
  ArrowRight,
  Server,
  Layers,
  Database,
  Code2,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";

export function Projects() {
  const flagshipProjects = projectsData.filter((p) => p.tier === "primary" || p.tier === "backend-core");
  const secondaryProjects = projectsData.filter(
    (p) => p.tier === "secondary-backend" || p.tier === "boilerplate"
  );

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-16 sm:py-24 border-t border-border/60 bg-background relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Featured Projects"
          title="Bukti Rekayasa & Portofolio Proyek"
          description="Koleksi proyek nyata yang membuktikan perancangan arsitektur backend modular, manajemen basis data relasional, dan integrasi antarmuka digital fungsional."
        />

        {/* 1. Flagship Bento Grid (Lapangin Ecosystem) */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Flagship Ecosystem — Lapangin Platform & API
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              Production Deployed
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Flagship 1: Lapangin Web App (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/50 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" size="sm" className="font-mono text-xs text-primary border-primary/30">
                    Web App Client
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Vercel Hosted
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Lapangin — Platform Booking Lapangan
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Antarmuka web interaktif untuk reservasi lapangan olahraga dengan sinkronisasi slot waktu dinamis, integrasi Google OAuth, promo code, dan payment gateway Midtrans.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Midtrans", "Vercel"].map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm" className="font-mono text-[11px] border border-border/60 bg-muted/60">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href="/projects/lapangin-platform"
                  className="text-xs font-medium rounded-full px-4"
                >
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href="https://lapangin-frontend.vercel.app/"
                  isExternal
                  className="text-xs font-medium rounded-full px-3.5 border-border hover:bg-muted"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href="https://github.com/Ameer-28/Lapangin_frontend"
                  isExternal
                  className="text-xs font-mono rounded-full px-3.5 border-border hover:bg-muted"
                >
                  <GithubIcon className="h-3.5 w-3.5 mr-1" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Flagship 2: Lapangin API (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-accent/50 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="default" size="sm" className="font-mono text-xs bg-accent text-accent-foreground">
                    Core Backend Service
                  </Badge>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Activity className="h-3 w-3 animate-pulse" />
                    Railway Active
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    Lapangin API — Backend Booking Service
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Layanan RESTful API terstruktur dengan autentikasi JWT (RBAC), validasi ketersediaan jadwal real-time, query type-safe Prisma ORM, dan manajemen database PostgreSQL.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Passport JWT", "Railway"].map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm" className="font-mono text-[11px] border border-border/60 bg-muted/60">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href="/projects/lapangin-api"
                  className="text-xs font-medium rounded-full px-4 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href="https://lapangin-backend.up.railway.app/"
                  isExternal
                  className="text-xs font-medium rounded-full px-3.5 border-border hover:bg-muted"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Live API
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href="https://github.com/Ameer-28/Lapangin_backend"
                  isExternal
                  className="text-xs font-mono rounded-full px-3.5 border-border hover:bg-muted"
                >
                  <GithubIcon className="h-3.5 w-3.5 mr-1" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Backend Projects Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
              <Server className="h-4 w-4 text-primary" />
              Additional Backend & Architecture Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:border-slate-400/80 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                      {project.type}
                    </Badge>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-border/50 flex items-center justify-between">
                  {project.slug === "ecommerce-rest-api" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      href="/projects/ecommerce-rest-api"
                      className="text-xs font-medium rounded-full px-3 h-7 border-border hover:bg-muted"
                    >
                      Case Study
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  ) : (
                    <span className="text-[11px] font-mono text-muted-foreground">
                      REST Architecture
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
