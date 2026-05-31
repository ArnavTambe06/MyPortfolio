"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { useRef } from "react";

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="resume" ref={ref} className="border-b border-border bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="font-mono text-[11px] tracking-[0.18em] text-primary">RESUME</div>
            <h2 className="title-hover mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] tracking-[0.02em] text-text">
              View my
              <span className="block text-primary">resume</span>
              inline.
            </h2>
            <p className="mt-7 font-body text-[1rem] leading-relaxed text-text-dim">
              Open the resume viewer to see the PDF directly in your browser. No download prompt,
              just a clean read.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume"
                className="inline-flex items-center gap-2 border border-text bg-bg px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-bg"
              >
                OPEN_RESUME
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-border bg-bg px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-colors hover:bg-surface"
              >
                PDF_FILE
                <FileText size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-8"
          >
            <div className="soft-sheen border-2 border-[#c64f00] bg-surface-container-lowest shadow-[8px_8px_0_rgba(140,113,102,0.12)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4 border-b border-[#c64f00] bg-[#fff5ec] px-5 py-4">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] text-[#c64f00]">RESUME_PREVIEW</div>
                  <div className="mt-1 font-display text-xl uppercase tracking-[0.02em] text-text">
                    Arnav Tambe
                  </div>
                </div>
                <a
                  href="/resume"
                  className="soft-sheen inline-flex items-center gap-2 border border-[#c64f00] bg-bg px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-[#c64f00] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c64f00] hover:text-white"
                >
                  OPEN_VIEWER
                </a>
              </div>
              <iframe
                src="/resume.pdf"
                title="Arnav Tambe resume"
                className="h-[72vh] w-full bg-bg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
