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
  run_date: "2026-11-23T06:31:49.964Z",
  sites_attempted: 37,
  sites_succeeded: 36,
  avg_compression: 19.7,
  median_compression: 9.4,
  peak_compression: 125.7,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 21.2,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 811107, som_tokens: 6451, ratio: 125.7, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 129089, som_tokens: 1227, ratio: 105.2, category: "Dev Tools" },
  { url: "https://www.figma.com", html_tokens: 675410, som_tokens: 9537, ratio: 70.8, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 426592, som_tokens: 7021, ratio: 60.8, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 574218, som_tokens: 10891, ratio: 52.7, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 386970, som_tokens: 7732, ratio: 50, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 637963, som_tokens: 17981, ratio: 35.5, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 103623, som_tokens: 4906, ratio: 21.1, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 212833, som_tokens: 11945, ratio: 17.8, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 474150, som_tokens: 26626, ratio: 17.8, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 167893, som_tokens: 10082, ratio: 16.7, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 348075, som_tokens: 24532, ratio: 14.2, category: "General" },
  { url: "https://aws.amazon.com", html_tokens: 171789, som_tokens: 12191, ratio: 14.1, category: "SaaS & Cloud" },
  { url: "https://www.bbc.com/news", html_tokens: 129737, som_tokens: 9618, ratio: 13.5, category: "News & Media" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24873, som_tokens: 2452, ratio: 10.1, category: "General" },
  { url: "https://www.ycombinator.com", html_tokens: 116280, som_tokens: 11739, ratio: 9.9, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 178339, som_tokens: 18129, ratio: 9.8, category: "Dev Tools" },
  { url: "https://www.notion.so", html_tokens: 66059, som_tokens: 6990, ratio: 9.5, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 91474, som_tokens: 9851, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33269, som_tokens: 4545, ratio: 7.3, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 149046, som_tokens: 21386, ratio: 7, category: "News & Media" },
  { url: "https://httpbin.org", html_tokens: 2477, som_tokens: 431, ratio: 5.7, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34606, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54341, som_tokens: 22219, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38586, som_tokens: 17804, ratio: 2.2, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 2589, som_tokens: 1395, ratio: 1.9, category: "News & Media" },
  { url: "https://lobste.rs", html_tokens: 18019, som_tokens: 9500, ratio: 1.9, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11037, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4910, som_tokens: 3906, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7855, som_tokens: 6404, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13549, som_tokens: 14373, ratio: 0.9, category: "General" },
  { url: "https://news.ycombinator.com", html_tokens: 11680, som_tokens: 14760, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6609, som_tokens: 9455, ratio: 0.7, category: "Dev Tools" },
  { url: "https://example.com", html_tokens: 151, som_tokens: 233, ratio: 0.6, category: "General" },
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
