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
  run_date: "2026-08-24T06:24:18.870Z",
  sites_attempted: 39,
  sites_succeeded: 39,
  avg_compression: 26.4,
  median_compression: 10.5,
  peak_compression: 137.3,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 26.6,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 884127, som_tokens: 6441, ratio: 137.3, category: "SaaS & Cloud" },
  { url: "https://arstechnica.com", html_tokens: 140108, som_tokens: 1294, ratio: 108.3, category: "News & Media" },
  { url: "https://kubernetes.io/docs", html_tokens: 125041, som_tokens: 1227, ratio: 101.9, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 141320, som_tokens: 1401, ratio: 100.9, category: "News & Media" },
  { url: "https://www.nytimes.com", html_tokens: 441644, som_tokens: 4444, ratio: 99.4, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 573233, som_tokens: 9221, ratio: 62.2, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 375819, som_tokens: 7131, ratio: 52.7, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 551655, som_tokens: 11115, ratio: 49.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 396010, som_tokens: 8457, ratio: 46.8, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 514093, som_tokens: 15293, ratio: 33.6, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102703, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 233541, som_tokens: 11817, ratio: 19.8, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 121771, som_tokens: 6333, ratio: 19.2, category: "Dev Tools" },
  { url: "https://www.theguardian.com", html_tokens: 445628, som_tokens: 26521, ratio: 16.8, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 164204, som_tokens: 10844, ratio: 15.1, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 332152, som_tokens: 23750, ratio: 14, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 130608, som_tokens: 9694, ratio: 13.5, category: "News & Media" },
  { url: "https://www.notion.so", html_tokens: 98246, som_tokens: 7675, ratio: 12.8, category: "SaaS & Cloud" },
  { url: "https://www.docker.com", html_tokens: 127469, som_tokens: 12089, ratio: 10.5, category: "SaaS & Cloud" },
  { url: "https://azure.microsoft.com", html_tokens: 160834, som_tokens: 15707, ratio: 10.2, category: "News & Media" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 183492, som_tokens: 20427, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 99703, som_tokens: 11460, ratio: 8.7, category: "General" },
  { url: "https://angular.dev", html_tokens: 33154, som_tokens: 4407, ratio: 7.5, category: "Dev Tools" },
  { url: "https://vuejs.org", html_tokens: 34569, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 53566, som_tokens: 22112, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38035, som_tokens: 17678, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18822, som_tokens: 9223, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11037, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4969, som_tokens: 3817, ratio: 1.3, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5035, ratio: 1, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 6098, som_tokens: 6575, ratio: 0.9, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11901, som_tokens: 14636, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6445, som_tokens: 9275, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 9117, som_tokens: 14469, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
  { url: "https://crates.io", html_tokens: 73, som_tokens: 300, ratio: 0.2, category: "General" },
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
