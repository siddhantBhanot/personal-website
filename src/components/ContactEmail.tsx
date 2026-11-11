"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactEmail() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {}
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm">
      {/* Email Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[var(--ink-faint)] w-14 shrink-0">Email:</span>
          <span className="text-[var(--ink)] font-medium break-all">{profile.links.email}</span>
        </div>
        <div className="flex items-center gap-2 pl-0 sm:pl-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-2 py-0.5 text-xs rounded border border-[var(--line)] bg-[var(--surface-sunk)] text-[var(--ink-faint)] hover:text-[var(--ink)] hover:border-[var(--accent)] cursor-pointer transition-colors"
          >
            {copiedEmail ? "Copied" : "Copy"}
          </button>
          <a
            href={`mailto:${profile.links.email}`}
            className="px-2 py-0.5 text-xs rounded border border-[var(--line)] text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors no-underline"
          >
            Compose ↗
          </a>
        </div>
      </div>

      {/* Phone Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[var(--ink-faint)] w-14 shrink-0">Phone:</span>
          <span className="text-[var(--ink)]">{profile.phone}</span>
        </div>
        <div className="flex items-center gap-2 pl-0 sm:pl-0">
          <button
            type="button"
            onClick={handleCopyPhone}
            className="px-2 py-0.5 text-xs rounded border border-[var(--line)] bg-[var(--surface-sunk)] text-[var(--ink-faint)] hover:text-[var(--ink)] hover:border-[var(--accent)] cursor-pointer transition-colors"
          >
            {copiedPhone ? "Copied" : "Copy"}
          </button>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="px-2 py-0.5 text-xs rounded border border-[var(--line)] text-[var(--accent-gold)] hover:bg-[var(--surface-sunk)] transition-colors no-underline"
          >
            Call ↗
          </a>
        </div>
      </div>
    </div>
  );
}
