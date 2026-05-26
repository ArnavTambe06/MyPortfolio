"use client";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useMemo, useRef } from "react";
import { IconArrowUpRight, IconPointFilled } from "@tabler/icons-react";

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

function getCardVariants(reduceMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };
}

function getStaggerVariants(): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
  };
}

function getTagVariants(reduceMotion: boolean): { container: Variants; item: Variants } {
  return {
    container: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.02,
          delayChildren: 0.0,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
  };
}

function ProjectCard({ p, index }: { p: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion() ?? false;
  const cardVariants = useMemo(() => getCardVariants(reduceMotion), [reduceMotion]);
  const tagVariants = useMemo(() => getTagVariants(reduceMotion), [reduceMotion]);

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial={reduceMotion ? "show" : "hidden"}
      animate={reduceMotion || inView ? "show" : "hidden"}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.008,
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.998 }}
      className={`panel soft-shadow transition-transform duration-200 will-change-transform ${p.featured ? "lg:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-white/10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-text-dim">{p.id}</span>
          <span className="font-mono text-[10px] tracking-widest text-text-dim/70">{p.type}</span>
        </div>
        <span className="font-mono text-[10px] tracking-widest border border-border/70 px-2 py-1 text-text-dim">
          {p.status}
        </span>
      </div>

      <div className={`p-6 ${p.featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
        <div>
          <h3 className="font-display text-3xl font-semibold text-text-bright mb-1">{p.name}</h3>
          <p className="font-mono text-xs text-text-dim mb-5">{p.sub}</p>
          <p className="text-text text-base leading-relaxed mb-6">{p.desc}</p>

          <motion.div
            variants={tagVariants.container}
            initial={reduceMotion ? "show" : "hidden"}
            animate={reduceMotion || inView ? "show" : "hidden"}
            className="flex flex-wrap gap-2 mb-6"
          >
            {p.stack.map((t) => (
              <motion.span
                key={t}
                variants={tagVariants.item}
                className="font-mono text-xs tracking-[0.14em] border border-border/70 bg-white/10 px-2.5 py-1.5 text-text-dim hover:text-text-bright transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex gap-4">
            <motion.a
              href={p.github}
              target="_blank"
              rel="noopener"
              whileHover={reduceMotion ? undefined : { x: 2 }}
              className="group/link flex items-center gap-2 font-mono text-xs text-text-dim hover:text-text-bright border border-border/70 bg-white/5 hover:bg-white/10 px-4 py-2 transition-all"
            >
              GITHUB
              <IconArrowUpRight
                size={14}
                className="text-text-dim group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
              />
            </motion.a>
          </div>
        </div>

        {p.featured && (
          <div className="mt-8 lg:mt-0">
            <div className="font-mono text-[10px] tracking-widest text-text-dim mb-4">HIGHLIGHTS</div>
            <div className="space-y-3">
              {p.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.18 + i * 0.04 }}
                  className="flex items-start gap-3 font-mono text-xs text-text"
                >
                  <IconPointFilled size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                  {h}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 border border-border/70 bg-white/10 font-mono text-xs text-text-dim">
              <div className="text-primary-dim mb-3">DATA_FLOW</div>
              <div className="flex items-center flex-wrap gap-2 text-[10px]">
                {["API", "QUEUE", "WORKER", "WAREHOUSE", "DASHBOARD"].map((node, ni, arr) => (
                  <span key={ni} className="flex items-center gap-2">
                    <span className="border border-border/70 bg-white/10 px-2 py-1 text-text-dim">{node}</span>
                    {ni < arr.length - 1 && <span className="text-text-dim/60">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion() ?? false;
  const gridVariants = useMemo(() => getStaggerVariants(), []);

  return (
    <section id="projects" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-6"
        >
          <div>
            <div className="section-kicker mb-4">SELECTED_WORK</div>
            <h2 className="section-title">Systems I have shipped.</h2>
          </div>
          <a
            href="https://github.com/ArnavTambe06"
            target="_blank"
            rel="noopener"
            className="pill-button pill-button--outline"
          >
            ALL_REPOS <IconArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial={reduceMotion ? "show" : "hidden"}
          animate={reduceMotion || inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

