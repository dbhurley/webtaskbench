"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Observatory" },
  { href: "/sites", label: "All Sites" },
  { href: "/test", label: "Test" },
  { href: "/protocol", label: "Protocol" },
  { href: "/methodology", label: "Methodology" },
  { href: "/failed", label: "Failed" },
];

const verticalLinks = [
  { href: "/news", label: "News & Media" },
  { href: "/saas", label: "SaaS & Cloud" },
  { href: "/devdocs", label: "Dev Docs" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVerticalsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-muted">{"///"}</span>
          <span className="font-display text-lg font-bold tracking-tight text-text">
            Web<span className="text-accent">Task</span>Bench
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-1.5 font-mono text-xs tracking-wide text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          {/* Verticals dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setVerticalsOpen(!verticalsOpen)}
              className="rounded px-3 py-1.5 font-mono text-xs tracking-wide text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              Verticals ▾
            </button>
            {verticalsOpen && (
              <div className="absolute right-0 top-full mt-1 min-w-[160px] rounded border border-border bg-surface py-1 shadow-lg shadow-black/40">
                {verticalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 font-mono text-xs tracking-wide text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                    onClick={() => setVerticalsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button
          className="md:hidden text-muted hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M5 5l10 10M5 15L15 5" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col border-t border-border bg-surface px-4 py-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 font-mono text-xs tracking-wide text-muted hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border/40 mt-1 pt-1">
            <span className="block py-2 font-mono text-[10px] uppercase tracking-widest text-muted/60">
              Verticals
            </span>
            {verticalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 pl-2 font-mono text-xs tracking-wide text-muted hover:text-accent block"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
