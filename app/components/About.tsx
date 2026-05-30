"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    label: "BACKEND",
    skills: ["Java", "Spring Boot", "REST APIs", "Node.js", "Auth", "System design"],
  },
  {
    label: "DATA",
    skills: ["Python", "SQL · T-SQL", "ETL", "Warehousing", "BigQuery", "Power BI"],
  },
  {
    label: "INFRA",
    skills: ["GCP", "Pub/Sub", "Cloud Functions", "Docker", "Vercel", "Observability"],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="about" ref={ref} className="border-b border-border bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[11px] tracking-[0.18em] text-primary">ABOUT</div>
            <h2 className="title-hover mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] tracking-[0.02em] text-text">
              Backend-first,
              <span className="block text-primary">systems</span>
              oriented.
            </h2>

            <div className="mt-8 space-y-4 border-l border-border-bright pl-4 font-body text-[1rem] leading-relaxed text-text-dim">
              <p>
                I build production-leaning projects: APIs, pipelines, and data systems with
                clear structure and measurable outcomes.
              </p>
              <p>
                I care about reliability, trade-offs, and communication - the &quot;why&quot; behind
                the architecture.
              </p>
            </div>

            <div className="soft-sheen mt-12 border border-border bg-bg p-6 shadow-[6px_6px_0_rgba(140,113,102,0.12)] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-mono text-[10px] tracking-[0.22em] text-primary">QUICK_FACTS</div>
              <div className="mt-4 space-y-3 font-mono text-[11px] tracking-[0.08em]">
                <div className="flex gap-3">
                  <span className="w-24 text-text-dim">LOCATION</span>
                  <span className="text-text">Mumbai, IN</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-24 text-text-dim">FOCUS</span>
                  <span className="text-text">Backend + Data</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-24 text-text-dim">TARGET</span>
                  <span className="text-text">BFSI / Fintech</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-24 text-text-dim">STATUS</span>
                  <span className="text-primary">Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="soft-sheen border-2 border-border bg-bg p-6 sm:p-8 lg:p-9 shadow-[8px_8px_0_rgba(140,113,102,0.12)] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-mono text-[10px] tracking-[0.22em] text-primary">SKILL_MATRIX</div>
              <div className="mt-6 space-y-6">
                {groups.map((g, gi) => (
                  <div key={g.label}>
                    <div className="mb-3 font-mono text-[11px] tracking-[0.22em] text-primary">
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s, si) => (
                        <motion.div
                          key={s}
                          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.12 + gi * 0.08 + si * 0.03, duration: 0.32 }}
                          className="border border-border bg-surface px-3 py-2.5 font-mono text-[11px] tracking-[0.1em] text-text-dim transition-colors hover:text-text"
                        >
                          {s}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <div className="font-mono text-[10px] tracking-[0.22em] text-primary">PRINCIPLES</div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-dim">
                  <li>Clear interfaces over clever abstractions.</li>
                  <li>Prefer simple, observable data flows.</li>
                  <li>Ship, measure, iterate.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
