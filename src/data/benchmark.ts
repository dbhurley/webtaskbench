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
  run_date: "2026-05-18T07:45:50.854Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 28.2,
  median_compression: 9.3,
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
  { url: "https://cloud.google.com", html_tokens: 861740, som_tokens: 6443, ratio: 133.7, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140901, som_tokens: 1294, ratio: 108.9, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125316, som_tokens: 1243, ratio: 100.8, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 138825, som_tokens: 1424, ratio: 97.5, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 438390, som_tokens: 4505, ratio: 97.3, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 917853, som_tokens: 10889, ratio: 84.3, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 355731, som_tokens: 6673, ratio: 53.3, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 126623, som_tokens: 2598, ratio: 48.7, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395524, som_tokens: 8563, ratio: 46.2, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 185356, som_tokens: 5027, ratio: 36.9, category: "General" },
  { url: "https://www.wired.com", html_tokens: 460022, som_tokens: 15082, ratio: 30.5, category: "News & Media" },
  { url: "https://vercel.com", html_tokens: 347654, som_tokens: 11594, ratio: 30, category: "SaaS & Cloud" },
  { url: "https://www.typescriptlang.org", html_tokens: 102800, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 123467, som_tokens: 5796, ratio: 21.3, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 107802, som_tokens: 5374, ratio: 20.1, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 442657, som_tokens: 27235, ratio: 16.3, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 158002, som_tokens: 15102, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 179671, som_tokens: 19372, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32111, som_tokens: 4345, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189408, som_tokens: 27593, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34179, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 52795, som_tokens: 22218, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38052, som_tokens: 17725, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18286, som_tokens: 9402, ratio: 1.9, category: "General" },
  { url: "https://medium.com", html_tokens: 2526, som_tokens: 1400, ratio: 1.8, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4612, som_tokens: 3782, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5139, som_tokens: 5140, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6180, som_tokens: 6574, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11912, som_tokens: 14627, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.python.org", html_tokens: 9458, som_tokens: 14515, ratio: 0.7, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6499, som_tokens: 9293, ratio: 0.7, category: "Dev Tools" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 70, som_tokens: 348, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2547, som_tokens: 25578, ratio: 0.1, category: "General" },
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
