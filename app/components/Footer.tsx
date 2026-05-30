export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-surface-container-high py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-primary">SYS_ARCH_V2.4</div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.12em] text-text-dim">
            © 2026 - Backend & Data Systems Engineer - Mumbai, IN
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { label: "GITHUB", href: "https://github.com/ArnavTambe06" },
            { label: "LINKEDIN", href: "https://linkedin.com/in/arnavtambe06" },
            { label: "EMAIL", href: "mailto:arnavtambe01@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              className="border border-border bg-bg px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors hover:bg-surface hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
