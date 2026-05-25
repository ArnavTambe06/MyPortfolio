export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-lg text-text-bright mb-1">Arnav Tambe</div>
          <div className="font-mono text-xs text-text-dim">© 2026 · Backend & Data Systems Engineer · Mumbai, IN</div>
        </div>
        <div className="flex gap-8">
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
              className="font-mono text-[10px] tracking-widest text-text-dim hover:text-phosphor transition-colors hover-underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
