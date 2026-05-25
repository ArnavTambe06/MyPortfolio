"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    label: "2026",
    title: "Backend & Data Engineering",
    category: "CURRENT FOCUS",
    desc: "Building APIs, ETL pipelines, cloud systems, and production-oriented projects.",
  },
  {
    label: "MCA",
    title: "Master of Computer Applications",
    category: "ACADEMIC FOUNDATION",
    desc: "Using coursework as a base while prioritizing real projects and practical engineering.",
  },
  {
    label: "Hackathons",
    title: "Building Under Constraints",
    category: "EXPERIENCE",
    desc: "Exploring real-world systems through rapid execution and collaborative problem solving.",
  },
  {
    label: "Next",
    title: "Internship / Backend Role",
    category: "DIRECTION",
    desc: "Looking for opportunities to work on scalable systems and meaningful products.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 border-t border-border">
      {/* Section marker */}
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <div className="w-2 h-2 bg-phosphor ml-6 lg:ml-10" />
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-text-dim tracking-widest px-6">
          SECTION_03 · EXPERIENCE
        </span>
        <div className="flex-1 h-px bg-border" />
        <div className="w-2 h-2 bg-border-bright mr-6 lg:mr-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="font-mono text-xs text-phosphor-dim tracking-[0.2em] mb-4">EXPERIENCE</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-bright">
            Where I&apos;ve grown.
          </h2>
        </motion.div>

        <div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-12 py-10 items-start">
                {/* Left label */}
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-text-bright">
                  {item.label}
                </h3>

                {/* Right content */}
                <div>
                  <h4 className="font-display text-xl sm:text-2xl font-semibold text-text-bright mb-1">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-phosphor-dim mb-3">
                    {item.category}
                  </p>
                  <p className="text-text font-sans text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
