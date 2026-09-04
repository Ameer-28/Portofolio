"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";

interface InteractiveLanyardProps {
  className?: string;
}

export function InteractiveLanyard({ className = "" }: InteractiveLanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values driven by dragging the card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for realistic physics
  const springConfig = { damping: 18, stiffness: 140, mass: 0.9 };

  // Strap rotation follows the card's horizontal displacement (pivots from ceiling)
  const strapRotate = useSpring(useTransform(x, [-160, 160], [-20, 20]), springConfig);

  // Card has its own natural pendulum angle + 3D tilt
  const cardRotateZ = useSpring(useTransform(x, [-160, 160], [-14, 14]), springConfig);
  const cardRotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), springConfig);
  const cardRotateY = useSpring(useTransform(x, [-160, 160], [-15, 15]), springConfig);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* ─── PENDULUM ROOT: STRAP + CLASP + CARD (Pivots from Top Anchor) ─── */}
      <motion.div
        style={{
          transformOrigin: "top center",
          rotate: strapRotate,
        }}
        animate={{
          rotate: [-1.8, 2.2, -1.2, 1.8, -1.8],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 6,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        {/* Top Ceiling Anchor Shadow */}
        <div className="w-16 h-2 bg-gradient-to-b from-black/80 to-transparent blur-xs -mb-1" />

        {/* ─── 1. LANYARD STRAP (Tali Gantungan yang Ikut Bergerak) ─── */}
        <div className="w-12 sm:w-14 h-40 sm:h-48 bg-[#0a0a0c] border-x border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex flex-col justify-around items-center py-2.5 overflow-hidden relative rounded-xs">
          {/* Subtle fabric weave texture */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 4px)",
            }}
          />

          {/* Repeated bold text on strap (mirrors the reference "BAYU" text) */}
          {["AMIN", "AMIN", "AMIN", "AMIN"].map((text, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-mono font-black tracking-widest text-white uppercase drop-shadow-sm"
            >
              {text}
            </span>
          ))}
        </div>

        {/* ─── 2. METALLIC CLASP & SWIVEL HOOK (Kaitan Logam) ─── */}
        <div className="flex flex-col items-center -mt-1 z-20">
          {/* Black folded strap clamp */}
          <div className="w-10 h-3 bg-neutral-900 border border-white/20 rounded-xs shadow-xs" />

          {/* Silver Metallic Buckle Ring */}
          <div className="w-6 h-4 rounded-md border-2 border-neutral-300 bg-gradient-to-r from-neutral-400 via-white to-neutral-500 shadow-sm -mt-0.5" />

          {/* Silver Carabiner / Swivel Hook */}
          <svg
            className="w-5 h-8 -mt-1 drop-shadow-md"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C7.5 2 4 5.5 4 10V18C4 22.5 7.5 26 12 26C16.5 26 20 22.5 20 18V10C20 5.5 16.5 2 12 2Z"
              fill="url(#silverHook)"
              stroke="#666"
              strokeWidth="1.2"
            />
            <rect x="8.5" y="22" width="7" height="12" rx="2" fill="url(#silverHook)" stroke="#555" strokeWidth="1" />
            <circle cx="12" cy="30" r="2.5" fill="#111" />
            <defs>
              <linearGradient id="silverHook" x1="4" y1="2" x2="20" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e5e5e5" />
                <stop offset="0.3" stopColor="#ffffff" />
                <stop offset="0.6" stopColor="#999999" />
                <stop offset="1" stopColor="#d4d4d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ─── 3. SIMPLE WHITE POLAROID / ID BADGE CARD (Sesuai Referensi) ─── */}
        <motion.div
          drag
          dragConstraints={{ left: -140, right: 140, top: -50, bottom: 90 }}
          dragElastic={0.22}
          dragTransition={{ bounceStiffness: 220, bounceDamping: 16 }}
          style={{
            x,
            y,
            rotateZ: cardRotateZ,
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
            transformOrigin: "top center",
          }}
          whileHover={{ scale: 1.02, cursor: "grab" }}
          whileTap={{ scale: 0.98, cursor: "grabbing" }}
          className="-mt-3 z-30 touch-none origin-top"
        >
          {/* White Card Frame (Polaroid / Minimal ID Style) */}
          <div className="w-[245px] sm:w-[275px] bg-white text-black rounded-[22px] p-3.5 sm:p-4 shadow-[0_25px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.1)] border border-neutral-200 relative overflow-hidden flex flex-col items-center">
            {/* Top Punch Hole Slot (Lubang Tali Gantungan) */}
            <div className="w-8 h-2.5 rounded-full bg-neutral-900 border border-neutral-300 mb-3 shadow-inner shrink-0" />

            {/* Photo Container */}
            <div className="w-full relative aspect-[4/4.6] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xs">
              {profileData.profileImage.isAvailable ? (
                <Image
                  src={profileData.profileImage.src}
                  alt={`${profileData.fullName} ID Photo`}
                  fill
                  sizes="280px"
                  priority
                  className="object-cover object-top"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-neutral-200 text-neutral-600 font-mono text-xs">
                  ID PHOTO
                </div>
              )}
            </div>

            {/* Bottom Caption Area (Simple & Clean seperti referensi Bayu) */}
            <div className="w-full pt-4 pb-2 relative flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Large stylized watermark behind */}
              <span
                className="absolute inset-0 flex items-center justify-center font-black text-4xl sm:text-5xl text-neutral-200/90 tracking-tighter uppercase select-none pointer-events-none"
                aria-hidden="true"
              >
                AMEER
              </span>

              {/* Foreground clean bold text */}
              <h4 className="relative z-10 font-mono font-extrabold text-xs sm:text-sm tracking-wider text-neutral-900 uppercase">
                BACKEND DEVELOPER
              </h4>
            </div>
          </div>

          {/* Drag interaction hint */}
          <p className="text-[10px] font-mono text-center text-neutral-400 mt-2.5 tracking-wider">
            Tarik kartu untuk mengayun
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InteractiveLanyard;
