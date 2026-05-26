import Link from "next/link";
import { IconArrowLeft, IconFileText } from "@tabler/icons-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-text-dim hover:text-text-bright transition-colors"
          >
            <IconArrowLeft size={14} />
            BACK_HOME
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 panel px-4 py-2 font-mono text-xs tracking-widest text-text-dim hover:text-text-bright transition-colors"
          >
            OPEN_PDF
            <IconFileText size={14} className="text-text-dim" />
          </a>
        </div>

        <div className="panel soft-shadow overflow-hidden border-border">
          <div className="border-b border-border/60 bg-white/10 px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-text-dim">RESUME_VIEWER</div>
              <div className="font-display text-xl text-text-bright mt-1">Arnav Tambe</div>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-text-dim">INLINE_PREVIEW</div>
          </div>
          <iframe
            src="/resume.pdf"
            title="Arnav Tambe resume"
            className="h-[calc(100vh-180px)] w-full bg-surface"
          />
        </div>
      </div>
    </main>
  );
}
