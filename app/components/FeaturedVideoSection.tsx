"use client";

import { ArrowUpRight, CircleCheckBig } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LOG_ROWS = [
  {
    timestamp: "2026.05.12_08:32",
    project: "TWEETSENSE_PIPELINE",
    module: "PUB_SUB_ENGINE",
    status: "COMPLETED",
  },
  {
    timestamp: "2026.03.18_14:15",
    project: "SQL_WAREHOUSE_CORE",
    module: "MEDALLION_ETL",
    status: "COMPLETED",
  },
  {
    timestamp: "2026.01.24_11:04",
    project: "FOODBRIDGE_SYSTEM",
    module: "REALTIME_PICKUP",
    status: "COMPLETED",
  },
  {
    timestamp: "2025.11.02_09:55",
    project: "PORTFOLIO_ARCHIVE",
    module: "STATIC_FRONTEND",
    status: "COMPLETED",
  },
];

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="logs" ref={ref} className="border-b border-border bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-text">
            Deployment Logs
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">[02]</span>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="etched-border overflow-hidden bg-surface-container-lowest"
        >
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-left font-mono text-[11px] tracking-[0.12em] text-text-dim">
              <thead className="bg-inverse-surface text-inverse-on-surface">
                <tr className="uppercase">
                  <th className="border-r border-border/60 px-4 py-4">Timestamp</th>
                  <th className="border-r border-border/60 px-4 py-4">Project ID</th>
                  <th className="border-r border-border/60 px-4 py-4">Service Module</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {LOG_ROWS.map((row) => (
                  <tr key={`${row.timestamp}-${row.project}`} className="transition-colors hover:bg-surface">
                    <td className="border-r border-border/30 px-4 py-4">{row.timestamp}</td>
                    <td className="border-r border-border/30 px-4 py-4 font-bold text-text">{row.project}</td>
                    <td className="border-r border-border/30 px-4 py-4">{row.module}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2 text-primary">
                        <CircleCheckBig size={14} />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-end">
          <a
            href="https://github.com/ArnavTambe06"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-primary transition-colors hover:text-[#7c2e00]"
          >
            VIEW_ALL_LOG_ENTRIES
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
