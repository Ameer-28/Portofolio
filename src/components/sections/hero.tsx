import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InteractiveLanyard } from "@/components/ui/interactive-lanyard";
import { profileData } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction & Profile Overview"
      className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-grid-pattern py-12 lg:py-0"
    >
      {/* Top Ambient Radial Glow (Bayu Raja Syah Atmosphere) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 glow-radial-hero pointer-events-none opacity-80"
        aria-hidden="true"
      />

      {/* ─── 3D LANYARD CANVAS: Spans FULL WIDTH & FULL HEIGHT of Hero (No Clipping) ─── */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
        <InteractiveLanyard />
      </div>

      {/* ─── FOREGROUND CONTENT: Clean Minimalist Headline & Single CTA ─── */}
      <Container size="lg" className="relative z-20 pointer-events-none w-full">
        <div className="max-w-md lg:max-w-lg space-y-6 sm:space-y-7 text-left pointer-events-auto py-8">
          <h1 className="text-xl sm:text-2xl lg:text-[27px] font-normal text-neutral-300 leading-relaxed tracking-tight">
            Hello i&apos;m{" "}
            <strong className="font-extrabold text-white tracking-normal">
              {profileData.fullName.toUpperCase()}
            </strong>
            , a Backend Developer, NestJS Specialist, and API Engineer
          </h1>

          <div className="pt-1">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              className="font-semibold text-xs sm:text-sm rounded-full px-7 h-11 bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] inline-flex items-center gap-2"
            >
              Portofolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
