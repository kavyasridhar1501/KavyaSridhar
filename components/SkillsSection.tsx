"use client";

import { Reveal, SectionHeading } from "./ui";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C/C++", "R"],
  },
  {
    title: "ML & AI",
    skills: ["PyTorch", "LLMs", "LangChain", "RAG", "FAISS", "QLoRA", "Adversarial Training", "Prophet", "Isolation Forest"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Hadoop", "Apache Airflow", "ETL Pipelines", "Palantir Foundry", "dbt"],
  },
  {
    title: "Web & Backend",
    skills: ["Spring Boot", "Node.js", "Flask", "FastAPI", "Express.js", "React", "Next.js", "Chart.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (S3, EC2, DynamoDB)", "AWS Certified AI Practitioner", "Docker", "Jenkins", "GitHub Actions", "CI/CD", "Git", "Vercel"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Vector Stores"],
  },
];

// A pigment per category, used for the swatch and hover states
const pigments = ["bg-vermilion", "bg-cobalt", "bg-ochre", "bg-sage", "bg-blush", "bg-ink"];

export default function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          room="04"
          eyebrow="Materials & techniques"
          title="Skills"
          intro="The palette I work with day to day."
        />

        <dl className="divide-y divide-line border-y border-line">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.04}
              className="group grid gap-4 py-7 md:grid-cols-[16rem_1fr] md:gap-10"
            >
              <dt className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`h-8 w-8 shrink-0 rounded-full ${pigments[i]} transition-transform duration-500 group-hover:scale-110 [border-radius:58%_42%_55%_45%/45%_55%_45%_55%]`}
                />
                <span className="font-serif text-3xl text-ink">{category.title}</span>
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border border-line px-3.5 py-1.5 text-sm text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-wall"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
