"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const terminalLines = [
  { delay: 0.3, text: "$ init arnav_tambe.profile --mode=career", color: "text-text-dim" },
  { delay: 0.8, text: "> Loading: backend_engineering.json ✓", color: "text-phosphor" },
  { delay: 1.2, text: "> Loading: data_systems.json ✓", color: "text-phosphor" },
  { delay: 1.6, text: "> Loading: projects[4].json ✓", color: "text-phosphor" },
  { delay: 2.0, text: "> Status: OPEN_TO_WORK | Mumbai, IN", color: "text-amber" },
  { delay: 2.5, text: "$ ready", color: "text-text-bright" },
];

function TerminalLine({ line, index }: { line: typeof terminalLines[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), line.delay * 1000);
    return () => clearTimeout(t);
  }, [line.delay]);

  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className={`font-mono text-xs sm:text-sm ${line.color}`}
    >
      {line.text}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 circuit-bg opacity-100" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l border-t border-border-bright opacity-40" />
      <div className="absolute top-24 right-6 w-16 h-16 border-r border-t border-border-bright opacity-40" />
      <div className="absolute bottom-16 left-6 w-16 h-16 border-l border-b border-border-bright opacity-40" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-r border-b border-border-bright opacity-40" />

      {/* Phosphor glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-phosphor/[0.025] blur-[120px] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16"
      >
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-phosphor animate-pulse" />
          <span className="font-mono text-xs text-text-dim tracking-widest">
            SYS:ONLINE · MCA_Y1 · MUMBAI_IN
          </span>
          <span className="ml-auto font-mono text-xs text-text-dim/50 hidden sm:block">
            v2026.05.26
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-xs text-phosphor-dim tracking-[0.2em] mb-4"
          >
            // BACKEND · DATA · SYSTEMS
          </motion.div>

          <h1 className="font-display font-bold leading-none tracking-tight">
            {["Building", "systems", "that matter."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`block text-5xl sm:text-7xl lg:text-[88px] xl:text-[100px] ${
                  i === 2
                    ? "text-phosphor text-glow"
                    : "text-text-bright"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-text text-lg leading-relaxed font-sans mb-8">
              MCA student with a builder mindset. I design{" "}
              <span className="text-phosphor font-medium">ETL pipelines</span>,{" "}
              <span className="text-phosphor font-medium">REST APIs</span>, and{" "}
              <span className="text-phosphor font-medium">data warehouses</span> — moving
              toward backend engineering and data engineering that ships to production.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-phosphor text-bg font-mono text-xs tracking-widest px-6 py-3 hover:bg-phosphor/85 transition-colors"
              >
                EXPLORE_WORK
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/ArnavTambe06"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 border border-border-bright text-text-dim font-mono text-xs tracking-widest px-6 py-3 hover:border-phosphor hover:text-phosphor transition-all"
              >
                GITHUB.PROFILE
              </a>
            </div>
          </motion.div>

          {/* Right: terminal widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="gradient-border rounded-none bg-surface-2 p-0 overflow-hidden"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-phosphor/60" />
              <span className="ml-3 font-mono text-xs text-text-dim">arnav@portfolio:~</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 space-y-2 min-h-[180px]">
              {terminalLines.map((line, i) => (
                <TerminalLine key={i} line={line} index={i} />
              ))}
              <div className="flex items-center gap-1 font-mono text-xs text-text-dim mt-3">
                <span>$</span>
                <span className="blink text-phosphor">▋</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap gap-0 mt-20 border-t border-border"
        >
          {[
            { n: "4+", label: "Projects Shipped" },
            { n: "3", label: "Cloud Platforms" },
            { n: "2", label: "Hackathons" },
            { n: "GCP", label: "Primary Cloud" },
          ].map((s, i) => (
            <div key={i} className="flex-1 min-w-[120px] px-8 py-6 border-r border-border last:border-r-0">
              <div className="font-display font-bold text-3xl text-phosphor mb-1">{s.n}</div>
              <div className="font-mono text-[10px] tracking-widest text-text-dim uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-text-dim">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-phosphor/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
