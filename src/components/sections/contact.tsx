import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { Mail, FileText, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const professionalProfiles = [
    {
      name: "GitHub",
      handle: "Ameer-28",
      url: profileData.social.github,
      icon: GithubIcon,
      description: "Lihat repositori dan source code proyek backend.",
    },
    {
      name: "LinkedIn",
      handle: "Muhammad Amin Murtadho",
      url: profileData.social.linkedin,
      icon: LinkedinIcon,
      description: "Profil profesional dan jaringan karir.",
    },
    {
      name: "Instagram",
      handle: "@aameeerr__",
      url: profileData.social.instagram || "https://www.instagram.com/aameeerr__/",
      icon: InstagramIcon,
      description: "Profil sosial dan aktivitas sehari-hari.",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Kontak & Unduh CV"
      className="py-16 sm:py-24 border-t border-border/60 bg-muted/20 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Get in Touch"
          title="Mari Terhubung & Berkolaborasi"
          description="Terbuka untuk peluang magang/internship rekayasa backend, kolaborasi teknis, maupun diskusi profesional."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Primary Contact Conversion Card */}
          <Card className="bg-card border-border shadow-sm p-6 sm:p-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <Badge variant="success" dot size="sm">
                    Open for Internship
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {profileData.location}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  SMK Telkom Malang (RPL)
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Let&apos;s Build Something Meaningful
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  Saya siap berkontribusi dalam perancangan arsitektur backend modular, pembuatan REST API terstruktur, dan pemodelan database relasional di lingkungan tim profesional.
                </p>
              </div>

              {/* Direct Email Address Display */}
              <div className="p-3.5 rounded-lg bg-muted/50 border border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>Email Langsung:</span>
                </span>
                <a
                  href={`mailto:${profileData.social.email}`}
                  className="font-mono font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {profileData.social.email}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={`mailto:${profileData.social.email}`}
                  className="text-xs sm:text-sm font-medium"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Hubungi via Email
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={profileData.cv.url}
                  download
                  isExternal
                  className="text-xs sm:text-sm font-mono"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </Card>

          {/* 2. Professional & Social Profiles Grid */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center">
              Profil Profesional & Kanal Lainnya
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {professionalProfiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-border bg-card hover:border-slate-400/80 hover:shadow-xs transition-all flex flex-col justify-between space-y-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${profile.name} — ${profile.handle}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>

                    <div className="space-y-0.5">
                      <p className="font-semibold text-sm text-foreground">
                        {profile.name}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {profile.handle}
                      </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground leading-relaxed pt-1 border-t border-border/40">
                      {profile.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
