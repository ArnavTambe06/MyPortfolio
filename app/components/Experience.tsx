"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    label: "2026",
    title: "Backend & data engineering",
    category: "CURRENT FOCUS",
    desc: "APIs, ETL pipelines, cloud systems, and production-oriented projects.",
  },
  {
    label: "MCA",
    title: "Master of Computer Applications",
    category: "FOUNDATION",
    desc: "Coursework as a base — projects as the proof.",
  },
  {
    label: "Build",
    title: "Shipping under constraints",
    category: "PRACTICE",
    desc: "Design, implement, observe, iterate. Prefer small batch size.",
  },
  {
    label: "Next",
    title: "Internship / backend role",
    category: "DIRECTION",
    desc: "Looking for teams solving real reliability and scale problems.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="experience" ref={ref} className="border-b border-border bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="title-hover font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] tracking-[0.02em] text-text">
            How I think and work.
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">EXPERIENCE</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.label}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            className="soft-sheen border border-border bg-bg p-6 shadow-[6px_6px_0_rgba(140,113,102,0.1)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-4">
                <div className="font-display text-[clamp(2.2rem,4vw,3rem)] leading-none text-text">
                  {item.label}
                </div>
                <div className="font-mono text-[10px] tracking-[0.18em] text-primary">
                  {item.category}
                </div>
              </div>
              <div className="mt-4 font-display text-[clamp(1.4rem,2vw,2rem)] text-text">
                {item.title}
              </div>
              <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-text-dim">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
