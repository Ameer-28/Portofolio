"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/ui/profile-card";
import { profileData } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction & Profile Overview"
      className="relative min-h-screen md:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-grid-pattern py-10 md:py-12 lg:py-16"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 glow-radial-hero pointer-events-none opacity-80"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-16">

          {/* ─── Left: text content ─── */}
          <div className="max-w-md lg:max-w-lg space-y-6 sm:space-y-7 text-center md:text-left py-4 md:py-8 w-full">
            <h1 className="text-xl sm:text-2xl lg:text-[27px] font-normal text-neutral-300 leading-relaxed tracking-tight">
              Hello i&apos;m{" "}
              <strong className="font-extrabold text-white tracking-normal">
                {profileData.fullName.toUpperCase()}
              </strong>
              , a Backend Developer, NestJS Specialist, and API Engineer
            </h1>

            <div className="pt-1 flex justify-center md:justify-start">
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

          {/* ─── Right/Top: Profile Card ─── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <ProfileCard
              avatarUrl={profileData.profileImage.src}
              miniAvatarUrl={profileData.profileImage.src}
              name="Muhammad Amin"
              title={profileData.primaryRole}
              handle={profileData.displayName.toLowerCase()}
              status={profileData.currentStatus}
              contactText="Contact"
              showUserInfo={false}
              detailsPosition="bottom"
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(56, 189, 248, 0.55)"
              onContactClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;
