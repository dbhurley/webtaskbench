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
  run_date: "2026-07-20T07:20:58.278Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.5,
  median_compression: 10.6,
  peak_compression: 137.2,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.6,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 883305, som_tokens: 6440, ratio: 137.2, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 517921, som_tokens: 4556, ratio: 113.7, category: "News & Media" },
  { url: "https://arstechnica.com", html_tokens: 141707, som_tokens: 1294, ratio: 109.5, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125328, som_tokens: 1227, ratio: 102.1, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 141293, som_tokens: 1401, ratio: 100.9, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 924964, som_tokens: 11090, ratio: 83.4, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 528850, som_tokens: 9221, ratio: 57.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 366795, som_tokens: 6780, ratio: 54.1, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395995, som_tokens: 8458, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://nodejs.org", html_tokens: 202285, som_tokens: 5338, ratio: 37.9, category: "General" },
  { url: "https://www.wired.com", html_tokens: 583144, som_tokens: 16357, ratio: 35.7, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102702, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 223608, som_tokens: 11208, ratio: 20, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 107970, som_tokens: 5686, ratio: 19, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 453678, som_tokens: 27376, ratio: 16.6, category: "News & Media" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 326501, som_tokens: 23567, ratio: 13.9, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 139169, som_tokens: 10522, ratio: 13.2, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 108614, som_tokens: 9549, ratio: 11.4, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 126735, som_tokens: 12002, ratio: 10.6, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 158846, som_tokens: 15509, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 192708, som_tokens: 19762, ratio: 9.8, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33132, som_tokens: 4406, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34570, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53485, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38113, som_tokens: 17656, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18310, som_tokens: 9112, ratio: 2, category: "General" },
  { url: "https://docs.rs", html_tokens: 4602, som_tokens: 3798, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13801, som_tokens: 14487, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6202, som_tokens: 6570, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11904, som_tokens: 14326, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6471, som_tokens: 9354, ratio: 0.7, category: "Dev Tools" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 69, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2633, som_tokens: 26324, ratio: 0.1, category: "General" },
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
