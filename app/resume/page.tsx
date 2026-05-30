import Link from "next/link";
import { ArrowLeft, FileText, ArrowUpRight } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[11px] tracking-[0.16em]">
          <Link href="/" className="inline-flex items-center gap-2 text-text-dim transition-colors hover:text-primary">
            <ArrowLeft size={14} />
            BACK_HOME
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-text-dim transition-colors hover:bg-surface-2 hover:text-primary"
          >
            OPEN_PDF
            <FileText size={14} />
          </a>
        </div>

        <section className="mt-6 border-2 border-border bg-surface-container-lowest">
          <div className="flex items-center justify-between gap-4 border-b border-border bg-surface px-5 py-4">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-primary">RESUME_VIEWER</div>
              <div className="mt-1 font-display text-2xl uppercase tracking-[0.02em] text-text">
                Arnav Tambe
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-[0.22em] text-text-dim">INLINE_PREVIEW</div>
          </div>

          <iframe
            src="/resume.pdf"
            title="Arnav Tambe resume"
            className="h-[calc(100vh-160px)] w-full bg-bg"
          />
        </section>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 font-mono text-[11px] tracking-[0.16em] text-text-dim">
          <div>VIEWER_MODE: INLINE</div>
          <a href="https://github.com/ArnavTambe06" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-primary">
            SOURCE
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </main>
  );
}
