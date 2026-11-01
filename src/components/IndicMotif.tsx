export function IndicMotifDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 opacity-75 ${className}`}>
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--border-color)]" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-terracotta)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      >
        <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9" />
        <circle cx="12" cy="12" r="2" fill="var(--accent-amber)" />
      </svg>
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--border-color)]" />
    </div>
  );
}

export function IndicCornerAccent() {
  return (
    <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-40">
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full stroke-[var(--accent-terracotta)]">
        <path d="M0 0 H32 V32" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="28" cy="4" r="1.5" fill="var(--accent-amber)" />
      </svg>
    </div>
  );
}

