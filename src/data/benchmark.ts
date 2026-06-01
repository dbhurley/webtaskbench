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
  run_date: "2026-06-01T08:10:21.441Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 29.9,
  median_compression: 10.5,
  peak_compression: 133.8,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 30,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 861970, som_tokens: 6442, ratio: 133.8, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 141618, som_tokens: 1294, ratio: 109.4, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 123454, som_tokens: 1227, ratio: 100.6, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 140331, som_tokens: 1424, ratio: 98.5, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 401375, som_tokens: 4532, ratio: 88.6, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 924155, som_tokens: 10887, ratio: 84.9, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 149667, som_tokens: 2122, ratio: 70.5, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 358360, som_tokens: 6785, ratio: 52.8, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 567096, som_tokens: 11053, ratio: 51.3, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395522, som_tokens: 8563, ratio: 46.2, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 184859, som_tokens: 5040, ratio: 36.7, category: "General" },
  { url: "https://vercel.com", html_tokens: 361673, som_tokens: 11760, ratio: 30.8, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 456996, som_tokens: 15095, ratio: 30.3, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102797, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 108898, som_tokens: 5355, ratio: 20.3, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 111558, som_tokens: 5796, ratio: 19.2, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 451391, som_tokens: 27530, ratio: 16.4, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 157929, som_tokens: 15104, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 180037, som_tokens: 19375, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32155, som_tokens: 4416, ratio: 7.3, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189456, som_tokens: 27595, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 33739, som_tokens: 8668, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53494, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37875, som_tokens: 17642, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 17986, som_tokens: 9259, ratio: 1.9, category: "General" },
  { url: "https://docs.rs", html_tokens: 4672, som_tokens: 3769, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13997, som_tokens: 14466, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5036, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6188, som_tokens: 6585, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11960, som_tokens: 14711, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6523, som_tokens: 9429, ratio: 0.7, category: "Dev Tools" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 70, som_tokens: 348, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2658, som_tokens: 25987, ratio: 0.1, category: "General" },
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
