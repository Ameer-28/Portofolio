import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { profileData } from "@/data/profile";
import { ArrowRight, FileText, Code2, Server, Database } from "lucide-react";

export function Hero() {
  const coreTech = [
    { name: "NestJS", icon: Server },
    { name: "TypeScript", icon: Code2 },
    { name: "Prisma ORM", icon: Database },
    { name: "PostgreSQL", icon: Database },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction & Profile Overview"
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Top Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 glow-mauve pointer-events-none opacity-60 dark:opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* 1. Status Eyebrow */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="success" dot size="sm" className="font-mono shadow-xs">
              Open for Internship
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">
              {profileData.location}
            </span>
          </div>

          {/* 2. Headline */}
          <div className="flex flex-col items-center gap-3 max-w-4xl">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-semibold">{profileData.fullName}</span>{" "}
              ({profileData.displayName})
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] text-balance">
              Backend Developer
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              <span>Building</span>
              <HandwritingText
                words={[
                  "scalable APIs.",
                  "relational databases.",
                  "modular servers.",
                  "efficient queries.",
                ]}
                interval={3600}
                className="text-primary"
                height="1.25em"
              />
            </p>
          </div>

          {/* 3. Positioning Statement */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            Fokus merancang arsitektur backend yang andal, performa API tinggi, dan sistem database yang efisien. Siswa Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang yang terbiasa membangun server modular serta mengoptimalkan query basis data.
          </p>

          {/* 4. CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              className="font-medium text-xs sm:text-sm rounded-full px-7 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              View Projects
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={profileData.cv.url}
              download
              isExternal
              className="font-mono text-xs sm:text-sm rounded-full px-7 border-border/80 hover:bg-muted/80"
            >
              <FileText className="h-4 w-4 mr-1.5" />
              Download CV
            </Button>
          </div>

          {/* 5. Core Technology Badges */}
          <div className="flex flex-col items-center gap-3 pt-4 border-t border-border/50 w-full max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Primary Stack Focus
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {coreTech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <Badge
                      key={tech.name}
                      variant="secondary"
                      size="md"
                      className="border border-border/80 font-mono text-xs text-foreground bg-card/80 hover:border-primary/60 transition-all shadow-2xs"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary mr-1.5" />
                      {tech.name}
                    </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
