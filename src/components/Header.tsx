"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {[
            { href: "/", label: "Observatory" },
            { href: "/sites", label: "All Sites" },
            { href: "/methodology", label: "Methodology" },
            { href: "/failed", label: "Failed" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-1.5 font-mono text-xs tracking-wide text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
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
          {[
            { href: "/", label: "Observatory" },
            { href: "/sites", label: "All Sites" },
            { href: "/methodology", label: "Methodology" },
            { href: "/failed", label: "Failed" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 font-mono text-xs tracking-wide text-muted hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
