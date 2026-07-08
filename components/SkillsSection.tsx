"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "ML & AI",
    skills: ["PyTorch", "LLMs", "RAG", "FAISS", "LoRA", "Adversarial Training", "Prophet", "Isolation Forest"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Apache Airflow", "ETL Pipelines", "Palantir Foundry", "dbt"],
  },
  {
    title: "Web Development",
    skills: ["Flask", "FastAPI", "Express.js", "React", "Next.js", "Chart.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS S3", "AWS DynamoDB", "Git", "Docker", "CI/CD", "Vercel", "Railway"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Vector Stores"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 30 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-softGray p-6 rounded-xl"
            >
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-text-secondary text-sm rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
