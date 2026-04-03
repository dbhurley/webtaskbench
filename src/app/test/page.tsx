"use client";

import { useState } from "react";
import { lookup, type LookupResult } from "@/lib/lookup";
import { benchmarkMeta, formatNumber } from "@/data/benchmark";

function formatRunDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const GPT4O_INPUT_PRICE = 0.0000015; // per token

function calcDailyCost(tokens: number, pagesPerDay: number): number {
  return tokens * pagesPerDay * GPT4O_INPUT_PRICE;
}

function formatDollars(n: number): string {
  if (n >= 1) return "$" + n.toFixed(2);
  if (n >= 0.01) return "$" + n.toFixed(2);
  return "$" + n.toFixed(4);
}

export default function TestPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [submitUrl, setSubmitUrl] = useState("");
  const [submitCategory, setSubmitCategory] = useState("General");

  function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    const r = lookup(url);
    setResult(r);
    setSubmitUrl(url.trim());
  }

  function handleQuickLookup(example: string) {
    setUrl(example);
    const r = lookup(example);
    setResult(r);
    setSubmitUrl(example);
  }

  const pagesPerDay = 1000;

  const ghIssueUrl = submitUrl
    ? `https://github.com/plasmate-labs/plasmate-benchmarks/issues/new?title=${encodeURIComponent(
        "Benchmark submission: " + submitUrl
      )}&body=${encodeURIComponent(
        `**URL:** ${submitUrl}\n**Category:** ${submitCategory}\n**Already estimated:** ${
          result?.type === "estimated" ? "Yes" : "No"
        }\n**Requester note:** \n`
      )}&labels=submission`
    : "#";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-2 font-mono text-xs tracking-[0.25em] text-accent">
        LIVE LOOKUP · v{benchmarkMeta.plasmate_version} DATA
      </div>
      <h1 className="mb-4 font-display text-4xl font-bold">Test Your Site</h1>
      <p className="mb-8 font-body text-sm text-muted">
        Enter any URL to see its benchmark data or get a projection based on
        category averages.
      </p>

      {/* Lookup form */}
      <form onSubmit={handleLookup} className="mb-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 rounded border border-border bg-surface px-4 py-3 font-mono text-sm text-text placeholder:text-muted/40 outline-none focus:border-accent/40 transition-colors"
          />
          <button
            type="submit"
            className="rounded bg-accent px-6 py-3 font-mono text-sm font-bold text-bg hover:bg-accent/90 transition-colors"
          >
            Look Up
          </button>
        </div>
      </form>

      <div className="mb-12 font-mono text-xs text-muted">
        Try:{" "}
        {["cloud.google.com", "nytimes.com", "vercel.com", "your-site.com"].map(
          (example, i) => (
            <span key={example}>
              {i > 0 && <span className="text-border"> · </span>}
              <button
                onClick={() => handleQuickLookup(example)}
                className="text-muted hover:text-accent transition-colors"
              >
                {example}
              </button>
            </span>
          )
        )}
      </div>

      {/* Results */}
      {result && result.type !== "none" && (
        <div className="mb-12 rounded border border-border bg-surface-2 p-6">
          {(result.type === "exact" || result.type === "domain") &&
            result.entry && (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-accent text-sm">✓</span>
                  <span className="font-mono text-xs text-muted">
                    Found in benchmark data
                  </span>
                  <span className="font-mono text-[10px] text-muted/60 ml-auto">
                    v{benchmarkMeta.plasmate_version} ·{" "}
                    {formatRunDate(benchmarkMeta.run_date)}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm text-text">
                    {result.entry.url}
                  </span>
                  <span className="font-mono text-xs text-accent/60 border border-accent/20 rounded px-2 py-0.5">
                    {result.category}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="font-mono text-[10px] tracking-wider text-muted mb-1">
                      HTML TOKENS
                    </div>
                    <div className="font-mono text-lg text-text">
                      {formatNumber(result.entry.html_tokens)}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-wider text-muted mb-1">
                      SOM TOKENS
                    </div>
                    <div className="font-mono text-lg text-accent">
                      {formatNumber(result.entry.som_tokens)}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-wider text-muted mb-1">
                      COMPRESSION
                    </div>
                    <div className="font-mono text-lg text-text glow-teal">
                      {result.entry.ratio}x
                    </div>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted w-12">
                      HTML
                    </span>
                    <div className="flex-1 h-6 bg-border/30 rounded overflow-hidden">
                      <div
                        className="h-full bg-muted/30 rounded animate-bar"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-accent w-12">
                      SOM
                    </span>
                    <div className="flex-1 h-6 bg-border/30 rounded overflow-hidden">
                      <div
                        className="h-full bg-accent/60 rounded animate-bar"
                        style={{
                          width: `${Math.max(
                            2,
                            (result.entry.som_tokens / result.entry.html_tokens) *
                              100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="font-body text-sm text-muted space-y-1">
                  <p>
                    This site compresses{" "}
                    <span className="text-accent font-mono">
                      {result.entry.ratio}x
                    </span>{" "}
                    better than raw HTML.
                  </p>
                  <p>
                    At {formatNumber(pagesPerDay)} pages/day that&apos;s{" "}
                    <span className="text-accent font-mono">
                      {formatDollars(
                        calcDailyCost(result.entry.html_tokens, pagesPerDay) -
                          calcDailyCost(result.entry.som_tokens, pagesPerDay)
                      )}
                    </span>{" "}
                    saved daily at GPT-4o pricing.
                  </p>
                </div>
              </>
            )}

          {result.type === "estimated" && (
            <>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-warning text-sm">~</span>
                <span className="font-mono text-xs text-muted">
                  Estimated · not yet benchmarked
                </span>
              </div>

              <p className="font-body text-sm text-muted mb-4">
                Based on{" "}
                <span className="text-text font-mono">{result.category}</span>{" "}
                category average (
                {result.estimated_basis?.match(/across (\d+)/)?.[1] ?? "?"}{" "}
                sites measured):
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="font-mono text-[10px] tracking-wider text-muted mb-1">
                    ESTIMATED COMPRESSION
                  </div>
                  <div className="font-mono text-lg text-warning">
                    ~{result.estimated_ratio}x
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-wider text-muted mb-1">
                    ESTIMATED DAILY SAVINGS
                  </div>
                  <div className="font-mono text-lg text-warning">
                    ~
                    {formatDollars(
                      calcDailyCost(50000, pagesPerDay) -
                        calcDailyCost(
                          50000 / (result.estimated_ratio ?? 9),
                          pagesPerDay
                        )
                    )}
                  </div>
                </div>
              </div>

              <p className="font-mono text-xs text-muted/60">
                Actual results vary. Submit below for real measurement.
              </p>
            </>
          )}
        </div>
      )}

      {result && result.type === "none" && (
        <div className="mb-12 rounded border border-loss/20 bg-loss/[0.03] p-6">
          <p className="font-mono text-sm text-loss">
            Could not parse URL. Please enter a valid URL or domain.
          </p>
        </div>
      )}

      {/* Submission */}
      <div className="rounded border border-border bg-surface-2 p-6 mb-12">
        <h2 className="font-display text-lg font-bold mb-4">
          Submit for Next Benchmark Run
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            value={submitUrl}
            onChange={(e) => setSubmitUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 rounded border border-border bg-surface px-4 py-2.5 font-mono text-sm text-text placeholder:text-muted/40 outline-none focus:border-accent/40 transition-colors"
          />
          <select
            value={submitCategory}
            onChange={(e) => setSubmitCategory(e.target.value)}
            className="rounded border border-border bg-surface px-4 py-2.5 font-mono text-sm text-text outline-none focus:border-accent/40 transition-colors"
          >
            <option value="General">General</option>
            <option value="SaaS & Cloud">SaaS &amp; Cloud</option>
            <option value="News & Media">News &amp; Media</option>
            <option value="Dev Tools">Dev Tools</option>
          </select>
          <a
            href={ghIssueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-accent/40 px-5 py-2.5 font-mono text-sm text-accent text-center hover:bg-accent/10 transition-colors"
          >
            Submit
          </a>
        </div>
        <p className="font-mono text-xs text-muted/60">
          Submissions are reviewed and included in the next weekly run.
        </p>
      </div>

      {/* Bottom link */}
      <p className="font-body text-sm text-muted text-center">
        For live head-to-head comparison, see{" "}
        <a
          href="https://somordom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors"
        >
          somordom.com
        </a>
      </p>
    </div>
  );
}
