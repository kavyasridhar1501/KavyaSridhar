"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "50M+", label: "Records Processed" },
  { number: "20+", label: "ETL Pipelines" },
  { number: "1", label: "IEEE Publication" },
];

const experience = [
  {
    year: "2024 - 2026",
    title: "Master of Science, Data Science",
    company: "UC San Diego",
    description: "GPA: 3.92 | Scalable Data Systems, Recommender Systems, ML, Biomedical NLP, Advanced Text Mining",
    active: true,
  },
  {
    year: "2023 - 2024",
    title: "Software Engineer",
    company: "Société Générale Global Solution Centre",
    description: "Built AML dashboards over 50M+ records, accelerated Spark pipelines by 40%, deployed REST APIs serving 200+ employees",
    active: false,
  },
  {
    year: "2019 - 2023",
    title: "B.E. Computer Science",
    company: "Anna University",
    description: "GPA: 3.98 | DSA, Distributed Systems, DBMS, OS, Software Engineering, IEEE published research",
    active: false,
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-softGray" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-text-secondary text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image/Avatar */}
          <motion.div
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/image.jpg`}
                alt="Kavya Sridhar"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Ex-Software Engineer and Data Science Grad Student
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I&apos;m a Master&apos;s student in Data Science at UC San Diego with a strong
              foundation in Machine Learning, NLP, Large Language Models, and Algorithm design.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Previously, I worked as a Software Engineer at Société Générale, where I optimized
              data pipelines, built compliance dashboards, and migrated critical datasets handling
              50M+ transaction records.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I&apos;m passionate about leveraging data-driven solutions to drive meaningful impact,
              with expertise in RAG systems, adversarial ML, and production ETL pipelines.
            </p>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resume.pdf`}
              download
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ y: 30 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-heading font-semibold text-primary text-center mb-12">
            Experience & Education
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-300 bg-white z-10">
                    {item.active && (
                      <div className="absolute inset-0 bg-primary rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-sm text-text-secondary font-medium">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold text-primary mt-1">
                        {item.title}
                      </h4>
                      <p className="text-primary font-medium text-sm">
                        {item.company}
                      </p>
                      <p className="text-text-secondary text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
