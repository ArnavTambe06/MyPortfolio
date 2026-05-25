"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "EMAIL",
    value: "arnavtambe01@gmail.com",
    href: "mailto:arnavtambe01@gmail.com",
    desc: "Preferred contact",
    primary: true,
  },
  {
    label: "GITHUB",
    value: "ArnavTambe06",
    href: "https://github.com/ArnavTambe06",
    desc: "View source of truth",
    primary: false,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/arnavtambe06",
    href: "https://linkedin.com/in/arnavtambe06",
    desc: "Professional network",
    primary: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 border-t border-border">
      {/* Section marker */}
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <div className="w-2 h-2 bg-phosphor ml-6 lg:ml-10" />
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-text-dim tracking-widest px-6">
          SECTION_04 · CONTACT
        </span>
        <div className="flex-1 h-px bg-border" />
        <div className="w-2 h-2 bg-border-bright mr-6 lg:mr-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-xs text-phosphor-dim tracking-[0.2em] mb-6">
              // OPEN_TO_CONNECT
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-bright mb-6 leading-tight">
              Let's build<br />
              something<br />
              <span className="text-phosphor">worth building.</span>
            </h2>
            <p className="text-text font-sans text-base leading-relaxed mb-8 max-w-sm">
              Targeting roles in backend engineering and data engineering — particularly
              in Mumbai's BFSI and fintech sectors. Open to internships, placements,
              and any interesting problems.
            </p>

            {/* Status block */}
            <div className="p-5 bg-surface border border-border font-mono text-xs space-y-2">
              <div className="flex items-center gap-3 text-text-dim">
                <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse" />
                <span className="text-phosphor">AVAILABLE_NOW</span>
              </div>
              <div className="text-text-dim pl-4">Response time: <span className="text-text">24–48 hrs</span></div>
              <div className="text-text-dim pl-4">Location: <span className="text-text">Mumbai, IN · Remote OK</span></div>
              <div className="text-text-dim pl-4">Target: <span className="text-text">BFSI · Fintech · DE/Backend</span></div>
            </div>
          </motion.div>

          {/* Right: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className={`group flex items-center justify-between p-5 border transition-all duration-300 ${
                  link.primary
                    ? "border-phosphor/40 bg-phosphor/5 hover:bg-phosphor/10"
                    : "border-border bg-surface hover:border-border-bright"
                }`}
              >
                <div>
                  <div className={`font-mono text-[10px] tracking-widest mb-1 ${link.primary ? "text-phosphor" : "text-text-dim"}`}>
                    {link.label}
                  </div>
                  <div className="font-mono text-sm text-text-bright">{link.value}</div>
                  <div className="font-sans text-xs text-text-dim mt-1">{link.desc}</div>
                </div>
                <span className={`font-mono text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${link.primary ? "text-phosphor" : "text-text-dim"}`}>
                  ↗
                </span>
              </motion.a>
            ))}

            {/* Download resume hint */}
            <div className="mt-6 p-4 bg-bg border border-border font-mono text-xs text-text-dim text-center">
              Looking for my resume? Reach out via email above.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
