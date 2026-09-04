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
      className="relative pt-6 sm:pt-12 lg:pt-16 pb-12 sm:pb-20 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Top Ambient Radial Glow (Bayu Raja Syah Atmosphere) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 glow-radial-hero pointer-events-none opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[520px]">
          {/* Left Column: Clean Minimalist Headline & Single CTA (100% Sesuai Referensi Bayu Raja Syah) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-white leading-snug lg:leading-[1.26] tracking-tight max-w-xl">
              Hello i&apos;m{" "}
              <strong className="font-extrabold text-white">
                {profileData.fullName.toUpperCase()}
              </strong>
              , a Backend Developer, NestJS Specialist, and API Engineer
            </h1>

            <div className="pt-1 sm:pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="font-semibold text-sm rounded-full px-8 h-12 bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] inline-flex items-center gap-2"
              >
                Portofolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Lanyard ID Card (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <InteractiveLanyard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
