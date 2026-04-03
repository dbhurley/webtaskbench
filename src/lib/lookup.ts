import { benchmarkData, type BenchmarkEntry } from "@/data/benchmark";

export interface LookupResult {
  type: "exact" | "domain" | "estimated" | "none";
  entry?: BenchmarkEntry;
  category?: string;
  estimated_ratio?: number;
  estimated_basis?: string;
}

// Category average ratios (derived from benchmark data)
const CATEGORY_AVERAGES: Record<string, number> = {
  "SaaS & Cloud": 47,
  "News & Media": 41,
  "Dev Tools": 12,
  General: 4,
};

export function lookup(url: string): LookupResult {
  // Normalize URL
  let normalized = url.trim().toLowerCase();
  if (!normalized.startsWith("http")) normalized = "https://" + normalized;

  try {
    const inputHost = new URL(normalized).hostname.replace(/^www\./, "");

    // Exact URL match
    const exact = benchmarkData.find((e) => {
      try {
        return new URL(e.url).hostname.replace(/^www\./, "") === inputHost;
      } catch {
        return false;
      }
    });

    if (exact) {
      return {
        type: exact.url.toLowerCase() === normalized ? "exact" : "domain",
        entry: exact,
        category: exact.category,
      };
    }

    // Category-based estimate — try to guess category from domain
    const category = guessCategory(inputHost);
    const categoryCount = benchmarkData.filter(
      (e) => e.category === category
    ).length;
    return {
      type: "estimated",
      category,
      estimated_ratio: CATEGORY_AVERAGES[category] ?? 9,
      estimated_basis: `Based on ${category} category average across ${categoryCount} measured sites`,
    };
  } catch {
    return { type: "none" };
  }
}

function guessCategory(host: string): string {
  if (/news|times|guardian|bbc|reuters|cnn|herald|post|wired|ars/.test(host))
    return "News & Media";
  if (
    /github|docs|npm|pypi|crates|rust|node|react|vue|angular|next|vercel|stripe|figma|linear|tailwind|bootstrap|mongodb|docker|aws|azure|cloud\.google/.test(
      host
    )
  )
    return "SaaS & Cloud";
  if (/dev|api|ref|spec|lang/.test(host)) return "Dev Tools";
  return "General";
}
