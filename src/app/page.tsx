import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TopChart } from "@/components/TopChart";
import { ResultsTable } from "@/components/ResultsTable";
import { CategoryCards } from "@/components/CategoryCards";
import { TokenCalculator } from "@/components/TokenCalculator";
import { benchmarkMeta } from "@/data/benchmark";
import { verticals } from "@/data/verticals";

function formatRunDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const delta =
    benchmarkMeta.previous_avg_compression != null
      ? (benchmarkMeta.avg_compression - benchmarkMeta.previous_avg_compression).toFixed(1)
      : null;

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero with scan lines */}
      <section className="scan-lines relative py-16 md:py-24">
        <div className="relative z-10">
          {/* Eyebrow */}
          <div className="mb-6 font-mono text-xs tracking-[0.25em] text-muted">
            LIVE OBSERVATORY · UPDATED WEEKLY
          </div>

          {/* Giant headline */}
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            How Well Does Your
            <br />
            <span className="text-accent glow-teal">Agent Read the Web?</span>
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted">
            An open benchmark measuring token efficiency across 44 real websites.
            Fewer tokens means faster agents, lower costs, and more context for reasoning.
          </p>

          {/* Run stamp bar */}
          <div className="mt-6 border-l-2 border-[#00E5A0] pl-4 font-mono text-sm text-[#00E5A0]">
            v{benchmarkMeta.plasmate_version} &middot; {benchmarkMeta.sites_succeeded} sites &middot; Run{" "}
            {formatRunDate(benchmarkMeta.run_date)}
            {delta != null && benchmarkMeta.previous_version && (
              <> &middot; &Delta; avg +{delta}x vs {benchmarkMeta.previous_version}</>
            )}
          </div>

          {/* 3 stat counters */}
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
            <AnimatedCounter
              value={benchmarkMeta.avg_compression}
              suffix="x"
              decimals={1}
              label="Avg Compression"
            />
            <AnimatedCounter
              value={benchmarkMeta.peak_compression}
              suffix="x"
              decimals={1}
              label="Peak Compression"
            />
            <AnimatedCounter value={benchmarkMeta.sites_succeeded} label="Sites Benchmarked" />
          </div>
        </div>
      </section>

      {/* Top 10 Chart */}
      <section className="py-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          Top Compression Leaders
        </h2>
        <p className="mb-8 font-mono text-xs text-muted">
          Teal = SOM tokens · Dark = raw HTML tokens · Lower SOM is better
        </p>
        <div className="rounded border border-border bg-surface-2 p-4 md:p-6">
          <TopChart />
        </div>
      </section>

      {/* Full Results Table */}
      <section className="py-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          Full Benchmark Results
        </h2>
        <p className="mb-6 font-mono text-xs text-muted">
          All 44 sites · Click headers to sort · Search to filter
        </p>
        <ResultsTable />
      </section>

      {/* Category Breakdown */}
      <section className="py-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          Category Breakdown
        </h2>
        <p className="mb-6 font-mono text-xs text-muted">
          Average compression ratio by site category
        </p>
        <CategoryCards />
      </section>

      {/* Browse by Category */}
      <section className="py-12">
        <h2 className="mb-1 font-display text-2xl font-bold">
          Browse by Category
        </h2>
        <p className="mb-6 font-mono text-xs text-muted">
          Deep-dive into vertical-specific benchmark data
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {verticals.map((v) => {
            const avg = v.entries.reduce((s, e) => s + e.ratio, 0) / v.entries.length;
            return (
              <Link
                key={v.id}
                href={`/${v.id}`}
                className="group rounded border border-border bg-surface-2 p-5 transition-all hover:border-accent/40 hover:bg-accent/[0.03]"
              >
                <div className="font-display text-lg font-bold text-text group-hover:text-accent transition-colors">
                  {v.label}
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold text-accent">
                    {avg.toFixed(1)}x
                  </span>
                  <span className="font-mono text-xs text-muted">avg compression</span>
                </div>
                <div className="mt-1 font-mono text-xs text-muted">
                  {v.entries.length} sites measured
                </div>
                <div className="mt-3 font-mono text-xs text-accent/70 group-hover:text-accent transition-colors">
                  View leaderboard &rarr;
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Token Calculator */}
      <section className="py-12">
        <TokenCalculator />
      </section>

      {/* Methodology */}
      <section className="py-12">
        <h2 className="mb-6 font-display text-2xl font-bold">Methodology</h2>
        <div className="overflow-x-auto rounded border border-border bg-surface-2">
          <table className="w-full font-mono text-xs">
            <tbody>
              {[
                ["Plasmate version", benchmarkMeta.plasmate_version],
                ["HTML baseline", "curl -sL (raw HTTP, no rendering)"],
                ["Token counter", "tiktoken cl100k_base (GPT-4 tokenizer)"],
                ["Date", formatRunDate(benchmarkMeta.run_date)],
                ["Platform", "Linux x86_64"],
                [
                  "Sites",
                  `${benchmarkMeta.sites_attempted} attempted, ${benchmarkMeta.sites_succeeded} successful, ${benchmarkMeta.sites_attempted - benchmarkMeta.sites_succeeded} failed (anti-bot)`,
                ],
                ["Source", "github.com/plasmate-labs/plasmate-benchmarks"],
              ].map(([key, val]) => (
                <tr key={key} className="border-b border-border/40">
                  <td className="px-4 py-3 font-semibold uppercase tracking-wider text-muted">
                    {key}
                  </td>
                  <td className="px-4 py-3 text-text">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-xs text-muted">
          SOM is defined by the open{" "}
          <a
            href="https://somspec.org"
            className="text-blue transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOMspec specification
          </a>
          .
        </p>
      </section>

      {/* Contribute */}
      <section className="py-12">
        <h2 className="mb-3 font-display text-2xl font-bold">Contribute</h2>
        <p className="mb-4 font-mono text-xs text-muted">
          Add your own sites to the benchmark:
        </p>
        <div className="rounded border border-border bg-surface p-4">
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-accent">
            <code>{`git clone https://github.com/plasmate-labs/plasmate-benchmarks
# Add your URL to urls.txt
# Run: ./run-benchmark.sh
# Submit a PR with your results`}</code>
          </pre>
        </div>
        <p className="mt-3 font-mono text-xs text-muted">
          Source:{" "}
          <a
            href="https://github.com/plasmate-labs/plasmate-benchmarks"
            className="text-blue transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/plasmate-labs/plasmate-benchmarks
          </a>
        </p>
      </section>

      {/* Observatory Vision */}
      <section className="py-12">
        <div className="rounded border border-accent/20 bg-accent/[0.03] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">
            Observatory Vision
          </h2>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted">
            Re-run weekly against the latest Plasmate release. Watch the GitHub
            repo for update notifications. Track how the web is changing for AI
            agents. Which sites are improving their agent-friendliness. Which are
            getting worse. Results follow the{" "}
            <Link href="/protocol" className="text-accent hover:text-accent/80 transition-colors">
              WebTaskBench Protocol v1.0
            </Link>{" "}
            — a reproducible methodology open to third-party submissions.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/plasmate-labs/plasmate-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#00E5A0]/40 text-[#00E5A0] font-mono text-sm rounded hover:bg-[#00E5A0]/10 transition-colors"
            >
              ★ Watch on GitHub for weekly updates
            </a>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-12">
        <div className="rounded border border-border bg-surface-2 p-6">
          <h3 className="font-display text-lg font-bold">
            Badges & Certifications
          </h3>
          <p className="mt-2 font-mono text-xs text-muted">
            For SOM compliance scoring, badges, and certifications, see{" "}
            <a
              href="https://somordom.com"
              className="text-blue transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              somordom.com
            </a>{" "}
            — the community&apos;s SOM compliance tool.
          </p>
        </div>
      </section>
    </div>
  );
}
