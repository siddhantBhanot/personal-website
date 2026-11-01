import React from "react";

/**
 * Geometric 8-point star & diamond Jaali (lattice screen) SVG pattern.
 * Creates an authentic stone fretwork atmosphere with ultra-low opacity.
 */
export function JaaliBackgroundPattern({
  className = "opacity-[0.035] dark:opacity-[0.04]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="indic-jaali"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-point geometric star jaali cell */}
            <path
              d="M 24 0 L 31 10 L 41 7 L 38 17 L 48 24 L 38 31 L 41 41 L 31 38 L 24 48 L 17 38 L 7 41 L 10 31 L 0 24 L 10 17 L 7 7 L 17 10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            {/* Concentric octagram inner diamond */}
            <circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <polygon
              points="24,19 29,24 24,29 19,24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            {/* Corner interlock joints */}
            <circle cx="0" cy="0" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="48" cy="0" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="0" cy="48" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="48" cy="48" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#indic-jaali)" />
      </svg>
    </div>
  );
}

/**
 * Architectural Cusped Jharokha Arch Frame for the profile avatar.
 * Combines an ogee arch peak with multi-foil cusped lobes and a stepped base.
 */
export function JharokhaArchAvatar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center p-1 group">
      {/* Outer Arch Outline */}
      <svg
        viewBox="0 0 64 74"
        fill="none"
        className="w-[58px] h-[67px] text-[var(--line-strong)] group-hover:text-[var(--accent)] transition-colors duration-300"
      >
        {/* Architectural Cusped Multi-foil Arch path */}
        <path
          d="
            M 32 3 
            C 34 8, 39 12, 43 12
            C 47 12, 51 15, 53 19
            C 55 23, 58 27, 58 33
            L 58 64
            L 55 64
            L 55 68
            L 9 68
            L 9 64
            L 6 64
            L 6 33
            C 6 27, 9 23, 11 19
            C 13 15, 17 12, 21 12
            C 25 12, 30 8, 32 3
            Z
          "
          stroke="currentColor"
          strokeWidth="1.2"
          fill="var(--surface-sunk)"
        />
        {/* Inner Arch Accent hairline */}
        <path
          d="
            M 32 8
            C 33 12, 37 15, 40 15
            C 44 15, 47 18, 49 22
            C 51 26, 53 30, 53 35
            L 53 62
            L 11 62
            L 11 35
            C 11 30, 13 26, 15 22
            C 17 18, 20 15, 24 15
            C 27 15, 31 12, 32 8
            Z
          "
          stroke="var(--accent-gold)"
          strokeWidth="0.7"
          opacity="0.6"
          strokeDasharray="2 1.5"
          fill="none"
        />
        {/* Kalasha / Finial peak dot */}
        <circle cx="32" cy="3" r="1.5" fill="var(--accent)" />
      </svg>

      {/* Embedded emblem or inner content */}
      <div className="absolute inset-0 flex items-center justify-center pt-2.5">
        {children}
      </div>
    </div>
  );
}

/**
 * Architectural Stepped Baoli (Stepwell) Marker for Timeline and Highlights.
 * Replaces generic round dots with stepped Chand Baori geometric rhythm.
 */
export function SteppedBaoliDot({ isCurrent = false }: { isCurrent?: boolean }) {
  return (
    <div className="absolute -left-[5px] top-[7px] w-[11px] h-[11px] flex items-center justify-center">
      <svg viewBox="0 0 12 12" className="w-full h-full">
        {/* Inverted stepped pyramid / baoli diamond */}
        <polygon
          points="6,0 12,6 6,12 0,6"
          fill={isCurrent ? "var(--accent)" : "var(--line-strong)"}
          className="transition-colors duration-200"
        />
        <polygon
          points="6,2 10,6 6,10 2,6"
          fill={isCurrent ? "var(--bg)" : "var(--surface)"}
        />
        {isCurrent && (
          <circle cx="6" cy="6" r="1.5" fill="var(--accent-gold)" />
        )}
      </svg>
    </div>
  );
}

/**
 * Architectural Lintel / Jaali Strip Divider.
 * Replaces plain line dividers with an intricate perforated stone frieze.
 */
export function JaaliFriezeDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      {/* Stone cornice left bracket */}
      <div className="flex items-center gap-1 opacity-70">
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[var(--line-strong)]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[var(--accent)]" />
      </div>

      {/* Architectural Jaali lattice emblem */}
      <div className="mx-3 flex items-center gap-2 text-[var(--accent)] opacity-85">
        <svg width="24" height="14" viewBox="0 0 28 16" fill="none">
          {/* Cusped arch silhouette */}
          <path
            d="M 2 14 L 2 8 C 2 3, 10 1, 14 1 C 18 1, 26 3, 26 8 L 26 14"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="14" cy="7" r="2" fill="var(--accent-gold)" />
          <path d="M 6 14 L 6 9" stroke="var(--line-strong)" strokeWidth="1" />
          <path d="M 22 14 L 22 9" stroke="var(--line-strong)" strokeWidth="1" />
        </svg>
      </div>

      {/* Stone cornice right bracket */}
      <div className="flex items-center gap-1 opacity-70">
        <span className="w-1.5 h-1.5 rotate-45 border border-[var(--accent)]" />
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[var(--line-strong)]" />
      </div>
    </div>
  );
}

/**
 * Architectural Haveli Bracket / Stepped Corner Motif for cards and callouts.
 */
export function HaveliCornerBracket({
  position = "top-right",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  const getStyle = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90";
      case "top-right":
      default:
        return "top-0 right-0";
    }
  };

  return (
    <div
      className={`absolute ${getStyle()} w-6 h-6 pointer-events-none opacity-40 group-hover:opacity-90 transition-opacity`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--accent)]">
        {/* Stepped stone bracket lines */}
        <path d="M 24 0 L 10 0 L 10 6 L 4 6 L 4 12 L 0 12 L 0 24" stroke="currentColor" strokeWidth="1" />
        <circle cx="17" cy="7" r="1.5" fill="var(--accent-gold)" />
      </svg>
    </div>
  );
}

/**
 * Architectural Arch Silhouette for Section Headings
 */
export function SectionArchBadge({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)] uppercase tracking-wider">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="inline-block">
        <path
          d="M 2 15 L 2 8 C 2 4, 6 2, 8 1 C 10 2, 14 4, 14 8 L 14 15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="7" r="1.5" fill="var(--accent-gold)" />
      </svg>
      {label}
    </span>
  );
}

export const IndicMotifDivider = JaaliFriezeDivider;
export const IndicCornerAccent = HaveliCornerBracket;
