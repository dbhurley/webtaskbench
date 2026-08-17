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
  run_date: "2026-08-17T06:22:28.974Z",
  sites_attempted: 37,
  sites_succeeded: 37,
  avg_compression: 26.6,
  median_compression: 10.2,
  peak_compression: 137.9,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 26.4,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 888202, som_tokens: 6441, ratio: 137.9, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 141808, som_tokens: 1294, ratio: 109.6, category: "News & Media" },
  { url: "https://techcrunch.com", html_tokens: 145758, som_tokens: 1401, ratio: 104, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125041, som_tokens: 1227, ratio: 101.9, category: "Dev Tools" },
  { url: "https://www.nytimes.com", html_tokens: 419472, som_tokens: 4402, ratio: 95.3, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 571910, som_tokens: 9221, ratio: 62, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 374567, som_tokens: 7131, ratio: 52.5, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 552176, som_tokens: 11101, ratio: 49.7, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 396023, som_tokens: 8458, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://www.wired.com", html_tokens: 520746, som_tokens: 16026, ratio: 32.5, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102699, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 235172, som_tokens: 11265, ratio: 20.9, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 118213, som_tokens: 5686, ratio: 20.8, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 427261, som_tokens: 25474, ratio: 16.8, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 160391, som_tokens: 9821, ratio: 16.3, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 329823, som_tokens: 23641, ratio: 14, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 131599, som_tokens: 9792, ratio: 13.4, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 127389, som_tokens: 12089, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 160841, som_tokens: 15712, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 182765, som_tokens: 20329, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 99508, som_tokens: 11460, ratio: 8.7, category: "General" },
  { url: "https://angular.dev", html_tokens: 33144, som_tokens: 4405, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34569, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53563, som_tokens: 22112, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37945, som_tokens: 17679, ratio: 2.1, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18876, som_tokens: 9211, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 10958, som_tokens: 7755, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 5012, som_tokens: 3861, ratio: 1.3, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5034, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6008, som_tokens: 6502, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11917, som_tokens: 14570, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6429, som_tokens: 9239, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8899, som_tokens: 14535, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 70, som_tokens: 300, ratio: 0.2, category: "General" },
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
