"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-3"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div
          className={`flex h-16 items-center justify-between gap-4 border border-border bg-bg px-4 shadow-[6px_6px_0_rgba(140,113,102,0.18)] transition-colors ${
            scrolled ? "bg-bg/96" : "bg-bg/92"
          }`}
        >
          <a
            href="#architecture"
            className="hover-underline-orange font-mono text-[12px] font-bold tracking-[0.18em] text-primary"
          >
            SYS_ARCH_V2.4
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-underline-orange font-mono text-[11px] tracking-[0.18em] text-text-dim transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="font-mono text-[11px] tracking-[0.16em] text-text-dim">
              MUM · {time} IST
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.14em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(158,61,0,0.45)]" />
              SYSTEM_STATUS: OK
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="soft-sheen inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2 font-mono text-[11px] font-bold tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7c2e00]"
            >
              RESUME
              <FileText size={14} />
            </a>
          </div>

          <button
            className="md:hidden font-mono text-[11px] tracking-[0.18em] text-text-dim"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "[X]" : "[=]"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-auto max-w-[1280px] overflow-hidden px-4 sm:px-6 lg:px-8 md:hidden"
          >
            <div className="mt-2 border border-border bg-surface p-4 shadow-[6px_6px_0_rgba(140,113,102,0.12)]">
              <div className="grid gap-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover-underline-orange flex items-center justify-between border border-border bg-bg px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-text-dim"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="soft-sheen flex items-center justify-between border border-primary bg-primary px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-white"
                >
                  RESUME
                  <FileText size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
