"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal, SectionHeading, asset } from "./ui";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "5M+", label: "Daily Records Processed" },
  { number: "30+", label: "Features Shipped" },
  { number: "1", label: "AWS Certification" },
];

/** Counts a stat like "5M+" up from zero the first time it scrolls into view. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [, num, suffix] = value.match(/^(\d+)(.*)$/) ?? [null, value, ""];
  const target = Number(num);
  const [display, setDisplay] = useState(reduce || Number.isNaN(target) ? num : "0");

  useEffect(() => {
    if (!isInView || reduce || Number.isNaN(target)) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [isInView, reduce, target]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {display}
        <span className="text-accent">{suffix}</span>
      </span>
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading room="01" eyebrow="Curator's note" title="About" />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <Reveal>
            <p className="font-serif text-3xl leading-snug text-ink md:text-[2.6rem] md:leading-[1.2]">
              I build software that holds up in production: the APIs, the data pipelines behind them, and the
              models on top. <span className="italic text-muted">I treat a codebase the way I treat a canvas:
              start with structure, then work in the detail.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I&apos;m a Software Engineer at <span className="text-ink">Dreamline AI</span> in San Jose and a
              UC San Diego Data Science Master&apos;s graduate. I own code from design through deployment and
              on-call operations, working across Java, Python, and TypeScript.
            </p>
            <p>
              Previously, I was a Software Engineer at <span className="text-ink">Société Générale</span>, where I
              shipped scalable Spring Boot microservices and Spark pipelines processing 50M+ daily records, and a
              Graduate Instructional Assistant at UCSD building Spark-based autograding pipelines.
            </p>
            <p>
              I&apos;m an AWS Certified AI Practitioner who enjoys building fault-tolerant distributed systems at
              scale, along with RAG systems and GenAI-assisted development.
            </p>
            <a href={asset("/resume.pdf")} download className="btn-solid !mt-8">
              <span>Download Resume</span>
            </a>
          </Reveal>
        </div>

        {/* Catalogue figures */}
        <dl className="mt-20 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className={`flex flex-col border-b border-line py-8 md:border-b-0 md:py-10 ${
                i % 2 === 1 ? "pl-6 md:pl-8" : "md:pl-8"
              } ${i > 0 ? "md:border-l" : "md:!pl-0"} ${i % 2 === 1 ? "border-l md:border-l" : ""}`}
            >
              <dt className="label order-2 mt-3 text-muted">{stat.label}</dt>
              <dd className="order-1 font-serif text-5xl text-ink md:text-6xl">
                <CountUp value={stat.number} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
