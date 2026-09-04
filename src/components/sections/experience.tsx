import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationData, certificationsData } from "@/data/education";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

export function ExperienceEducation() {
  return (
    <section
      id="experience"
      aria-label="Riwayat Pendidikan, Sertifikasi & Status Profesional"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Credentials & Background"
          title="Pendidikan, Sertifikasi & Status Magang"
          description="Konteks pendidikan vokasi formal rekayasa perangkat lunak, sertifikasi kompetensi teknis terverifikasi, dan kesiapan berkontribusi dalam tim industri."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline Spine (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Formal Education Card */}
            <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-8 shadow-xl hover:border-white/25 transition-all space-y-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-foreground font-medium">
                  <GraduationCap className="h-3.5 w-3.5 text-foreground" />
                  Pendidikan Formal Vokasi
                </span>
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {educationData.period}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {educationData.institution}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <span>{educationData.program}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {educationData.location}
                  </span>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Status Akademik:</span>
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {educationData.status}
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Fokus Kurikulum Rekayasa Perangkat Lunak:
                </p>
                <ul className="space-y-2 text-xs text-foreground/90">
                  {educationData.relevantLearning.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Professional Status & Internship Readiness */}
            <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <Briefcase className="h-4 w-4 text-foreground" />
                  <span>Kesiapan Magang / Internship</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open for Internship
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Aktif membangun arsitektur backend melalui proyek akademik dan mandiri. Siap beradaptasi dengan alur kerja tim engineering, code review, dan standar industri profesional.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Certifications & Practical Track (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Verified Certifications Card */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-foreground" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                  Sertifikasi Terverifikasi
                </span>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 shadow-xl hover:border-white/25 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-foreground font-medium flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-white" />
                        Verified Competency
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Penerbit Resmi: <span className="text-foreground font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Practical Development & Project Track */}
            <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Layers className="h-4 w-4 text-foreground" />
                <span>Pengembangan Proyek Praktis Terapan</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Kemampuan backend saya diasah lewat proyek nyata (Lapangin, E-Commerce API, Train API), dengan fokus pada:
              </p>
              <ul className="space-y-2.5 text-xs text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <span>Penerapan arsitektur modular NestJS berbasis Dependency Injection & Services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <span>Desain skema relasional, migrasi, dan query type-safe Prisma ORM & PostgreSQL.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <span>Deployment lingkungan cloud serverless dan containerized (Railway & Vercel).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
