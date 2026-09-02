import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";
import { Server, Code2, Wrench } from "lucide-react";

export function Skills() {
  const categoryIcons = {
    "Backend & Database": Server,
    "Languages & Frameworks": Code2,
    "Tools & DevOps": Wrench,
  };

  return (
    <section
      id="skills"
      aria-label="Keahlian Teknis & Tech Stack"
      className="py-16 sm:py-24 border-t border-border/60 bg-muted/20 relative"
    >
      <Container size="lg">
        <SectionHeading
          badge="Technical Stack"
          title="Keahlian & Penguasaan Teknologi"
          description="Kompilasi teknologi yang digunakan secara aktif dalam membangun sistem backend, perancangan basis data, dan integrasi aplikasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon =
              categoryIcons[group.groupName as keyof typeof categoryIcons] || Code2;

            return (
              <Card
                key={group.groupName}
                className="bg-card border-border flex flex-col justify-between shadow-sm hover:border-border transition-colors"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {group.groupName}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs pt-1.5 leading-relaxed">
                    {group.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      // Semantic badge variant based on verified hierarchy
                      if (skill.isPrimary) {
                        return (
                          <Badge
                            key={skill.name}
                            variant="default"
                            size="md"
                            className="font-medium shadow-xs"
                          >
                            {skill.name}
                          </Badge>
                        );
                      }

                      if (skill.isSecondary) {
                        return (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            size="md"
                            className="border border-border/60 text-foreground"
                          >
                            {skill.name}
                          </Badge>
                        );
                      }

                      return (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          size="md"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Legend / Context Note */}
        <div className="mt-8 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Primary Specialization
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary border border-border" />
              Core Competency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-border" />
              Supporting Ecosystem
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground/80">
            Kompilasi berbasis proyek praktis & kurikulum RPL
          </span>
        </div>
      </Container>
    </section>
  );
}
