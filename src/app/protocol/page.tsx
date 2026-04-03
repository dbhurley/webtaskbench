import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebTaskBench Protocol v1.0",
  description:
    "A formal methodology for measuring and reporting token efficiency in AI agent web fetching. Open to third-party benchmark submissions.",
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="flex items-start gap-4 mb-6">
        <span className="font-mono text-accent/40 text-sm pt-1 select-none">
          {number}
        </span>
        <h2 className="text-xl font-display text-text">{title}</h2>
      </div>
      <div className="pl-10 text-muted leading-relaxed space-y-4 text-sm">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="rounded border border-border bg-surface p-4 overflow-x-auto">
      <pre className="font-mono text-xs leading-relaxed text-accent">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function ProtocolPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-2 font-mono text-xs tracking-[0.25em] text-muted">
        WEBTASKBENCH PROTOCOL · v1.0
      </div>
      <h1 className="mb-4 font-display text-4xl font-bold">
        Benchmark Protocol
      </h1>
      <p className="mb-4 font-body text-sm leading-relaxed text-muted">
        A formal methodology for measuring and reporting token efficiency in AI
        agent web fetching pipelines. Results published using this protocol are
        comparable and reproducible.
      </p>
      <p className="mb-12 font-mono text-xs text-accent/60">
        This protocol governs all data published at webtaskbench.com. Third
        parties may use it to publish comparable results.
      </p>

      {/* Section 1: Purpose */}
      <Section number="1" title="Purpose">
        <p>
          The WebTaskBench Protocol defines a standard methodology for measuring
          how efficiently different tools represent web pages for language model
          consumption. It establishes:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A common baseline (raw HTML via unauthenticated HTTP GET)</li>
          <li>A standard tokenization method</li>
          <li>Required reporting fields</li>
          <li>Data quality thresholds</li>
          <li>A machine-readable result format</li>
        </ul>
        <p>
          Any tool or framework claiming token efficiency improvements can
          publish results using this protocol. Results are only comparable when
          produced under the same conditions.
        </p>
      </Section>

      {/* Section 2: Definitions */}
      <Section number="2" title="Definitions">
        <dl className="space-y-4">
          <div>
            <dt className="font-mono text-text text-xs">Compression ratio</dt>
            <dd>
              <code className="font-mono text-accent text-xs">
                html_tokens / som_tokens
              </code>
              . A ratio of 10x means the tool produced output 10 times smaller
              than raw HTML.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-text text-xs">HTML baseline</dt>
            <dd>
              Raw HTML fetched via unauthenticated HTTP GET (equivalent to{" "}
              <code className="font-mono text-accent text-xs">
                curl -sL &lt;url&gt;
              </code>
              ), without JavaScript rendering, cookie consent, or
              authentication.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-text text-xs">Token count</dt>
            <dd>
              Number of tokens produced by the tiktoken{" "}
              <code className="font-mono text-accent text-xs">cl100k_base</code>{" "}
              tokenizer (compatible with GPT-3.5/4/4o).
            </dd>
          </div>
          <div>
            <dt className="font-mono text-text text-xs">Session</dt>
            <dd>
              A single fetch of one URL. Sessions are independent and stateless.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-text text-xs">Failure</dt>
            <dd>
              A session where the tool could not produce output within the
              timeout, or where the tool returned an error page, anti-bot
              challenge, or non-content response.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-text text-xs">Category</dt>
            <dd>
              A site classification (SaaS &amp; Cloud, News &amp; Media, Dev
              Tools, General) assigned by the benchmark maintainer.
            </dd>
          </div>
        </dl>
      </Section>

      {/* Section 3: Measurement Methodology */}
      <Section number="3" title="Measurement Methodology">
        <h3 className="font-display text-text text-sm font-bold">
          3.1 HTML Baseline
        </h3>
        <CodeBlock>{`curl -sL --max-time 30 \\
  -H "User-Agent: WebTaskBench/1.0" \\
  "<url>"`}</CodeBlock>
        <p>
          The response body is tokenized directly. No parsing, no rendering, no
          modification.
        </p>

        <h3 className="font-display text-text text-sm font-bold mt-6">
          3.2 Tool Output
        </h3>
        <p>
          The tool under test fetches the same URL and produces its output in
          its native format. For Plasmate, this is SOM JSON. For Firecrawl,
          this is Markdown. For any tool, it is the default output format as
          shipped.
        </p>
        <p>
          Output is tokenized using tiktoken{" "}
          <code className="font-mono text-accent text-xs">cl100k_base</code>.
        </p>

        <h3 className="font-display text-text text-sm font-bold mt-6">
          3.3 Ratio Calculation
        </h3>
        <CodeBlock>{`ratio = round(html_tokens / tool_tokens, 1)`}</CodeBlock>
        <p>
          If{" "}
          <code className="font-mono text-accent text-xs">tool_tokens</code>{" "}
          &gt;{" "}
          <code className="font-mono text-accent text-xs">html_tokens</code>,
          ratio is reported as &lt; 1.0 (tool made it larger). This is a valid
          result.
        </p>

        <h3 className="font-display text-text text-sm font-bold mt-6">
          3.4 Timeout
        </h3>
        <p>
          Sessions timeout at 30,000ms (30 seconds). Timeouts are reported as
          failures.
        </p>

        <h3 className="font-display text-text text-sm font-bold mt-6">
          3.5 Freshness
        </h3>
        <p>
          Data must be collected within 30 days of publication. Data older than
          30 days must be re-collected before being cited.
        </p>
      </Section>

      {/* Section 4: Site Selection */}
      <Section number="4" title="Site Selection">
        <p>Minimum requirements for a valid benchmark run:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>At least 20 sites</li>
          <li>At least 3 categories represented</li>
          <li>No more than 40% of sites from any single category</li>
          <li>Sites must be publicly accessible without authentication</li>
          <li>
            Sites must not be controlled by the benchmark runner (no testing
            your own site only)
          </li>
        </ul>
        <p>
          Recommended: 50+ sites across all four categories, balanced between
          popular and niche.
        </p>
      </Section>

      {/* Section 5: Result Format */}
      <Section number="5" title="Result Format">
        <p>
          Benchmark results must be published as a JSON file conforming to the
          following schema:
        </p>
        <CodeBlock>{`{
  "protocol_version": "1.0",
  "published": "2026-04-01T00:00:00Z",
  "tool": {
    "name": "Plasmate",
    "version": "0.4.1",
    "source": "https://github.com/plasmate-labs/plasmate",
    "license": "Apache 2.0"
  },
  "baseline": {
    "method": "curl -sL",
    "user_agent": "WebTaskBench/1.0",
    "timeout_ms": 30000
  },
  "tokenizer": {
    "library": "tiktoken",
    "model": "cl100k_base"
  },
  "environment": {
    "platform": "Linux x86_64",
    "timeout_ms": 30000
  },
  "results": [
    {
      "url": "https://cloud.google.com",
      "category": "SaaS & Cloud",
      "html_tokens": 759234,
      "tool_tokens": 6436,
      "ratio": 117.9,
      "status": "success"
    },
    {
      "url": "https://stackoverflow.com",
      "category": "Dev Tools",
      "html_tokens": null,
      "tool_tokens": null,
      "ratio": null,
      "status": "failure",
      "failure_reason": "Anti-bot detection (Cloudflare challenge)"
    }
  ],
  "summary": {
    "sites_attempted": 51,
    "sites_succeeded": 44,
    "sites_failed": 7,
    "avg_ratio": 17.5,
    "median_ratio": 9.4,
    "peak_ratio": 117.9,
    "peak_url": "https://cloud.google.com",
    "by_category": {
      "SaaS & Cloud": { "n": 12, "avg_ratio": 47.1 },
      "News & Media": { "n": 8, "avg_ratio": 41.3 },
      "Dev Tools": { "n": 18, "avg_ratio": 11.8 },
      "General": { "n": 6, "avg_ratio": 3.9 }
    }
  }
}`}</CodeBlock>
      </Section>

      {/* Section 6: Submission */}
      <Section number="6" title="Submission">
        <p>
          Third parties may submit benchmark results to webtaskbench.com for
          inclusion in the registry by:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Running the benchmark following this protocol</li>
          <li>
            Producing a result JSON conforming to the schema in Section 5
          </li>
          <li>
            Opening a pull request to{" "}
            <code className="font-mono text-accent text-xs">
              plasmate-labs/plasmate-benchmarks
            </code>{" "}
            with the result file in{" "}
            <code className="font-mono text-accent text-xs">
              results/third-party/&lt;tool-name&gt;-&lt;date&gt;.json
            </code>
          </li>
          <li>
            Including a brief methodology note explaining any deviations from
            the standard
          </li>
        </ol>
        <p>
          Results are reviewed by the webtaskbench maintainers and listed in the
          registry if they meet quality thresholds.
        </p>
      </Section>

      {/* Section 7: Quality Thresholds */}
      <Section number="7" title="Quality Thresholds">
        <p className="text-text font-mono text-xs mb-2">
          Results are accepted if:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>At least 20 sites succeed</li>
          <li>The result file validates against the Section 5 schema</li>
          <li>Failure reasons are documented for all failed sites</li>
          <li>Data is less than 30 days old at time of submission</li>
          <li>
            The tool version is specified and the source is publicly accessible
          </li>
        </ul>

        <p className="text-text font-mono text-xs mb-2 mt-6">
          Results are rejected if:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Sites were cherry-picked (e.g., only sites where the tool performs
            well)
          </li>
          <li>
            The HTML baseline was modified (e.g., after JavaScript rendering)
          </li>
          <li>
            The tokenizer differs from{" "}
            <code className="font-mono text-accent text-xs">cl100k_base</code>{" "}
            without explicit justification
          </li>
        </ul>
      </Section>

      {/* Section 8: Versioning */}
      <Section number="8" title="Versioning">
        <p>
          This protocol is versioned. The current version is{" "}
          <span className="text-text font-mono">1.0</span>. Breaking changes
          (changes to measurement methodology) increment the major version.
          Additive changes (new optional fields) increment the minor version.
        </p>
        <p>
          Results produced under different major versions are not directly
          comparable.
        </p>
      </Section>
    </div>
  );
}
