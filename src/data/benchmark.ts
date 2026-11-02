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
  run_date: "2026-11-02T06:30:29.188Z",
  sites_attempted: 36,
  sites_succeeded: 35,
  avg_compression: 20.7,
  median_compression: 9.7,
  peak_compression: 131.5,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 21.1,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 848079, som_tokens: 6451, ratio: 131.5, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 128630, som_tokens: 1227, ratio: 104.8, category: "Dev Tools" },
  { url: "https://www.figma.com", html_tokens: 609078, som_tokens: 9442, ratio: 64.5, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 419676, som_tokens: 7010, ratio: 59.9, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 572741, som_tokens: 10768, ratio: 53.2, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387165, som_tokens: 7734, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 510637, som_tokens: 15797, ratio: 32.3, category: "News & Media" },
  { url: "https://httpbin.org", html_tokens: 2335, som_tokens: 79, ratio: 29.6, category: "General" },
  { url: "https://www.typescriptlang.org", html_tokens: 103612, som_tokens: 4906, ratio: 21.1, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 208034, som_tokens: 11758, ratio: 17.7, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 200836, som_tokens: 12254, ratio: 16.4, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 440077, som_tokens: 27580, ratio: 16, category: "News & Media" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 344611, som_tokens: 24361, ratio: 14.1, category: "General" },
  { url: "https://aws.amazon.com", html_tokens: 169847, som_tokens: 12147, ratio: 14, category: "SaaS & Cloud" },
  { url: "https://www.bbc.com/news", html_tokens: 139921, som_tokens: 10087, ratio: 13.9, category: "News & Media" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24880, som_tokens: 2449, ratio: 10.2, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 177485, som_tokens: 18064, ratio: 9.8, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 113455, som_tokens: 11716, ratio: 9.7, category: "General" },
  { url: "https://nextjs.org", html_tokens: 89410, som_tokens: 9858, ratio: 9.1, category: "Dev Tools" },
  { url: "https://www.notion.so", html_tokens: 66623, som_tokens: 7750, ratio: 8.6, category: "SaaS & Cloud" },
  { url: "https://angular.dev", html_tokens: 33334, som_tokens: 4482, ratio: 7.4, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 145938, som_tokens: 20237, ratio: 7.2, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54154, som_tokens: 22215, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38438, som_tokens: 17801, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18399, som_tokens: 9486, ratio: 1.9, category: "General" },
  { url: "https://docs.rs", html_tokens: 6129, som_tokens: 4110, ratio: 1.5, category: "Dev Tools" },
  { url: "https://www.mysql.com", html_tokens: 11022, som_tokens: 7761, ratio: 1.4, category: "General" },
  { url: "https://pypi.org", html_tokens: 7857, som_tokens: 6410, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13880, som_tokens: 14530, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5038, ratio: 1, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11782, som_tokens: 14421, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6492, som_tokens: 9496, ratio: 0.7, category: "Dev Tools" },
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
