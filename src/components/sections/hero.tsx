import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="py-12 sm:py-20 lg:py-28 relative overflow-hidden"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Information & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 1. Contextual Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success" dot size="sm">
                Open for Internship
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {profileData.location}
              </span>
            </div>

            {/* 2. Primary Heading */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-muted-foreground">
                Hi, I&apos;m <span className="text-foreground font-semibold">{profileData.fullName}</span> ({profileData.displayName})
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {profileData.primaryRole}
              </h1>
            </div>

            {/* 3. Verified Positioning Statement */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {profileData.tagline}
            </p>

            {/* 4. Core Technology Focus Badges */}
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
                      className="border border-border/60 font-mono text-xs text-foreground bg-secondary/70 hover:bg-secondary transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                      {tech.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* 5. Primary & Secondary Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="font-medium text-sm"
              >
                View Projects
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={profileData.cv.url}
                isExternal
                className="font-mono text-xs sm:text-sm"
              >
                <FileText className="h-4 w-4 mr-1.5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column: Profile Image / Technical Card (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square relative rounded-2xl border border-border bg-card p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-muted/50 flex flex-col items-center justify-center p-6 text-center border border-border/40">
                {profileData.profileImage.isAvailable ? (
                  <Image
                    src={profileData.profileImage.src}
                    alt={`${profileData.fullName} — ${profileData.primaryRole}`}
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    priority
                    className="object-cover"
                  />
                ) : (
                  /* Clean technical profile frame placeholder when image file is pending */
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-xl">
                      AM
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-sm font-bold text-foreground">
                        {profileData.brandName}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {profileData.primaryRole}
                      </p>
                      <p className="text-[11px] text-muted-foreground/80 font-mono pt-1">
                        SMK Telkom Malang
                      </p>
                    </div>
                    <Badge variant="outline" size="sm" className="text-[10px] font-mono text-muted-foreground">
                      NestJS · Prisma · PostgreSQL
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
