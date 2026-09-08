"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagicBento } from "@/components/ui/magic-bento";
import type { BentoCardData } from "@/components/ui/magic-bento";
import { projectsData } from "@/data/projects";

export function Projects() {
  const bentoCards: BentoCardData[] = projectsData.map((project) => ({
    title: project.name,
    label: project.type,
    description: project.description,
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    caseStudyUrl: project.slug ? `/projects/${project.slug}` : undefined,
    color: "#120F17",
  }));

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="xl">
        <SectionHeading
          badge="Selected Work"
          title="Bukti Rekayasa & Portofolio Proyek"
          description="Koleksi proyek nyata yang mendemonstrasikan perancangan arsitektur backend modular, manajemen basis data relasional, dan integrasi API fungsional."
        />

        <MagicBento
          cards={bentoCards}
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
