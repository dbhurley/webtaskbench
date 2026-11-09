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
  run_date: "2026-11-09T06:30:06.163Z",
  sites_attempted: 36,
  sites_succeeded: 35,
  avg_compression: 18.9,
  median_compression: 8.6,
  peak_compression: 104.8,
  peak_site: "kubernetes.io",
  previous_version: "0.5.1",
  previous_avg_compression: 20.7,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://kubernetes.io/docs", html_tokens: 128630, som_tokens: 1227, ratio: 104.8, category: "Dev Tools" },
  { url: "https://cloud.google.com", html_tokens: 629592, som_tokens: 6451, ratio: 97.6, category: "SaaS & Cloud" },
  { url: "https://www.figma.com", html_tokens: 625316, som_tokens: 9442, ratio: 66.2, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 421536, som_tokens: 7010, ratio: 60.1, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 573550, som_tokens: 10802, ratio: 53.1, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387152, som_tokens: 7733, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 530497, som_tokens: 16209, ratio: 32.7, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 103656, som_tokens: 4906, ratio: 21.1, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 209496, som_tokens: 11740, ratio: 17.8, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 467814, som_tokens: 27991, ratio: 16.7, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 200844, som_tokens: 12254, ratio: 16.4, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 347979, som_tokens: 24534, ratio: 14.2, category: "General" },
  { url: "https://aws.amazon.com", html_tokens: 171588, som_tokens: 12196, ratio: 14.1, category: "SaaS & Cloud" },
  { url: "https://www.bbc.com/news", html_tokens: 130665, som_tokens: 9592, ratio: 13.6, category: "News & Media" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24868, som_tokens: 2449, ratio: 10.2, category: "General" },
  { url: "https://www.ycombinator.com", html_tokens: 112531, som_tokens: 11758, ratio: 9.6, category: "General" },
  { url: "https://nextjs.org", html_tokens: 89946, som_tokens: 9853, ratio: 9.1, category: "Dev Tools" },
  { url: "https://www.notion.so", html_tokens: 67738, som_tokens: 7901, ratio: 8.6, category: "SaaS & Cloud" },
  { url: "https://angular.dev", html_tokens: 33330, som_tokens: 4480, ratio: 7.4, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 145681, som_tokens: 20223, ratio: 7.2, category: "News & Media" },
  { url: "https://httpbin.org", html_tokens: 2336, som_tokens: 364, ratio: 6.4, category: "General" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54274, som_tokens: 22215, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38401, som_tokens: 17799, ratio: 2.2, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 2592, som_tokens: 1394, ratio: 1.9, category: "News & Media" },
  { url: "https://lobste.rs", html_tokens: 18177, som_tokens: 9391, ratio: 1.9, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11036, som_tokens: 7761, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4918, som_tokens: 3847, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7854, som_tokens: 6401, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13938, som_tokens: 14500, ratio: 1, category: "General" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5038, ratio: 1, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11447, som_tokens: 14356, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6518, som_tokens: 9552, ratio: 0.7, category: "Dev Tools" },
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
