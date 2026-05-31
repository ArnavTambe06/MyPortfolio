"use client";

import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "Architecture", href: "#architecture" },
  { label: "Terminal", href: "#terminal" },
  { label: "Logs", href: "#logs" },
  { label: "Connect", href: "#connect" },
];

const METRICS = [
  { label: "FOCUS", value: "Backend + Data" },
  { label: "STACK", value: "APIs, ETL, SQL" },
  { label: "MODE", value: "Ship and iterate" },
  { label: "NOW", value: "Open to work" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-b border-border bg-bg text-text"
    >
      <div className="scanline" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.35]" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#architecture"
            className="font-mono text-[12px] font-bold tracking-[0.18em] text-primary"
          >
            SYS_ARCH_V2.4
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${
                  index === 0
                    ? "border-b border-primary pb-1 text-primary"
                    : "text-text-dim hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.14em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(158,61,0,0.45)]" />
            SYSTEM_STATUS: OK
          </div>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-1px)] max-w-[1280px] items-start px-4 pb-16 pt-24 sm:items-center sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-[11px] tracking-[0.18em] text-primary">
              ESTABLISHED_MODEL: 2004
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,11vw,7.2rem)] leading-[0.88] tracking-[-0.05em] uppercase text-text sm:text-[clamp(3.8rem,8.5vw,7.2rem)]">
              SYS_ARCH_V2.4 /
              <span className="block text-primary">Backend Engineer</span>
            </h1>

            <p className="mt-6 max-w-2xl border-l border-border-bright pl-4 font-body text-[0.98rem] leading-relaxed text-text-dim sm:text-[clamp(1rem,1.3vw,1.15rem)]">
              Architecting robust distributed systems with the precision of vintage Japanese
              engineering. I focus on high-throughput infrastructure, rigorous API design, and
              dependable data flows that feel calm under load.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#connect"
                className="inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#7c2e00] sm:w-auto"
              >
                INITIATE_CONTACT.SH
                <ArrowRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-2 border border-border bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-colors hover:bg-surface sm:w-auto"
              >
                READ_SPEC_SHEET.PDF
                <FileText size={14} />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="etched-border bg-surface px-4 py-4">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary">
                    {metric.label}
                  </div>
                  <div className="mt-2 font-display text-[1.35rem] leading-tight text-text">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -left-2 top-2 h-full w-full border border-border-bright bg-surface-2 sm:-left-4 sm:top-4" />
              <div className="relative border-2 border-border bg-[#ece4d8] p-2 shadow-[8px_8px_0_rgba(140,113,102,0.45)]">
                <div className="relative aspect-[1/1.02] min-h-[280px] overflow-hidden border border-border bg-[#2b2724]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.85),transparent_12%),radial-gradient(circle_at_68%_30%,rgba(255,255,255,0.2),transparent_10%),radial-gradient(circle_at_66%_74%,rgba(255,255,255,0.08),transparent_14%),linear-gradient(165deg,rgba(255,255,255,0.08),transparent_38%)]" />
                  <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
                  <div className="absolute left-6 top-6 h-[4.5rem] w-[4.5rem] rounded-full border border-white/30 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.12)_58%,transparent_68%)] shadow-[0_0_40px_rgba(255,255,255,0.16)] sm:left-8 sm:top-8 sm:h-24 sm:w-24" />
                  <div className="absolute left-12 top-11 h-10 w-10 rounded-full border border-white/18 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.85),rgba(255,255,255,0.08)_60%,transparent_68%)] sm:left-16 sm:top-14 sm:h-14 sm:w-14" />
                  <div className="absolute left-[4.5rem] top-28 h-12 w-20 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.02))] sm:left-24 sm:top-[8.5rem] sm:h-16 sm:w-28" />
                  <div className="absolute right-4 top-10 grid grid-cols-2 gap-2 sm:right-8 sm:top-12 sm:gap-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-2.5 w-12 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-16"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-8 top-24 h-px bg-white/20 sm:inset-x-10 sm:top-28" />
                  <div className="absolute inset-x-8 top-[8.5rem] h-px bg-white/12 sm:inset-x-10 sm:top-40" />
                  <div className="absolute inset-x-6 bottom-10 flex items-end justify-between gap-4 sm:inset-x-12 sm:bottom-12">
                    <div className="flex gap-3">
                      <span className="h-12 w-12 rounded-full border border-white/20 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.8),rgba(255,255,255,0.08)_55%,transparent_70%)] sm:h-16 sm:w-16" />
                      <span className="h-8 w-8 rounded-full border border-white/15 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.55),rgba(255,255,255,0.08)_55%,transparent_72%)] sm:h-10 sm:w-10" />
                    </div>
                    <div className="grid gap-2">
                      <span className="h-2.5 w-24 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-36" />
                      <span className="h-2.5 w-16 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-24" />
                      <span className="h-2.5 w-20 rounded-full border border-white/12 bg-white/5 sm:h-3 sm:w-28" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-[2px] border border-white/18 bg-black/65 px-2 py-1 font-mono text-[8px] tracking-[0.18em] text-white sm:bottom-4 sm:left-4 sm:text-[9px]">
                    MODULE_ID: CORE_ARCH
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[18rem] text-left sm:text-right">
                <div className="font-mono text-[9px] tracking-[0.26em] text-primary/45">
                  PHILOSOPHY_01
                </div>
                <div className="mt-1 font-display text-[clamp(1.6rem,6vw,2.85rem)] leading-none tracking-[-0.04em] text-text">
                  Clarity before noise.
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.22em] text-text-dim/70">
                  SYSTEMS SHOULD FEEL CALM
                </div>
              </div>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="inline-flex self-start items-center gap-2 border-b border-border-bright pb-1 font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors hover:text-primary sm:self-auto"
              >
                SOURCE_CODE
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
