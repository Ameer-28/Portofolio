"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";
import { ShieldCheck, Sparkles, Terminal } from "lucide-react";

interface InteractiveLanyardProps {
  className?: string;
}

export function InteractiveLanyard({ className = "" }: InteractiveLanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for interactive physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for card rotation and movement
  const springConfig = { damping: 15, stiffness: 120, mass: 0.8 };
  const rotateZ = useSpring(useTransform(x, [-100, 100], [-18, 18]), springConfig);
  const rotateX = useSpring(useTransform(y, [-80, 80], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* ─── 1. LANYARD STRAP (Tali Gantungan) ─── */}
      <div className="relative flex flex-col items-center z-10">
        {/* Top ceiling anchor shadow */}
        <div className="w-16 h-3 bg-gradient-to-b from-black/80 to-transparent blur-xs -mb-1" />

        {/* Woven Fabric Strap */}
        <div className="w-11 sm:w-12 h-36 sm:h-44 bg-neutral-900 border-x border-white/15 shadow-[0_8px_20px_rgba(0,0,0,0.8)] flex flex-col justify-around items-center py-2 overflow-hidden relative">
          {/* Subtle fabric weave texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 0, transparent 4px)",
            }}
          />

          {/* Repeated typography along the strap (like "BAYU" in the reference) */}
          {["AMEER", "BACKEND", "AMEER", "DEV"].map((text, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-[11px] font-mono font-black tracking-widest text-white/85 uppercase"
            >
              {text}
            </span>
          ))}
        </div>

        {/* ─── 2. METALLIC CLASP & SWIVEL HOOK (Kaitan Logam) ─── */}
        <div className="flex flex-col items-center -mt-1 z-20">
          {/* Metal Buckle Clasp */}
          <div className="w-9 h-3.5 rounded-sm bg-gradient-to-r from-neutral-400 via-white to-neutral-500 border border-neutral-600 shadow-md" />

          {/* Metal Ring */}
          <div className="w-4 h-4 rounded-full border-2 border-neutral-300 bg-transparent shadow-xs -mt-1" />

          {/* Silver Carabiner / Swivel Hook */}
          <svg
            className="w-5 h-7 -mt-1 text-neutral-300 drop-shadow-md"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.68629 2 6 4.68629 6 8V16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16V8C18 4.68629 15.3137 2 12 2Z"
              fill="url(#metalGrad)"
              stroke="#555"
              strokeWidth="1.5"
            />
            <rect x="9" y="20" width="6" height="10" rx="2" fill="url(#metalGrad)" stroke="#444" strokeWidth="1" />
            <circle cx="12" cy="27" r="2" fill="#111" />
            <defs>
              <linearGradient id="metalGrad" x1="6" y1="2" x2="18" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e5e5e5" />
                <stop offset="0.4" stopColor="#ffffff" />
                <stop offset="0.7" stopColor="#999999" />
                <stop offset="1" stopColor="#d4d4d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ─── 3. DRAGGABLE & TILT ID BADGE CARD ─── */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 60, top: -30, bottom: 50 }}
        dragElastic={0.25}
        dragTransition={{ bounceStiffness: 250, bounceDamping: 18 }}
        style={{
          x,
          y,
          rotateZ,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02, cursor: "grab" }}
        whileTap={{ scale: 0.98, cursor: "grabbing" }}
        animate={{
          rotateZ: [-1, 2, -2, 1, -1],
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 6,
            ease: "easeInOut",
          },
        }}
        className="-mt-2 z-30 touch-none origin-top"
      >
        {/* Transparent Lanyard Plastic Slot Header */}
        <div className="w-full flex justify-center -mb-2 z-40 relative">
          <div className="w-14 h-4 bg-white/10 backdrop-blur-md rounded-t-lg border border-white/25 flex items-center justify-center">
            {/* Cutout punch hole for clip hook */}
            <div className="w-6 h-1.5 rounded-full bg-black/80 border border-white/20" />
          </div>
        </div>

        {/* ─── PHYSICAL ID BADGE CARD ─── */}
        <div className="w-[260px] sm:w-[285px] bg-[#0e0e11] text-white rounded-2xl p-4 border border-white/20 shadow-[0_24px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.06)] relative overflow-hidden">
          {/* Glass glare highlight that moves across the card */}
          <div
            className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none rotate-45 transform"
            aria-hidden="true"
          />

          {/* Card Top Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-wider text-white">
                {profileData.brandName}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>ACCESS PASS</span>
            </div>
          </div>

          {/* Photo Container (Polaroid/ID Style Frame with subtle tilt) */}
          <div className="my-3 relative rounded-xl overflow-hidden border border-white/15 bg-neutral-950 aspect-[4/4.5] shadow-inner group">
            {profileData.profileImage.isAvailable ? (
              <Image
                src={profileData.profileImage.src}
                alt={`${profileData.fullName} ID Photo`}
                fill
                sizes="280px"
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center bg-neutral-900 text-white/50">
                <Terminal className="h-10 w-10 text-white mb-2" />
                <span className="font-mono text-xs">ID PHOTO</span>
              </div>
            )}

            {/* Inner bottom shadow gradient over photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Verification Watermark */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-white/90">
              <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10">
                VERIFIED DEV
              </span>
              <span className="text-[9px] text-white/70">SMK Telkom</span>
            </div>
          </div>

          {/* Card Details / Identity */}
          <div className="space-y-2 pt-1 text-center">
            <div>
              <h4 className="font-extrabold text-sm sm:text-base tracking-tight text-white uppercase">
                {profileData.fullName}
              </h4>
              <p className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                {profileData.primaryRole}
              </p>
            </div>

            {/* Core Tech Stack Micro Badges */}
            <div className="flex flex-wrap justify-center gap-1 pt-1">
              {["NestJS", "TypeScript", "Prisma", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Barcode / Registration Strip */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              {/* Simulated barcode stripes */}
              <div className="flex items-center gap-0.5 h-5 opacity-70">
                {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4].map((w, i) => (
                  <div
                    key={i}
                    className="bg-white h-full"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>

              <span className="font-mono text-[9px] text-neutral-400 tracking-wider">
                ID: AMN-2026-DEV
              </span>
            </div>
          </div>
        </div>

        {/* Drag Hint Tooltip */}
        <p className="text-[10px] font-mono text-center text-neutral-400 mt-2 tracking-wider flex items-center justify-center gap-1">
          <Sparkles className="h-2.5 w-2.5 text-white" />
          Tarik atau gerakkan kartu
        </p>
      </motion.div>
    </div>
  );
}

export default InteractiveLanyard;
