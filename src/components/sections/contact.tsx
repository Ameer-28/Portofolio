"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { Mail, FileText, ArrowUpRight, MapPin, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const professionalProfiles = [
    {
      name: "GitHub",
      handle: "Ameer-28",
      url: profileData.social.github,
      icon: GithubIcon,
      description: "Lihat repositori dan arsitektur source code backend.",
    },
    {
      name: "LinkedIn",
      handle: "Muhammad Amin Murtadho",
      url: profileData.social.linkedin,
      icon: LinkedinIcon,
      description: "Profil profesional, verifikasi kredensial & koneksi karir.",
    },
    {
      name: "Instagram",
      handle: "@aameeerr__",
      url: profileData.social.instagram || "https://www.instagram.com/aameeerr__/",
      icon: InstagramIcon,
      description: "Update keseharian & aktivitas personal.",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Kontak & Unduh CV"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Get in Touch"
          title="Mari Terhubung & Berkolaborasi"
          description="Terbuka untuk peluang magang/internship rekayasa backend, kolaborasi teknis, maupun diskusi profesional."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Primary Contact Conversion Card (Bayu Raja Syah Minimalist Style) */}
          <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-10 shadow-2xl hover:border-white/25 transition-all space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/60 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open for Internship
                </span>
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
              <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Let&apos;s Build Something Meaningful.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Saya siap berkontribusi dalam perancangan arsitektur backend modular, pembuatan REST API terstruktur, dan pemodelan database relasional di lingkungan tim profesional Anda.
              </p>
            </div>

            {/* Direct Email Display with 1-Click Copy */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-foreground shrink-0" />
                <span className="hidden sm:inline">Direct Email:</span>
                <span className="font-mono font-semibold text-foreground select-all">
                  {profileData.social.email}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/15 hover:border-white/40 text-foreground transition-all cursor-pointer select-none"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons (High Contrast Pill Buttons) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${profileData.social.email}`}
                className="text-xs sm:text-sm font-semibold rounded-full px-7 h-11 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
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
                className="text-xs sm:text-sm font-mono rounded-full px-6 h-11 border-neutral-300 dark:border-white/20 bg-neutral-100/60 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-foreground transition-all"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

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
                    className="p-5 rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md hover:border-white/30 transition-all flex flex-col justify-between space-y-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-md"
                    aria-label={`${profile.name} — ${profile.handle}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-9 w-9 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>

                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-foreground">
                        {profile.name}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {profile.handle}
                      </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground leading-relaxed pt-2 border-t border-border/50 dark:border-white/10">
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
