import type { Metadata } from "next";
import { ResultsTable } from "@/components/ResultsTable";

export const metadata: Metadata = {
  title: "All Sites - WebTaskBench",
  description: "Full sortable and filterable table of all 44 benchmarked sites with token counts and compression ratios.",
};

export default function SitesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-2 text-4xl font-bold">All Benchmarked Sites</h1>
      <p className="mb-8 text-muted">
        44 sites successfully fetched and analyzed. Click column headers to sort.
        Search to filter by URL.
      </p>
      <ResultsTable showSearch pageSize={44} />

      <div className="mt-12 rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-3 text-lg font-bold">Reading the Results</h2>
        <div className="space-y-2 text-sm text-muted">
          <p>
            <span className="text-win font-medium">Green checkmarks</span> indicate
            sites where SOM produces fewer tokens than raw HTML. The number shows
            the compression ratio.
          </p>
          <p>
            <span className="text-warning font-medium">Amber warnings</span> indicate
            sites where SOM is larger than the raw HTML. These are typically minimal
            sites where the semantic overhead exceeds the content.
          </p>
          <p>
            Sites with a <span className="inline-block h-2 w-2 rounded-full bg-accent align-middle" /> purple
            dot are in the top 3 by compression ratio.
          </p>
        </div>
      </div>
    </div>
  );
}
