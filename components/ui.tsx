"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Prefixes a file in /public with the GitHub Pages base path. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/** True on devices with a precise pointer that can hover (desktop mice / trackpads). */
export const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Fades and lifts its children into place once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/**
 * Gallery-style room signage: a mono "room" eyebrow, a plain heading
 * (kept literal so recruiters can scan), and a hairline that draws in.
 */
export function SectionHeading({
  room,
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  room: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="mb-14 md:mb-20">
      <Reveal>
        <p className={`label mb-5 flex items-center gap-3 ${dark ? "text-night-muted" : "text-muted"}`}>
          <span className="text-accent">Room {room}</span>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </p>
        <h2
          className={`font-serif text-5xl leading-[1.05] md:text-7xl ${dark ? "text-night-ink" : "text-ink"}`}
        >
          {title}
        </h2>
      </Reveal>
      <motion.div
        aria-hidden="true"
        className={`mt-8 h-px origin-left ${dark ? "bg-night-line" : "bg-line"}`}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-night-muted" : "text-muted"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
