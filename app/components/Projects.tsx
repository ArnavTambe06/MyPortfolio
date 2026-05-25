"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    name: "TweetSense",
    sub: "Real-Time Sentiment Pipeline",
    type: "DATA ENGINEERING · CLOUD · NLP",
    featured: true,
    status: "DEPLOYED",
    statusColor: "text-phosphor border-phosphor/40",
    desc: "Production-grade, cloud-native sentiment analysis system ingesting live tweets via Twitter API v2. Processes through a full Medallion architecture (Bronze → Silver → Gold), applies dual NLP via TextBlob + VADER, surfaces insights on a Power BI dashboard. Includes infrastructure provisioning, monitoring queries, and deployment docs.",
    highlights: [
      "Medallion architecture (Bronze/Silver/Gold)",
      "Partitioned & clustered BigQuery tables",
      "Dual NLP: TextBlob + VADER",
      "GCP Pub/Sub → Cloud Functions → BigQuery",
    ],
    stack: ["Python", "GCP Pub/Sub", "BigQuery", "Cloud Functions", "TextBlob", "VADER", "Power BI"],
    github: "https://github.com/ArnavTambe06/TweetSense",
    live: null,
    accentColor: "phosphor",
    icon: "◈",
  },
  {
    id: "02",
    name: "SQL Data Warehouse",
    sub: "Medallion Architecture in T-SQL",
    type: "DATA ENGINEERING · SQL",
    featured: false,
    status: "COMPLETE",
    statusColor: "text-amber border-amber/40",
    desc: "Full data warehouse implementation in T-SQL following Medallion architecture principles. Includes datasets, ETL scripts, test suites, and structured documentation — demonstrating production-grade DWH design, not just SQL syntax.",
    highlights: [
      "Bronze / Silver / Gold layer design",
      "ETL scripts with test coverage",
      "Structured datasets + documentation",
      "20+ iterative commits",
    ],
    stack: ["T-SQL", "SQL Server", "ETL", "DWH Design", "Medallion Architecture"],
    github: "https://github.com/ArnavTambe06/sql_database_warehouse_project",
    live: null,
    accentColor: "amber",
    icon: "⬡",
  },
  {
    id: "03",
    name: "FoodBridge",
    sub: "Location-Aware Food Donation Platform",
    type: "FULL-STACK · MOBILE · REAL-TIME",
    featured: false,
    status: "DEPLOYED",
    statusColor: "text-phosphor border-phosphor/40",
    desc: "Cross-platform mobile application connecting surplus food donors (restaurants, hotels, caterers) with NGOs to reduce food waste. Built with Flutter + Supabase, features GPS-based food discovery, real-time pickup coordination, and role-based access control. Includes dual-sided interfaces for donors & NGOs with live status tracking.",
    highlights: [
      "GPS-based food discovery (PostGIS geospatial queries)",
      "Real-time updates via Supabase Realtime WebSockets",
      "Role-based authentication (Donor / NGO)",
      "Cloudinary CDN for image hosting & compression",
      "Riverpod state management + GoRouter navigation",
      "Firebase Cloud Messaging for push notifications",
    ],
    stack: ["Flutter", "Dart", "Supabase", "PostGIS", "Firebase", "Riverpod", "GoRouter", "Cloudinary", "Node.js/Express"],
    github: "https://github.com/ArnavTambe06/FoodBridge",
    live: null,
    accentColor: "phosphor",
    icon: "◉",
  },
];

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const accent = p.accentColor === "phosphor" ? "#4afa8a" : "#f0a030";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative border border-border bg-surface hover:border-border-bright transition-all duration-500 ${
        p.featured ? "lg:col-span-2" : ""
      }`}
      style={{
        boxShadow: hovered ? `0 0 40px ${accent}10, 0 0 80px ${accent}05` : "none",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-2">
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-2xl"
            style={{ color: accent }}
          >
            {p.icon}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-text-dim">{p.id}</span>
          <span className="font-mono text-[10px] tracking-widest text-text-dim/40">{p.type}</span>
        </div>
        <span className={`font-mono text-[10px] tracking-widest border px-2 py-1 ${p.statusColor}`}>
          {p.status}
        </span>
      </div>

      <div className={`p-6 ${p.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""}`}>
        {/* Left/Main content */}
        <div>
          <h3
            className="font-display text-2xl font-bold text-text-bright mb-1 group-hover:transition-colors"
            style={{ color: hovered ? "#e8f0ec" : undefined }}
          >
            {p.name}
          </h3>
          <p className="font-mono text-xs text-text-dim mb-5">{p.sub}</p>
          <p className="text-text font-sans text-sm leading-relaxed mb-6">{p.desc}</p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {p.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wider border border-border px-2 py-1 text-text-dim"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={p.github}
              target="_blank"
              rel="noopener"
              className="group/link flex items-center gap-2 font-mono text-xs text-text-dim hover:text-phosphor border border-border hover:border-phosphor/40 px-4 py-2 transition-all"
            >
              GITHUB
              <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener"
                className="group/link flex items-center gap-2 font-mono text-xs bg-phosphor text-bg px-4 py-2 hover:bg-phosphor/85 transition-colors"
              >
                LIVE_DEMO
                <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Right: highlights (featured only) */}
        {p.featured && (
          <div className="mt-6 lg:mt-0">
            <div className="font-mono text-[10px] tracking-widest text-text-dim mb-4">
              // ARCHITECTURE_HIGHLIGHTS
            </div>
            <div className="space-y-3">
              {p.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 font-mono text-xs text-text"
                >
                  <span style={{ color: accent }} className="mt-0.5 flex-shrink-0">▸</span>
                  {h}
                </motion.div>
              ))}
            </div>

            {/* Pipeline diagram for featured */}
            <div className="mt-8 p-4 bg-bg border border-border font-mono text-xs text-text-dim">
              <div className="text-phosphor mb-3">// DATA_FLOW</div>
              <div className="flex items-center flex-wrap gap-2 text-[10px]">
                {["TWITTER_API", "PUB/SUB", "CLOUD_FN", "BIGQUERY", "POWER_BI"].map((node, ni, arr) => (
                  <span key={ni} className="flex items-center gap-2">
                    <span className="border border-phosphor/30 px-2 py-1 text-phosphor/80">{node}</span>
                    {ni < arr.length - 1 && <span className="text-border-bright">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated border accent on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: accent }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 border-t border-border">
      {/* Section marker */}
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <div className="w-2 h-2 bg-phosphor ml-6 lg:ml-10" />
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-text-dim tracking-widest px-6">
          SECTION_02 · PROJECTS
        </span>
        <div className="flex-1 h-px bg-border" />
        <div className="w-2 h-2 bg-border-bright mr-6 lg:mr-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-6"
        >
          <div>
            <div className="font-mono text-xs text-phosphor-dim tracking-[0.2em] mb-4">// SELECTED_WORK</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-bright">
              Systems I've shipped.
            </h2>
          </div>
          <a
            href="https://github.com/ArnavTambe06"
            target="_blank"
            rel="noopener"
            className="font-mono text-xs text-text-dim hover:text-phosphor border border-border hover:border-phosphor/40 px-5 py-3 transition-all"
          >
            ALL_REPOS ↗
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}