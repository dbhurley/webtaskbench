export function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://github.com/plasmate-labs/plasmate-benchmarks"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href="https://plasmate.app"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              plasmate.app
            </a>
            <span className="text-border">|</span>
            <a
              href="https://somspec.org"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              somspec.org
            </a>
            <span className="text-border">|</span>
            <a
              href="https://somordom.com"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              somordom.com
            </a>
          </div>
          <p className="text-xs text-muted">
            Benchmark data: Apache 2.0. Run by Plasmate Labs. Community contributions welcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
