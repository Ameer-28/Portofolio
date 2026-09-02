import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData } from "@/data/projects";
import { allCaseStudies } from "@/data/case-studies";
import { ExternalLink, Server, Globe, Terminal, ArrowUpRight, BookOpen } from "lucide-react";

export function Projects() {
  const flagshipFrontend = projectsData.find((p) => p.id === "lapangin-frontend");
  const flagshipBackend = projectsData.find((p) => p.id === "lapangin-backend");
  const secondaryProjects = projectsData.filter(
    (p) => p.id !== "lapangin-frontend" && p.id !== "lapangin-backend"
  );

  const hasCaseStudy = (slug: string) =>
    allCaseStudies.some((cs) => cs.slug === slug);

  return (
    <section
      id="projects"
      aria-label="Portofolio Proyek & Hasil Rekayasa"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Featured Projects"
          title="Hasil Karya & Rekayasa Perangkat Lunak"
          description="Koleksi proyek nyata yang mendemonstrasikan perancangan arsitektur backend, manajemen basis data relasional, dan integrasi antarmuka web client."
        />

        {/* 1. Flagship Showcase: Lapangin Full-Stack Ecosystem */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Flagship Application Ecosystem
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Lapangin Frontend Web App (6 cols) */}
            {flagshipFrontend && (
              <Card className="lg:col-span-6 bg-card border-border shadow-sm flex flex-col justify-between hover:border-slate-400/80 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" size="sm" className="font-mono">
                      <Globe className="h-3 w-3 mr-1 text-muted-foreground" />
                      {flagshipFrontend.type}
                    </Badge>
                    <Badge variant="success" dot size="sm">
                      Live Deployment
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">
                    {flagshipFrontend.name}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm pt-1 leading-relaxed">
                    {flagshipFrontend.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipFrontend.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        size="sm"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/40 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {hasCaseStudy(flagshipFrontend.slug) && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/projects/${flagshipFrontend.slug}`}
                        className="text-xs"
                      >
                        <BookOpen className="h-3.5 w-3.5 mr-1" />
                        View Case Study
                      </Button>
                    )}
                    {flagshipFrontend.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={flagshipFrontend.liveUrl}
                        isExternal
                        className="text-xs"
                      >
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      href={flagshipFrontend.githubUrl}
                      isExternal
                      className="text-xs"
                    >
                      <GithubIcon className="h-3.5 w-3.5 mr-1" />
                      GitHub
                    </Button>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Vercel Hosted
                  </span>
                </CardFooter>
              </Card>
            )}

            {/* Lapangin Backend API (6 cols) */}
            {flagshipBackend && (
              <Card className="lg:col-span-6 bg-card border-border shadow-sm flex flex-col justify-between hover:border-slate-400/80 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="default" size="sm" className="font-mono">
                      <Server className="h-3 w-3 mr-1 text-primary-foreground/80" />
                      {flagshipBackend.type}
                    </Badge>
                    <Badge variant="success" dot size="sm">
                      Live API
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">
                    {flagshipBackend.name}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm pt-1 leading-relaxed">
                    {flagshipBackend.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipBackend.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={
                          tech === "NestJS" || tech === "Prisma ORM" || tech === "PostgreSQL"
                            ? "default"
                            : "secondary"
                        }
                        size="sm"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/40 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {hasCaseStudy(flagshipBackend.slug) && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/projects/${flagshipBackend.slug}`}
                        className="text-xs"
                      >
                        <BookOpen className="h-3.5 w-3.5 mr-1" />
                        View Case Study
                      </Button>
                    )}
                    {flagshipBackend.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={flagshipBackend.liveUrl}
                        isExternal
                        className="text-xs"
                      >
                        Live API
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      href={flagshipBackend.githubUrl}
                      isExternal
                      className="text-xs"
                    >
                      <GithubIcon className="h-3.5 w-3.5 mr-1" />
                      GitHub
                    </Button>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Railway Hosted
                  </span>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>

        {/* 2. Secondary Backend Projects & Architecture Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-muted-foreground">
              Secondary Backend & Architecture Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border shadow-sm flex flex-col justify-between hover:border-slate-400/80 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" size="sm" className="font-mono text-[11px]">
                      {project.type === "Architecture Boilerplate" ? (
                        <Terminal className="h-3 w-3 mr-1 text-muted-foreground" />
                      ) : (
                        <Server className="h-3 w-3 mr-1 text-muted-foreground" />
                      )}
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-xs pt-1.5 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        size="sm"
                        className="text-[11px] font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/40 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {hasCaseStudy(project.slug) && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/projects/${project.slug}`}
                        className="text-xs"
                      >
                        <BookOpen className="h-3.5 w-3.5 mr-1" />
                        Case Study
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.githubUrl}
                      isExternal
                      className="text-xs"
                    >
                      <GithubIcon className="h-3.5 w-3.5 mr-1" />
                      Source Code
                    </Button>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Public Repo
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
