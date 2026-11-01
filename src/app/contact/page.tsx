import { profile } from "@/data/profile";
import { Mail, FileText, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { IndicCornerAccent } from "@/components/IndicMotif";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 py-4">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Get in Touch
        </h1>
        <p className="text-sm text-[var(--text-secondary)] font-mono">
          Reach out for backend architecture opportunities, consulting, or technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <a
          href={`mailto:${profile.links.email}`}
          className="relative p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/70 hover:bg-[var(--bg-surface-hover)] transition-all group"
        >
          <IndicCornerAccent />
          <div className="w-10 h-10 rounded-md bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center text-[var(--accent-terracotta)] mb-4">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Email</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            {profile.links.email}
          </p>
          <span className="inline-block mt-4 text-xs font-mono text-[var(--accent-terracotta)] group-hover:underline">
            Send message ▹
          </span>
        </a>

        {/* LinkedIn Card */}
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/70 hover:bg-[var(--bg-surface-hover)] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] mb-4">
            <LinkedinIcon className="w-5 h-5" />
          </div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">LinkedIn</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            Connect professionally & chat
          </p>
          <span className="inline-block mt-4 text-xs font-mono text-[var(--accent-amber)] group-hover:underline">
            View profile ▹
          </span>
        </a>

        {/* LeetCode Card */}
        <a
          href={profile.links.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-amber)]/70 hover:bg-[var(--bg-surface-hover)] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center text-[var(--accent-amber)] mb-4">
            <LeetCodeIcon className="w-5 h-5" />
          </div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">LeetCode</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            600+ problems solved in Go, Java & C++
          </p>
          <span className="inline-block mt-4 text-xs font-mono text-[var(--accent-amber)] group-hover:underline">
            Inspect solutions ▹
          </span>
        </a>

        {/* GitHub Card */}
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/70 hover:bg-[var(--bg-surface-hover)] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] mb-4">
            <GithubIcon className="w-5 h-5" />
          </div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">GitHub</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            Open-source repositories & experiments
          </p>
          <span className="inline-block mt-4 text-xs font-mono text-[var(--accent-terracotta)] group-hover:underline">
            Explore code ▹
          </span>
        </a>
      </div>

      {/* Meta Card: Timezone & Resume */}
      <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
            <span>Based in {profile.location}</span>
            <span className="text-[var(--text-muted)]">•</span>
            <Clock className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
            <span>IST (UTC+05:30)</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Accustomed to async collaboration with globally distributed teams.
          </p>
        </div>

        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-terracotta)] hover:opacity-95 text-white text-xs font-mono font-medium shadow-sm transition-all whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </div>
  );
}
