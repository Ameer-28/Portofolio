import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileData } from "@/data/profile";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Server,
  Code2,
  CheckCircle2,
} from "lucide-react";

export function About() {
  const profileFacts = [
    {
      label: "Lokasi",
      value: profileData.location,
      icon: MapPin,
    },
    {
      label: "Institusi",
      value: profileData.institution,
      icon: GraduationCap,
    },
    {
      label: "Program Keahlian",
      value: profileData.program,
      icon: Code2,
    },
    {
      label: "Periode Studi",
      value: profileData.educationPeriod,
      icon: Calendar,
    },
    {
      label: "Spesialisasi Utama",
      value: profileData.primaryRole,
      icon: Server,
    },
  ];

  return (
    <section
      id="about"
      aria-label="Tentang Saya & Latar Belakang"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="About Me"
          title="Latar Belakang & Fokus Rekayasa"
          description="Konteks pendidikan formal, ketertarikan teknis, dan arah spesialisasi di bidang software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            {profileData.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-foreground/90">
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Pendekatan & Prinsip Kerja
              </p>
              <ul className="space-y-2.5 text-sm text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Type-Safety & Clean Code:</strong> Menjaga struktur kode modular, terdokumentasi, dan bebas inkonsistensi tipe dengan TypeScript.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Relational Database Integrity:</strong> Mendesain skema basis data terstruktur dan efisien menggunakan Prisma ORM dan PostgreSQL.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Continuous Learning:</strong> Terbuka untuk mempelajari standar baru dan siap berkontribusi secara nyata di lingkungan tim profesional.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Profile Facts Card (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <Card className="bg-card/70 border-border shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-mono">
                    Profile Snapshot
                  </CardTitle>
                  <Badge variant="success" dot size="sm">
                    Open for Internship
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3.5 pt-0">
                {profileFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-border/40 last:border-0"
                    >
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                        {fact.label}
                      </span>
                      <span className="font-medium text-foreground text-right">
                        {fact.value}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
