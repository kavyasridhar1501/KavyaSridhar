"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const experience = [
  {
    year: "2026 - Present",
    title: "Software Engineer",
    company: "Dreamline AI",
    kind: "Work",
    description:
      "Cut bid lifetime from 4+ months to 48 hours via configurable TTL and PII masking in Supabase; blocked 100% of premature project closures with a milestone state machine and PostgreSQL migration; delivered passwordless inspector onboarding passing all 7 acceptance criteria",
    active: true,
  },
  {
    year: "2025 - 2026",
    title: "Graduate Instructional Assistant",
    company: "UC San Diego",
    kind: "Work",
    description:
      "Decreased manual grading by 65% for 200+ students with a Python autograding pipeline on a Spark cluster; diagnosed failing distributed Spark jobs and cut regrade requests by 30%",
    active: false,
  },
  {
    year: "2024 - 2026",
    title: "Master of Science, Data Science",
    company: "UC San Diego",
    kind: "Education",
    description:
      "GPA: 3.92 | Scalable Data Systems, Recommender Systems, ML, Biomedical NLP, Advanced Text Mining",
    active: false,
  },
  {
    year: "2023 - 2024",
    title: "Software Engineer",
    company: "Société Générale Global Solution Centre",
    kind: "Work",
    description:
      "Shipped 30+ features in Java Spring Boot, accelerated AML batch ETL by 40% with Spark, migrated 50M+ records to Palantir OSv2 with zero data loss, and cut deployment errors 35% via Jenkins automation",
    active: false,
  },
  {
    year: "2019 - 2023",
    title: "B.E. Computer Science",
    company: "Anna University",
    kind: "Education",
    description:
      "GPA: 3.98 | DSA, Distributed Systems, DBMS, OS, Software Engineering, IEEE published research",
    active: false,
  },
];

export default function ExperienceSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  // The timeline rule fills in as you scroll through the list
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          room="02"
          eyebrow="Exhibition history"
          title={
            <>
              Experience <span className="italic text-muted">&amp;</span> Education
            </>
          }
        />

        <ol ref={listRef} className="relative">
          <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[11.5rem]" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-accent md:left-[11.5rem]"
            style={{ scaleY: reduce ? 1 : progress }}
          />

          {experience.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.title}-${item.year}`}
              delay={i * 0.05}
              className="group relative grid gap-2 py-8 pl-8 md:grid-cols-[11.5rem_1fr] md:gap-0 md:pl-0"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[2.45rem] h-[11px] w-[11px] rounded-full border-2 transition-colors duration-300 md:left-[calc(11.5rem-5px)] ${
                  item.active
                    ? "border-accent bg-accent"
                    : "border-line bg-paper group-hover:border-accent"
                }`}
              />
              <div className="md:pr-10 md:pt-1.5">
                <p className="font-mono text-sm text-muted">{item.year}</p>
                <p className={`label mt-1 ${item.kind === "Education" ? "text-cobalt" : "text-accent"}`}>
                  {item.kind}
                  {item.active && " · Current"}
                </p>
              </div>
              <div className="md:pl-12">
                <h3 className="font-serif text-3xl leading-tight text-ink transition-transform duration-500 md:group-hover:translate-x-1 md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-medium text-ink">{item.company}</p>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
