"use client";

import { Boxes, Cpu, Database, Gauge, Network } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  {
    icon: Cpu,
    title: "Go / Backend",
    description:
      "High-concurrency services, clean REST contracts, and service boundaries that stay readable under pressure.",
    chip: "RUNTIME: STABLE",
  },
  {
    icon: Network,
    title: "Orchestration",
    description:
      "Containerized workloads, event-driven glue, and deployment flows that prefer repeatability over heroics.",
    chip: "DEPLOY: SCALE_AUTO",
  },
  {
    icon: Database,
    title: "Data Systems",
    description:
      "Warehouse design, ETL, observability, and relational modeling with a bias toward correctness and clarity.",
    chip: "STORAGE: ACID_COMPLIANT",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="terminal" ref={ref} className="border-b border-border bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-text">
            System Capabilities
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">[01]</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="etched-border bg-bg p-6 transition-colors hover:bg-surface-container-low"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-bg text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] uppercase tracking-[0.02em] text-text">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-prose font-body text-[0.98rem] leading-relaxed text-text-dim">
                  {card.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 border border-secondary-dim bg-secondary-container px-3 py-2 font-mono text-[11px] tracking-[0.16em] text-secondary">
                  <Boxes size={12} />
                  {card.chip}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="etched-border bg-surface-container-lowest px-5 py-4 lg:col-span-8"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] text-primary">MODULE_NOTE</div>
            <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-text-dim">
              The system is tuned for backend and data work that needs clean interfaces, strong
              logging, and a calm operator experience. I like the parts of engineering that make
              the whole machine easier to trust.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="etched-border bg-surface-container-lowest px-5 py-4 lg:col-span-4"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] text-primary">SIGNAL</div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-2xl uppercase text-text">Ship. Measure.</div>
                <div className="mt-1 font-body text-sm text-text-dim">Iterate with visible feedback loops.</div>
              </div>
              <Gauge size={28} className="text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
