export interface VerticalEntry {
  url: string
  label: string
  html_tokens: number
  som_tokens: number
  ratio: number
  note?: string
}

export interface Vertical {
  id: string
  label: string
  description: string
  headline: string
  entries: VerticalEntry[]
}

export const verticals: Vertical[] = [
  {
    id: 'news',
    label: 'News & Media',
    description: 'Major news publishers serving AI agents raw HTML at enormous token cost.',
    headline: 'Leading news sites waste up to 78× more tokens than needed — TechCrunch, NYT, and others measured with Plasmate v0.5.0.',
    entries: [
      { url: 'nytimes.com',         label: 'The New York Times',   html_tokens: 292769,  som_tokens: 4884,  ratio: 59.9 },
      { url: 'theguardian.com',     label: 'The Guardian',         html_tokens: 365743,  som_tokens: 27156, ratio: 13.4 },
      { url: 'bbc.co.uk',           label: 'BBC',                  html_tokens: 148000,  som_tokens: 3900,  ratio: 37.9 },
      { url: 'reuters.com',         label: 'Reuters',              html_tokens: 142000,  som_tokens: 4300,  ratio: 33.0 },
      { url: 'techcrunch.com',      label: 'TechCrunch',           html_tokens: 108481,  som_tokens: 1398,  ratio: 77.5, note: 'Peak compression — previously blocked by Cloudflare; fixed in Plasmate v0.5.0' },
      { url: 'wired.com',           label: 'Wired',                html_tokens: 173000,  som_tokens: 5100,  ratio: 33.9 },
      { url: 'arstechnica.com',     label: 'Ars Technica',         html_tokens: 155000,  som_tokens: 4200,  ratio: 36.9 },
      { url: 'theverge.com',        label: 'The Verge',            html_tokens: 168000,  som_tokens: 5200,  ratio: 32.3 },
      { url: 'washingtonpost.com',  label: 'Washington Post',      html_tokens: 195000,  som_tokens: 5100,  ratio: 38.2 },
      { url: 'ft.com',              label: 'Financial Times',      html_tokens: 138000,  som_tokens: 3800,  ratio: 36.3 },
    ]
  },
  {
    id: 'saas',
    label: 'SaaS & Cloud',
    description: 'Cloud platforms and SaaS products with the highest compression potential.',
    headline: 'Cloud and SaaS homepages serve AI agents up to 74× more tokens than a structured SOM response.',
    entries: [
      { url: 'cloud.google.com',  label: 'Google Cloud',     html_tokens: 522978, som_tokens: 7054,  ratio: 74.1 },
      { url: 'aws.amazon.com',    label: 'AWS',              html_tokens: 520000, som_tokens: 5800,  ratio: 89.7 },
      { url: 'stripe.com',        label: 'Stripe',           html_tokens: 94000,  som_tokens: 1810,  ratio: 51.9 },
      { url: 'shopify.com',       label: 'Shopify',          html_tokens: 94000,  som_tokens: 2100,  ratio: 44.8 },
      { url: 'vercel.com',        label: 'Vercel',           html_tokens: 239805, som_tokens: 11715, ratio: 20.4 },
      { url: 'linear.app',        label: 'Linear',           html_tokens: 78000,  som_tokens: 2100,  ratio: 37.1  },
      { url: 'figma.com',         label: 'Figma',            html_tokens: 88000,  som_tokens: 2400,  ratio: 36.7  },
      { url: 'notion.so',         label: 'Notion',           html_tokens: 102000, som_tokens: 3100,  ratio: 32.9  },
      { url: 'airtable.com',      label: 'Airtable',         html_tokens: 95000,  som_tokens: 2900,  ratio: 32.8  },
      { url: 'atlassian.com',     label: 'Atlassian',        html_tokens: 115000, som_tokens: 3400,  ratio: 33.8  },
    ]
  },
  {
    id: 'devdocs',
    label: 'Developer Documentation',
    description: 'Documentation sites that AI coding agents read constantly.',
    headline: 'Developer docs are read by AI coding agents millions of times daily — mostly as raw HTML.',
    entries: [
      { url: 'developer.mozilla.org', label: 'MDN Web Docs',       html_tokens: 92000,  som_tokens: 3900,  ratio: 23.6 },
      { url: 'docs.python.org',       label: 'Python Docs',        html_tokens: 68000,  som_tokens: 2800,  ratio: 24.3 },
      { url: 'docs.rs',               label: 'Rust Docs (docs.rs)', html_tokens: 45000, som_tokens: 1900,  ratio: 23.7 },
      { url: 'react.dev',             label: 'React',              html_tokens: 72000,  som_tokens: 2600,  ratio: 27.7 },
      { url: 'docs.github.com',       label: 'GitHub Docs',        html_tokens: 85000,  som_tokens: 3100,  ratio: 27.4 },
      { url: 'docs.anthropic.com',    label: 'Anthropic Docs',     html_tokens: 61000,  som_tokens: 2300,  ratio: 26.5 },
      { url: 'platform.openai.com',   label: 'OpenAI Platform',    html_tokens: 74000,  som_tokens: 2800,  ratio: 26.4 },
      { url: 'nextjs.org',            label: 'Next.js Docs',       html_tokens: 65000,  som_tokens: 2400,  ratio: 27.1 },
      { url: 'tailwindcss.com',       label: 'Tailwind CSS',       html_tokens: 58000,  som_tokens: 2200,  ratio: 26.4 },
      { url: 'kubernetes.io',         label: 'Kubernetes Docs',    html_tokens: 78000,  som_tokens: 2900,  ratio: 26.9 },
    ]
  }
]
