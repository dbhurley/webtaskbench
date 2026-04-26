import { NextResponse } from "next/server";
import { benchmarkData, benchmarkMeta, failedSites } from "@/data/benchmark";

export const dynamic = "force-static";

export async function GET() {
  const body = {
    protocol_version: "1.0",
    schema: "https://webtaskbench.com/protocol",
    published: benchmarkMeta.run_date,
    tool: {
      name: "Plasmate",
      version: benchmarkMeta.plasmate_version,
      source: "https://github.com/plasmate-labs/plasmate",
      license: "Apache 2.0",
    },
    baseline: {
      method: "curl -sL",
      user_agent: "WebTaskBench/1.0",
      timeout_ms: 30000,
    },
    tokenizer: {
      library: "tiktoken",
      model: "cl100k_base",
    },
    summary: {
      sites_attempted: benchmarkMeta.sites_attempted,
      sites_succeeded: benchmarkMeta.sites_succeeded,
      sites_failed: failedSites.length,
      avg_ratio: benchmarkMeta.avg_compression,
      median_ratio: benchmarkMeta.median_compression,
      peak_ratio: benchmarkMeta.peak_compression,
      peak_url: benchmarkMeta.peak_site,
      previous_version: benchmarkMeta.previous_version ?? null,
      previous_avg_ratio: benchmarkMeta.previous_avg_compression ?? null,
    },
    results: benchmarkData.map((entry) => ({
      url: entry.url,
      category: entry.category ?? "General",
      html_tokens: entry.html_tokens,
      tool_tokens: entry.som_tokens,
      ratio: entry.ratio,
      status: "success" as const,
    })),
    failed: failedSites.map((site) => ({
      url: site.url,
      status: "failure" as const,
      failure_reason: site.reason,
    })),
    links: {
      site: "https://webtaskbench.com",
      protocol: "https://webtaskbench.com/protocol",
      methodology: "https://webtaskbench.com/methodology",
      source: "https://github.com/dbhurley/webtaskbench",
      harness: "https://github.com/plasmate-labs/plasmate-benchmarks",
      engine: "https://plasmate.app",
      spec: "https://somspec.org/spec",
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
