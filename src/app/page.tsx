import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TopChart } from "@/components/TopChart";
import { ResultsTable } from "@/components/ResultsTable";
import { CategoryCards } from "@/components/CategoryCards";
import { TokenCalculator } from "@/components/TokenCalculator";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero with scan lines */}
      <section className="scan-lines relative py-16 md:py-24">
        <div className="relative z-10">
          {/* Eyebrow */}
          <div className="mb-6 font-mono text-xs tracking-[0.25em] text-muted">
            WEBTASKBENCH / v1.0 / APR 2026
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

          {/* 4 stat counters */}
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <AnimatedCounter value={44} label="Sites Benchmarked" />
            <AnimatedCounter
              value={17.5}
              suffix="x"
              decimals={1}
              label="Avg Compression"
            />
            <AnimatedCounter
              value={6.74}
              suffix="M"
              decimals={2}
              label="Tokens Saved"
            />
            <AnimatedCounter value={36} suffix="/44" label="SOM Wins" />
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
                ["Plasmate version", "0.3.0"],
                ["HTML baseline", "curl -sL (raw HTTP, no rendering)"],
                ["Token counter", "tiktoken cl100k_base (GPT-4 tokenizer)"],
                ["Date", "April 1, 2026"],
                ["Platform", "Linux x86_64"],
                [
                  "Sites",
                  "51 attempted, 44 successful, 7 failed (anti-bot)",
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
      </section>

      {/* Observatory Vision */}
      <section className="py-12">
        <div className="rounded border border-accent/20 bg-accent/[0.03] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">
            Observatory Vision
          </h2>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted">
            This benchmark will be re-run weekly. Track how the web is changing
            for AI agents. Which sites are improving their agent-friendliness.
            Which are getting worse.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded border border-border bg-surface px-4 py-2 font-mono text-xs text-text placeholder-muted/40 outline-none transition-colors focus:border-accent/50"
            />
            <button className="rounded bg-accent px-6 py-2 font-display text-xs font-bold uppercase tracking-wider text-bg transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]">
              Notify me
            </button>
          </div>
        </div>
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
