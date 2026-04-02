export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/plasmate-labs/plasmate-benchmarks"
              className="text-muted transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span className="text-border">·</span>
            <a
              href="https://plasmate.app"
              className="text-muted transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              plasmate.app
            </a>
            <span className="text-border">·</span>
            <a
              href="https://somspec.org"
              className="text-muted transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              somspec.org
            </a>
            <span className="text-border">·</span>
            <a
              href="https://somordom.com"
              className="text-muted transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              somordom.com
            </a>
          </div>
          <p className="font-mono text-[10px] tracking-wider text-muted/60">
            BENCHMARK DATA: APACHE 2.0 — RUN BY PLASMATE LABS — COMMUNITY CONTRIBUTIONS WELCOME
          </p>
        </div>
      </div>
    </footer>
  );
}
