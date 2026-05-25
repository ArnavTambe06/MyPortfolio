"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-7 h-7 border border-phosphor flex items-center justify-center relative">
            <span className="font-mono text-xs font-bold text-phosphor">AT</span>
            <div className="absolute -top-px -right-px w-1.5 h-1.5 bg-phosphor" />
          </div>
          <span className="font-mono text-xs text-text-dim tracking-widest hidden sm:block">ARNAV_TAMBE</span>
        </a>

        {/* Center: live clock */}
        <div className="font-mono text-xs text-text-dim hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-phosphor inline-block animate-pulse" />
          MUM · {time} IST
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[10px] tracking-[0.15em] text-text-dim hover:text-phosphor transition-colors duration-200 hover-underline"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:arnavtambe01@gmail.com"
            className="font-mono text-[10px] tracking-[0.12em] text-bg bg-phosphor px-4 py-2 hover:bg-phosphor/80 transition-colors"
          >
            HIRE_ME
          </a>
        </nav>

        {/* Mobile menu */}
        <button
          className="md:hidden text-text-dim hover:text-phosphor"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="font-mono text-xs">{menuOpen ? "[X]" : "[=]"}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs tracking-widest text-text-dim hover:text-phosphor"
                >
                  // {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
