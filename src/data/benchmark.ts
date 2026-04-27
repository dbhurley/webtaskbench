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
  run_date: "2026-04-27T07:13:51.074Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 27.9,
  median_compression: 9.1,
  peak_compression: 129.7,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 29.6,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 835028, som_tokens: 6438, ratio: 129.7, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140302, som_tokens: 1294, ratio: 108.4, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125066, som_tokens: 1210, ratio: 103.4, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 139702, som_tokens: 1398, ratio: 99.9, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 898086, som_tokens: 10883, ratio: 82.5, category: "SaaS & Cloud" },
  { url: "https://www.nytimes.com", html_tokens: 380036, som_tokens: 4762, ratio: 79.8, category: "News & Media" },
  { url: "https://stripe.com/docs", html_tokens: 356030, som_tokens: 6609, ratio: 53.9, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 139223, som_tokens: 2598, ratio: 53.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 418395, som_tokens: 8978, ratio: 46.6, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 186689, som_tokens: 5030, ratio: 37.1, category: "General" },
  { url: "https://vercel.com", html_tokens: 371739, som_tokens: 11571, ratio: 32.1, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 464018, som_tokens: 15115, ratio: 30.7, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102800, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 121715, som_tokens: 5774, ratio: 21.1, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 110358, som_tokens: 5547, ratio: 19.9, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 429239, som_tokens: 26413, ratio: 16.3, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 161234, som_tokens: 15483, ratio: 10.4, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 176171, som_tokens: 19317, ratio: 9.1, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32079, som_tokens: 4344, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189325, som_tokens: 27610, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34189, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 51917, som_tokens: 22104, ratio: 2.3, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38132, som_tokens: 17730, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18997, som_tokens: 9617, ratio: 2, category: "General" },
  { url: "https://medium.com", html_tokens: 2579, som_tokens: 1400, ratio: 1.8, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4611, som_tokens: 3741, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5083, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6075, som_tokens: 6429, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11858, som_tokens: 14519, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6291, som_tokens: 9279, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9327, som_tokens: 14577, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 72, som_tokens: 372, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2568, som_tokens: 24965, ratio: 0.1, category: "General" },
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
