"use client";

import { useState, useMemo } from "react";
import {
  benchmarkData,
  getSiteName,
  formatTokensShort,
} from "@/data/benchmark";

type SortKey = "site" | "category" | "html_tokens" | "som_tokens" | "ratio";
type SortDir = "asc" | "desc";

interface ResultsTableProps {
  showSearch?: boolean;
  pageSize?: number;
}

export function ResultsTable({
  showSearch = true,
  pageSize = 44,
}: ResultsTableProps) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("ratio");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(0);

  const sorted = useMemo(() => {
    let data = benchmarkData.map((entry) => ({
      ...entry,
      site: getSiteName(entry.url),
    }));

    if (search) {
      data = data.filter((e) =>
        e.site.toLowerCase().includes(search.toLowerCase()) ||
        (e.category ?? "").toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) => {
      let aVal: string | number;
      let bVal: string | number;
      if (sortKey === "site") {
        aVal = a.site;
        bVal = b.site;
      } else if (sortKey === "category") {
        aVal = a.category ?? "";
        bVal = b.category ?? "";
      } else {
        aVal = a[sortKey];
        bVal = b[sortKey];
      }
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return data;
  }, [search, sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / pageSize);
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
    setPage(0);
  }

  const arrow = (key: SortKey) => {
    if (sortKey !== key) return "";
    return sortDir === "asc" ? " ▲" : " ▼";
  };

  function compressionBadge(ratio: number) {
    if (ratio >= 10) {
      return (
        <span className="inline-block rounded bg-accent/15 px-2 py-0.5 font-mono text-xs font-bold text-accent">
          {ratio.toFixed(1)}x
        </span>
      );
    }
    if (ratio >= 1) {
      return (
        <span className="inline-block rounded bg-warning/15 px-2 py-0.5 font-mono text-xs font-bold text-warning">
          {ratio.toFixed(1)}x
        </span>
      );
    }
    return (
      <span className="inline-block rounded bg-loss/15 px-2 py-0.5 font-mono text-xs font-bold text-loss">
        {ratio.toFixed(1)}x
      </span>
    );
  }

  return (
    <div>
      {showSearch && (
        <div className="mb-4">
          <div className="relative max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted">
              &gt;
            </span>
            <input
              type="text"
              placeholder="search sites..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="w-full rounded border border-border bg-surface pl-7 pr-4 py-2 font-mono text-xs text-text placeholder-muted/50 outline-none transition-colors focus:border-accent/50"
            />
          </div>
        </div>
      )}
      <div className="overflow-x-auto rounded border border-border">
        <table className="w-full font-mono text-xs">
          <thead>
            <tr className="border-b border-border bg-surface">
              {(
                [
                  ["site", "SITE", "text-left"],
                  ["category", "CATEGORY", "text-left"],
                  ["html_tokens", "HTML TOKENS", "text-right"],
                  ["som_tokens", "SOM TOKENS", "text-right"],
                  ["ratio", "COMPRESSION", "text-right"],
                ] as const
              ).map(([key, label, align]) => (
                <th
                  key={key}
                  className={`cursor-pointer px-4 py-3 font-semibold tracking-wider text-muted transition-colors hover:text-blue ${align}`}
                  onClick={() => handleSort(key)}
                >
                  {label}
                  {arrow(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.map((entry, i) => {
              return (
                <tr
                  key={entry.url}
                  className="group border-b border-border/40 transition-all hover:bg-surface-2 hover:border-l-2 hover:border-l-accent"
                  style={{
                    animationDelay: i < 20 ? `${i * 20}ms` : undefined,
                    backgroundColor: i % 2 === 0 ? "#04080F" : "#080E18",
                  }}
                >
                  <td className="px-4 py-2.5 font-medium text-text">
                    {entry.site}
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    {entry.category ?? "—"}
                  </td>
                  <td className="px-4 py-2.5 text-right text-muted">
                    {formatTokensShort(entry.html_tokens)}
                  </td>
                  <td className="px-4 py-2.5 text-right text-blue">
                    {formatTokensShort(entry.som_tokens)}
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    {compressionBadge(entry.ratio)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="rounded border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
          >
            prev
          </button>
          <span className="font-mono text-xs text-muted">
            {page + 1}/{totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page >= totalPages - 1}
            className="rounded border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
          >
            next
          </button>
        </div>
      )}
    </div>
  );
}
