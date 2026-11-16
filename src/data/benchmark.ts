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
  run_date: "2026-11-16T06:33:29.350Z",
  sites_attempted: 38,
  sites_succeeded: 37,
  avg_compression: 21.2,
  median_compression: 9.4,
  peak_compression: 112.1,
  peak_site: "www.nytimes.com",
  previous_version: "0.5.1",
  previous_avg_compression: 18.9,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://www.nytimes.com", html_tokens: 479058, som_tokens: 4275, ratio: 112.1, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 128751, som_tokens: 1227, ratio: 104.9, category: "Dev Tools" },
  { url: "https://cloud.google.com", html_tokens: 629111, som_tokens: 6451, ratio: 97.5, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 645475, som_tokens: 9511, ratio: 67.9, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 421746, som_tokens: 7021, ratio: 60.1, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 574931, som_tokens: 10891, ratio: 52.8, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387180, som_tokens: 7733, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 518629, som_tokens: 15802, ratio: 32.8, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 103657, som_tokens: 4906, ratio: 21.1, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 211182, som_tokens: 11829, ratio: 17.9, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 448891, som_tokens: 26474, ratio: 17, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 200847, som_tokens: 12254, ratio: 16.4, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 348050, som_tokens: 24530, ratio: 14.2, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 129939, som_tokens: 9286, ratio: 14, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 170730, som_tokens: 12195, ratio: 14, category: "SaaS & Cloud" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24877, som_tokens: 2449, ratio: 10.2, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 177866, som_tokens: 18115, ratio: 9.8, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 112745, som_tokens: 11739, ratio: 9.6, category: "General" },
  { url: "https://nextjs.org", html_tokens: 92916, som_tokens: 9853, ratio: 9.4, category: "Dev Tools" },
  { url: "https://www.notion.so", html_tokens: 65709, som_tokens: 8062, ratio: 8.2, category: "SaaS & Cloud" },
  { url: "https://angular.dev", html_tokens: 33473, som_tokens: 4547, ratio: 7.4, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 145692, som_tokens: 20223, ratio: 7.2, category: "News & Media" },
  { url: "https://httpbin.org", html_tokens: 2477, som_tokens: 431, ratio: 5.7, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54301, som_tokens: 22219, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38453, som_tokens: 17799, ratio: 2.2, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 2620, som_tokens: 1395, ratio: 1.9, category: "News & Media" },
  { url: "https://lobste.rs", html_tokens: 18413, som_tokens: 9539, ratio: 1.9, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11036, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4856, som_tokens: 3910, ratio: 1.2, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7849, som_tokens: 6395, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13575, som_tokens: 14358, ratio: 0.9, category: "General" },
  { url: "https://news.ycombinator.com", html_tokens: 11472, som_tokens: 14251, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6513, som_tokens: 9336, ratio: 0.7, category: "Dev Tools" },
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
