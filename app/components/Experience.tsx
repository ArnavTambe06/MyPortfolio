"use client";
import { motion, useInView } from "framer-motion";
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

  return (
    <section id="experience" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-kicker mb-4">EXPERIENCE</div>
          <h2 className="section-title">How I think and work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="panel soft-shadow p-6"
            >
              <div className="flex items-baseline justify-between gap-6">
                <div className="font-display text-3xl font-semibold text-text-bright">{item.label}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-primary-dim">{item.category}</div>
              </div>
              <div className="mt-4 font-display text-xl text-text-bright">{item.title}</div>
              <p className="mt-3 text-text text-sm leading-relaxed max-w-prose">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

