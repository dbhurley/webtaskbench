import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TopChart } from "@/components/TopChart";
import { ResultsTable } from "@/components/ResultsTable";
import { CategoryCards } from "@/components/CategoryCards";
import { TokenCalculator } from "@/components/TokenCalculator";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          How well does your agent
          <br />
          <span className="text-accent">read the web?</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          An open benchmark measuring token efficiency across the real web.
          Fewer tokens means faster agents, lower costs, and more context for
          reasoning.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <AnimatedCounter value={44} />
            <div className="mt-1 text-sm text-muted">Sites benchmarked</div>
          </div>
          <div>
            <AnimatedCounter value={17.5} suffix="x" decimals={1} />
            <div className="mt-1 text-sm text-muted">Average compression</div>
          </div>
          <div>
            <AnimatedCounter value={6.74} suffix="M" decimals={2} />
            <div className="mt-1 text-sm text-muted">Tokens saved per pass</div>
          </div>
          <div>
            <AnimatedCounter value={36} suffix="/44" />
            <div className="mt-1 text-sm text-muted">Sites where SOM wins</div>
          </div>
        </div>
      </section>

      {/* Top 10 Chart */}
      <section className="py-12">
        <h2 className="mb-2 text-2xl font-bold">Top 10 by Compression Ratio</h2>
        <p className="mb-8 text-sm text-muted">
          Purple bars = SOM tokens, gray bars = raw HTML tokens. Lower is better for SOM.
        </p>
        <TopChart />
      </section>

      {/* Full Results Table */}
      <section className="py-12">
        <h2 className="mb-2 text-2xl font-bold">Full Benchmark Results</h2>
        <p className="mb-6 text-sm text-muted">
          All 44 sites tested. Click column headers to sort. Search to filter.
        </p>
        <ResultsTable />
      </section>

      {/* Category Breakdown */}
      <section className="py-12">
        <h2 className="mb-2 text-2xl font-bold">Category Breakdown</h2>
        <p className="mb-6 text-sm text-muted">
          Average compression ratio by site category.
        </p>
        <CategoryCards />
      </section>

      {/* Token Calculator */}
      <section className="py-12">
        <TokenCalculator />
      </section>

      {/* Methodology */}
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-bold">Methodology</h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Plasmate version", "0.3.0"],
                ["HTML baseline", "curl -sL (raw HTTP, no rendering)"],
                ["Token counter", "tiktoken cl100k_base (GPT-4 tokenizer)"],
                ["Date", "April 1, 2026"],
                ["Platform", "Linux x86_64"],
                ["Sites", "51 attempted, 44 successful, 7 failed (anti-bot)"],
                ["Source", "github.com/plasmate-labs/plasmate-benchmarks"],
              ].map(([key, val]) => (
                <tr key={key} className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-muted">{key}</td>
                  <td className="px-4 py-3 text-text">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Observatory Vision */}
      <section className="py-12">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
          <h2 className="mb-3 text-2xl font-bold">Observatory Vision</h2>
          <p className="mb-4 text-muted">
            This benchmark will be re-run weekly. Track how the web is changing
            for AI agents. Which sites are improving their agent-friendliness.
            Which are getting worse.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text placeholder-muted outline-none focus:border-accent"
            />
            <button className="rounded-lg bg-accent px-6 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors">
              Notify me when the next run lands
            </button>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-12">
        <h2 className="mb-3 text-2xl font-bold">Contribute</h2>
        <p className="mb-4 text-sm text-muted">
          Add your own sites to the benchmark:
        </p>
        <div className="rounded-lg border border-border bg-surface p-4">
          <pre className="overflow-x-auto text-sm text-text">
            <code>{`git clone https://github.com/plasmate-labs/plasmate-benchmarks
# Add your URL to urls.txt
# Run: ./run-benchmark.sh
# Submit a PR with your results`}</code>
          </pre>
        </div>
        <p className="mt-3 text-sm text-muted">
          Source:{" "}
          <a
            href="https://github.com/plasmate-labs/plasmate-benchmarks"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/plasmate-labs/plasmate-benchmarks
          </a>
        </p>
      </section>

      {/* Badges */}
      <section className="py-12">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="mb-2 text-lg font-bold">Badges & Certifications</h3>
          <p className="text-sm text-muted">
            For SOM compliance scoring, badges, and certifications, see{" "}
            <a
              href="https://somordom.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              somordom.com
            </a>{" "}
            - the community&apos;s SOM compliance tool.
          </p>
        </div>
      </section>
    </div>
  );
}
