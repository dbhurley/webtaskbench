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
  run_date: "2026-06-29T08:05:40.113Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.4,
  median_compression: 10.4,
  peak_compression: 136.2,
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
  { url: "https://cloud.google.com", html_tokens: 877250, som_tokens: 6440, ratio: 136.2, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 496794, som_tokens: 4327, ratio: 114.8, category: "News & Media" },
  { url: "https://arstechnica.com", html_tokens: 139948, som_tokens: 1294, ratio: 108.2, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 145109, som_tokens: 1424, ratio: 101.9, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 124790, som_tokens: 1227, ratio: 101.7, category: "Dev Tools" },
  { url: "https://www.linear.app", html_tokens: 922860, som_tokens: 11081, ratio: 83.3, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 522184, som_tokens: 9171, ratio: 56.9, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 365128, som_tokens: 6780, ratio: 53.9, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 396238, som_tokens: 8458, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://nodejs.org", html_tokens: 183726, som_tokens: 5172, ratio: 35.5, category: "General" },
  { url: "https://www.wired.com", html_tokens: 562326, som_tokens: 16414, ratio: 34.3, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102821, som_tokens: 4486, ratio: 22.9, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 108793, som_tokens: 5349, ratio: 20.3, category: "SaaS & Cloud" },
  { url: "https://vercel.com", html_tokens: 205832, som_tokens: 11073, ratio: 18.6, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 104040, som_tokens: 5683, ratio: 18.3, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 483884, som_tokens: 29041, ratio: 16.7, category: "News & Media" },
  { url: "https://www.bbc.com/news", html_tokens: 147099, som_tokens: 10428, ratio: 14.1, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 158709, som_tokens: 15044, ratio: 10.5, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 126006, som_tokens: 12124, ratio: 10.4, category: "SaaS & Cloud" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 180107, som_tokens: 19303, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33093, som_tokens: 4407, ratio: 7.5, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 190164, som_tokens: 27569, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34582, som_tokens: 8802, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53516, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37916, som_tokens: 17642, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18045, som_tokens: 9371, ratio: 1.9, category: "General" },
  { url: "https://docs.rs", html_tokens: 4603, som_tokens: 3740, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5036, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6211, som_tokens: 6575, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11897, som_tokens: 14586, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6552, som_tokens: 9487, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8957, som_tokens: 14447, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 70, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2649, som_tokens: 23116, ratio: 0.1, category: "General" },
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
