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
      className="py-16 sm:py-24 border-t border-border/60 bg-background relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Featured Projects"
          title="Bukti Rekayasa & Portofolio Proyek"
          description="Koleksi proyek nyata yang mendemonstrasikan perancangan arsitektur backend modular, manajemen basis data relasional, dan integrasi API fungsional."
        />

        {/* 1. Visually Dominant Flagship Pair: Lapangin Ecosystem */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Flagship Application Ecosystem — Lapangin Platform & API
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              Production Deployed
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Flagship 1: Lapangin Web App (6 cols) */}
            {lapanginFrontend && (
              <div className="lg:col-span-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-primary/50 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" size="sm" className="font-mono text-xs text-primary border-primary/30">
                      {lapanginFrontend.type}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Vercel Hosted
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {lapanginFrontend.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {lapanginFrontend.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lapanginFrontend.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm" className="font-mono text-[11px] border border-border/60 bg-muted/60">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-border/60 flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="primary"
                    size="sm"
                    href={`/projects/${lapanginFrontend.slug}`}
                    className="text-xs font-medium rounded-full px-4"
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
                      className="text-xs font-medium rounded-full px-3 border-border hover:bg-muted"
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
                      className="text-xs font-mono rounded-full px-3 border-border hover:bg-muted"
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
              <div className="lg:col-span-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-accent/50 transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="default" size="sm" className="font-mono text-xs bg-accent text-accent-foreground">
                      {lapanginBackend.type}
                    </Badge>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Activity className="h-3 w-3 animate-pulse" />
                      Railway Active
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {lapanginBackend.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {lapanginBackend.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lapanginBackend.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm" className="font-mono text-[11px] border border-border/60 bg-muted/60">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-border/60 flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="primary"
                    size="sm"
                    href={`/projects/${lapanginBackend.slug}`}
                    className="text-xs font-medium rounded-full px-4 bg-accent text-accent-foreground hover:bg-accent/90"
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
                      className="text-xs font-medium rounded-full px-3 border-border hover:bg-muted"
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
                      className="text-xs font-mono rounded-full px-3 border-border hover:bg-muted"
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
              <Server className="h-4 w-4 text-primary" />
              Secondary Backend & Architecture Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-5 flex flex-col justify-between shadow-2xs hover:border-slate-400/80 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                      {project.type}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
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

                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
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
