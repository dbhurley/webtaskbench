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
  run_date: "2026-09-28T06:47:23.605Z",
  sites_attempted: 37,
  sites_succeeded: 36,
  avg_compression: 23.1,
  median_compression: 10.2,
  peak_compression: 136.6,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 22.8,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 880082, som_tokens: 6441, ratio: 136.6, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 128493, som_tokens: 1227, ratio: 104.7, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 145760, som_tokens: 1401, ratio: 104, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 577030, som_tokens: 9264, ratio: 62.3, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 581127, som_tokens: 10706, ratio: 54.3, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 389382, som_tokens: 7224, ratio: 53.9, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387165, som_tokens: 7733, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 501461, som_tokens: 15449, ratio: 32.5, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102700, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 237082, som_tokens: 11904, ratio: 19.9, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 199845, som_tokens: 12099, ratio: 16.5, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 442117, som_tokens: 28440, ratio: 15.5, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 166709, som_tokens: 11438, ratio: 14.6, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 343317, som_tokens: 23858, ratio: 14.4, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 132332, som_tokens: 10284, ratio: 12.9, category: "News & Media" },
  { url: "https://www.notion.so", html_tokens: 94261, som_tokens: 7445, ratio: 12.7, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 134385, som_tokens: 11798, ratio: 11.4, category: "Dev Tools" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 183533, som_tokens: 20342, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 102352, som_tokens: 11504, ratio: 8.9, category: "General" },
  { url: "https://angular.dev", html_tokens: 33350, som_tokens: 4405, ratio: 7.6, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 144758, som_tokens: 19594, ratio: 7.4, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54025, som_tokens: 22116, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38072, som_tokens: 17698, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 19195, som_tokens: 9651, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11031, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 5091, som_tokens: 3845, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7863, som_tokens: 6387, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5035, ratio: 1, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11732, som_tokens: 14302, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6449, som_tokens: 9404, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9104, som_tokens: 14381, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
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
