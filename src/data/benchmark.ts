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
  run_date: "2026-05-11T07:35:19.013Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.3,
  median_compression: 9.2,
  peak_compression: 133.7,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.3,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 861051, som_tokens: 6441, ratio: 133.7, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140822, som_tokens: 1294, ratio: 108.8, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125183, som_tokens: 1210, ratio: 103.5, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 138002, som_tokens: 1398, ratio: 98.7, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 407151, som_tokens: 4515, ratio: 90.2, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 910446, som_tokens: 10883, ratio: 83.7, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 150193, som_tokens: 2598, ratio: 57.8, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 355300, som_tokens: 6673, ratio: 53.2, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 410249, som_tokens: 8860, ratio: 46.3, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 185093, som_tokens: 5025, ratio: 36.8, category: "General" },
  { url: "https://vercel.com", html_tokens: 384372, som_tokens: 11596, ratio: 33.1, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 468568, som_tokens: 15052, ratio: 31.1, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102795, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 110245, som_tokens: 5714, ratio: 19.3, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 110634, som_tokens: 5796, ratio: 19.1, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 437723, som_tokens: 26203, ratio: 16.7, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 157701, som_tokens: 15113, ratio: 10.4, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 177443, som_tokens: 19301, ratio: 9.2, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32113, som_tokens: 4346, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 187703, som_tokens: 27605, ratio: 6.8, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34176, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 52783, som_tokens: 22218, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37965, som_tokens: 17725, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18406, som_tokens: 9475, ratio: 1.9, category: "General" },
  { url: "https://medium.com", html_tokens: 2554, som_tokens: 1400, ratio: 1.8, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4691, som_tokens: 3890, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5083, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6171, som_tokens: 6563, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11988, som_tokens: 14659, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6296, som_tokens: 9304, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9234, som_tokens: 14542, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 69, som_tokens: 348, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2554, som_tokens: 33450, ratio: 0.1, category: "General" },
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
