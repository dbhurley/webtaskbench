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
  run_date: "2026-07-27T07:25:36.443Z",
  sites_attempted: 39,
  sites_succeeded: 39,
  avg_compression: 27.0,
  median_compression: 10.2,
  peak_compression: 137.2,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.5,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 883702, som_tokens: 6441, ratio: 137.2, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 141425, som_tokens: 1294, ratio: 109.3, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 496623, som_tokens: 4592, ratio: 108.1, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125328, som_tokens: 1227, ratio: 102.1, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 140785, som_tokens: 1401, ratio: 100.5, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 928722, som_tokens: 11102, ratio: 83.7, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 541570, som_tokens: 9221, ratio: 58.7, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 367546, som_tokens: 7132, ratio: 51.5, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395996, som_tokens: 8457, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://nodejs.org", html_tokens: 202135, som_tokens: 5398, ratio: 37.4, category: "General" },
  { url: "https://www.wired.com", html_tokens: 525689, som_tokens: 15289, ratio: 34.4, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102698, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 226506, som_tokens: 11205, ratio: 20.2, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 107955, som_tokens: 5686, ratio: 19, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 456237, som_tokens: 28272, ratio: 16.1, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 160362, som_tokens: 10099, ratio: 15.9, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 326458, som_tokens: 23645, ratio: 13.8, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 131862, som_tokens: 10079, ratio: 13.1, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 126404, som_tokens: 12089, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 159985, som_tokens: 15675, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 189210, som_tokens: 19478, ratio: 9.7, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33127, som_tokens: 4404, ratio: 7.5, category: "Dev Tools" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 686, ratio: 4.3, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34571, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53477, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38216, som_tokens: 17679, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18765, som_tokens: 9112, ratio: 2.1, category: "General" },
  { url: "https://medium.com", html_tokens: 2618, som_tokens: 1395, ratio: 1.9, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4532, som_tokens: 3627, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6204, som_tokens: 6568, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11819, som_tokens: 14528, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6485, som_tokens: 9354, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8936, som_tokens: 14474, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 68, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2633, som_tokens: 25629, ratio: 0.1, category: "General" },
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
