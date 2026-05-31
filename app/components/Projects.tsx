"use client";

import { ArrowUpRight, CircleCheckBig } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";

type Project = {
  id: string;
  name: string;
  sub: string;
  type: string;
  featured: boolean;
  status: string;
  desc: string;
  highlights: string[];
  stack: string[];
  github: string;
  live?: string;
};

const PAYSTREAM_FLOW = [
  { label: "JWT AUTH", sub: "Login + RBAC" },
  { label: "WALLETS", sub: "Balance + access" },
  { label: "TRANSACTIONS", sub: "Deposit / Withdraw / Transfer" },
  { label: "PAYMENTS", sub: "Gateway orchestration" },
  { label: "ADMIN + HEALTH", sub: "Audit, metrics, status" },
];

const projects: Project[] = [
  {
    id: "01",
    name: "PayStream",
    sub: "Production-grade payment orchestration backend",
    type: "BACKEND | FINTECH | RESILIENCE",
    featured: true,
    status: "DEPLOYED",
    desc:
      "Production-grade payment orchestration API built with Java 21 and Spring Boot 3.5, focused on secure transactions, resilience, caching, and admin operations.",
    highlights: [
      "Double-entry ledger with audit trail",
      "Pessimistic locking and idempotency keys",
      "Circuit breaker with fallback provider",
      "Redis caching, rate limiting, and admin APIs",
    ],
    stack: ["Java 21", "Spring Boot 3.5", "PostgreSQL", "Redis", "Flyway", "Resilience4j", "Maven"],
    live: "https://pay-stream-ui.vercel.app/",
    github: "https://github.com/ArnavTambe06/PayStream.git",
  },
  {
    id: "02",
    name: "TweetSense",
    sub: "Real-time sentiment pipeline",
    type: "DATA | CLOUD | NLP",
    featured: false,
    status: "DEPLOYED",
    desc:
      "Cloud-native sentiment analysis system ingesting tweets, processing through a Bronze -> Silver -> Gold medallion flow, and surfacing insights in BI. Built with infra, monitoring, and deployment in mind.",
    highlights: [
      "Medallion architecture (Bronze/Silver/Gold)",
      "Partitioned + clustered BigQuery tables",
      "Dual NLP (TextBlob + VADER)",
      "Pub/Sub -> Cloud Functions -> BigQuery",
    ],
    stack: ["Python", "GCP Pub/Sub", "BigQuery", "Cloud Functions", "TextBlob", "VADER", "Power BI"],
    github: "https://github.com/ArnavTambe06/TweetSense",
  },
  {
    id: "03",
    name: "FoodBridge",
    sub: "Location-aware food donation platform",
    type: "FULL-STACK | MOBILE | REAL-TIME",
    featured: false,
    status: "DEPLOYED",
    desc:
      "Cross-platform app connecting surplus food donors with NGOs. GPS discovery, real-time pickup coordination, and role-based access designed for operational reliability.",
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
          transition={{ duration: 0.22 }}
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
                staggerChildren: 0.03,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className={`soft-sheen border border-border bg-surface-container-lowest shadow-[8px_8px_0_rgba(140,113,102,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#c64f00] ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`p-6 sm:p-8 ${project.featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">{project.id}</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">{project.type}</span>
                    </div>
                    <span className="border border-[#c64f00] bg-[#fff5ec] px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-[#c64f00]">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[0.95] text-text">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs tracking-[0.14em] text-text-dim">{project.sub}</p>
                    <p className="mt-5 max-w-2xl font-body text-[1rem] leading-relaxed text-text">{project.desc}</p>

                    {!project.featured && (
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
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener"
                          className="soft-sheen inline-flex items-center gap-2 border border-[#c64f00] bg-[#c64f00] px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a73e00]"
                        >
                          LIVE_DEMO
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        className="soft-sheen inline-flex items-center gap-2 border border-[#c64f00] bg-transparent px-4 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-[#c64f00] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c64f00] hover:text-white"
                      >
                        GITHUB
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <>
                    <div className="mt-8 lg:mt-0">
                      <div className="font-mono text-[10px] tracking-[0.22em] text-primary">HIGHLIGHTS</div>
                      <div className="mt-4 space-y-3 rounded-none border border-border bg-[#fff8f0] p-4">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-dim">
                            <CircleCheckBig size={14} className="mt-1 flex-shrink-0 text-primary" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 lg:col-span-2">
                      <div className="rounded-none border border-border bg-surface p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="font-mono text-[10px] tracking-[0.2em] text-primary">ARCHITECTURE_FLOW</div>
                          <div className="font-mono text-[10px] tracking-[0.18em] text-text-dim">SYNCED_BACKEND_PATH</div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                          {PAYSTREAM_FLOW.map((step, index) => (
                            <motion.div
                              key={step.label}
                              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              whileHover={
                                reduceMotion
                                  ? undefined
                                  : {
                                      y: -8,
                                      scale: 1.05,
                                      rotate: index % 2 === 0 ? -0.4 : 0.4,
                                      boxShadow: "0 20px 40px rgba(198, 79, 0, 0.16)",
                                      borderColor: "rgba(198, 79, 0, 0.65)",
                                      zIndex: 20,
                                    }
                              }
                              transition={{ duration: 0.14, delay: 0.04 + index * 0.025, ease: "easeOut" }}
                              className="relative min-h-[6.5rem] cursor-pointer border border-[#c64f00]/25 bg-[#fffaf5] p-3 shadow-[0_8px_20px_rgba(198,79,0,0.05)] transition-colors duration-150"
                            >
                              <div className="font-mono text-[10px] tracking-[0.16em] text-[#c64f00]">{step.label}</div>
                              <div className="mt-2 font-body text-[11px] leading-relaxed text-text-dim">{step.sub}</div>
                              {index < PAYSTREAM_FLOW.length - 1 && (
                                <div className="pointer-events-none absolute -right-1 top-1/2 hidden -translate-y-1/2 translate-x-full items-center gap-1 text-[#c64f00]/70 lg:flex">
                                  <span className="h-px w-3 bg-current" />
                                  <motion.span
                                    animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], x: [0, 2, 0] }}
                                    transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                                    className="font-mono text-[9px] tracking-[0.18em]"
                                  >
                                    FLOW
                                  </motion.span>
                                  <span className="h-px w-3 bg-current" />
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
