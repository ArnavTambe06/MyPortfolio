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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-[11px] tracking-[0.18em] text-primary"
            >
              ESTABLISHED_MODEL: 2004
            </motion.div>

            <motion.h1
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 max-w-4xl font-display text-[clamp(2.7rem,11vw,6.5rem)] leading-[0.9] tracking-[-0.055em] text-text sm:text-[clamp(3.2rem,7.2vw,6.5rem)]"
            >
              I build reliable backends,
              <span className="title-hover inline-block text-primary">data pipelines,</span>
              and polished systems.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl border-l border-border-bright pl-4 font-body text-[0.98rem] leading-relaxed text-text-dim sm:text-[clamp(1rem,1.25vw,1.15rem)]"
            >
              MCA student focused on backend engineering and data systems. I like clean
              architecture, calm UIs, and products that feel precise when you use them.
            </motion.p>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <a
                href="#projects"
                className="soft-sheen inline-flex w-full items-center justify-center gap-2 border border-text bg-transparent px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-bg sm:w-auto"
              >
                Explore Work
                <ArrowRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="soft-sheen inline-flex w-full items-center justify-center gap-2 border border-primary bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white sm:w-auto"
              >
                View Resume
                <FileText size={14} />
              </a>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="soft-sheen inline-flex w-full items-center justify-center gap-2 border border-border bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-text sm:w-auto"
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
                  className={`border px-4 py-4 shadow-[4px_4px_0_rgba(140,113,102,0.1)] ${
                    index % 2 === 0
                      ? "border-border bg-surface"
                      : "border-[#c64f00] bg-[#fff5ec]"
                  }`}
                >
                  <div
                    className={`font-mono text-[10px] tracking-[0.22em] ${
                      index % 2 === 0 ? "text-primary" : "text-[#c64f00]"
                    }`}
                  >
                    {stat.k}
                  </div>
                  <div className="mt-2 font-display text-[1.25rem] leading-tight text-text">
                    {stat.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="float-slow relative mx-auto w-full max-w-[430px] sm:max-w-[430px]"
            >
              <div className="absolute -left-2 top-2 h-full w-full border border-[#c64f00]/40 bg-[#fff4ea] sm:-left-4 sm:top-4" />
              <div className="absolute -left-4 top-4 h-full w-full border border-border/70 bg-bg sm:-left-8 sm:top-8" />
              <div className="relative border-2 border-border bg-[#e8e0d4] p-1.5 shadow-[8px_8px_0_rgba(140,113,102,0.3)] sm:p-2">
                <div className="relative aspect-[1/1] min-h-[280px] overflow-hidden border border-border bg-[#2c2724] sm:aspect-square">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.9),transparent_12%),radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.2),transparent_18%),radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_68%_80%,rgba(255,255,255,0.1),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_32%)]" />
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="absolute left-6 top-8 h-20 w-20 rounded-full border border-white/35 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.15)_58%,transparent_72%)] shadow-[0_0_36px_rgba(255,255,255,0.16)] sm:left-10 sm:top-10 sm:h-24 sm:w-24" />
                  <div className="absolute left-20 top-14 h-10 w-10 rounded-full border border-white/20 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.85),rgba(255,255,255,0.08)_60%,transparent_72%)] sm:left-[4.5rem] sm:top-16 sm:h-12 sm:w-12" />
                  <div className="absolute right-5 top-10 grid gap-2 sm:right-10 sm:top-14 sm:gap-3">
                    <span className="h-2.5 w-12 rounded-full border border-white/15 bg-white/5 sm:h-3 sm:w-16" />
                    <span className="h-2.5 w-16 rounded-full border border-white/15 bg-white/5 sm:h-3 sm:w-20" />
                    <span className="h-2.5 w-12 rounded-full border border-white/15 bg-white/5 sm:h-3 sm:w-16" />
                  </div>
                  <div className="absolute left-24 top-32 h-12 w-20 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.02))] sm:left-28 sm:top-36 sm:h-16 sm:w-28" />
                  <div className="absolute left-6 bottom-16 h-12 w-12 rounded-full border border-white/18 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.8),rgba(255,255,255,0.08)_55%,transparent_72%)] sm:left-10 sm:bottom-20 sm:h-16 sm:w-16" />
                  <div className="absolute left-24 bottom-20 h-8 w-8 rounded-full border border-white/14 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.6),rgba(255,255,255,0.05)_55%,transparent_72%)] sm:left-[7.5rem] sm:bottom-[5.5rem] sm:h-10 sm:w-10" />
                  <div className="absolute right-5 bottom-14 grid gap-2 sm:right-12 sm:bottom-[4.5rem]">
                    <span className="h-2.5 w-24 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-36" />
                    <span className="h-2.5 w-16 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-24" />
                    <span className="h-2.5 w-20 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-28" />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-[2px] border border-white/18 bg-black/70 px-2 py-1 font-mono text-[8px] tracking-[0.18em] text-white sm:bottom-4 sm:left-4 sm:text-[9px]">
                    MODULE_ID: CORE_ARCH
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="max-w-[18rem] text-left sm:text-right">
                <div className="font-mono text-[9px] tracking-[0.26em] text-primary/45">
                  PHILOSOPHY_01
                </div>
                <div className="mt-1 font-display text-[clamp(1.6rem,6vw,2.85rem)] leading-none tracking-[-0.04em] text-text whitespace-nowrap">
                  Clarity before noise.
                </div>
                <div className="pt-3 font-mono text-[9px] tracking-[0.22em] text-text-dim/70">
                  SYSTEMS SHOULD FEEL CALM
                </div>
              </div>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-b border-border-bright pb-1 font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors hover:text-primary sm:self-auto self-start"
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
