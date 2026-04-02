import type { Metadata } from "next";
import { ResultsTable } from "@/components/ResultsTable";

export const metadata: Metadata = {
  title: "All Sites — WebTaskBench",
  description:
    "Full sortable and filterable table of all 44 benchmarked sites with token counts and compression ratios.",
};

export default function SitesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-2 font-mono text-xs tracking-[0.25em] text-muted">
        ALL SITES
      </div>
      <h1 className="mb-2 font-display text-4xl font-bold">
        Benchmarked Sites
      </h1>
      <p className="mb-8 font-body text-sm text-muted">
        44 sites successfully fetched and analyzed. Click column headers to sort.
        Search to filter by URL.
      </p>
      <ResultsTable showSearch pageSize={44} />

      <div className="mt-12 rounded border border-border bg-surface-2 p-6">
        <h2 className="mb-3 font-display text-lg font-bold">
          Reading the Results
        </h2>
        <div className="space-y-2 font-body text-sm text-muted">
          <p>
            <span className="font-mono font-bold text-accent">
              Teal badges
            </span>{" "}
            indicate sites where SOM achieves 10x+ compression over raw HTML.
          </p>
          <p>
            <span className="font-mono font-bold text-warning">
              Amber badges
            </span>{" "}
            indicate moderate compression (1–10x).
          </p>
          <p>
            <span className="font-mono font-bold text-loss">Red badges</span>{" "}
            indicate sites where SOM is larger than raw HTML — typically minimal
            pages.
          </p>
        </div>
      </div>
    </div>
  );
}
