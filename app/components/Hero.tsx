"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowRight, IconArrowUpRight, IconFileText } from "@tabler/icons-react";
import { useRef } from "react";

const stats = [
  { k: "Focus", v: "Backend + Data" },
  { k: "Stack", v: "APIs, ETL, SQL" },
  { k: "Mode", v: "Ship and iterate" },
  { k: "Now", v: "Open to work" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-svh overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="absolute bottom-0 left-[10%] h-[24rem] w-[24rem] rounded-full bg-celestial-light/10 blur-[140px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 status-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(102,58,243,0.45)]" />
            SYSTEMS ONLINE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-8 font-display text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.05em] text-text-bright text-balance"
          >
            I build reliable backends,
            <span className="block text-celestial-light">data pipelines,</span>
            and polished systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-8 max-w-3xl text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-text-dim"
          >
            MCA student focused on backend engineering and data systems. I like clean
            architecture, calm UIs, and products that feel precise when you use them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="pill-button pill-button--primary">
              Explore Work
              <IconArrowRight size={14} />
            </a>
            <a href="/resume" className="pill-button pill-button--outline">
              View Resume
              <IconFileText size={14} />
            </a>
            <a
              href="https://github.com/ArnavTambe06"
              target="_blank"
              rel="noopener"
              className="pill-button pill-button--outline"
            >
              GitHub
              <IconArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-16 panel soft-shadow p-5 sm:p-6 text-left"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <div className="section-kicker">SYSTEM BRIEF</div>
                <div className="mt-2 font-display text-xl text-text-bright">
                  Quiet interface, precise information.
                </div>
              </div>
              <div className="status-badge">ACTIVE</div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.k} className="panel soft-shadow px-4 py-4">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-primary-dim uppercase">
                    {stat.k}
                  </div>
                  <div className="mt-2 font-display text-lg text-text-bright">{stat.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
