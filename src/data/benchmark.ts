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
  run_date: "2026-08-10T06:42:23.923Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 26.4,
  median_compression: 10.2,
  peak_compression: 137.8,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.4,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 887315, som_tokens: 6441, ratio: 137.8, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 141842, som_tokens: 1294, ratio: 109.6, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 146308, som_tokens: 1401, ratio: 104.4, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125328, som_tokens: 1227, ratio: 102.1, category: "Dev Tools" },
  { url: "https://www.nytimes.com", html_tokens: 371295, som_tokens: 4325, ratio: 85.8, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 568261, som_tokens: 9221, ratio: 61.6, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 371958, som_tokens: 7132, ratio: 52.2, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 554178, som_tokens: 11086, ratio: 50, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 396011, som_tokens: 8459, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 553381, som_tokens: 16121, ratio: 34.3, category: "News & Media" },
  { url: "https://vercel.com", html_tokens: 239923, som_tokens: 11204, ratio: 21.4, category: "SaaS & Cloud" },
  { url: "https://www.typescriptlang.org", html_tokens: 102696, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 117858, som_tokens: 5686, ratio: 20.7, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 160383, som_tokens: 9821, ratio: 16.3, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 408736, som_tokens: 26408, ratio: 15.5, category: "News & Media" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 328646, som_tokens: 23693, ratio: 13.9, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 131182, som_tokens: 9622, ratio: 13.6, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 126743, som_tokens: 12089, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 160907, som_tokens: 15815, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 181795, som_tokens: 20310, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 99258, som_tokens: 11444, ratio: 8.7, category: "General" },
  { url: "https://angular.dev", html_tokens: 32967, som_tokens: 4407, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34569, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53616, som_tokens: 22112, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37933, som_tokens: 17679, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18453, som_tokens: 9153, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 10964, som_tokens: 7755, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4891, som_tokens: 3687, ratio: 1.3, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13830, som_tokens: 14505, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6228, som_tokens: 6573, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11841, som_tokens: 14445, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6491, som_tokens: 9482, ratio: 0.7, category: "Dev Tools" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 72, som_tokens: 300, ratio: 0.2, category: "General" },
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
