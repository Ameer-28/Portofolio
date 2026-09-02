import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { educationData, certificationsData } from "@/data/education";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
} from "lucide-react";

export function ExperienceEducation() {
  return (
    <section
      id="experience"
      aria-label="Riwayat Pendidikan, Sertifikasi & Status Profesional"
      className="py-16 sm:py-24 border-t border-border/60 bg-muted/20 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Background & Credentials"
          title="Pendidikan, Sertifikasi & Status Profesional"
          description="Konteks pendidikan kejuruan formal, sertifikasi kompetensi teknis yang diperoleh, dan kesiapan berkontribusi dalam program magang."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Education & Current Status (6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Formal Education Card */}
            <Card className="bg-card border-border shadow-xs">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" size="sm" className="font-mono text-xs">
                    <GraduationCap className="h-3.5 w-3.5 mr-1 text-primary" />
                    Pendidikan Formal
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {educationData.period}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {educationData.institution}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm font-medium text-foreground/80 flex items-center gap-2 pt-0.5">
                  <span>{educationData.program}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs font-normal">
                    <MapPin className="h-3 w-3" />
                    {educationData.location}
                  </span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-1">
                <div className="p-2.5 rounded-lg bg-muted/50 border border-border/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">Status Studi:</span>
                  <span className="font-semibold text-foreground">
                    {educationData.status}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Fokus Pembelajaran Kurikulum & Teknis:
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/90">
                    {educationData.relevantLearning.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 2. Professional Status & Internship Readiness */}
            <Card className="bg-card border-border shadow-xs">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Status Profesional & Magang</span>
                  </div>
                  <Badge variant="success" dot size="sm">
                    Open for Internship
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Saat ini aktif menempuh pendidikan vokasi rekayasa perangkat lunak dan membangun sistem backend melalui proyek akademik dan mandiri. Siap belajar, beradaptasi dengan standar industri, dan berkontribusi nyata dalam lingkungan tim profesional.
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Certifications & Practical Development Track (6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Verified Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                  Sertifikasi Kompetensi
                </span>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert) => (
                  <Card
                    key={cert.id}
                    className="bg-card border-border shadow-xs hover:border-slate-400/80 transition-colors"
                  >
                    <CardHeader className="py-3.5 px-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <CardTitle className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                            {cert.name}
                          </CardTitle>
                          <p className="text-xs text-muted-foreground">
                            Penerbit: <span className="text-foreground font-medium">{cert.issuer}</span>
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          size="sm"
                          className="font-mono text-[11px] shrink-0 bg-muted/60"
                        >
                          {cert.periodOrYear}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* 2. Practical Development & Project Track */}
            <Card className="bg-card border-border shadow-xs">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>Pengembangan Proyek Praktis</span>
                </div>
              </CardHeader>
              <CardContent className="pt-1 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  Seluruh kapabilitas rekayasa backend diasah melalui pembuatan proyek fungsional nyata (Lapangin, E-Commerce API, Train API) dengan fokus pada:
                </p>
                <ul className="space-y-1.5 text-xs text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary font-bold mt-0.5">•</span>
                    <span>Penerapan arsitektur modular NestJS berbasis Dependency Injection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary font-bold mt-0.5">•</span>
                    <span>Desain skema relasional dan query type-safe dengan Prisma ORM & PostgreSQL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary font-bold mt-0.5">•</span>
                    <span>Deployment dan integrasi cloud environment (Railway & Vercel).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
