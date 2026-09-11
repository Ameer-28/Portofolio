"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationData, certificationsData } from "@/data/education";
import {
  GraduationCap,
  Award,
  MapPin,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Calendar,
} from "lucide-react";

interface EduTimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  status?: string;
  isActive?: boolean;
  bullets?: string[];
}

const educationTimeline: EduTimelineEntry[] = [
  {
    id: "smk-telkom",
    period: educationData.period,
    title: educationData.institution,
    subtitle: educationData.program,
    location: educationData.location,
    status: educationData.status,
    isActive: true,
    bullets: educationData.relevantLearning,
  },
];

function EduTimelineNode({ entry, isLast }: { entry: EduTimelineEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      <div className="relative flex flex-col items-center flex-shrink-0 w-6">
        <div className={`w-3.5 h-3.5 rounded-full mt-1 z-10 flex-shrink-0 ${
          entry.isActive
            ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] border-2 border-white"
            : "bg-neutral-600 border-2 border-neutral-500"
        }`} />
        {!isLast && <div className="flex-1 w-px bg-gradient-to-b from-white/25 to-transparent mt-1.5" />}
      </div>
      <div className="pb-8 flex-1 min-w-0">
        <p className="text-[10px] font-mono tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          {entry.period}
        </p>
        <div className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-5 sm:p-6 shadow-xl hover:border-white/25 transition-all space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="space-y-0.5">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-4 w-4 shrink-0" />
                {entry.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span>{entry.subtitle}</span>
                {entry.location && (
                  <>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />{entry.location}
                    </span>
                  </>
                )}
              </p>
            </div>
            {entry.isActive && entry.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-400 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {entry.status}
              </span>
            )}
          </div>
          {entry.bullets && entry.bullets.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <BookOpen className="h-3 w-3" />
                Fokus Kurikulum Rekayasa Perangkat Lunak
              </p>
              <ul className="space-y-1.5">
                {entry.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type Tab = "education" | "certification";

export function ExperienceEducation() {
  const [activeTab, setActiveTab] = React.useState<Tab>("education");

  return (
    <section
      id="experience"
      aria-label="Riwayat Pendidikan & Sertifikasi"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Credentials & Background"
          title="Pendidikan & Sertifikasi"
          description="Riwayat pendidikan formal dan sertifikasi kompetensi teknis terverifikasi."
        />

        {/* ── Tab buttons ── */}
        <div className="flex gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "education"
                ? "bg-white text-black"
                : "bg-white/5 text-white/60 border border-white/15 hover:bg-white/10 hover:text-white"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Pendidikan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("certification")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "certification"
                ? "bg-white text-black"
                : "bg-white/5 text-white/60 border border-white/15 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Award className="h-4 w-4" />
            Sertifikasi
          </button>
        </div>

        {/* ── Education panel ── */}
        {activeTab === "education" && (
          <div className="max-w-2xl">
            {educationTimeline.map((entry, i) => (
              <EduTimelineNode
                key={entry.id}
                entry={entry}
                isLast={i === educationTimeline.length - 1}
              />
            ))}
          </div>
        )}

        {/* ── Certification panel ── */}
        {activeTab === "certification" && (
          <div className="max-w-2xl space-y-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl border border-border/80 dark:border-white/12 bg-card/90 dark:bg-[#0c0c0e] backdrop-blur-md p-6 shadow-xl hover:border-white/25 transition-all space-y-2"
              >
                <span className="font-mono text-[11px] px-3 py-1 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-foreground font-medium inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-white" />
                  Verified Competency
                </span>
                <h4 className="text-base font-bold text-foreground pt-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">
                  Penerbit Resmi:{" "}
                  <span className="text-foreground font-semibold">{cert.issuer}</span>
                </p>
              </div>
            ))}
          </div>
        )}

      </Container>
    </section>
  );
}
