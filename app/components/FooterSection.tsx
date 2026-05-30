export default function FooterSection() {
  return (
    <footer className="border-t-2 border-border-bright bg-surface-container-high py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-primary">SYS_ARCH_V2.4</div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.12em] text-text-dim">
            UNIT_ID: BE_ENG_0992 | BUILT_IN_JP_WORKSHOP
          </div>
        </div>

        <div className="flex flex-wrap gap-5 font-mono text-[11px] tracking-[0.16em] text-text-dim">
          <a href="https://github.com/ArnavTambe06" target="_blank" rel="noopener" className="hover:text-primary">
            Source
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="hover:text-primary">
            Documentation
          </a>
          <a href="#hardware" className="hover:text-primary">
            Hardware_Specs
          </a>
        </div>

        <div className="font-mono text-[11px] tracking-[0.12em] text-text-dim">
          2026 SYSTEM_ARCHIVE. ALL_RIGHTS_RESERVED
        </div>
      </div>
    </footer>
  );
}
