export interface BenchmarkMeta {
  plasmate_version: string;
  run_date: string;        // ISO 8601
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
  plasmate_version: "0.5.0",
  run_date: "2026-04-04T14:00:00Z",
  sites_attempted: 52,
  sites_succeeded: 45,
  avg_compression: 17.7,
  median_compression: 9.6,
  peak_compression: 117.9,
  peak_site: "linear.app",
  previous_version: "0.4.1",
  previous_avg_compression: 17.5,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.4, category: "General" },
  { url: "https://news.ycombinator.com", html_tokens: 11706, som_tokens: 14004, ratio: 0.8, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 157082, som_tokens: 18388, ratio: 8.5, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189394, som_tokens: 26691, ratio: 7.0, category: "General" },
  { url: "https://crates.io", html_tokens: 71, som_tokens: 372, ratio: 0.1, category: "Dev Tools" },
  { url: "https://docs.rs", html_tokens: 4503, som_tokens: 3721, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8902, som_tokens: 14408, ratio: 0.6, category: "Dev Tools" },
  { url: "https://nodejs.org", html_tokens: 187955, som_tokens: 4802, ratio: 39.1, category: "Dev Tools" },
  { url: "https://react.dev", html_tokens: 107416, som_tokens: 9617, ratio: 11.1, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34184, som_tokens: 8638, ratio: 3.9, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 31976, som_tokens: 4319, ratio: 7.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38122, som_tokens: 17625, ratio: 2.1, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 122854, som_tokens: 5763, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 239805, som_tokens: 11715, ratio: 20.4, category: "SaaS & Cloud" },
  { url: "https://www.npmjs.com", html_tokens: 4142, som_tokens: 3144, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6075, som_tokens: 6406, ratio: 0.9, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5056, ratio: 1.0, category: "Dev Tools" },
  { url: "https://www.typescriptlang.org", html_tokens: 102803, som_tokens: 4285, ratio: 23.9, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 51927, som_tokens: 26734, ratio: 1.9, category: "Dev Tools" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 686, ratio: 4.3, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3265, ratio: 0.7, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 131203, som_tokens: 9925, ratio: 13.2, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 292769, som_tokens: 4884, ratio: 59.9, category: "News & Media" },
  { url: "https://www.theguardian.com", html_tokens: 365743, som_tokens: 27156, ratio: 13.4, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 108481, som_tokens: 1398, ratio: 77.5, category: "News & Media" },
  { url: "https://arstechnica.com", html_tokens: 148922, som_tokens: 15332, ratio: 9.7, category: "News & Media" },
  { url: "https://www.wired.com", html_tokens: 455285, som_tokens: 17729, ratio: 25.6, category: "News & Media" },
  { url: "https://medium.com", html_tokens: 4116, som_tokens: 1400, ratio: 2.9, category: "News & Media" },
  { url: "https://lobste.rs", html_tokens: 19033, som_tokens: 9035, ratio: 2.1, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2330, som_tokens: 28812, ratio: 0, category: "General" },
  { url: "https://www.ycombinator.com", html_tokens: 95842, som_tokens: 10875, ratio: 8.8, category: "General" },
  { url: "https://stripe.com/docs", html_tokens: 345664, som_tokens: 6365, ratio: 54.3, category: "SaaS & Cloud" },
  { url: "https://docs.github.com", html_tokens: 29373, som_tokens: 7084, ratio: 4.1, category: "Dev Tools" },
  { url: "https://kubernetes.io/docs", html_tokens: 123067, som_tokens: 47900, ratio: 2.5, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 105502, som_tokens: 4806, ratio: 21.9, category: "SaaS & Cloud" },
  { url: "https://cloud.google.com", html_tokens: 522978, som_tokens: 7054, ratio: 74.1, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 164128, som_tokens: 14318, ratio: 11.4, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 115453, som_tokens: 12436, ratio: 9.2, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 536872, som_tokens: 10949, ratio: 49.0, category: "SaaS & Cloud" },
  { url: "https://www.notion.so", html_tokens: 75021, som_tokens: 9454, ratio: 7.9, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 884822, som_tokens: 10844, ratio: 81.5, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 417597, som_tokens: 8823, ratio: 47.3, category: "SaaS & Cloud" },
  { url: "https://getbootstrap.com", html_tokens: 29333, som_tokens: 9543, ratio: 3.0, category: "Dev Tools" },
  { url: "https://www.postgresql.org", html_tokens: 6330, som_tokens: 9276, ratio: 0.6, category: "Dev Tools" },
  { url: "https://www.mongodb.com", html_tokens: 299722, som_tokens: 12583, ratio: 23.8, category: "SaaS & Cloud" },
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
