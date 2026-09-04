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
  Activity,
  ArrowRightLeft,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

export function Projects() {
  const lapanginFrontend = projectsData.find((p) => p.id === "lapangin-frontend");
  const lapanginBackend = projectsData.find((p) => p.id === "lapangin-backend");
  const secondaryProjects = projectsData.filter(
    (p) => p.tier === "secondary-backend" || p.tier === "boilerplate"
  );

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Selected Work"
          title="Bukti Rekayasa & Portofolio Proyek"
          description="Koleksi proyek nyata yang mendemonstrasikan perancangan arsitektur backend modular, manajemen basis data relasional, dan integrasi API fungsional."
        />

        {/* 1. Visually Dominant Flagship Centerpiece: Lapangin Ecosystem (Bayu Raja Syah High Contrast Style) */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-foreground" />
              Flagship Application Ecosystem — Lapangin Platform & API
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Production Deployed · Full-Stack Integration
            </span>
          </div>

          {/* Architecture Relationship Flow Diagram */}
          <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/80 dark:bg-[#0c0c0e] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono shadow-md">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Globe className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Next.js Web Client</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Vercel
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800 hidden md:inline-block" />
              <ArrowRightLeft className="h-3.5 w-3.5 text-white" />
              <span className="text-[11px]">JSON / REST API</span>
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800 hidden md:inline-block" />
            </div>

            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Cpu className="h-4 w-4 text-white shrink-0" />
              <span>NestJS Backend Core</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-white/10 text-foreground border border-neutral-300 dark:border-white/20">
                Railway
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800 hidden md:inline-block" />
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[11px]">Prisma ORM</span>
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800 hidden md:inline-block" />
            </div>

            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Database className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>PostgreSQL DB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Flagship 1: Lapangin Web App (6 cols) */}
            {lapanginFrontend && (
              <div className="lg:col-span-6 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-white/30 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-foreground font-medium">
                      {lapanginFrontend.type}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Vercel Hosted
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-neutral-200 transition-colors">
                      {lapanginFrontend.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {lapanginFrontend.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lapanginFrontend.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-border/60 dark:border-white/10 flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="primary"
                    size="sm"
                    href={`/projects/${lapanginFrontend.slug}`}
                    className="text-xs font-semibold rounded-full px-4 h-8 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all"
                  >
                    View Case Study
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                  {lapanginFrontend.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={lapanginFrontend.liveUrl}
                      isExternal
                      className="text-xs font-medium rounded-full px-3.5 h-8 border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      Live Demo
                    </Button>
                  )}
                  {lapanginFrontend.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={lapanginFrontend.githubUrl}
                      isExternal
                      className="text-xs font-mono rounded-full px-3.5 h-8 border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
                    >
                      <GithubIcon className="h-3.5 w-3.5 mr-1" />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Flagship 2: Lapangin API (6 cols) */}
            {lapanginBackend && (
              <div className="lg:col-span-6 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-white/30 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-foreground font-medium">
                      {lapanginBackend.type}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <Activity className="h-3 w-3 animate-pulse" />
                      Railway Active
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-neutral-200 transition-colors">
                      {lapanginBackend.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {lapanginBackend.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lapanginBackend.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-border/60 dark:border-white/10 flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="primary"
                    size="sm"
                    href={`/projects/${lapanginBackend.slug}`}
                    className="text-xs font-semibold rounded-full px-4 h-8 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all"
                  >
                    View Case Study
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                  {lapanginBackend.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={lapanginBackend.liveUrl}
                      isExternal
                      className="text-xs font-medium rounded-full px-3.5 h-8 border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      Live API
                    </Button>
                  )}
                  {lapanginBackend.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={lapanginBackend.githubUrl}
                      isExternal
                      className="text-xs font-mono rounded-full px-3.5 h-8 border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
                    >
                      <GithubIcon className="h-3.5 w-3.5 mr-1" />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Subordinate Secondary Projects Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
              <Server className="h-4 w-4 text-foreground" />
              Secondary Backend & Architecture Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-border/80 dark:border-white/10 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-5 flex flex-col justify-between shadow-lg hover:border-white/25 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-muted-foreground uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-white transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/5 text-muted-foreground border border-neutral-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 dark:border-white/10 flex items-center justify-between">
                  {project.slug === "ecommerce-rest-api" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      href="/projects/ecommerce-rest-api"
                      className="text-xs font-medium rounded-full px-3 h-7 border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
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
