"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-text">
          <span className="text-accent">Web</span>TaskBench
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm text-muted hover:text-text transition-colors">
            Home
          </Link>
          <Link href="/sites" className="text-sm text-muted hover:text-text transition-colors">
            All Sites
          </Link>
          <Link href="/methodology" className="text-sm text-muted hover:text-text transition-colors">
            Methodology
          </Link>
          <Link href="/failed" className="text-sm text-muted hover:text-text transition-colors">
            Failed Sites
          </Link>
        </nav>
        <button
          className="md:hidden text-muted hover:text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-2 border-t border-border px-4 py-3 md:hidden">
          <Link href="/" className="text-sm text-muted hover:text-text" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/sites" className="text-sm text-muted hover:text-text" onClick={() => setMenuOpen(false)}>All Sites</Link>
          <Link href="/methodology" className="text-sm text-muted hover:text-text" onClick={() => setMenuOpen(false)}>Methodology</Link>
          <Link href="/failed" className="text-sm text-muted hover:text-text" onClick={() => setMenuOpen(false)}>Failed Sites</Link>
        </nav>
      )}
    </header>
  );
}
