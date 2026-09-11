import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profileData } from "@/data/profile";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      aria-label="Tentang Saya & Latar Belakang"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="About"
          title="Latar Belakang & Fokus Rekayasa"
          description="Konteks pendidikan formal, ketertarikan teknis, dan arah spesialisasi di bidang software engineering."
        />
        <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Type-Safety & Clean Code:</strong> Menjaga struktur kode modular, terdokumentasi, dan bebas inkonsistensi tipe dengan TypeScript.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Relational Database Integrity:</strong> Mendesain skema basis data terstruktur dan efisien menggunakan Prisma ORM dan PostgreSQL.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Continuous Learning:</strong> Terbuka untuk mempelajari standar baru dan siap berkontribusi secara nyata di lingkungan tim profesional.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
