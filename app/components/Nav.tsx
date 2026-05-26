"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowUpRight, IconFileText } from "@tabler/icons-react";

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
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-4"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`panel soft-shadow rounded-full h-16 px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-500 ${
            scrolled ? "bg-bg/90 backdrop-blur-2xl" : "bg-bg/75 backdrop-blur-xl"
          }`}
        >
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 panel soft-shadow rounded-full flex items-center justify-center relative">
              <span className="font-display text-xs font-semibold text-text-bright">AT</span>
              <div className="absolute -top-px -right-px w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(102,58,243,0.45)]" />
            </div>
            <span className="font-display text-xs text-text-dim tracking-widest hidden sm:block">
              ARNAV_TAMBE
            </span>
          </a>

          <div className="font-mono text-xs text-text-dim hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shadow-[0_0_12px_rgba(102,58,243,0.45)]" />
            MUM · {time} IST
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="pill-button pill-button--outline px-4 py-2.5">
                {label}
              </a>
            ))}
            <a href="/resume" className="pill-button pill-button--primary px-4 py-2.5">
              RESUME
              <IconFileText size={14} />
            </a>
          </nav>

          <button
            className="md:hidden text-text-dim hover:text-text-bright"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs">{menuOpen ? "[X]" : "[=]"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden max-w-7xl mx-auto px-6 lg:px-10 overflow-hidden"
          >
            <div className="panel soft-shadow mt-3 p-4 flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="pill-button pill-button--outline justify-between px-4 py-3"
                >
                  {label}
                  <IconArrowUpRight size={14} />
                </a>
              ))}
              <a
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="pill-button pill-button--primary justify-between px-4 py-3"
              >
                RESUME
                <IconFileText size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
