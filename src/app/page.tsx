import Link from "next/link";
import { profile } from "@/data/profile";
import { getItemsFromDirectory, NoteMeta, ProjectMeta, BlogMeta } from "@/lib/markdown";
import { TechStackGrid } from "@/components/TechStackGrid";
import { IndicCornerAccent } from "@/components/IndicMotif";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import {
  ArrowRight,
  FileText,
  Mail,
  Cpu,
  Layers,
  BookOpen,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  const notes = getItemsFromDirectory<NoteMeta>("notes").slice(0, 3);
  const projects = getItemsFromDirectory<ProjectMeta>("projects").slice(0, 3);
  const blogs = getItemsFromDirectory<BlogMeta>("blogs").slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative pt-6 pb-4">
        <div className="max-w-3xl space-y-6">
          {/* Status Badge with Indic vibe */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-xs font-mono text-[var(--accent-terracotta)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-terracotta)] animate-pulse" />
            <span>Available for Senior Backend Engineering Roles & Consults</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            Engineering resilient, high-throughput systems with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-terracotta)] via-[var(--accent-amber)] to-[var(--accent-terracotta-light)]">
              calm precision.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            I am <strong className="text-[var(--text-primary)] font-semibold">{profile.name}</strong>, a backend-heavy software engineer with <span className="font-mono text-[var(--accent-amber)]">{profile.yearsOfExperience}</span> of production experience designing event-driven microservices, distributed locks, database indexing optimizations, and resilient ingestion pipelines.
          </p>

          {/* Social Links / Resume Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-terracotta)] hover:opacity-95 text-white text-xs font-mono font-medium shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-mono text-[var(--text-primary)] transition-colors"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>LeetCode Profile</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-mono text-[var(--text-primary)] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-mono text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-mono text-[var(--text-primary)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Production Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profile.metrics.map((metric) => (
          <div
            key={metric.label}
            className="relative p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden group hover:border-[var(--accent-terracotta)]/50 transition-all"
          >
            <IndicCornerAccent />
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
              {metric.value}
            </div>
            <div className="text-xs font-semibold text-[var(--text-secondary)] mt-1">
              {metric.label}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
              {metric.detail}
            </div>
          </div>
        ))}
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[var(--accent-terracotta)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Featured Systems & Architecture Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-terracotta)] hover:underline"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.slug}
              className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--accent-amber)] font-medium">
                    {proj.data.role} • {proj.data.period}
                  </span>
                  {proj.data.github && (
                    <a
                      href={proj.data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {proj.data.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {proj.data.summary}
                </p>

                {proj.data.metrics && (
                  <div className="p-2.5 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-terracotta-light)]">
                    <span className="text-[var(--text-muted)]">Scale: </span>
                    {proj.data.metrics}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-[var(--border-subtle)]">
                {proj.data.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Notes Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[var(--accent-amber)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Engineering Notes & Deep Dives
            </h2>
          </div>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-amber)] hover:underline"
          >
            <span>Browse All Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="block p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-amber)]/60 hover:bg-[var(--bg-surface-hover)] transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="text-xs font-mono text-[var(--accent-terracotta)] font-medium">
                  {note.data.tags?.join(" • ")}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {note.data.readingTime} • {note.data.date}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                {note.data.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
                {note.data.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Blogs Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[var(--accent-terracotta)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Technical Blogs & Essays
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-terracotta)] hover:underline"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono text-[var(--text-muted)]">
                  {blog.data.date} • {blog.data.readingTime}
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                  {blog.data.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                  {blog.data.summary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1 text-xs font-mono text-[var(--accent-amber)] group-hover:translate-x-1 transition-transform">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
          <Layers className="w-5 h-5 text-[var(--accent-terracotta)]" />
          <div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Backend Technical Arsenal
            </h2>
            <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
              Production battle-tested tools, engines, and protocols
            </p>
          </div>
        </div>

        <TechStackGrid />
      </section>
    </div>
  );
}
