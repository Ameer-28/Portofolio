import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { Terminal, Code2, ArrowRight, ExternalLink } from "lucide-react";

export default function UIPreviewPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <Container size="lg" className="space-y-16">
        <header className="border-b pb-8">
          <Badge variant="outline" className="mb-2">
            Development Preview
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Phase 2 — Design System & Primitive Components
          </h1>
          <p className="text-muted-foreground mt-2">
            Isolated visual sandbox to verify typography, color tokens, states, accessibility, and responsiveness.
          </p>
        </header>

        {/* 1. Typography Hierarchy */}
        <section className="space-y-4">
          <SectionHeading
            badge="Typography"
            title="Type Scale & Hierarchy"
            description="System font stack with JetBrains Mono for code metadata."
          />
          <div className="space-y-4 p-6 border rounded-xl bg-card">
            <div>
              <p className="text-xs font-mono text-muted-foreground">Display / H1 (3xl-4xl)</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Backend Architecture & High-Performance APIs
              </h1>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground">H2 (2xl-3xl)</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Featured Engineering Projects
              </h2>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground">H3 (xl-2xl)</p>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Database Schema & Query Optimization
              </h3>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground">Body Large (lg)</p>
              <p className="text-lg text-foreground leading-relaxed">
                Building practical digital solutions with maintainable code and robust tests.
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground">Body Default (base/sm)</p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Standard body copy with optimized line height for extended readability on mobile and desktop viewports.
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground">Code / Monospace (mono)</p>
              <code className="font-mono text-xs sm:text-sm bg-muted px-2 py-1 rounded">
                nest new project --strict-type-checking
              </code>
            </div>
          </div>
        </section>

        {/* 2. Color Tokens */}
        <section className="space-y-4">
          <SectionHeading
            badge="Colors"
            title="Semantic Color Palette"
            description="Neutral slate base with high contrast and theme-ready CSS variables."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-primary text-primary-foreground">
              <p className="text-xs font-mono">bg-primary</p>
              <p className="font-semibold text-sm">Primary Accent</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary text-secondary-foreground border">
              <p className="text-xs font-mono">bg-secondary</p>
              <p className="font-semibold text-sm">Secondary Base</p>
            </div>
            <div className="p-4 rounded-lg bg-muted text-muted-foreground border">
              <p className="text-xs font-mono">bg-muted</p>
              <p className="font-semibold text-sm">Muted Surface</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive text-destructive-foreground">
              <p className="text-xs font-mono">bg-destructive</p>
              <p className="font-semibold text-sm">Destructive</p>
            </div>
          </div>
        </section>

        {/* 3. Button Primitive */}
        <section className="space-y-4">
          <SectionHeading
            badge="Buttons"
            title="Button Component Variants & Sizes"
            description="Accessible interactive triggers with keyboard navigation and focus-visible states."
          />
          <div className="p-6 border rounded-xl bg-card space-y-6">
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-3">Variants (Medium Size)</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">
                  Primary Action <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">
                  Outline Action <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost">Ghost Action</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-mono text-muted-foreground mb-3">Sizes (Small, Medium, Large)</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm" variant="primary">Small Button</Button>
                <Button size="md" variant="primary">Medium Button</Button>
                <Button size="lg" variant="primary">Large Button</Button>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-mono text-muted-foreground mb-3">States (Loading & Disabled)</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" isLoading>
                  Loading State
                </Button>
                <Button variant="outline" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Icon Buttons */}
        <section className="space-y-4">
          <SectionHeading
            badge="Icon Buttons"
            title="Icon-Only Actions"
            description="Accessible action controls with mandatory aria-label."
          />
          <div className="p-6 border rounded-xl bg-card flex flex-wrap gap-4 items-center">
            <IconButton variant="outline" size="sm" aria-label="View Terminal">
              <Terminal className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="md" aria-label="View Source Code">
              <Code2 className="h-5 w-5" />
            </IconButton>
            <IconButton variant="primary" size="lg" aria-label="Execute Command">
              <ArrowRight className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" aria-label="External Link">
              <ExternalLink className="h-5 w-5" />
            </IconButton>
          </div>
        </section>

        {/* 5. Badges */}
        <section className="space-y-4">
          <SectionHeading
            badge="Badges"
            title="Badge Primitive"
            description="Compact tags for technology stacks, categories, and status indicators."
          />
          <div className="p-6 border rounded-xl bg-card space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Primary Tech</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="accent">Prisma ORM</Badge>
              <Badge variant="success" dot>
                Available for Internship
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge size="sm" variant="outline">sm tag</Badge>
              <Badge size="md" variant="outline">md tag</Badge>
            </div>
          </div>
        </section>

        {/* 6. Card Primitive */}
        <section className="space-y-4">
          <SectionHeading
            badge="Cards"
            title="Card Primitive"
            description="Modular container for project showcases, credentials, and timeline items."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card interactive>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Sample Type</Badge>
                  <span className="text-xs font-mono text-muted-foreground">2026</span>
                </div>
                <CardTitle className="mt-2">Interactive Card Component</CardTitle>
                <CardDescription>
                  Demonstrates hover border elevation and subtle shadow transitions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">
                  Card body supports arbitrary layout, text descriptions, tech badges, and nested metrics.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <Badge size="sm" variant="outline">Sample Tag 1</Badge>
                  <Badge size="sm" variant="outline">Sample Tag 2</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Action Link</Button>
                <Button size="sm" variant="ghost">Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standard Static Card</CardTitle>
                <CardDescription>
                  Clean structure for non-interactive content blocks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pre-configured with consistent internal padding, responsive spacing, and border tokens.
                </p>
              </CardContent>
              <CardFooter>
                <Badge variant="success" dot>Operational</Badge>
              </CardFooter>
            </Card>
          </div>
        </section>
      </Container>
    </div>
  );
}
