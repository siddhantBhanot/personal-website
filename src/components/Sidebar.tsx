"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { JaaliBackgroundPattern } from "@/components/IndicMotif";

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

    const sectionIds = ["about", "experience", "stack", "projects", "achievements", "contact"];
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
    { id: "about", label: "About", href: "/#about" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "stack", label: "Tech Stack", href: "/#stack" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "achievements", label: "Achievements", href: "/#achievements" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="nn-sidebar-slot">
      <aside className={`nn-side ${mobileOpen ? "is-mobile-open" : ""}`}>
        {/* Architectural Jaali Background - light orange shapes with subtle presence */}
        <JaaliBackgroundPattern
          patternId="sidebar-jaali"
          className="opacity-[0.128] dark:opacity-[0.16] text-[var(--jaali-color)]"
          strokeWidth={0.85}
        />

        {/* Profile Info with DP */}
        <div className="nn-side-profile relative z-10">
          <Link href="/" className="inline-block" aria-label="Siddhant Bhanot - Portfolio Home">
            <div className="relative inline-flex items-center justify-center group">
              {/* Outer decorative ring with Indic terracotta accent */}
              <div className="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] rounded-full p-[2px] border border-[var(--line-strong)] group-hover:border-[var(--accent)] transition-all duration-300 bg-[var(--surface-sunk)] shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                  <img
                    src="/images/profile-img.png"
                    alt="Siddhant Bhanot"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={66}
                    height={66}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Architectural Stepped Baoli diamond indicator */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shadow-xs">
                <span className="w-2 h-2 rotate-45 bg-[var(--accent)]" />
              </span>
            </div>
          </Link>

          <p className="nn-side-name mt-1">
            <Link href="/" className="text-[var(--ink)] no-underline hover:text-[var(--accent)]">
              {profile.name}
            </Link>
          </p>
          <span className="nn-side-role">Backend Engineer • 4+ YOE</span>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="nn-mobile-menu relative z-10"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "Close" : "Menu"}
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
            aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} theme`}
          >
            <span className="nn-toggle-glyph" aria-hidden="true" />
            <span className="nn-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <nav aria-label="external links">
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`}>
              Email
            </a>
          </nav>

          <span className="nn-side-copy">© 2026 {profile.name}</span>
        </div>
      </aside>
    </div>
  );
}
