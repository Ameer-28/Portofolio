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
      className="relative pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Top Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 glow-mauve pointer-events-none opacity-60 dark:opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="flex">
          {/* Value Proposition & CTAs */}
          <div className="max-w-3xl space-y-6 text-left">
            {/* 1. Status Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success" dot size="sm" className="font-mono shadow-xs">
                Open for Internship
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {profileData.location}
              </span>
            </div>

            {/* 2. Punchy Main Headline */}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground">
                Hi, I&apos;m <span className="text-foreground font-semibold">{profileData.fullName}</span> ({profileData.displayName})
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                Backend Developer
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
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

            {/* 3. Verified Positioning Statement */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Fokus merancang arsitektur backend yang andal, performa API tinggi, dan sistem database yang efisien. Siswa Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang yang terbiasa membangun server modular serta mengoptimalkan query basis data.
            </p>

            {/* 4. Core Technology Badges */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Primary Stack Focus
              </p>
              <div className="flex flex-wrap gap-2">
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

            {/* 5. CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="font-medium text-xs sm:text-sm rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all"
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
                className="font-mono text-xs sm:text-sm rounded-full px-6 border-border/80 hover:bg-muted/80"
              >
                <FileText className="h-4 w-4 mr-1.5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
