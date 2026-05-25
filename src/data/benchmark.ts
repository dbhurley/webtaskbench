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
  run_date: "2026-05-25T07:55:01.076Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 30.0,
  median_compression: 10.5,
  peak_compression: 133.7,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 28.2,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 861669, som_tokens: 6443, ratio: 133.7, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140716, som_tokens: 1294, ratio: 108.7, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 141982, som_tokens: 1424, ratio: 99.7, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 123246, som_tokens: 1243, ratio: 99.2, category: "Dev Tools" },
  { url: "https://www.nytimes.com", html_tokens: 443879, som_tokens: 4865, ratio: 91.2, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 919683, som_tokens: 10887, ratio: 84.5, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 149763, som_tokens: 2122, ratio: 70.6, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 355872, som_tokens: 6785, ratio: 52.4, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 551084, som_tokens: 11053, ratio: 49.9, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 395494, som_tokens: 8563, ratio: 46.2, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 184619, som_tokens: 5028, ratio: 36.7, category: "General" },
  { url: "https://vercel.com", html_tokens: 401673, som_tokens: 11760, ratio: 34.2, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 454914, som_tokens: 15151, ratio: 30, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102795, som_tokens: 4397, ratio: 23.4, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 120816, som_tokens: 5796, ratio: 20.8, category: "Dev Tools" },
  { url: "https://aws.amazon.com", html_tokens: 107807, som_tokens: 5374, ratio: 20.1, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 454250, som_tokens: 27747, ratio: 16.4, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 157987, som_tokens: 15101, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 179861, som_tokens: 19373, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 32111, som_tokens: 4344, ratio: 7.4, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 189407, som_tokens: 27593, ratio: 6.9, category: "General" },
  { url: "https://vuejs.org", html_tokens: 33739, som_tokens: 8668, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 52806, som_tokens: 22217, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38001, som_tokens: 17727, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18291, som_tokens: 9441, ratio: 1.9, category: "General" },
  { url: "https://docs.rs", html_tokens: 4614, som_tokens: 3686, ratio: 1.3, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5036, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6189, som_tokens: 6577, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11822, som_tokens: 14591, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6516, som_tokens: 9411, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9116, som_tokens: 14415, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 152, som_tokens: 331, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 73, som_tokens: 348, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2655, som_tokens: 24349, ratio: 0.1, category: "General" },
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
