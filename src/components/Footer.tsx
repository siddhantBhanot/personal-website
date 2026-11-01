import { profile } from "@/data/profile";
import { IndicMotifDivider } from "./IndicMotif";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { FileText, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <IndicMotifDivider />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-sm text-[var(--text-secondary)]">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-medium text-[var(--text-primary)]">
              {profile.name} • {profile.title}
            </span>
            <p className="text-xs text-[var(--text-muted)]">
              Crafted with Next.js, TypeScript, Tailwind CSS & Antigravity IDE.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--accent-terracotta)] transition-colors text-xs font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--accent-amber)] transition-colors text-xs font-mono"
            >
              <LeetCodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors text-xs font-mono"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors text-xs font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-1.5 hover:text-[var(--accent-terracotta)] transition-colors text-xs font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
