"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { asset } from "./ui";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Beyond", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the "room" currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...navLinks.map((l) => l.href.slice(1))].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const onDark = active === "#beyond" && !isMobileMenuOpen;

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? onDark
            ? "bg-night/85 backdrop-blur-md"
            : "bg-wall/85 shadow-[0_1px_0_#DDD8CE] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-wall"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            className={`font-serif text-2xl transition-colors ${onDark ? "text-night-ink" : "text-ink"}`}
          >
            Kavya <span className="italic">Sridhar</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative px-3 py-2 text-sm transition-colors ${
                    onDark
                      ? isActive ? "text-night-ink" : "text-night-muted hover:text-night-ink"
                      : isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="mr-1 font-mono text-[0.65rem] text-accent opacity-70 transition-opacity group-hover:opacity-100">
                    0{i + 1}
                  </span>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
            <a href={asset("/resume.pdf")} download className="btn-solid ml-4 !px-5 !py-2">
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`relative z-10 -mr-2 p-2 lg:hidden ${onDark ? "text-night-ink" : "text-ink"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt4 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile: full-screen "floor plan" menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 bg-wall px-6 pb-10 pt-6 lg:hidden"
          >
            <p className="label mb-6 text-muted">Floor plan</p>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-3 font-serif text-4xl text-ink"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={asset("/resume.pdf")} download className="btn-solid mt-10 w-full">
              <span>Download CV</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
