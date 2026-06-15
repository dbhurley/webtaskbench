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
  run_date: "2026-06-15T08:22:27.959Z",
  sites_attempted: 35,
  sites_succeeded: 35,
  avg_compression: 26.1,
  median_compression: 9.3,
  peak_compression: 135.1,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 29.9,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 870177, som_tokens: 6441, ratio: 135.1, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 125061, som_tokens: 1227, ratio: 101.9, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 143886, som_tokens: 1424, ratio: 101, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 451935, som_tokens: 4578, ratio: 98.7, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 914305, som_tokens: 11197, ratio: 81.7, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 360759, som_tokens: 6783, ratio: 53.2, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 139274, som_tokens: 2922, ratio: 47.7, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 408052, som_tokens: 8636, ratio: 47.3, category: "SaaS & Cloud" },
  { url: "https://nodejs.org", html_tokens: 186248, som_tokens: 5032, ratio: 37, category: "General" },
  { url: "https://www.wired.com", html_tokens: 597373, som_tokens: 16339, ratio: 36.6, category: "News & Media" },
  { url: "https://vercel.com", html_tokens: 312864, som_tokens: 11896, ratio: 26.3, category: "SaaS & Cloud" },
  { url: "https://www.typescriptlang.org", html_tokens: 102797, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 109022, som_tokens: 5354, ratio: 20.4, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 111768, som_tokens: 5971, ratio: 18.7, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 480274, som_tokens: 30151, ratio: 15.9, category: "News & Media" },
  { url: "https://www.bbc.com/news", html_tokens: 141350, som_tokens: 10000, ratio: 14.1, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 158252, som_tokens: 15046, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 179745, som_tokens: 19317, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32792, som_tokens: 4408, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 190042, som_tokens: 27597, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 33844, som_tokens: 8672, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53512, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37934, som_tokens: 17642, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18323, som_tokens: 9380, ratio: 2, category: "General" },
  { url: "https://docs.rs", html_tokens: 4661, som_tokens: 3810, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5036, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6179, som_tokens: 6574, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11596, som_tokens: 14013, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6559, som_tokens: 9463, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8932, som_tokens: 14434, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 71, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2638, som_tokens: 27470, ratio: 0.1, category: "General" },
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
