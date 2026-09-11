"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.6s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    // Remove from DOM after fade completes (1.6s + 600ms transition)
    const hideTimer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo2.png"
        alt="Logo"
        style={{
          height: "90px",
          width: "auto",
          objectFit: "contain",
          filter: "invert(1)",
          animation: "ls-pulse 1.2s ease-in-out infinite",
        }}
      />

      {/* Progress bar */}
      <div
        style={{
          width: "120px",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.12)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#fff",
            borderRadius: "9999px",
            animation: "ls-progress 1.6s ease forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes ls-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.96); }
        }
        @keyframes ls-progress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
