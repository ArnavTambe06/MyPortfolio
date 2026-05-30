"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LINKS = [
  {
    label: "Email",
    value: "arnavtambe01@gmail.com",
    href: "mailto:arnavtambe01@gmail.com",
    desc: "Fastest way to reach me",
    primary: true,
  },
  {
    label: "GitHub",
    value: "ArnavTambe06",
    href: "https://github.com/ArnavTambe06",
    desc: "Projects and source",
    primary: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arnavtambe06",
    href: "https://linkedin.com/in/arnavtambe06",
    desc: "Professional profile",
    primary: false,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="connect"
      ref={ref}
      className="border-b border-border bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-text">
            Connect
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">[04]</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="etched-border bg-bg p-6 lg:col-span-5"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] text-primary">SESSION_STATUS</div>
            <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.8rem)] uppercase tracking-[0.02em] text-text">
              Let&apos;s build something reliable.
            </h3>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-text-dim">
              I&apos;m open to backend and data engineering roles, internships, and contract
              work. If the problem is systems, scale, or data quality, I&apos;d love to hear
              about it.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Response time: 24-48 hrs",
                "Location: Mumbai - Remote OK",
                "Target: BFSI - Fintech",
              ].map((line) => (
                <div key={line} className="border border-border bg-surface px-4 py-3 font-mono text-[11px] tracking-[0.1em] text-text-dim">
                  {line}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.14 + index * 0.07 }}
                  className={`etched-border p-5 transition-colors ${
                    link.primary ? "bg-surface-2" : "bg-surface"
                  } hover:bg-surface-2`}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary">
                    {link.label}
                  </div>
                  <div className="mt-2 font-mono text-sm font-bold tracking-[0.08em] text-text">
                    {link.value}
                  </div>
                  <div className="mt-2 text-xs text-text-dim">{link.desc}</div>
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
