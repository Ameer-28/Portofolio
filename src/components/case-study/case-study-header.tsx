import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { CaseStudyData } from "@/types/case-study";
import { ArrowLeft, ExternalLink, ArrowUpRight, ArrowRight, UserCheck } from "lucide-react";

interface CaseStudyHeaderProps {
  data: CaseStudyData;
}

export function CaseStudyHeader({ data }: CaseStudyHeaderProps) {
  return (
    <header className="space-y-6 pb-8 border-b border-border/60">
      {/* Back Navigation */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm py-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Projects
        </Link>
      </div>

      {/* Title & Metadata */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" size="sm" className="font-mono">
            Case Study
          </Badge>
          <Badge variant="outline" size="sm" className="font-mono text-muted-foreground">
            {data.projectType}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 pl-1">
            <UserCheck className="h-3 w-3" />
            {data.role}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
          {data.projectName}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {data.tagline}
        </p>
      </div>

      {/* Technologies Row */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {data.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            size="sm"
            className="font-mono text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Action Buttons & Cross-links */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {data.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              href={data.liveUrl}
              isExternal
              className="text-xs"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          )}

          {data.liveApiUrl && (
            <Button
              variant="primary"
              size="sm"
              href={data.liveApiUrl}
              isExternal
              className="text-xs"
            >
              Live API
              <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            href={data.githubUrl}
            isExternal
            className="text-xs"
          >
            <GithubIcon className="h-3.5 w-3.5 mr-1" />
            Source Code
          </Button>
        </div>

        {/* Cross-link to related project if available */}
        {data.relatedCaseStudy && (
          <Link
            href={`/projects/${data.relatedCaseStudy.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground hover:text-primary transition-colors border border-border/80 px-3 py-1.5 rounded-md bg-muted/40 hover:bg-muted"
          >
            <span>Related: {data.relatedCaseStudy.name}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </header>
  );
}
