"use client";
import { motion, useInView } from "framer-motion";
import { IconArrowUpRight, IconFileText } from "@tabler/icons-react";
import { useRef } from "react";

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="section-kicker mb-5">RESUME</div>
            <h2 className="section-title leading-[0.98]">
              View my
              <span className="block text-primary">resume</span>
              inline.
            </h2>
            <p className="mt-7 text-text text-base leading-relaxed">
              Open the resume viewer to see the PDF directly in your browser. No download prompt, just a clean read.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume"
                className="pill-button pill-button--primary"
              >
                OPEN_RESUME
                <IconArrowUpRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="pill-button pill-button--outline"
              >
                PDF_FILE
                <IconFileText size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-8"
          >
            <div className="panel soft-shadow overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/60 bg-white/10 px-5 py-4">
                <div className="section-kicker">RESUME_PREVIEW</div>
                <a
                  href="/resume"
                  className="pill-button pill-button--outline px-4 py-2"
                >
                  OPEN_VIEWER
                </a>
              </div>
              <iframe
                src="/resume.pdf"
                title="Arnav Tambe resume"
                className="h-[72vh] w-full bg-surface"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
