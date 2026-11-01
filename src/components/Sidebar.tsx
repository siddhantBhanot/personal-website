"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { JharokhaArchAvatar, JaaliBackgroundPattern } from "@/components/IndicMotif";

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<string>("about");

  // Load and apply theme
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("neuralnets-theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (prefersDark ? "dark" : "dark"); // default to dark
    setTheme(initialTheme);
    root.setAttribute("data-theme", initialTheme);
    root.classList.toggle("dark", initialTheme === "dark");
    root.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("neuralnets-theme", next);
    } catch {}
  };

  // Track active section via IntersectionObserver on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["about", "experience", "projects", "notes", "blogs", "stack", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const navItems = [
    { id: "about", label: "about", href: "/#about" },
    { id: "experience", label: "experience", href: "/#experience" },
    { id: "projects", label: "projects", href: "/#projects" },
    { id: "notes", label: "engineering notes", href: "/#notes" },
    { id: "blogs", label: "blogs", href: "/#blogs" },
    { id: "stack", label: "tech stack", href: "/#stack" },
    { id: "contact", label: "contact", href: "/#contact" },
  ];

  return (
    <div className="nn-sidebar-slot">
      <aside className={`nn-side ${mobileOpen ? "is-mobile-open" : ""}`}>
        {/* Architectural Jaali Background - tuned for clear visibility and clean text contrast */}
        <JaaliBackgroundPattern
          patternId="sidebar-jaali"
          className="opacity-[0.16] dark:opacity-[0.18] text-[var(--line-strong)]"
          strokeWidth={0.85}
        />

        {/* Profile Info with Cusped Jharokha Arch */}
        <div className="nn-side-profile relative z-10">
          <Link href="/" className="inline-block" aria-label="Home">
            <JharokhaArchAvatar>
              {/* Inner Sacred Geometry Emblem */}
              <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5 text-[var(--accent)]">
                <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
                <polygon
                  points="14,6 21,18 7,18"
                  stroke="var(--accent-gold)"
                  strokeWidth="0.8"
                  fill="none"
                />
                <polygon
                  points="14,22 7,10 21,10"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                />
                <circle cx="14" cy="14" r="2" fill="var(--accent)" />
              </svg>
            </JharokhaArchAvatar>
          </Link>

          <p className="nn-side-name mt-1">
            <Link href="/" className="text-[var(--ink)] no-underline hover:text-[var(--accent)]">
              {profile.name.toLowerCase()}
            </Link>
          </p>
          <span className="nn-side-role">backend engineer • 4+ yoe</span>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="nn-mobile-menu relative z-10"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "close" : "menu"}
        </button>

        {/* Navigation */}
        <nav className="nn-nav relative z-10" aria-label="sections">
          {navItems.map((item) => {
            const isCurrent =
              pathname === "/"
                ? activeSection === item.id
                : pathname.startsWith(`/${item.id}`);

            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="nn-side-foot relative z-10">
          <button
            className="nn-btn nn-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className="nn-toggle-glyph" aria-hidden="true" />
            <span className="nn-toggle-label">{theme === "dark" ? "light" : "dark"}</span>
          </button>

          <nav aria-label="external links">
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
              leetcode
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href={`mailto:${profile.links.email}`}>
              email
            </a>
          </nav>

          <span className="nn-side-copy">© 2026 {profile.name.toLowerCase()}</span>
        </div>
      </aside>
    </div>
  );
}
