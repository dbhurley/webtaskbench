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
  run_date: "2026-04-13T07:04:01.268Z",
  sites_attempted: 38,
  sites_succeeded: 38,
  avg_compression: 29.7,
  median_compression: 9.8,
  peak_compression: 118.4,
  peak_site: "cloud.google.com",
  previous_version: "0.5.0",
  previous_avg_compression: 17.7,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 762053, som_tokens: 6436, ratio: 118.4, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 137216, som_tokens: 1294, ratio: 106, category: "News & Media" },
  { url: "https://stackoverflow.com/questions/tagged/rust", html_tokens: 118934, som_tokens: 1126, ratio: 105.6, category: "General" },
  { url: "https://kubernetes.io/docs", html_tokens: 123073, som_tokens: 1210, ratio: 101.7, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 138781, som_tokens: 1398, ratio: 99.3, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 447315, som_tokens: 5066, ratio: 88.3, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 890432, som_tokens: 11003, ratio: 80.9, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 138600, som_tokens: 2596, ratio: 53.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 347509, som_tokens: 6610, ratio: 52.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 417581, som_tokens: 8982, ratio: 46.5, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 186050, som_tokens: 5032, ratio: 37, category: "General" },
  { url: "https://vercel.com", html_tokens: 376622, som_tokens: 11421, ratio: 33, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 448571, som_tokens: 15346, ratio: 29.2, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102802, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 123803, som_tokens: 5774, ratio: 21.4, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 110566, som_tokens: 5538, ratio: 20, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 445654, som_tokens: 27476, ratio: 16.2, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 161907, som_tokens: 15409, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 174412, som_tokens: 19395, ratio: 9, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32026, som_tokens: 4345, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189352, som_tokens: 27612, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34189, som_tokens: 8827, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 4045, som_tokens: 1400, ratio: 2.9, category: "News & Media" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 51939, som_tokens: 22103, ratio: 2.3, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38143, som_tokens: 17730, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18811, som_tokens: 9522, ratio: 2, category: "General" },
  { url: "https://docs.rs", html_tokens: 4589, som_tokens: 3709, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5107, som_tokens: 5083, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6075, som_tokens: 6425, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11629, som_tokens: 13851, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6309, som_tokens: 9313, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8982, som_tokens: 14587, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 68, som_tokens: 372, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2320, som_tokens: 21171, ratio: 0.1, category: "General" },
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
