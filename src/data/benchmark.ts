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
  run_date: "2026-06-22T08:24:11.450Z",
  sites_attempted: 39,
  sites_succeeded: 39,
  avg_compression: 28.4,
  median_compression: 10.5,
  peak_compression: 136,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 26.1,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 875835, som_tokens: 6441, ratio: 136, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140341, som_tokens: 1294, ratio: 108.5, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 466699, som_tokens: 4355, ratio: 107.2, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 124800, som_tokens: 1227, ratio: 101.7, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 141924, som_tokens: 1424, ratio: 99.7, category: "News & Media" },
  { url: "https://www.linear.app", html_tokens: 902670, som_tokens: 11077, ratio: 81.5, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 591281, som_tokens: 11021, ratio: 53.7, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 360847, som_tokens: 6780, ratio: 53.2, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 407861, som_tokens: 8679, ratio: 47, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 126141, som_tokens: 2922, ratio: 43.2, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://nodejs.org", html_tokens: 184855, som_tokens: 5176, ratio: 35.7, category: "General" },
  { url: "https://www.wired.com", html_tokens: 581717, som_tokens: 17172, ratio: 33.9, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 131255, som_tokens: 5537, ratio: 23.7, category: "SaaS & Cloud" },
  { url: "https://www.typescriptlang.org", html_tokens: 102826, som_tokens: 4486, ratio: 22.9, category: "Dev Tools" },
  { url: "https://nextjs.org", html_tokens: 103935, som_tokens: 5683, ratio: 18.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 195948, som_tokens: 11241, ratio: 17.4, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 468055, som_tokens: 28700, ratio: 16.3, category: "News & Media" },
  { url: "https://www.bbc.com/news", html_tokens: 139400, som_tokens: 10375, ratio: 13.4, category: "News & Media" },
  { url: "https://azure.microsoft.com", html_tokens: 158368, som_tokens: 15045, ratio: 10.5, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 179690, som_tokens: 19315, ratio: 9.3, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33049, som_tokens: 4408, ratio: 7.5, category: "Dev Tools" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 190566, som_tokens: 28260, ratio: 6.7, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34582, som_tokens: 8802, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53511, som_tokens: 22108, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37943, som_tokens: 17642, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18337, som_tokens: 9134, ratio: 2, category: "General" },
  { url: "https://medium.com", html_tokens: 2636, som_tokens: 1400, ratio: 1.9, category: "News & Media" },
  { url: "https://docs.rs", html_tokens: 4638, som_tokens: 3689, ratio: 1.3, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5036, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6187, som_tokens: 6580, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11814, som_tokens: 14548, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6521, som_tokens: 9443, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9077, som_tokens: 14414, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 72, som_tokens: 300, ratio: 0.2, category: "General" },
  { url: "https://www.producthunt.com", html_tokens: 2625, som_tokens: 25061, ratio: 0.1, category: "General" },
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
