"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";
import { benchmarkData, getSiteName, formatNumber } from "@/data/benchmark";

const top10 = [...benchmarkData]
  .sort((a, b) => b.ratio - a.ratio)
  .slice(0, 10)
  .map((entry) => ({
    name: getSiteName(entry.url),
    somTokens: entry.som_tokens,
    htmlTokens: entry.html_tokens,
    ratio: entry.ratio,
  }));

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: (typeof top10)[0] }>;
}) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="rounded border border-blue bg-surface-2 px-4 py-3 font-mono text-xs shadow-xl">
      <p className="mb-1 font-display text-sm font-semibold text-text">
        {data.name}
      </p>
      <p className="text-muted">
        HTML:{" "}
        <span className="text-text">{formatNumber(data.htmlTokens)} tok</span>
      </p>
      <p className="text-muted">
        SOM:{" "}
        <span className="text-accent">{formatNumber(data.somTokens)} tok</span>
      </p>
      <p className="mt-1 font-display font-bold text-accent glow-teal">
        {data.ratio}x compression
      </p>
    </div>
  );
}

export function TopChart() {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={top10}
          layout="vertical"
          margin={{ top: 0, right: 70, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#162033"
            horizontal={false}
          />
          <XAxis
            type="number"
            tick={{ fill: "#4A6080", fontSize: 11, fontFamily: "var(--font-mono)" }}
            axisLine={{ stroke: "#162033" }}
            tickLine={false}
            tickFormatter={(v: number) =>
              v >= 1_000_000
                ? `${(v / 1_000_000).toFixed(0)}M`
                : v >= 1_000
                ? `${(v / 1_000).toFixed(0)}K`
                : `${v}`
            }
          />
          <YAxis
            type="category"
            dataKey="name"
            width={160}
            tick={{ fill: "#E2EAF4", fontSize: 12, fontFamily: "var(--font-mono)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 229, 160, 0.04)" }}
          />
          <Bar dataKey="htmlTokens" radius={[0, 3, 3, 0]} barSize={18}>
            {top10.map((_, i) => (
              <Cell key={i} fill="#162033" />
            ))}
          </Bar>
          <Bar dataKey="somTokens" radius={[0, 3, 3, 0]} barSize={18}>
            {top10.map((_, i) => (
              <Cell key={i} fill="#00E5A0" />
            ))}
            <LabelList
              dataKey="ratio"
              position="right"
              formatter={(v) => `${v}x`}
              style={{
                fill: "#00E5A0",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--font-syne)",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
