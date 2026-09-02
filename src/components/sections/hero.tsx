import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="relative pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Top Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 glow-mauve pointer-events-none opacity-60 dark:opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
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
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-accent">
                Specializing in Scalable APIs & Relational Databases
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

          {/* Right Column: Visual Developer Bento Card & Terminal Simulation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Top: Profile Identity Badge Card */}
            <div className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm p-4 shadow-sm flex items-center gap-4 transition-all hover:border-border">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border border-border/80 shrink-0 bg-muted/40">
                {profileData.profileImage.isAvailable ? (
                  <Image
                    src={profileData.profileImage.src}
                    alt={`${profileData.fullName} — ${profileData.primaryRole}`}
                    fill
                    sizes="80px"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center font-mono font-bold text-primary">
                    AM
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="font-mono text-xs font-bold text-foreground">
                    {profileData.brandName}
                  </p>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {profileData.fullName}
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  SMK Telkom Malang (2024–2027)
                </p>
              </div>
            </div>

            {/* Bottom: Interactive Live NestJS Server Boot Terminal */}
            <div className="rounded-2xl border border-border/80 bg-[#070b12] dark:bg-[#070b12] text-slate-300 font-mono text-[11px] sm:text-xs shadow-lg overflow-hidden border-t-indigo-500/30">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Terminal className="h-3 w-3 text-indigo-400" />
                  server@ameer.dev: ~
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">200 OK</span>
              </div>

              {/* Terminal Logs Content */}
              <div className="p-3.5 space-y-1.5 text-[11px] leading-relaxed select-none">
                <p className="text-slate-400">
                  <span className="text-indigo-400 font-bold">[Nest]</span> Starting Nest application...
                </p>
                <p className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 shrink-0" />
                  <span>PrismaService: PostgreSQL DB Connected</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-sky-400">LOG</span> [RoutesResolver] LapanginController:
                </p>
                <p className="text-slate-400 pl-3">
                  <span className="text-amber-400 font-semibold">POST</span> /api/v1/booking/reserve <span className="text-slate-500">+3ms</span>
                </p>
                <p className="text-slate-400 pl-3">
                  <span className="text-emerald-400 font-semibold">GET</span> /api/v1/booking/slots <span className="text-slate-500">+1ms</span>
                </p>
                <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Stack: NestJS · Prisma · Railway</span>
                  <span className="text-emerald-400 font-bold">Ready on :3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
