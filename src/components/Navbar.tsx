"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Engineering Notes" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/85 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-terracotta)] group-hover:bg-[var(--accent-amber)] transition-colors shadow-sm" />
          <span className="font-semibold tracking-tight text-[var(--text-primary)] text-base">
            {profile.name}
          </span>
          <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline-block border border-[var(--border-color)] px-1.5 py-0.5 rounded bg-[var(--bg-surface)]">
            backend.dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-[var(--accent-terracotta)] bg-[var(--badge-bg)] border border-[var(--badge-border)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action icons & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Quick External Links (Desktop) */}
          <div className="hidden sm:flex items-center gap-1 border-r border-[var(--border-color)] pr-2 mr-1">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="Resume (PDF)"
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-terracotta)] hover:bg-[var(--bg-surface-hover)] rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode"
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-amber)] hover:bg-[var(--bg-surface-hover)] rounded-md transition-colors"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] rounded-md transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] rounded-md transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded-md bg-[var(--bg-surface)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-terracotta)]">Resume</a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-amber)]">LeetCode</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">LinkedIn</a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">GitHub</a>
          </div>
        </div>
      )}
    </header>
  );
}
