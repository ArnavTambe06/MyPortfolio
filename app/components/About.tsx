"use client";
import { motion, useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="section-kicker mb-5">ABOUT</div>
            <h2 className="section-title">
              Backend-first,
              <span className="block text-primary">systems</span>
              oriented.
            </h2>
            <div className="mt-8 space-y-4 text-text leading-relaxed text-[1rem]">
              <p>
                I build production-leaning projects: APIs, pipelines, and data systems with
                clear structure and measurable outcomes.
              </p>
              <p className="text-text-dim">
                I care about reliability, trade-offs, and communication — the “why” behind the
                architecture.
              </p>
            </div>

            <div className="mt-10 panel soft-shadow p-5">
              <div className="section-kicker mb-3">QUICK_FACTS</div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex gap-3"><span className="text-text-dim w-24">LOCATION</span><span className="text-text-bright">Mumbai, IN</span></div>
                <div className="flex gap-3"><span className="text-text-dim w-24">FOCUS</span><span className="text-text-bright">Backend + Data</span></div>
                <div className="flex gap-3"><span className="text-text-dim w-24">TARGET</span><span className="text-text-bright">BFSI / Fintech</span></div>
                <div className="flex gap-3"><span className="text-text-dim w-24">STATUS</span><span className="text-celestial-light">Available</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="panel soft-shadow p-7">
              <div className="section-kicker mb-5">SKILL_MATRIX</div>
              <div className="space-y-6">
                {groups.map((g, gi) => (
                  <div key={g.label}>
                    <div className="font-mono text-xs tracking-[0.22em] text-primary-dim mb-3">{g.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s, si) => (
                        <motion.div
                          key={s}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.15 + gi * 0.08 + si * 0.03, duration: 0.35 }}
                          className="border border-border/70 bg-white/10 px-3 py-2.5 font-mono text-sm text-text-dim hover:text-text-bright transition-colors"
                        >
                          {s}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <div className="section-kicker mb-3">PRINCIPLES</div>
                <ul className="space-y-2 text-text-dim text-sm">
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

