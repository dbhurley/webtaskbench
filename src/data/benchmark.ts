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
  run_date: "2026-04-20T07:05:50.957Z",
  sites_attempted: 38,
  sites_succeeded: 38,
  avg_compression: 29.6,
  median_compression: 9.8,
  peak_compression: 118.5,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 29.7,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 762516, som_tokens: 6435, ratio: 118.5, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 139906, som_tokens: 1294, ratio: 108.1, category: "News & Media" },
  { url: "https://stackoverflow.com/questions/tagged/rust", html_tokens: 119959, som_tokens: 1126, ratio: 106.5, category: "General" },
  { url: "https://kubernetes.io/docs", html_tokens: 123418, som_tokens: 1210, ratio: 102, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 139498, som_tokens: 1398, ratio: 99.8, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 375828, som_tokens: 4294, ratio: 87.5, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 893116, som_tokens: 11046, ratio: 80.9, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 139097, som_tokens: 2596, ratio: 53.6, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 347944, som_tokens: 6609, ratio: 52.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 417580, som_tokens: 8982, ratio: 46.5, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 183359, som_tokens: 4978, ratio: 36.8, category: "General" },
  { url: "https://www.wired.com", html_tokens: 461141, som_tokens: 15085, ratio: 30.6, category: "News & Media" },
  { url: "https://vercel.com", html_tokens: 338189, som_tokens: 11571, ratio: 29.2, category: "SaaS & Cloud" },
  { url: "https://www.typescriptlang.org", html_tokens: 102801, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 110626, som_tokens: 5559, ratio: 19.9, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 110284, som_tokens: 5774, ratio: 19.1, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 449700, som_tokens: 27716, ratio: 16.2, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 161234, som_tokens: 15499, ratio: 10.4, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 175394, som_tokens: 19307, ratio: 9.1, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32073, som_tokens: 4344, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189371, som_tokens: 27620, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34189, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 4060, som_tokens: 1400, ratio: 2.9, category: "News & Media" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 51943, som_tokens: 22103, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38143, som_tokens: 17730, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 19889, som_tokens: 9452, ratio: 2.1, category: "General" },
  { url: "https://docs.rs", html_tokens: 4554, som_tokens: 3682, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5083, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6075, som_tokens: 6426, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11924, som_tokens: 14573, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6322, som_tokens: 9321, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9134, som_tokens: 14620, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 71, som_tokens: 372, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2361, som_tokens: 19194, ratio: 0.1, category: "General" },
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
