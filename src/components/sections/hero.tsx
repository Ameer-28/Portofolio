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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[580px] lg:min-h-[680px]">
          {/* Left Column: Clean Minimalist Headline & Single CTA (Ukuran Pas Sesuai Referensi Bayu) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left py-4">
            <h1 className="text-xl sm:text-2xl lg:text-[27px] font-normal text-neutral-300 leading-relaxed tracking-tight max-w-md">
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

          {/* Right Column: 3D Interactive Lanyard ID Card (6 cols on desktop, prominent & tall) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center -my-6 lg:-my-10">
            <InteractiveLanyard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
