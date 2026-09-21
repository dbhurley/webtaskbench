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
  run_date: "2026-09-21T06:44:03.945Z",
  sites_attempted: 37,
  sites_succeeded: 36,
  avg_compression: 22.8,
  median_compression: 9.8,
  peak_compression: 136.4,
  peak_site: "cloud.google.com",
  previous_version: "0.5.1",
  previous_avg_compression: 25,
};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
  { url: "https://cloud.google.com", html_tokens: 878270, som_tokens: 6441, ratio: 136.4, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 128495, som_tokens: 1227, ratio: 104.7, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 143529, som_tokens: 1401, ratio: 102.4, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 573718, som_tokens: 9267, ratio: 61.9, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 583192, som_tokens: 10722, ratio: 54.4, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 382381, som_tokens: 7131, ratio: 53.6, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387180, som_tokens: 7734, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 514910, som_tokens: 15252, ratio: 33.8, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102697, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 205924, som_tokens: 11922, ratio: 17.3, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 429144, som_tokens: 27128, ratio: 15.8, category: "News & Media" },
  { url: "https://aws.amazon.com", html_tokens: 174912, som_tokens: 11437, ratio: 15.3, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 343315, som_tokens: 23858, ratio: 14.4, category: "General" },
  { url: "https://www.bbc.com/news", html_tokens: 132104, som_tokens: 10088, ratio: 13.1, category: "News & Media" },
  { url: "https://www.notion.so", html_tokens: 94532, som_tokens: 7625, ratio: 12.4, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 134441, som_tokens: 11798, ratio: 11.4, category: "Dev Tools" },
  { url: "https://www.docker.com", html_tokens: 129363, som_tokens: 12078, ratio: 10.7, category: "SaaS & Cloud" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 183441, som_tokens: 20330, ratio: 9, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 101674, som_tokens: 11488, ratio: 8.9, category: "General" },
  { url: "https://angular.dev", html_tokens: 33114, som_tokens: 4405, ratio: 7.5, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 145558, som_tokens: 19611, ratio: 7.4, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 29337, som_tokens: 9697, ratio: 3, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54037, som_tokens: 22114, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 37994, som_tokens: 17669, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18546, som_tokens: 9566, ratio: 1.9, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11048, som_tokens: 7776, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4918, som_tokens: 3784, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7872, som_tokens: 6400, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5035, ratio: 1, category: "Dev Tools" },
  { url: "https://news.ycombinator.com", html_tokens: 11647, som_tokens: 14584, ratio: 0.8, category: "General" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 2476, som_tokens: 3282, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6393, som_tokens: 9334, ratio: 0.7, category: "Dev Tools" },
  { url: "https://www.python.org", html_tokens: 8969, som_tokens: 14460, ratio: 0.6, category: "General" },
  { url: "https://example.com", html_tokens: 162, som_tokens: 357, ratio: 0.5, category: "General" },
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
