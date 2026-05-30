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

      <div className="mx-auto flex min-h-[calc(100vh-1px)] max-w-[1280px] items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-[11px] tracking-[0.18em] text-primary">
              ESTABLISHED_MODEL: 1992-BE
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.8rem,8.5vw,7.2rem)] leading-[0.88] tracking-[-0.05em] uppercase text-text">
              SYS_ARCH_V2.4 /
              <span className="block text-primary">Senior Backend Engineer</span>
            </h1>

            <p className="mt-6 max-w-2xl border-l border-border-bright pl-4 font-body text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-text-dim">
              Architecting robust distributed systems with the precision of vintage Japanese
              engineering. I focus on high-throughput infrastructure, rigorous API design, and
              dependable data flows that feel calm under load.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#connect"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#7c2e00]"
              >
                INITIATE_CONTACT.SH
                <ArrowRight size={14} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-border bg-bg px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] text-text-dim transition-colors hover:bg-surface"
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
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -left-4 top-4 h-full w-full border border-border-bright bg-surface-2" />
              <div className="relative border-2 border-border bg-[#ece4d8] p-2 shadow-[8px_8px_0_rgba(140,113,102,0.45)]">
                <div className="relative aspect-[1/1.02] overflow-hidden border border-border bg-[#2b2724]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.85),transparent_12%),radial-gradient(circle_at_68%_30%,rgba(255,255,255,0.2),transparent_10%),radial-gradient(circle_at_66%_74%,rgba(255,255,255,0.08),transparent_14%),linear-gradient(165deg,rgba(255,255,255,0.08),transparent_38%)]" />
                  <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
                  <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/30 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.12)_58%,transparent_68%)] shadow-[0_0_40px_rgba(255,255,255,0.16)]" />
                  <div className="absolute left-16 top-14 h-14 w-14 rounded-full border border-white/18 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.85),rgba(255,255,255,0.08)_60%,transparent_68%)]" />
                  <div className="absolute left-24 top-34 h-16 w-28 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.02))]" />
                  <div className="absolute right-8 top-12 grid grid-cols-2 gap-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-3 w-16 rounded-full border border-white/12 bg-white/5"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-10 top-28 h-px bg-white/20" />
                  <div className="absolute inset-x-10 top-40 h-px bg-white/12" />
                  <div className="absolute inset-x-12 bottom-12 flex items-end justify-between">
                    <div className="flex gap-3">
                      <span className="h-16 w-16 rounded-full border border-white/20 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.8),rgba(255,255,255,0.08)_55%,transparent_70%)]" />
                      <span className="h-10 w-10 rounded-full border border-white/15 bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.55),rgba(255,255,255,0.08)_55%,transparent_72%)]" />
                    </div>
                    <div className="grid gap-2">
                      <span className="h-3 w-36 rounded-full border border-white/12 bg-white/5" />
                      <span className="h-3 w-24 rounded-full border border-white/12 bg-white/5" />
                      <span className="h-3 w-28 rounded-full border border-white/12 bg-white/5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-[2px] border border-white/18 bg-black/65 px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-white">
                    MODULE_ID: CORE_ARCH
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div className="space-y-1 text-right text-primary/20">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
