"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LINKS = [
  { label: "GitHub", href: "https://github.com/ArnavTambe06" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arnavtambe06" },
  { label: "Email", href: "mailto:arnavtambe01@gmail.com" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="contact" ref={ref} className="border-b border-border bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-text">
            Handoff
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">[05]</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="etched-border bg-surface p-6 lg:col-span-5"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] text-primary">SESSION_NOTE</div>
            <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.7rem)] uppercase tracking-[0.02em] text-text">
              Ready to work on the next system.
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-text-dim">
              If you need someone who can think in APIs, pipelines, and dependable user flows,
              I&apos;m ready to jump in.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#7c2e00]"
              >
                OPEN_SPEC_SHEET
                <FileText size={14} />
              </a>
              <a
                href="mailto:arnavtambe01@gmail.com"
                className="inline-flex items-center gap-2 border border-border bg-bg px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-colors hover:bg-surface"
              >
                SEND_MESSAGE
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.14 + index * 0.06 }}
                  className="etched-border bg-surface-container-lowest p-5 transition-colors hover:bg-surface"
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary">
                    {link.label}
                  </div>
                  <div className="mt-2 font-mono text-sm font-bold tracking-[0.08em] text-text">
                    {link.label === "Email"
                      ? "arnavtambe01@gmail.com"
                      : link.label === "GitHub"
                        ? "ArnavTambe06"
                        : "linkedin.com/in/arnavtambe06"}
                  </div>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-text-dim">
                    OPEN
                    <ArrowUpRight size={14} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
