"use client";

import { ArrowUpRight, Circle } from "lucide-react";
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

const projects: Project[] = [
  {
    id: "01",
    name: "PayStream UI",
    sub: "Modern payment orchestration dashboard",
    type: "FULL-STACK | FINTECH | UI",
    featured: true,
    status: "DEPLOYED",
    desc:
      "A polished React dashboard for the PayStream payment orchestration platform, focused on secure authentication, wallet visibility, transaction flows, and admin operations with a live Vercel deployment.",
    highlights: [
      "Secure JWT login and protected routes",
      "Wallet balances with account insights",
      "Transaction history and money transfers",
      "Admin controls and monitoring views",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Axios", "React Router", "Vercel"],
    live: "https://pay-stream-ui.vercel.app/",
    github: "https://github.com/ArnavTambe06/paystream-ui",
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
                  <div className="mt-8 lg:mt-0">
                    <div className="font-mono text-[10px] tracking-[0.22em] text-primary">HIGHLIGHTS</div>
                    <div className="mt-4 space-y-3 rounded-none border border-border bg-[#fff8f0] p-4">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-dim">
                          <Circle size={10} className="mt-1.5 flex-shrink-0 fill-[#c64f00] text-[#c64f00]" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{
                        y: -5,
                        scale: 1.01,
                        boxShadow: "0 18px 34px rgba(28, 28, 24, 0.16)",
                      }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative mt-8 overflow-hidden border border-[#c64f00]/50 bg-[#fff4ea] p-4 font-mono text-xs text-[#5b3d2f] transition-colors duration-300 hover:border-[#c64f00]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,79,0,0.09),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.3),transparent_40%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                      <motion.div
                        className="relative mb-3 text-[#c64f00]"
                        initial={false}
                        whileHover={{ x: 6, color: "#9e3d00" }}
                        transition={{ duration: 0.2 }}
                      >
                        DATA_FLOW
                      </motion.div>
                      <div className="relative flex flex-wrap items-center gap-2 text-[10px] tracking-[0.18em]">
                        {["AUTH", "WALLET", "TRANSFER", "ADMIN", "DEPLOY"].map((node, index, arr) => (
                          <span key={node} className="flex items-center gap-2">
                            <motion.span
                              initial={false}
                              whileHover={{
                                y: -4,
                                scale: 1.06,
                                borderColor: "rgba(198, 79, 0, 0.95)",
                                backgroundColor: "rgba(255, 255, 255, 0.92)",
                                boxShadow: "0 10px 18px rgba(198, 79, 0, 0.12)",
                              }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="border border-[#c64f00]/25 bg-white/75 px-2 py-1 text-[#5b3d2f] transition-colors duration-300"
                            >
                              {node}
                            </motion.span>
                            {index < arr.length - 1 && (
                              <motion.span
                                initial={false}
                                className="text-[#c64f00]/70"
                                animate={{ opacity: [0.45, 1, 0.45], x: [0, 6, 0] }}
                                transition={{
                                  duration: 1.4,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  delay: index * 0.08,
                                  ease: "easeInOut",
                                }}
                              >
                                -&gt;
                              </motion.span>
                            )}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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
