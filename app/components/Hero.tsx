"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { useRef } from "react";

const stats = [
  { k: "Focus", v: "Backend + Data" },
  { k: "Stack", v: "APIs, ETL, SQL" },
  { k: "Mode", v: "Ship and iterate" },
  { k: "Now", v: "Open to work" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.22]);

  return (
    <section
      id="architecture"
      ref={ref}
      className="relative overflow-hidden border-b border-border bg-bg pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-30" aria-hidden="true" />
      <div className="pointer-events-none scanline opacity-40" aria-hidden="true" />

      <motion.div
        style={reduceMotion ? undefined : { y, opacity }}
        className="relative mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-[11px] tracking-[0.18em] text-primary"
            >
              ESTABLISHED_MODEL: 1992-BE
            </motion.div>

            <motion.h1
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,7.2vw,6.5rem)] leading-[0.9] tracking-[-0.055em] text-text"
            >
              I build reliable backends,
              <span className="block text-primary">data pipelines,</span>
              and polished systems.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl border-l border-border-bright pl-4 font-body text-[clamp(1rem,1.25vw,1.15rem)] leading-relaxed text-text-dim"
            >
              MCA student focused on backend engineering and data systems. I like clean
              architecture, calm UIs, and products that feel precise when you use them.
            </motion.p>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="soft-sheen inline-flex items-center gap-2 border border-text bg-transparent px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-bg"
              >
                Explore Work
                <ArrowRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="soft-sheen inline-flex items-center gap-2 border border-primary bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                View Resume
                <FileText size={14} />
              </a>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="soft-sheen inline-flex items-center gap-2 border border-border bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-text"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.k}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.05 }}
                  className="border border-border bg-surface px-4 py-4 shadow-[4px_4px_0_rgba(140,113,102,0.1)]"
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary">{stat.k}</div>
                  <div className="mt-2 font-display text-[1.25rem] leading-tight text-text">
                    {stat.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="float-slow relative mx-auto w-full max-w-[430px]"
            >
              <div className="absolute -left-4 top-4 h-full w-full border border-border-bright bg-surface-2" />
              <div className="absolute -left-8 top-8 h-full w-full border border-border/70 bg-bg" />
              <div className="relative border-2 border-border bg-[#e8e0d4] p-2 shadow-[8px_8px_0_rgba(140,113,102,0.3)]">
                <div className="relative aspect-square overflow-hidden border border-border bg-[#2c2724]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.9),transparent_12%),radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.2),transparent_18%),radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_68%_80%,rgba(255,255,255,0.1),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_32%)]" />
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-white/35 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.15)_58%,transparent_72%)] shadow-[0_0_36px_rgba(255,255,255,0.16)]" />
                  <div className="absolute left-[4.5rem] top-16 h-12 w-12 rounded-full border border-white/20 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.85),rgba(255,255,255,0.08)_60%,transparent_72%)]" />
                  <div className="absolute right-10 top-14 grid gap-3">
                    <span className="h-3 w-16 rounded-full border border-white/15 bg-white/5" />
                    <span className="h-3 w-20 rounded-full border border-white/15 bg-white/5" />
                    <span className="h-3 w-16 rounded-full border border-white/15 bg-white/5" />
                  </div>
                  <div className="absolute left-28 top-36 h-16 w-28 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.02))]" />
                  <div className="absolute left-10 bottom-20 h-16 w-16 rounded-full border border-white/18 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.8),rgba(255,255,255,0.08)_55%,transparent_72%)]" />
                  <div className="absolute left-[7.5rem] bottom-[5.5rem] h-10 w-10 rounded-full border border-white/14 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.6),rgba(255,255,255,0.05)_55%,transparent_72%)]" />
                  <div className="absolute right-12 bottom-[4.5rem] grid gap-2">
                    <span className="h-3 w-36 rounded-full border border-white/12 bg-white/5" />
                    <span className="h-3 w-24 rounded-full border border-white/12 bg-white/5" />
                    <span className="h-3 w-28 rounded-full border border-white/12 bg-white/5" />
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-[2px] border border-white/18 bg-black/70 px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-white">
                    MODULE_ID: CORE_ARCH
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex items-end justify-between gap-6">
              <div className="text-right text-primary/20">
                <div className="font-mono text-[clamp(3rem,7vw,6rem)] font-bold leading-none">
                  404_V2
                </div>
                <div className="font-mono text-[10px] tracking-[0.26em]">
                  INTERNAL_COMBUSTION_LOGIC
                </div>
              </div>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-b border-border-bright pb-1 font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors hover:text-primary"
              >
                SOURCE_CODE
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
