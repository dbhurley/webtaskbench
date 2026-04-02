"use client";

import { useState, useMemo } from "react";
import { benchmarkData, getSiteName, formatNumber } from "@/data/benchmark";

type SortKey = "site" | "html_tokens" | "som_tokens" | "ratio";
type SortDir = "asc" | "desc";

interface ResultsTableProps {
  showSearch?: boolean;
  pageSize?: number;
}

export function ResultsTable({ showSearch = true, pageSize = 44 }: ResultsTableProps) {
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
        e.site.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) => {
      const aVal = sortKey === "site" ? a.site : a[sortKey];
      const bVal = sortKey === "site" ? b.site : b[sortKey];
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return data;
  }, [search, sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / pageSize);
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  const top3Ratios = useMemo(() => {
    const s = [...benchmarkData].sort((a, b) => b.ratio - a.ratio);
    return new Set(s.slice(0, 3).map((e) => e.url));
  }, []);

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
    return sortDir === "asc" ? " \u2191" : " \u2193";
  };

  return (
    <div>
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search sites..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="w-full max-w-sm rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text placeholder-muted outline-none focus:border-accent"
          />
        </div>
      )}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th
                className="cursor-pointer px-4 py-3 text-left text-muted hover:text-text"
                onClick={() => handleSort("site")}
              >
                Site{arrow("site")}
              </th>
              <th
                className="cursor-pointer px-4 py-3 text-right text-muted hover:text-text"
                onClick={() => handleSort("html_tokens")}
              >
                HTML Tokens{arrow("html_tokens")}
              </th>
              <th
                className="cursor-pointer px-4 py-3 text-right text-muted hover:text-text"
                onClick={() => handleSort("som_tokens")}
              >
                SOM Tokens{arrow("som_tokens")}
              </th>
              <th
                className="cursor-pointer px-4 py-3 text-right text-muted hover:text-text"
                onClick={() => handleSort("ratio")}
              >
                Compression{arrow("ratio")}
              </th>
              <th className="px-4 py-3 text-right text-muted">Result</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((entry) => {
              const isTop3 = top3Ratios.has(entry.url);
              const isWin = entry.ratio > 1;
              return (
                <tr
                  key={entry.url}
                  className={`border-b border-border/50 transition-colors hover:bg-surface/50 ${
                    isTop3 ? "bg-accent/5" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium">
                    {isTop3 && (
                      <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent" />
                    )}
                    {entry.site}
                  </td>
                  <td className="px-4 py-3 text-right text-muted">
                    {formatNumber(entry.html_tokens)}
                  </td>
                  <td className="px-4 py-3 text-right text-accent">
                    {formatNumber(entry.som_tokens)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {entry.ratio.toFixed(1)}x
                  </td>
                  <td className="px-4 py-3 text-right">
                    {isWin ? (
                      <span className="text-win font-medium">
                        &#10003; {entry.ratio}x
                      </span>
                    ) : (
                      <span className="text-warning font-medium">
                        &#9888; larger
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="rounded border border-border px-3 py-1 text-sm text-muted hover:text-text disabled:opacity-30"
          >
            Prev
          </button>
          <span className="text-sm text-muted">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page >= totalPages - 1}
            className="rounded border border-border px-3 py-1 text-sm text-muted hover:text-text disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
