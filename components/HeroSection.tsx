"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { asset, canHover } from "./ui";
import { tracks } from "@/data/beyond";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:kavyasridhar2001@gmail.com", label: "Email" },
];

/** Each line rises out of a mask, like vinyl lettering going up on a gallery wall. */
function MaskedLine({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span className={`block animate-rise ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const nowPlaying = tracks[0];

  // Gallery spotlight follows the pointer (writes CSS vars, no re-renders)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduce || !canHover() || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="spotlight relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        {/* Exhibition poster text */}
        <div>
          <p
            className="label mb-8 animate-fade flex flex-wrap items-center gap-x-3 gap-y-1 text-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Now showing
            <span aria-hidden="true">·</span> San Jose, CA
            <span aria-hidden="true">·</span> 2026
          </p>

          <h1 className="font-serif text-[clamp(3.75rem,11vw,9.5rem)] leading-[0.9] tracking-tight text-ink">
            <MaskedLine delay={0.1}>Kavya</MaskedLine>
            <MaskedLine delay={0.22} className="italic">
              Sridhar<span className="text-accent">.</span>
            </MaskedLine>
          </h1>

          <div className="animate-lift" style={{ animationDelay: "0.35s" }}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Software engineer at <span className="text-ink">Dreamline AI</span> building across{" "}
              <span className="text-ink">full-stack</span>, <span className="text-ink">data engineering</span>, and{" "}
              <span className="text-ink">applied AI/ML</span>. MS in Data Science from UC San Diego. Off the clock:
              painting, films, and too many playlists.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-solid group">
                <span>Enter the exhibition</span>
                <HiArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a href={asset("/resume.pdf")} download className="btn-ghost">
                Download CV
              </a>
              <ul className="ml-1 flex gap-1">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-wall"
                    >
                      <social.icon size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {nowPlaying && (
              <a
                href="#beyond"
                className="group mt-12 inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
                  {[0, 0.2, 0.4].map((d) => (
                    <span
                      key={d}
                      className="h-full w-[3px] origin-bottom animate-eq bg-accent"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </span>
                <span className="label">Now playing</span>
                <span className="link-draw">
                  {nowPlaying.title} <span className="text-muted">— {nowPlaying.artist}</span>
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Featured work: framed portrait + wall label */}
        <figure
          className="animate-lift relative mx-auto w-full max-w-sm lg:mr-0 lg:max-w-[26rem]"
        >
          <div className="relative bg-paper p-4 shadow-frame sm:p-6">
            {/* The frame draws itself in, one edge at a time */}
            {[
              "left-0 top-0 h-0.5 w-full origin-left",
              "right-0 top-0 h-full w-0.5 origin-top",
              "bottom-0 right-0 h-0.5 w-full origin-right",
              "bottom-0 left-0 h-full w-0.5 origin-bottom",
            ].map((cls, i) => (
              <motion.span
                key={cls}
                aria-hidden="true"
                className={`pointer-events-none absolute bg-ink ${cls}`}
                initial={reduce ? false : i % 2 ? { scaleY: 0 } : { scaleX: 0 }}
                animate={i % 2 ? { scaleY: 1 } : { scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.4, ease: "easeInOut" }}
              />
            ))}
            <div className="aspect-[4/5] overflow-hidden bg-line">
              <img
                src={asset("/image.jpg")}
                alt="Portrait of Kavya Sridhar"
                width={640}
                height={800}
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
          {/* Museum wall label */}
          <figcaption className="mt-6 max-w-xs border-l-2 border-accent bg-paper/70 py-3 pl-4 pr-3 text-sm shadow-sm lg:-ml-10">
            <p className="font-serif text-xl leading-tight text-ink">
              Portrait of the Engineer, <span className="italic">2026</span>
            </p>
            <p className="mt-1 text-muted">Mixed media: Java, Python, TypeScript, SQL</p>
            <p className="label mt-2 text-muted">On view at Dreamline AI</p>
          </figcaption>
        </figure>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink md:flex"
      >
        <span className="label">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ink"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}
