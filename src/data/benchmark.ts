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
  run_date: "2026-07-13T07:24:44.500Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.6,
  median_compression: 10.5,
  peak_compression: 137.3,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.9,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 884497, som_tokens: 6441, ratio: 137.3, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 510232, som_tokens: 4430, ratio: 115.2, category: "News & Media" },
  { url: "https://arstechnica.com", html_tokens: 140636, som_tokens: 1294, ratio: 108.7, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125200, som_tokens: 1227, ratio: 102, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 140295, som_tokens: 1424, ratio: 98.5, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 924485, som_tokens: 11090, ratio: 83.4, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 527368, som_tokens: 9190, ratio: 57.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 366505, som_tokens: 6780, ratio: 54.1, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 396261, som_tokens: 8457, ratio: 46.9, category: "SaaS & Cloud" },
  { url: "https://nodejs.org", html_tokens: 202793, som_tokens: 5488, ratio: 37, category: "General" },
  { url: "https://www.wired.com", html_tokens: 575048, som_tokens: 15949, ratio: 36.1, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102742, som_tokens: 4907, ratio: 20.9, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 108657, som_tokens: 5346, ratio: 20.3, category: "SaaS & Cloud" },
  { url: "https://vercel.com", html_tokens: 222364, som_tokens: 11205, ratio: 19.8, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 107819, som_tokens: 5686, ratio: 19, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 466527, som_tokens: 28538, ratio: 16.3, category: "News & Media" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 325031, som_tokens: 23340, ratio: 13.9, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 139853, som_tokens: 10209, ratio: 13.7, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 126968, som_tokens: 12124, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 159006, som_tokens: 15283, ratio: 10.4, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 180323, som_tokens: 19524, ratio: 9.2, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33132, som_tokens: 4406, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34570, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53482, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38208, som_tokens: 17647, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18415, som_tokens: 9276, ratio: 2, category: "General" },
  { url: "https://docs.rs", html_tokens: 4721, som_tokens: 3778, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5037, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6200, som_tokens: 6558, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11681, som_tokens: 14250, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6496, som_tokens: 9486, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9311, som_tokens: 14494, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 69, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2636, som_tokens: 23955, ratio: 0.1, category: "General" },
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
