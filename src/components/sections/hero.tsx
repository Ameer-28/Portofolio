import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { InteractiveLanyard } from "@/components/ui/interactive-lanyard";
import { profileData } from "@/data/profile";
import { ArrowRight, FileText, Code2, Server, Database, Terminal, CheckCircle2 } from "lucide-react";

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
      className="relative pt-8 sm:pt-14 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Top Ambient Radial Glow (Bayu Raja Syah Atmosphere) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 glow-radial-hero pointer-events-none opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 1. Status Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for Internship
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {profileData.location}
              </span>
            </div>

            {/* 2. Main Headline (Bold, High Contrast Display) */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground">
                Hi, I&apos;m <span className="text-foreground font-semibold">{profileData.fullName}</span> ({profileData.displayName})
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                Backend Developer
              </h1>
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-1">
                <span className="text-muted-foreground">
                  Building backend systems that are
                </span>
                <HandwritingText
                  words={["scalable.", "modular.", "type-safe.", "production-ready."]}
                  className="text-white dark:text-white font-serif underline decoration-white/30 underline-offset-4"
                  height="1.18em"
                />
              </div>
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
                      className="border border-border/80 dark:border-white/10 font-mono text-xs text-foreground bg-card/90 dark:bg-[#121216] hover:border-white/40 transition-all rounded-full px-3.5 py-1 shadow-2xs"
                    >
                      <Icon className="h-3.5 w-3.5 text-foreground mr-1.5" />
                      {tech.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* 5. Pill CTAs (Bayu Raja Syah High Contrast Style) */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="font-semibold text-xs sm:text-sm rounded-full px-7 h-11 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
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
                className="font-mono text-xs sm:text-sm rounded-full px-6 h-11 border-neutral-300 dark:border-white/20 bg-neutral-100/60 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-foreground transition-all"
              >
                <FileText className="h-4 w-4 mr-1.5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Lanyard ID Card (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <InteractiveLanyard />
          </div>
        </div>
      </Container>
    </section>
  );
}
