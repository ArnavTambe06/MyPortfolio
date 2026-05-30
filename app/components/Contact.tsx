"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const links = [
  {
    label: "EMAIL",
    value: "arnavtambe01@gmail.com",
    href: "mailto:arnavtambe01@gmail.com",
    desc: "Fastest way to reach me",
    primary: true,
  },
  {
    label: "GITHUB",
    value: "ArnavTambe06",
    href: "https://github.com/ArnavTambe06",
    desc: "Projects and source",
    primary: false,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/arnavtambe06",
    href: "https://linkedin.com/in/arnavtambe06",
    desc: "Professional profile",
    primary: false,
  },
  {
    label: "RESUME",
    value: "Open inline viewer",
    href: "/resume",
    desc: "Read the latest PDF in-browser",
    primary: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="contact" ref={ref} className="border-b border-border bg-surface px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[11px] tracking-[0.18em] text-primary">CONTACT</div>
            <h2 className="title-hover mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] tracking-[0.02em] text-text">
              Let&apos;s build
              <span className="block text-primary">reliable</span>
              things.
            </h2>
            <p className="mt-7 max-w-xl font-body text-[1rem] leading-relaxed text-text-dim">
              I&apos;m looking for backend / data engineering roles (internship or full-time). If you
              have a problem involving scale, data, or reliability, I&apos;d love to help.
            </p>

            <div className="soft-sheen mt-10 border border-border bg-bg p-5 shadow-[6px_6px_0_rgba(140,113,102,0.1)] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-mono text-[10px] tracking-[0.22em] text-primary">STATUS</div>
              <div className="mt-4 space-y-2 font-mono text-[11px] tracking-[0.08em] text-text-dim">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  AVAILABLE_NOW
                </div>
                <div>
                  Response time: <span className="text-text">24–48 hrs</span>
                </div>
                <div>
                  Location: <span className="text-text">Mumbai · Remote OK</span>
                </div>
                <div>
                  Target: <span className="text-text">BFSI · Fintech</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.16 + i * 0.08, duration: 0.45 }}
                  className={`soft-sheen border border-border p-5 shadow-[6px_6px_0_rgba(140,113,102,0.1)] transition-all duration-300 hover:-translate-y-1 ${
                    link.primary ? "bg-surface-2" : "bg-bg"
                  } hover:bg-surface-2`}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary">
                    {link.label}
                  </div>
                  <div className="mt-2 font-mono text-sm tracking-[0.08em] text-text">
                    {link.value}
                  </div>
                  <div className="mt-2 text-xs text-text-dim">{link.desc}</div>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-text-dim">
                    OPEN <ArrowUpRight size={14} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
