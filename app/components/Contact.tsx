"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

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

  return (
    <section id="contact" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="section-kicker mb-5">CONTACT</div>
            <h2 className="section-title leading-[0.98]">
              Let’s build
              <span className="block text-primary">reliable</span>
              things.
            </h2>
            <p className="mt-7 text-text text-base leading-relaxed">
              I’m looking for backend / data engineering roles (internship or full-time). If you
              have a problem involving scale, data, or reliability, I’d love to help.
            </p>

            <div className="mt-10 panel soft-shadow p-5">
              <div className="section-kicker mb-3">STATUS</div>
              <div className="font-mono text-xs text-text-dim space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />AVAILABLE_NOW</div>
                <div>Response time: <span className="text-text-bright">24–48 hrs</span></div>
                <div>Location: <span className="text-text-bright">Mumbai · Remote OK</span></div>
                <div>Target: <span className="text-text-bright">BFSI · Fintech</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className={`panel soft-shadow p-5 transition-colors ${link.primary ? "bg-white/20" : "bg-white/10"} hover:bg-white/20`}
                >
                  <div className="font-mono text-[10px] tracking-widest text-primary-dim">{link.label}</div>
                  <div className="mt-2 font-mono text-sm text-text-bright">{link.value}</div>
                  <div className="mt-2 text-xs text-text-dim">{link.desc}</div>
                  <div className="mt-4 font-mono text-xs text-text-dim flex items-center gap-2">
                    OPEN <IconArrowUpRight size={14} className="text-text-dim" />
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

