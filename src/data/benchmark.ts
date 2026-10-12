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
  run_date: "2026-10-12T06:50:49.729Z",
  sites_attempted: 37,
  sites_succeeded: 36,
  avg_compression: 23.5,
  median_compression: 10.1,
  peak_compression: 138.3,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 23.5,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 890555, som_tokens: 6439, ratio: 138.3, category: "SaaS & Cloud" },
  { url: "https://techcrunch.com", html_tokens: 147890, som_tokens: 1401, ratio: 105.6, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 129003, som_tokens: 1227, ratio: 105.1, category: "Dev Tools" },
  { url: "https://www.figma.com", html_tokens: 585169, som_tokens: 9378, ratio: 62.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 407151, som_tokens: 7007, ratio: 58.1, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 574086, som_tokens: 10756, ratio: 53.4, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387181, som_tokens: 7733, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 508143, som_tokens: 15572, ratio: 32.6, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102692, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 220341, som_tokens: 11928, ratio: 18.5, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 477169, som_tokens: 27346, ratio: 17.4, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 200448, som_tokens: 12254, ratio: 16.4, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 343827, som_tokens: 23909, ratio: 14.4, category: "General" },
  { url: "https://aws.amazon.com", html_tokens: 167071, som_tokens: 11806, ratio: 14.2, category: "SaaS & Cloud" },
  { url: "https://www.bbc.com/news", html_tokens: 132906, som_tokens: 10072, ratio: 13.2, category: "News & Media" },
  { url: "https://nextjs.org", html_tokens: 130168, som_tokens: 10513, ratio: 12.4, category: "Dev Tools" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24870, som_tokens: 2449, ratio: 10.2, category: "General" },
  { url: "https://www.notion.so", html_tokens: 75801, som_tokens: 7624, ratio: 9.9, category: "SaaS & Cloud" },
  { url: "https://www.ycombinator.com", html_tokens: 111698, som_tokens: 11712, ratio: 9.5, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 188864, som_tokens: 20972, ratio: 9, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33350, som_tokens: 4408, ratio: 7.6, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 146312, som_tokens: 19457, ratio: 7.5, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54027, som_tokens: 22118, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38437, som_tokens: 17806, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18860, som_tokens: 9613, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11041, som_tokens: 7775, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 5050, som_tokens: 3860, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7869, som_tokens: 6392, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5035, ratio: 1, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 13551, som_tokens: 14415, ratio: 0.9, category: "General" },
  { url: "https://news.ycombinator.com", html_tokens: 11697, som_tokens: 14545, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6487, som_tokens: 9515, ratio: 0.7, category: "Dev Tools" },
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
