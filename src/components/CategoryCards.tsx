const categories = [
  {
    name: "SaaS & Cloud",
    avg: "~47x",
    sites: "cloud.google.com, linear.app, figma.com, vercel.com, stripe.com, tailwindcss.com",
    color: "text-accent",
  },
  {
    name: "News & Media",
    avg: "~41x",
    sites: "nytimes.com, wired.com, bbc.com, guardian.com",
    color: "text-accent",
  },
  {
    name: "Dev Tools & Docs",
    avg: "~15x",
    sites: "nodejs.org, typescriptlang.org, react.dev, nextjs.org",
    color: "text-accent",
  },
  {
    name: "Static & Minimal",
    avg: "~0.7x",
    sites: "example.com, crates.io, pypi.org, Hacker News",
    color: "text-warning",
  },
];

export function CategoryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="rounded-xl border border-border bg-surface p-5"
        >
          <div className="text-sm font-medium text-muted">{cat.name}</div>
          <div className={`mt-1 text-2xl font-bold ${cat.color}`}>
            {cat.avg}
          </div>
          <div className="mt-2 text-xs text-muted">{cat.sites}</div>
        </div>
      ))}
    </div>
  );
}
