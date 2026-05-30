"use client";

import { Cpu, ShieldCheck } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const INFRA_ROWS = [
  ["Messaging_Queues", "Kafka / RabbitMQ"],
  ["Caching_Engines", "Redis / Memcached"],
  ["API_Architecture", "REST / gRPC / GraphQL"],
  ["Protocols", "TCP / UDP / HTTP2"],
];

const DIAGNOSTIC_ROWS = [
  ["Telemetry", "Prometheus / Grafana"],
  ["Log_Aggregation", "ELK Stack / Loki"],
  ["Tracing", "Jaeger / OpenTelemetry"],
  ["CI/CD_Flow", "GitHub Actions / ArgoCD"],
];

const PRINCIPLES = [
  "Clear interfaces over clever abstractions.",
  "Prefer simple, observable data flows.",
  "Ship, measure, iterate.",
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="hardware" ref={ref} className="border-b border-border bg-surface-container px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-text">
            Hardware Specs
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-primary">[03]</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden border-2 border-border bg-surface-container-lowest p-6 sm:p-8 lg:col-span-8 lg:p-10"
          >
            <div className="absolute right-0 top-0 border-b border-l border-border bg-surface px-4 py-3 font-mono text-[10px] tracking-[0.18em] text-text-dim">
              REF: BE-SPEC-99
            </div>

            <div className="space-y-10">
              <div>
                <div className="mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-primary">
                  <span className="h-2 w-2 bg-primary" />
                  CORE_INFRASTRUCTURE
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-10">
                  {INFRA_ROWS.map(([label, value]) => (
                    <div key={label} className="border-b border-border/30 pb-2">
                      <div className="flex items-start justify-between gap-6">
                        <span className="font-mono text-[11px] tracking-[0.12em] text-text-dim">
                          {label}
                        </span>
                        <span className="text-right font-mono text-[11px] font-bold tracking-[0.08em] text-text">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-primary">
                  <span className="h-2 w-2 bg-primary" />
                  MONITORING_DIAGNOSTICS
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-10">
                  {DIAGNOSTIC_ROWS.map(([label, value]) => (
                    <div key={label} className="border-b border-border/30 pb-2">
                      <div className="flex items-start justify-between gap-6">
                        <span className="font-mono text-[11px] tracking-[0.12em] text-text-dim">
                          {label}
                        </span>
                        <span className="text-right font-mono text-[11px] font-bold tracking-[0.08em] text-text">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-dashed border-border/40 pt-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl font-mono text-[10px] tracking-[0.12em] text-text-dim">
                  WARNING: high-precision logic implemented. Unauthorized modification strictly
                  prohibited.
                </div>
                <div className="flex gap-3">
                  {["JP", "B-E", "V2"].map((tag) => (
                    <div
                      key={tag}
                      className="flex h-10 w-10 items-center justify-center border border-border bg-bg font-mono text-[11px] font-bold text-text"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5 lg:col-span-4">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="border-2 border-border bg-inverse-surface p-6 text-inverse-on-surface"
            >
              <h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] uppercase tracking-[0.02em] text-primary">
                Certification
              </h3>
              <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-inverse-on-surface/70">
                Validating engineering habits that keep systems predictable, observable, and
                easy to hand off.
              </p>
              <ul className="mt-6 space-y-3 font-mono text-[11px] tracking-[0.12em]">
                {[
                  "RELIABILITY_FIRST_MINDSET",
                  "CLEAN_INTERFACE_DESIGN",
                  "OBSERVABILITY_OVER_ASSUMPTION",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="border-2 border-border bg-surface-container-high p-4"
            >
              <div className="relative overflow-hidden border border-border bg-surface-container-lowest">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(158,61,0,0.18),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.18))]" />
                <div className="relative flex min-h-[12rem] items-center justify-center">
                  <div className="grid gap-2">
                    <div className="flex items-end gap-2">
                      <span className="h-20 w-20 border border-border bg-[linear-gradient(180deg,rgba(158,61,0,0.18),rgba(158,61,0,0.02))]" />
                      <span className="h-14 w-14 border border-border bg-[linear-gradient(180deg,rgba(84,97,98,0.12),rgba(84,97,98,0.02))]" />
                      <span className="h-24 w-10 border border-border bg-[linear-gradient(180deg,rgba(158,61,0,0.08),rgba(158,61,0,0.02))]" />
                    </div>
                    <div className="h-px w-40 bg-border" />
                    <div className="text-center font-mono text-[10px] tracking-[0.18em] text-text-dim">
                      HARDWARE_AFFINITY
                    </div>
                  </div>
                  <Cpu className="absolute right-4 top-4 text-primary" size={24} />
                </div>
              </div>
              <div className="px-2 py-4 text-center">
                <div className="font-mono text-[10px] tracking-[0.22em] text-text-dim">
                  OPTIMIZED PERFORMANCE
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="border border-border bg-bg p-5"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] text-primary">PRINCIPLES</div>
              <ul className="mt-4 space-y-2 font-body text-sm leading-relaxed text-text-dim">
                {PRINCIPLES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-px w-6 bg-border" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
