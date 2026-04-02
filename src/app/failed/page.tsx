import type { Metadata } from "next";
import { failedSites } from "@/data/benchmark";

export const metadata: Metadata = {
  title: "Failed Sites — WebTaskBench",
  description:
    "7 sites that could not be benchmarked due to anti-bot detection, heavy JavaScript rendering, or rate limiting.",
};

export default function FailedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-2 font-mono text-xs tracking-[0.25em] text-muted">
        FAILED SITES
      </div>
      <h1 className="mb-2 font-display text-4xl font-bold">
        Sites That Blocked Us
      </h1>
      <p className="mb-8 font-body text-sm text-muted">
        7 out of 51 attempted sites could not be benchmarked. Transparency about
        failures is important for a credible benchmark.
      </p>

      <div className="overflow-x-auto rounded border border-border">
        <table className="w-full font-mono text-xs">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider text-muted">
                Site
              </th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider text-muted">
                Reason
              </th>
            </tr>
          </thead>
          <tbody>
            {failedSites.map((site) => (
              <tr
                key={site.url}
                className="border-b border-border/40 transition-all hover:bg-surface-2 hover:border-l-2 hover:border-l-loss"
              >
                <td className="px-4 py-3 font-bold text-loss">{site.url}</td>
                <td className="px-4 py-3 text-muted">{site.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 space-y-8 font-body text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-text">
            Why Sites Fail
          </h2>
          <p>
            The benchmark uses{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-accent">
              curl -sL
            </code>{" "}
            to fetch pages, which is a plain HTTP client without JavaScript
            execution. This mirrors how many AI agent tools fetch web content.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-text">
            Anti-Bot Detection
          </h2>
          <p>
            Sites like StackOverflow, Reddit, Reuters, and TechCrunch use
            services like Cloudflare to detect and block automated access. The
            curl request receives a challenge page instead of the actual content.
            This is the most common failure mode.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-text">
            JavaScript-Only Rendering
          </h2>
          <p>
            Sites like dev.to are single-page applications that deliver a
            minimal HTML shell and render all content via JavaScript. Without a
            browser engine, the fetched HTML contains almost no usable content.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-text">
            Enterprise Protection
          </h2>
          <p>
            mysql.com uses Oracle&apos;s enterprise-grade bot protection, which
            blocks automated requests. w3.org applies aggressive rate limiting
            and server-side protection.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-text">
            Implications for AI Agents
          </h2>
          <p>
            These failures highlight a real challenge for AI agents: not all of
            the web is accessible via simple HTTP fetching. Agents that need
            content from these sites require browser-based approaches, which add
            complexity and latency.
          </p>
          <p className="mt-3">
            Future benchmark runs may include a browser-based fetching mode to
            capture these sites. For now, we report them honestly as failures.
          </p>
        </section>
      </div>
    </div>
  );
}
