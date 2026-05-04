export interface BenchmarkMeta {
  plasmate_version: string;
  run_date: string;
  sites_attempted: number;
  sites_succeeded: number;
  avg_compression: number;
  median_compression: number;
  peak_compression: number;
  peak_site: string;
  previous_version?: string;
  previous_avg_compression?: number;
}

export const benchmarkMeta: BenchmarkMeta = {
  plasmate_version: "0.5.1",
  run_date: "2026-05-04T07:22:11.086Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.3,
  median_compression: 9.1,
  peak_compression: 133.8,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 27.9,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 861424, som_tokens: 6440, ratio: 133.8, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 138083, som_tokens: 1294, ratio: 106.7, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125194, som_tokens: 1210, ratio: 103.5, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 137002, som_tokens: 1398, ratio: 98, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 437240, som_tokens: 4673, ratio: 93.6, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 913159, som_tokens: 10868, ratio: 84, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 359182, som_tokens: 6673, ratio: 53.8, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 139343, som_tokens: 2598, ratio: 53.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 408925, som_tokens: 8836, ratio: 46.3, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 184400, som_tokens: 5031, ratio: 36.7, category: "General" },
  { url: "https://vercel.com", html_tokens: 378975, som_tokens: 11580, ratio: 32.7, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 461087, som_tokens: 14884, ratio: 31, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102795, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 123060, som_tokens: 5796, ratio: 21.2, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 122345, som_tokens: 6244, ratio: 19.6, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 422790, som_tokens: 26802, ratio: 15.8, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 161237, som_tokens: 15481, ratio: 10.4, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 176300, som_tokens: 19316, ratio: 9.1, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32081, som_tokens: 4345, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 187677, som_tokens: 27605, ratio: 6.8, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34189, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 52834, som_tokens: 22105, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37968, som_tokens: 17725, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18179, som_tokens: 9418, ratio: 1.9, category: "General" },
  { url: "https://medium.com", html_tokens: 2540, som_tokens: 1400, ratio: 1.8, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4688, som_tokens: 3849, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5083, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6075, som_tokens: 6431, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 12025, som_tokens: 14660, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6257, som_tokens: 9256, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9241, som_tokens: 14552, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 72, som_tokens: 348, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2570, som_tokens: 23900, ratio: 0.1, category: "General" },
];

export const failedSites = [
  { url: "stackoverflow.com", reason: "Anti-bot detection (Cloudflare challenge page)" },
  { url: "reddit.com", reason: "Anti-bot detection (requires JavaScript rendering)" },
  { url: "w3.org", reason: "Heavy server-side protection and rate limiting" },
  { url: "reuters.com", reason: "Anti-bot detection (cookie consent wall + JS challenge)" },
  { url: "dev.to", reason: "Heavy JavaScript rendering required (SPA shell only)" },
  { url: "mysql.com", reason: "Anti-bot detection (Oracle enterprise bot protection)" },
];

export function getSiteName(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "") + (u.pathname !== "/" ? u.pathname : "");
  } catch {
    return url;
  }
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatTokensShort(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

// Summary stats
export const totalSites = benchmarkData.length;
export const totalHtmlTokens = benchmarkData.reduce((sum, e) => sum + e.html_tokens, 0);
export const totalSomTokens = benchmarkData.reduce((sum, e) => sum + e.som_tokens, 0);
export const tokensSaved = totalHtmlTokens - totalSomTokens;
export const somWins = benchmarkData.filter((e) => e.ratio > 1).length;
export const avgHtmlTokens = Math.round(totalHtmlTokens / totalSites);
export const avgSomTokens = Math.round(avgHtmlTokens / benchmarkMeta.avg_compression);
