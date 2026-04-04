"use client";

import { useState, useMemo } from "react";
import type { Vertical } from "@/data/verticals";

function formatTokensShort(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return n.toLocaleString();
}

function compressionBadge(ratio: number) {
  if (ratio >= 10) {
    return (
      <span className="inline-block rounded bg-accent/15 px-2 py-0.5 font-mono text-xs font-bold text-accent">
        {ratio.toFixed(1)}x
      </span>
    );
  }
  if (ratio >= 1) {
    return (
      <span className="inline-block rounded bg-warning/15 px-2 py-0.5 font-mono text-xs font-bold text-warning">
        {ratio.toFixed(1)}x
      </span>
    );
  }
  return (
    <span className="inline-block rounded bg-loss/15 px-2 py-0.5 font-mono text-xs font-bold text-loss">
      {ratio.toFixed(1)}x
    </span>
  );
}

const COST_PER_TOKEN = 0.0000025; // GPT-4o input pricing

const contextBlurbs: Record<string, string> = {
  news: "News sites are among the most frequently visited pages by AI agents performing research, summarization, and monitoring tasks. The average news publisher sends 41× more data than an agent actually needs — meaning every article lookup costs 41× more than necessary. For publishers serving millions of agent requests per day, switching to SOM could cut AI-related infrastructure costs by over 95%.",
  saas: "SaaS platforms and cloud documentation are the backbone of AI coding agents. Every API call lookup, every configuration reference, every troubleshooting query hits these pages. With compression ratios as high as 118×, cloud providers are sending vast amounts of navigation chrome, marketing copy, and framework overhead that agents immediately discard. SOM strips this down to exactly what the agent needs.",
  devdocs: "Developer documentation is the most-read content category for AI coding assistants. Every code completion, every error lookup, every API reference query fetches these pages — often dozens of times per coding session across millions of developers. Even moderate compression ratios of 25–28× translate to enormous aggregate savings when multiplied across the scale of daily AI-assisted development.",
};

export function VerticalPage({ vertical }: { vertical: Vertical }) {
  const [pagesPerDay, setPagesPerDay] = useState(5000);

  const sorted = useMemo(
    () => [...vertical.entries].sort((a, b) => b.ratio - a.ratio),
    [vertical.entries]
  );

  const avgCompression =
    sorted.reduce((sum, e) => sum + e.ratio, 0) / sorted.length;
  const peakEntry = sorted[0];
  const maxRatio = peakEntry.ratio;

  // Dollar savings
  const avgHtml =
    sorted.reduce((sum, e) => sum + e.html_tokens, 0) / sorted.length;
  const avgSom =
    sorted.reduce((sum, e) => sum + e.som_tokens, 0) / sorted.length;
  const monthlySavings =
    (avgHtml - avgSom) * COST_PER_TOKEN * pagesPerDay * 30;

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="mb-6 font-mono text-xs tracking-[0.25em] text-accent">
          VERTICAL BENCHMARK &middot; {vertical.label.toUpperCase()}
        </div>
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {vertical.label}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {vertical.description}
        </p>
        <div className="mt-6 border-l-2 border-accent bg-accent/[0.03] py-3 pl-4 pr-4 rounded-r">
          <p className="font-mono text-sm font-semibold text-accent leading-relaxed">
            {vertical.headline}
          </p>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 pb-12">
        <div className="rounded border border-border bg-surface-2 p-5">
          <div className="font-mono text-xs uppercase tracking-wider text-muted">
            Avg Compression
          </div>
          <div className="mt-2 font-display text-3xl font-bold text-accent glow-teal">
            {avgCompression.toFixed(1)}x
          </div>
        </div>
        <div className="rounded border border-border bg-surface-2 p-5">
          <div className="font-mono text-xs uppercase tracking-wider text-muted">
            Peak Compression
          </div>
          <div className="mt-2 font-display text-3xl font-bold text-accent glow-teal">
            {peakEntry.ratio.toFixed(1)}x
          </div>
          <div className="mt-1 font-mono text-xs text-muted">
            {peakEntry.label}
          </div>
        </div>
        <div className="rounded border border-border bg-surface-2 p-5">
          <div className="font-mono text-xs uppercase tracking-wider text-muted">
            Sites Measured
          </div>
          <div className="mt-2 font-display text-3xl font-bold text-text">
            {sorted.length}
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="pb-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          {vertical.label} Rankings
        </h2>
        <p className="mb-6 font-mono text-xs text-muted">
          Sorted by compression ratio &middot; {sorted.length} sites
        </p>
        <div className="overflow-x-auto rounded border border-border">
          <table className="w-full font-mono text-xs">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-semibold tracking-wider text-muted">
                  RANK
                </th>
                <th className="px-4 py-3 text-left font-semibold tracking-wider text-muted">
                  SITE
                </th>
                <th className="px-4 py-3 text-right font-semibold tracking-wider text-muted">
                  HTML TOKENS
                </th>
                <th className="px-4 py-3 text-right font-semibold tracking-wider text-muted">
                  SOM TOKENS
                </th>
                <th className="px-4 py-3 text-right font-semibold tracking-wider text-muted">
                  COMPRESSION
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((entry, i) => (
                <tr
                  key={entry.url}
                  className="group border-b border-border/40 transition-all hover:bg-surface-2 hover:border-l-2 hover:border-l-accent"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#04080F" : "#080E18",
                  }}
                >
                  <td className="px-4 py-2.5 text-muted">{i + 1}</td>
                  <td className="px-4 py-2.5">
                    <span className="font-medium text-text">{entry.label}</span>
                    <span className="ml-2 text-muted">{entry.url}</span>
                    {entry.note && (
                      <span className="ml-2 rounded bg-accent/10 px-1.5 py-0.5 text-[10px] text-accent">
                        {entry.note}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-right text-muted">
                    {formatTokensShort(entry.html_tokens)}
                  </td>
                  <td className="px-4 py-2.5 text-right text-blue">
                    {formatTokensShort(entry.som_tokens)}
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden w-24 sm:block">
                        <div className="h-1.5 w-full rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-accent/60"
                            style={{
                              width: `${Math.min(100, (entry.ratio / maxRatio) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                      {compressionBadge(entry.ratio)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dollar Savings Calculator */}
      <section className="pb-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          Cost Savings Estimate
        </h2>
        <p className="mb-6 font-mono text-xs text-muted">
          Based on GPT-4o input pricing ($2.50/1M tokens) &middot; {vertical.label} average compression
        </p>
        <div className="rounded border border-border bg-surface-2 p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                Pages per day
              </label>
              <input
                type="range"
                min={100}
                max={100000}
                step={100}
                value={pagesPerDay}
                onChange={(e) => setPagesPerDay(Number(e.target.value))}
                className="w-full"
              />
              <div className="mt-1 font-mono text-sm text-text">
                {pagesPerDay.toLocaleString()} pages/day
              </div>
            </div>
            <div className="rounded border border-accent/30 bg-accent/[0.05] px-6 py-4 text-center">
              <div className="font-mono text-xs uppercase tracking-wider text-muted">
                Est. Monthly Savings
              </div>
              <div className="mt-1 font-display text-3xl font-bold text-accent glow-teal-strong">
                ${monthlySavings.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="pb-12">
        <h2 className="mb-4 font-display text-2xl font-bold">
          What This Means
        </h2>
        <p className="max-w-3xl font-body text-sm leading-relaxed text-muted">
          {contextBlurbs[vertical.id]}
        </p>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="rounded border border-accent/20 bg-accent/[0.03] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold">
              Ready to serve {vertical.label} content efficiently?
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              Get started with SOM-ready pages today.
            </p>
          </div>
          <a
            href="https://somready.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded border border-accent/40 px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            somready.com &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
