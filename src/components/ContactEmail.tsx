"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
      <span className="text-[var(--ink)]">{profile.links.email}</span>
      <button
        type="button"
        onClick={handleCopy}
        className="px-2.5 py-1 text-xs rounded border border-[var(--line)] bg-[var(--surface-sunk)] text-[var(--ink-faint)] hover:text-[var(--ink)] hover:border-[var(--accent)] cursor-pointer transition-colors"
      >
        {copied ? "copied" : "copy"}
      </button>
      <a
        href={`mailto:${profile.links.email}`}
        className="px-2.5 py-1 text-xs rounded border border-[var(--line)] text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors no-underline"
      >
        compose email ↗
      </a>
    </div>
  );
}

