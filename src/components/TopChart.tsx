"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof top10[0] }> }) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 text-sm shadow-lg">
      <p className="font-semibold text-text">{data.name}</p>
      <p className="text-muted">
        HTML: <span className="text-text">{formatNumber(data.htmlTokens)} tokens</span>
      </p>
      <p className="text-muted">
        SOM: <span className="text-accent">{formatNumber(data.somTokens)} tokens</span>
      </p>
      <p className="text-win font-semibold">{data.ratio}x compression</p>
    </div>
  );
}

export function TopChart() {
  return (
    <div className="h-[480px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={top10}
          layout="vertical"
          margin={{ top: 0, right: 60, left: 0, bottom: 0 }}
        >
          <XAxis
            type="number"
            tick={{ fill: "#8E8EA0", fontSize: 12 }}
            axisLine={{ stroke: "#2A2A3A" }}
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
            width={150}
            tick={{ fill: "#F8F8F2", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(124, 58, 237, 0.08)" }}
          />
          <Bar dataKey="htmlTokens" radius={[0, 4, 4, 0]} barSize={20}>
            {top10.map((_, i) => (
              <Cell key={i} fill="#2A2A3A" />
            ))}
          </Bar>
          <Bar dataKey="somTokens" radius={[0, 4, 4, 0]} barSize={20}>
            {top10.map((_, i) => (
              <Cell key={i} fill="#7C3AED" />
            ))}
            <LabelList
              dataKey="ratio"
              position="right"
              formatter={(v) => `${v}x`}
              style={{ fill: "#00B894", fontSize: 13, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
