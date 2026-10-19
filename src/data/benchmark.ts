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
  run_date: "2026-10-19T06:44:35.382Z",
  sites_attempted: 38,
  sites_succeeded: 37,
  avg_compression: 22.8,
  median_compression: 9.7,
  peak_compression: 138.5,
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
  { url: "https://cloud.google.com", html_tokens: 892145, som_tokens: 6440, ratio: 138.5, category: "SaaS & Cloud" },
  { url: "https://kubernetes.io/docs", html_tokens: 128630, som_tokens: 1227, ratio: 104.8, category: "Dev Tools" },
  { url: "https://techcrunch.com", html_tokens: 142776, som_tokens: 1401, ratio: 101.9, category: "News & Media" },
  { url: "https://www.figma.com", html_tokens: 610845, som_tokens: 9442, ratio: 64.7, category: "SaaS & Cloud" },
  { url: "https://stripe.com/docs", html_tokens: 404522, som_tokens: 7016, ratio: 57.7, category: "SaaS & Cloud" },
  { url: "https://www.linear.app", html_tokens: 572181, som_tokens: 10768, ratio: 53.1, category: "SaaS & Cloud" },
  { url: "https://tailwindcss.com", html_tokens: 387180, som_tokens: 7732, ratio: 50.1, category: "SaaS & Cloud" },
  { url: "https://httpbin.org", html_tokens: 2968, som_tokens: 79, ratio: 37.6, category: "General" },
  { url: "https://www.wired.com", html_tokens: 510527, som_tokens: 15625, ratio: 32.7, category: "News & Media" },
  { url: "https://www.typescriptlang.org", html_tokens: 102699, som_tokens: 4821, ratio: 21.3, category: "Dev Tools" },
  { url: "https://vercel.com", html_tokens: 225111, som_tokens: 11838, ratio: 19, category: "SaaS & Cloud" },
  { url: "https://www.theguardian.com", html_tokens: 452166, som_tokens: 26761, ratio: 16.9, category: "News & Media" },
  { url: "https://www.docker.com", html_tokens: 200505, som_tokens: 12254, ratio: 16.4, category: "SaaS & Cloud" },
  { url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", html_tokens: 344371, som_tokens: 24099, ratio: 14.3, category: "General" },
  { url: "https://aws.amazon.com", html_tokens: 167027, som_tokens: 11812, ratio: 14.1, category: "SaaS & Cloud" },
  { url: "https://www.bbc.com/news", html_tokens: 133115, som_tokens: 9877, ratio: 13.5, category: "News & Media" },
  { url: "https://jsonplaceholder.typicode.com", html_tokens: 24864, som_tokens: 2449, ratio: 10.2, category: "General" },
  { url: "https://github.com/plasmate-labs/plasmate", html_tokens: 190068, som_tokens: 19309, ratio: 9.8, category: "Dev Tools" },
  { url: "https://www.ycombinator.com", html_tokens: 113734, som_tokens: 11667, ratio: 9.7, category: "General" },
  { url: "https://www.notion.so", html_tokens: 76218, som_tokens: 8059, ratio: 9.5, category: "SaaS & Cloud" },
  { url: "https://nextjs.org", html_tokens: 79816, som_tokens: 8684, ratio: 9.2, category: "Dev Tools" },
  { url: "https://angular.dev", html_tokens: 33343, som_tokens: 4405, ratio: 7.6, category: "Dev Tools" },
  { url: "https://azure.microsoft.com", html_tokens: 145295, som_tokens: 20861, ratio: 7, category: "News & Media" },
  { url: "https://vuejs.org", html_tokens: 34592, som_tokens: 8769, ratio: 3.9, category: "Dev Tools" },
  { url: "https://getbootstrap.com", html_tokens: 22773, som_tokens: 6534, ratio: 3.5, category: "Dev Tools" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html_tokens: 54048, som_tokens: 22118, ratio: 2.4, category: "Dev Tools" },
  { url: "https://svelte.dev", html_tokens: 38486, som_tokens: 17807, ratio: 2.2, category: "Dev Tools" },
  { url: "https://lobste.rs", html_tokens: 18667, som_tokens: 9463, ratio: 2, category: "General" },
  { url: "https://www.mysql.com", html_tokens: 11073, som_tokens: 7794, ratio: 1.4, category: "General" },
  { url: "https://docs.rs", html_tokens: 4899, som_tokens: 3724, ratio: 1.3, category: "Dev Tools" },
  { url: "https://pypi.org", html_tokens: 7862, som_tokens: 6390, ratio: 1.2, category: "Dev Tools" },
  { url: "https://www.rust-lang.org", html_tokens: 5112, som_tokens: 5038, ratio: 1, category: "Dev Tools" },
  { url: "https://medium.com", html_tokens: 1384, som_tokens: 1394, ratio: 1, category: "News & Media" },
  { url: "https://www.python.org", html_tokens: 13620, som_tokens: 14377, ratio: 0.9, category: "General" },
  { url: "https://news.ycombinator.com", html_tokens: 11752, som_tokens: 14478, ratio: 0.8, category: "General" },
  { url: "https://www.postgresql.org", html_tokens: 6472, som_tokens: 9486, ratio: 0.7, category: "Dev Tools" },
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
