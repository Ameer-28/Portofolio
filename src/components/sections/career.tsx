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
import { Button } from "@/components/ui/button";
import { careerValueData } from "@/data/career";
import {
  Server,
  Database,
  GitBranch,
  Target,
  TrendingUp,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";

export function CareerValue() {
  const contributionIcons = [Server, Database, GitBranch];

  return (
    <section
      id="career"
      aria-label="Kontribusi Nilai & Fokus Karir"
      className="py-16 sm:py-24 border-t border-border/60 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Value & Direction"
          title="Kontribusi Nilai & Fokus Karir"
          description="Bentuk kontribusi teknis nyata yang dapat saya berikan dalam program magang dan arah pengembangan rekayasa perangkat lunak ke depan."
        />

        {/* 1. Internship Contribution Cards (3 Cards) */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Apa yang Dapat Saya Kontribusikan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerValueData.contributions.map((item, index) => {
              const Icon = contributionIcons[index] || Server;
              return (
                <Card
                  key={item.id}
                  className="bg-card border-border shadow-xs flex flex-col justify-between hover:border-slate-400/80 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <Icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs pt-1.5 leading-relaxed text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0">
                    <ul className="space-y-2 text-xs text-foreground/90">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-border/40 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          size="sm"
                          className="font-mono text-[11px] bg-muted/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 2. Career Focus & Growth Areas (2-Column Grid on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Career Focus (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                Arah Fokus Keahlian
              </span>
            </div>

            <div className="space-y-4">
              {careerValueData.careerFocus.map((focus) => (
                <Card key={focus.id} className="bg-card border-border shadow-xs">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base font-semibold text-foreground">
                      {focus.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                      {focus.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-1">
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {focus.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-primary font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Growth & Learning Areas (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                Area yang Sedang & Ingin Didalami
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {careerValueData.growthAreas.map((area) => (
                <Card
                  key={area.id}
                  className="bg-card border-border shadow-xs p-4 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-foreground font-semibold text-xs sm:text-sm">
                      <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{area.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/80 pt-2 uppercase tracking-wider">
                    Target Pembelajaran
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Internship Closing Statement & Readiness */}
        <Card className="bg-muted/40 border-border p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Badge variant="success" dot size="sm">
                  Open for Internship
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">
                  Periode 2025–2026
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                {careerValueData.internshipStatement.message}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="primary"
                size="md"
                href={careerValueData.internshipStatement.actionHref}
                className="text-xs font-medium"
              >
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                {careerValueData.internshipStatement.actionLabel}
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
