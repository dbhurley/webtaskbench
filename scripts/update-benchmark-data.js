#!/usr/bin/env node
// update-benchmark-data.js
// Reads benchmark JSON (from plasmate-benchmarks run) and updates
// src/data/benchmark.ts with fresh data + metadata.
//
// Usage: node scripts/update-benchmark-data.js <results.json> [plasmate-version]
// Example: node scripts/update-benchmark-data.js benchmarks/results/benchmark-*.json 0.5.0

const fs = require('fs')
const path = require('path')

const BENCHMARK_TS = path.join(__dirname, '..', 'src', 'data', 'benchmark.ts')

// ── Category classifier ──────────────────────────────────────────────────────
const CATEGORIES = {
  'News & Media': [
    'nytimes.com', 'theguardian.com', 'bbc.com', 'bbc.co.uk', 'reuters.com',
    'techcrunch.com', 'wired.com', 'arstechnica.com', 'theverge.com',
    'washingtonpost.com', 'ft.com', 'medium.com',
  ],
  'SaaS & Cloud': [
    'cloud.google.com', 'aws.amazon.com', 'azure.microsoft.com', 'stripe.com',
    'shopify.com', 'vercel.com', 'linear.app', 'figma.com', 'notion.so',
    'airtable.com', 'atlassian.com', 'docker.com', 'mongodb.com',
    'tailwindcss.com',
  ],
  'Dev Tools': [
    'github.com', 'docs.github.com', 'developer.mozilla.org', 'docs.python.org',
    'docs.rs', 'react.dev', 'vuejs.org', 'angular.dev', 'svelte.dev',
    'nextjs.org', 'npmjs.com', 'pypi.org', 'rust-lang.org', 'typescriptlang.org',
    'getbootstrap.com', 'postgresql.org', 'kubernetes.io',
  ],
}

function classify(url) {
  const hostname = new URL(url).hostname.replace(/^www\./, '')
  for (const [cat, domains] of Object.entries(CATEGORIES)) {
    if (domains.some(d => hostname.includes(d))) return cat
  }
  return 'General'
}

// ── Main ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
if (args.length < 1) {
  console.error('Usage: node update-benchmark-data.js <results.json> [version]')
  process.exit(1)
}

const resultsFile = args[0]
const version = args[1] || 'unknown'

// Read existing file to preserve failedSites and helper functions
const existingTs = fs.readFileSync(BENCHMARK_TS, 'utf8')

// Extract failedSites block
const failedMatch = existingTs.match(/export const failedSites\s*=\s*(\[[\s\S]*?\]);/)
const failedSites = failedMatch ? failedMatch[1] : '[]'

// Read benchmark results
const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'))
const entries = results.filter(e => e.ratio > 0).sort((a, b) => b.ratio - a.ratio)

// Compute metadata
const ratios = entries.map(e => e.ratio).sort((a, b) => a - b)
const median = ratios.length % 2 === 0
  ? (ratios[ratios.length / 2 - 1] + ratios[ratios.length / 2]) / 2
  : ratios[Math.floor(ratios.length / 2)]
const avg = ratios.reduce((s, r) => s + r, 0) / ratios.length
const peak = entries[0]
const totalHtml = entries.reduce((s, e) => s + e.html_tokens, 0)
const totalSom = entries.reduce((s, e) => s + e.som_tokens, 0)

// Read previous meta for delta tracking
const prevMetaMatch = existingTs.match(/plasmate_version:\s*"([^"]+)"/)
const prevAvgMatch = existingTs.match(/avg_compression:\s*([\d.]+)/)
const prevVersion = prevMetaMatch ? prevMetaMatch[1] : undefined
const prevAvg = prevAvgMatch ? parseFloat(prevAvgMatch[1]) : undefined

// Generate new TypeScript
const entryLines = entries.map(e => {
  const cat = classify(e.url)
  return `  { url: ${JSON.stringify(e.url)}, html_tokens: ${e.html_tokens}, som_tokens: ${e.som_tokens}, ratio: ${e.ratio}, category: "${cat}" },`
}).join('\n')

const now = new Date().toISOString()

const output = `export interface BenchmarkMeta {
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
  plasmate_version: "${version}",
  run_date: "${now}",
  sites_attempted: ${results.length},
  sites_succeeded: ${entries.length},
  avg_compression: ${avg.toFixed(1)},
  median_compression: ${median.toFixed(1)},
  peak_compression: ${peak.ratio},
  peak_site: "${new URL(peak.url).hostname.replace(/^www\\./, '')}",
${prevVersion ? `  previous_version: "${prevVersion}",\n` : ''}${prevAvg ? `  previous_avg_compression: ${prevAvg},\n` : ''}};

export interface BenchmarkEntry {
  url: string;
  html_tokens: number;
  som_tokens: number;
  ratio: number;
  category?: string;
}

export const benchmarkData: BenchmarkEntry[] = [
${entryLines}
];

export const failedSites = ${failedSites};

export function getSiteName(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\\./, "") + (u.pathname !== "/" ? u.pathname : "");
  } catch {
    return url;
  }
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatTokensShort(n: number): string {
  if (n >= 1_000_000) return \`\${(n / 1_000_000).toFixed(1)}M\`;
  if (n >= 1_000) return \`\${(n / 1_000).toFixed(0)}K\`;
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
`

fs.writeFileSync(BENCHMARK_TS, output)
console.log(`Updated benchmark.ts: ${entries.length} sites, v${version}, avg ${avg.toFixed(1)}x, peak ${peak.ratio}x (${new URL(peak.url).hostname})`)
