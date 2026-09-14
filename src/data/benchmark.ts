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
  run_date: "2026-09-14T06:43:33.250Z",
  sites_attempted: 38,
  sites_succeeded: 37,
  avg_compression: 25.0,
  median_compression: 10.6,
  peak_compression: 136.2,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 24.4,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 877451, som_tokens: 6441, ratio: 136.2, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 525616, som_tokens: 4871, ratio: 107.9, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 128053, som_tokens: 1227, ratio: 104.4, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 141989, som_tokens: 1401, ratio: 101.3, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 572875, som_tokens: 9267, ratio: 61.8, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 381822, som_tokens: 7131, ratio: 53.5, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 568554, som_tokens: 10659, ratio: 53.3, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387180, som_tokens: 7733, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 515048, som_tokens: 15462, ratio: 33.3, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102699, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 207401, som_tokens: 11884, ratio: 17.5, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 465916, som_tokens: 28102, ratio: 16.6, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 174947, som_tokens: 11442, ratio: 15.3, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 333319, som_tokens: 23847, ratio: 14, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 131046, som_tokens: 10134, ratio: 12.9, category: "News & Media" },
  { url: "https://www.notion.so", html_tokens: 94397, som_tokens: 7626, ratio: 12.4, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 134884, som_tokens: 11789, ratio: 11.4, category: "Dev Tools" },
  { url: "https://www.docker.com", html_tokens: 127905, som_tokens: 12078, ratio: 10.6, category: "SaaS & Cloud" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 183945, som_tokens: 20361, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 101485, som_tokens: 11488, ratio: 8.8, category: "General" },
  { url: "https://angular.dev", html_tokens: 33119, som_tokens: 4406, ratio: 7.5, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 146475, som_tokens: 19824, ratio: 7.4, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34569, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53841, som_tokens: 22114, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38187, som_tokens: 17671, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18869, som_tokens: 9634, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11043, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 5016, som_tokens: 3830, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7873, som_tokens: 6393, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13850, som_tokens: 14492, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5035, ratio: 1, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11725, som_tokens: 14477, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6367, som_tokens: 9301, ratio: 0.7, category: "Dev Tools" },
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
