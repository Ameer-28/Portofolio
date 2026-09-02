import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { ArchitectureFlow } from "@/components/case-study/architecture-flow";
import { DatabaseEntities } from "@/components/case-study/database-entities";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { ArrowLeft, CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ameer.dev";
  const pageUrl = `${siteUrl}/projects/${slug}`;

  return {
    title: `${caseStudy.projectName} — Technical Case Study`,
    description: `${caseStudy.tagline} Backend architecture and technical implementation details by Muhammad Amin Murtadho.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: `${caseStudy.projectName} — Technical Case Study`,
      description: `${caseStudy.tagline} Written by Muhammad Amin Murtadho.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.projectName} — Technical Case Study`,
      description: caseStudy.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="py-10 sm:py-16 bg-background">
      <Container size="lg" className="space-y-12">
        {/* Header Section */}
        <CaseStudyHeader data={caseStudy} />

        {/* 1. Overview & System Context */}
        <CaseStudySection
          title="1. Ikhtisar & Konteks Sistem"
          subtitle="Tujuan pembuatan, ruang lingkup aplikasi, dan fungsi utama sistem."
        >
          <div className="space-y-3">
            {caseStudy.overview.map((para, i) => (
              <p key={i} className="text-foreground/90">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-lg bg-muted/40 border border-border/60 text-xs sm:text-sm text-foreground/90 flex items-start gap-2.5">
            <ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>
              <strong>Konteks Operasional:</strong> {caseStudy.systemContext}
            </span>
          </div>
        </CaseStudySection>

        {/* 2. System Architecture */}
        <CaseStudySection
          title="2. Alur Arsitektur Sistem"
          subtitle="Pemisahan layer tanggung jawab dari request client hingga basis data."
        >
          <ArchitectureFlow layers={caseStudy.architectureLayers} />
        </CaseStudySection>

        {/* 3. Backend Implementation Highlights */}
        <CaseStudySection
          title="3. Aspek Teknis Rekayasa Backend"
          subtitle="Implementasi modular, type-safety, dan eksekusi logika bisnis server."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.backendImplementation.map((feature) => (
              <Card key={feature.title} className="bg-card border-border shadow-xs">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    {feature.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <ul className="space-y-2 text-xs text-foreground/90">
                    {feature.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CaseStudySection>

        {/* 4. Database Modeling */}
        <CaseStudySection
          title="4. Pemodelan Basis Data Relasional"
          subtitle="Struktur entitas domain dan manajemen persistensi data menggunakan Prisma ORM."
        >
          <DatabaseEntities
            overview={caseStudy.databaseDesign.overview}
            entities={caseStudy.databaseDesign.entities}
          />
        </CaseStudySection>

        {/* 5. Key Engineering Decisions */}
        <CaseStudySection
          title="5. Keputusan Teknis Penting"
          subtitle="Alasan pemilihan teknologi dan pola arsitektur yang diterapkan."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.keyDecisions.map((decision) => (
              <div
                key={decision.topic}
                className="p-4 rounded-xl border border-border bg-card space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-primary">
                  <Lightbulb className="h-3.5 w-3.5" />
                  {decision.topic}
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  {decision.decision}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Alasan:</strong> {decision.rationale}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 6. Lessons Learned / Takeaways */}
        <CaseStudySection
          title="6. Pembelajaran & Kesimpulan Rekayasa"
          subtitle="Wawasan teknis yang diperoleh dari proses implementasi proyek."
        >
          <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
            {caseStudy.takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-primary font-bold mt-0.5">
                  #{idx + 1}
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between">
          <Button variant="outline" size="sm" href="/#projects">
            <ArrowLeft className="h-3.5 w-3.5 mr-1" />
            Back to All Projects
          </Button>

          <Link
            href="#home"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            ↑ Back to Top
          </Link>
        </div>
      </Container>
    </div>
  );
}
