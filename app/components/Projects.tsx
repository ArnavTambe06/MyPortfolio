"use client";

import { ArrowUpRight, Circle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";

const projects = [
  {
    id: "01",
    name: "TweetSense",
    sub: "Real-time sentiment pipeline",
    type: "DATA · CLOUD · NLP",
    featured: true,
    status: "DEPLOYED",
    desc:
      "Cloud-native sentiment analysis system ingesting tweets, processing through a Bronze → Silver → Gold medallion flow, and surfacing insights in BI. Built with infra, monitoring, and deployment in mind.",
    highlights: [
      "Medallion architecture (Bronze/Silver/Gold)",
      "Partitioned + clustered BigQuery tables",
      "Dual NLP (TextBlob + VADER)",
      "Pub/Sub → Cloud Functions → BigQuery",
    ],
    stack: ["Python", "GCP Pub/Sub", "BigQuery", "Cloud Functions", "TextBlob", "VADER", "Power BI"],
    github: "https://github.com/ArnavTambe06/TweetSense",
  },
  {
    id: "02",
    name: "SQL Data Warehouse",
    sub: "Medallion architecture in T-SQL",
    type: "DATA · SQL",
    featured: false,
    status: "COMPLETE",
    desc:
      "A full data warehouse implementation in T-SQL following medallion principles: datasets, ETL scripts, tests, and structured docs — focused on production-grade modeling and repeatability.",
    highlights: [
      "Bronze / Silver / Gold layer design",
      "ETL scripts with checks",
      "Structured datasets + docs",
      "Iterative development (20+ commits)",
    ],
    stack: ["T-SQL", "SQL Server", "ETL", "DWH design", "Medallion architecture"],
    github: "https://github.com/ArnavTambe06/sql_database_warehouse_project",
  },
  {
    id: "03",
    name: "FoodBridge",
    sub: "Location-aware food donation platform",
    type: "FULL-STACK · MOBILE · REAL-TIME",
    featured: false,
    status: "DEPLOYED",
    desc:
      "Cross-platform app connecting surplus food donors with NGOs. GPS discovery, real-time pickup coordination, and role-based access — designed for operational reliability.",
    highlights: [
      "PostGIS geospatial queries",
      "Realtime updates via WebSockets",
      "Role-based authentication",
      "CDN-backed media handling",
    ],
    stack: ["Flutter", "Supabase", "PostGIS", "Firebase", "Riverpod", "Cloudinary", "Node.js/Express"],
    github: "https://github.com/ArnavTambe06/FoodBridge",
  },
];

function getCardVariants(reduceMotion: boolean) {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion() ?? false;
  const cardVariants = useMemo(() => getCardVariants(reduceMotion), [reduceMotion]);

  return (
    <section id="projects" ref={ref} className="border-b border-border bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-primary">SELECTED_WORK</div>
            <h2 className="title-hover mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] tracking-[0.02em] text-text">
              Systems I have shipped.
            </h2>
          </div>
          <a
            href="https://github.com/ArnavTambe06"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors hover:bg-surface-2 hover:text-primary"
          >
            ALL_REPOS
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`soft-sheen border border-border bg-surface-container-lowest shadow-[8px_8px_0_rgba(140,113,102,0.12)] transition-transform duration-300 hover:-translate-y-1 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`p-6 sm:p-8 ${project.featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">
                        {project.id}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">
                        {project.type}
                      </span>
                    </div>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-primary">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[0.95] text-text">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs tracking-[0.14em] text-text-dim">
                      {project.sub}
                    </p>
                    <p className="mt-5 max-w-2xl font-body text-[1rem] leading-relaxed text-text">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border bg-surface px-3 py-2 font-mono text-[11px] tracking-[0.1em] text-text-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="soft-sheen mt-6 inline-flex items-center gap-2 border border-[#c64f00] bg-transparent px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-[#c64f00] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c64f00] hover:text-white"
                    >
                      GITHUB
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {project.featured && (
                  <div className="mt-8 lg:mt-0">
                    <div className="font-mono text-[10px] tracking-[0.22em] text-primary">HIGHLIGHTS</div>
                    <div className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-dim">
                          <Circle size={10} className="mt-1.5 flex-shrink-0 fill-primary text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border border-border bg-surface p-4 font-mono text-xs text-text-dim">
                      <div className="mb-3 text-primary">DATA_FLOW</div>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.18em]">
                        {["API", "QUEUE", "WORKER", "WAREHOUSE", "DASHBOARD"].map((node, index, arr) => (
                          <span key={node} className="flex items-center gap-2">
                            <span className="border border-border bg-bg px-2 py-1 text-text-dim">
                              {node}
                            </span>
                            {index < arr.length - 1 && <span className="text-text-dim/60">→</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
