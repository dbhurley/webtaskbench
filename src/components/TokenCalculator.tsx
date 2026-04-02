"use client";

import { useState } from "react";
import { formatNumber } from "@/data/benchmark";

const AVG_HTML = 33181;
const AVG_SOM = 1895;
const COST_PER_MTOK = 3;

export function TokenCalculator() {
  const [pages, setPages] = useState(1000);

  const htmlPerDay = pages * AVG_HTML;
  const somPerDay = pages * AVG_SOM;
  const saved = htmlPerDay - somPerDay;
  const costSaved = (saved / 1_000_000) * COST_PER_MTOK;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <h3 className="mb-2 text-xl font-bold text-text">Token Cost Calculator</h3>
      <p className="mb-6 text-sm text-muted">
        See how much your agent could save by switching from raw HTML to SOM.
      </p>

      <div className="mb-6">
        <label className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted">My agent fetches</span>
          <span className="font-bold text-accent">{formatNumber(pages)} pages/day</span>
        </label>
        <input
          type="range"
          min={100}
          max={100000}
          step={100}
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>100</span>
          <span>100,000</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-bg p-4">
          <div className="text-xs text-muted">HTML tokens/day</div>
          <div className="mt-1 text-lg font-bold text-text">
            {formatNumber(htmlPerDay)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-bg p-4">
          <div className="text-xs text-muted">SOM tokens/day</div>
          <div className="mt-1 text-lg font-bold text-accent">
            {formatNumber(somPerDay)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-bg p-4">
          <div className="text-xs text-muted">Tokens saved/day</div>
          <div className="mt-1 text-lg font-bold text-win">
            {formatNumber(saved)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-bg p-4">
          <div className="text-xs text-muted">Cost saved/day (@ $3/MTok)</div>
          <div className="mt-1 text-lg font-bold text-win">
            ${costSaved.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
