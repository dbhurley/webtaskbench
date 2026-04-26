import type { Metadata } from "next";
import { Syne, Azeret_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { benchmarkMeta } from "@/data/benchmark";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const azeretMono = Azeret_Mono({ subsets: ["latin"], variable: "--font-mono" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://webtaskbench.com"),
  title: "WebTaskBench — AI Agent Web Benchmark Observatory",
  description:
    "Open benchmark tracking token efficiency across the real web for AI agents. Updated weekly. 17.5x average compression, 117x peak.",
  alternates: { canonical: "https://webtaskbench.com" },
  openGraph: {
    type: "website",
    siteName: "WebTaskBench",
    title: "WebTaskBench — AI Agent Web Benchmark Observatory",
    description:
      "Open, weekly-updated public benchmark of token efficiency for AI-agent web fetching. Reproducible, third-party-submittable methodology.",
    url: "https://webtaskbench.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@plasmate_labs",
    creator: "@plasmate_labs",
  },
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "WebTaskBench Benchmark Dataset",
  alternateName: "WebTaskBench",
  description:
    "Weekly-updated benchmark of token efficiency for AI-agent web fetching. Compares raw HTML token counts to Plasmate Semantic Object Model (SOM) output across a curated battery of real production websites.",
  url: "https://webtaskbench.com",
  identifier: "https://webtaskbench.com/api/v1/benchmark.json",
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
  keywords: [
    "AI agent",
    "web benchmark",
    "token efficiency",
    "Semantic Object Model",
    "SOM",
    "Plasmate",
    "web scraping",
    "headless browser",
    "LLM",
  ],
  creator: {
    "@type": "Organization",
    name: "Plasmate Labs",
    url: "https://plasmate.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Plasmate Labs",
    url: "https://plasmate.app",
  },
  measurementTechnique: [
    "tiktoken cl100k_base tokenization",
    "curl -sL HTML baseline",
    "Plasmate fetch SOM output",
  ],
  variableMeasured: [
    { "@type": "PropertyValue", name: "html_tokens" },
    { "@type": "PropertyValue", name: "som_tokens" },
    { "@type": "PropertyValue", name: "compression_ratio", unitText: "ratio" },
  ],
  distribution: [
    {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: "https://webtaskbench.com/api/v1/benchmark.json",
    },
  ],
  temporalCoverage: `${benchmarkMeta.run_date}/..`,
  dateModified: benchmarkMeta.run_date,
  citation: "https://webtaskbench.com/protocol",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Plasmate",
  description:
    "Open-source browser engine for AI agents. Produces Semantic Object Model (SOM), a structured JSON representation of web pages optimized for LLM consumption.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS, Windows",
  url: "https://plasmate.app",
  downloadUrl: "https://github.com/plasmate-labs/plasmate",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Organization",
    name: "Plasmate Labs",
    url: "https://plasmate.app",
    sameAs: [
      "https://github.com/plasmate-labs/plasmate",
      "https://docs.plasmate.app",
      "https://www.w3.org/community/web-content-browser-ai/",
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebTaskBench",
  url: "https://webtaskbench.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://webtaskbench.com/test?url={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${syne.variable} ${azeretMono.variable} ${dmSans.variable} font-body bg-bg text-text antialiased relative`}
      >
        <Header />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
