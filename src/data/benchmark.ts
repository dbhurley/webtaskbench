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
  run_date: "2026-08-03T07:24:11.474Z",
  sites_attempted: 36,
  sites_succeeded: 36,
  avg_compression: 28.4,
  median_compression: 10.3,
  peak_compression: 137.6,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 27,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 886046, som_tokens: 6441, ratio: 137.6, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 481511, som_tokens: 4383, ratio: 109.9, category: "News & Media" },
  { url: "https://arstechnica.com", html_tokens: 139557, som_tokens: 1294, ratio: 107.8, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 144075, som_tokens: 1401, ratio: 102.8, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125328, som_tokens: 1227, ratio: 102.1, category: "Dev Tools" },
  { url: "https://www.linear.app", html_tokens: 935788, som_tokens: 11090, ratio: 84.4, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 548007, som_tokens: 9221, ratio: 59.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 371448, som_tokens: 7132, ratio: 52.1, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395996, som_tokens: 8458, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 511929, som_tokens: 15405, ratio: 33.2, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102702, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 117890, som_tokens: 5686, ratio: 20.7, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 226952, som_tokens: 11204, ratio: 20.3, category: "SaaS & Cloud" },
  { url: "https://aws.amazon.com", html_tokens: 160366, som_tokens: 10099, ratio: 15.9, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 425924, som_tokens: 26936, ratio: 15.8, category: "News & Media" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 326455, som_tokens: 23661, ratio: 13.8, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 130445, som_tokens: 9856, ratio: 13.2, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 126628, som_tokens: 12089, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 159952, som_tokens: 15671, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 194591, som_tokens: 19418, ratio: 10, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 99443, som_tokens: 11568, ratio: 8.6, category: "General" },
  { url: "https://angular.dev", html_tokens: 32963, som_tokens: 4407, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34569, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53488, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38214, som_tokens: 17679, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18539, som_tokens: 9272, ratio: 2, category: "General" },
  { url: "https://docs.rs", html_tokens: 4695, som_tokens: 3783, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6211, som_tokens: 6573, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11856, som_tokens: 14579, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6490, som_tokens: 9361, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9142, som_tokens: 14491, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 71, som_tokens: 300, ratio: 0.2, category: "General" },
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
