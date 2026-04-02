const categories = [
  {
    name: "SaaS & Cloud",
    avg: "~47x",
    sites: "cloud.google.com, linear.app, figma.com, vercel.com, stripe.com, tailwindcss.com",
    borderColor: "border-l-accent",
    glowColor: "shadow-[inset_0_0_30px_rgba(0,229,160,0.06)]",
    textColor: "text-accent",
  },
  {
    name: "News & Media",
    avg: "~41x",
    sites: "nytimes.com, wired.com, bbc.com, guardian.com",
    borderColor: "border-l-accent",
    glowColor: "shadow-[inset_0_0_30px_rgba(0,229,160,0.06)]",
    textColor: "text-accent",
  },
  {
    name: "Dev Tools & Docs",
    avg: "~15x",
    sites: "nodejs.org, typescriptlang.org, react.dev, nextjs.org",
    borderColor: "border-l-warning",
    glowColor: "shadow-[inset_0_0_30px_rgba(244,162,97,0.06)]",
    textColor: "text-warning",
  },
  {
    name: "Static & Minimal",
    avg: "~0.7x",
    sites: "example.com, crates.io, pypi.org, Hacker News",
    borderColor: "border-l-loss",
    glowColor: "shadow-[inset_0_0_30px_rgba(255,71,87,0.06)]",
    textColor: "text-loss",
  },
];

export function CategoryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`rounded border border-border border-l-4 ${cat.borderColor} ${cat.glowColor} bg-surface-2 p-5 transition-all hover:border-border/80`}
        >
          <div className="font-display text-sm font-semibold text-text">
            {cat.name}
          </div>
          <div className={`mt-2 font-mono text-3xl font-bold ${cat.textColor}`}>
            {cat.avg}
          </div>
          <div className="mt-3 font-mono text-[10px] leading-relaxed tracking-wide text-muted">
            {cat.sites}
          </div>
        </div>
      ))}
    </div>
  );
}
