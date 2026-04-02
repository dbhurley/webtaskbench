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
  const htmlCost = (htmlPerDay / 1_000_000) * COST_PER_MTOK;
  const somCost = (somPerDay / 1_000_000) * COST_PER_MTOK;

  return (
    <div className="rounded border border-border bg-surface-2 p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-text">
        Cost at Scale
      </h3>
      <p className="mt-1 font-mono text-xs text-muted">
        Estimate daily savings switching from raw HTML to SOM
      </p>

      <div className="mt-6 mb-8">
        <label className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs text-muted">pages/day</span>
          <span className="font-mono text-sm font-bold text-accent glow-teal">
            {formatNumber(pages)}
          </span>
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
        <div className="mt-1 flex justify-between font-mono text-[10px] text-muted/50">
          <span>100</span>
          <span>100K</span>
        </div>
      </div>

      {/* Two meters */}
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <div className="rounded border border-border bg-bg p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            HTML Daily Cost
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-loss">
            ${htmlCost.toFixed(2)}
          </div>
          <div className="mt-1 font-mono text-[10px] text-muted">
            {formatNumber(htmlPerDay)} tokens
          </div>
        </div>
        <div className="rounded border border-border bg-bg p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            SOM Daily Cost
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-accent glow-teal">
            ${somCost.toFixed(2)}
          </div>
          <div className="mt-1 font-mono text-[10px] text-muted">
            {formatNumber(somPerDay)} tokens
          </div>
        </div>
      </div>

      <div className="rounded border border-accent/30 bg-accent/5 p-4 text-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          You save
        </div>
        <div className="mt-1 font-mono text-3xl font-bold text-accent glow-teal-strong">
          ${costSaved.toFixed(2)}/day
        </div>
        <div className="mt-1 font-mono text-[10px] text-muted">
          {formatNumber(saved)} tokens saved @ $3/MTok
        </div>
      </div>
    </div>
  );
}
