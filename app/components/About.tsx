"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "// BACKEND",
    color: "border-phosphor/30 text-phosphor",
    dot: "bg-phosphor",
    skills: ["Java", "Spring Boot", "REST APIs", "Node.js", "Authentication", "System Architecture"],
  },
  {
    label: "// DATA",
    color: "border-amber/30 text-amber",
    dot: "bg-amber",
    skills: ["Python", "SQL · T-SQL", "ETL Pipelines", "Data Warehousing", "BigQuery", "Power BI"],
  },
  {
    label: "// INFRA",
    color: "border-text-dim/30 text-text-dim",
    dot: "bg-text-dim",
    skills: ["GCP · Pub/Sub", "Cloud Functions", "Docker", "Firebase", "Vercel", "Medallion Architecture"],
  },
  {
    label: "// FRONTEND",
    color: "border-text-dim/20 text-text-dim/70",
    dot: "bg-text-dim/50",
    skills: ["React", "Next.js", "Tailwind CSS", "Flutter · Dart"],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 border-t border-border">
      {/* Section marker */}
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <div className="w-2 h-2 bg-phosphor ml-6 lg:ml-10" />
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-text-dim tracking-widest px-6">
          SECTION_01 · ABOUT
        </span>
        <div className="flex-1 h-px bg-border" />
        <div className="w-2 h-2 bg-border-bright mr-6 lg:mr-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-mono text-xs text-phosphor-dim tracking-[0.2em] mb-6">
                // WHO_AM_I
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-bright mb-8 leading-tight">
                Builder.<br />
                <span className="text-phosphor">Systems</span><br />
                thinker.
              </h2>
              <div className="space-y-4 text-text font-sans text-base leading-relaxed">
                <p>
                  MCA student with a builder mindset — moving toward backend engineering
                  and data engineering rather than staying purely academic.
                </p>
                <p>
                  I care more about understanding systems, shipping things, and being
                  employable than collecting credentials. When I pick up a new concept,
                  I ship something with it.
                </p>
                <p className="text-text-dim font-mono text-sm border-l-2 border-phosphor pl-4">
                  "A Computer Applications postgraduate focused on backend and data systems
                  engineering — designing scalable APIs, ETL pipelines, and
                  production-oriented applications."
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-10 space-y-3">
                {[
                  ["LOCATION", "Mumbai, Maharashtra, IN"],
                  ["FOCUS", "Backend Eng + Data Engineering"],
                  ["SEEKING", "Internships · Placements · BFSI/Fintech"],
                  ["STATUS", "Available Now"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start gap-4 font-mono text-xs">
                    <span className="text-text-dim tracking-widest min-w-[80px]">{k}</span>
                    <span className="text-border-bright">·</span>
                    <span className={k === "STATUS" ? "text-phosphor" : "text-text"}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: skill matrix */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <div className={`font-mono text-[10px] tracking-widest mb-3 ${group.color.split(" ")[1]}`}>
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + gi * 0.08 + si * 0.04, duration: 0.35 }}
                        className={`flex items-center gap-2 border px-3 py-1.5 font-mono text-xs text-text-dim hover:text-text-bright hover:border-phosphor/40 transition-all cursor-default ${group.color.split(" ")[0]}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.dot}`} />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Architecture diagram hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 p-5 bg-surface border border-border font-mono text-xs text-text-dim leading-relaxed"
              >
                <div className="text-phosphor mb-3">// SYSTEM_PHILOSOPHY</div>
                <div className="space-y-1">
                  <div><span className="text-amber">const</span> approach = &#123;</div>
                  <div className="pl-4"><span className="text-phosphor">learning</span>: <span className="text-text">"build first, theory follows"</span>,</div>
                  <div className="pl-4"><span className="text-phosphor">output</span>: <span className="text-text">"production-oriented, not tutorial-grade"</span>,</div>
                  <div className="pl-4"><span className="text-phosphor">goal</span>: <span className="text-text">"systems that move data and power backends"</span>,</div>
                  <div>&#125;;</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
