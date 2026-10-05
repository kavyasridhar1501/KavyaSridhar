"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "50M+", label: "Daily Records Processed" },
  { number: "30+", label: "Features Shipped" },
  { number: "1", label: "AWS Certification" },
];

const experience = [
  {
    year: "2026 - Present",
    title: "Software Engineer",
    company: "Dreamline AI",
    description: "Cut bid lifetime from 4+ months to 48 hours via configurable TTL and PII masking in Supabase; blocked 100% of premature project closures with a milestone state machine and PostgreSQL migration; delivered passwordless inspector onboarding passing all 7 acceptance criteria",
    active: true,
  },
  {
    year: "2025 - 2026",
    title: "Graduate Instructional Assistant",
    company: "UC San Diego",
    description: "Decreased manual grading by 65% for 200+ students with a Python autograding pipeline on a Spark cluster; diagnosed failing distributed Spark jobs and cut regrade requests by 30%",
    active: false,
  },
  {
    year: "2024 - 2026",
    title: "Master of Science, Data Science",
    company: "UC San Diego",
    description: "GPA: 3.92 | Scalable Data Systems, Recommender Systems, ML, Biomedical NLP, Advanced Text Mining",
    active: false,
  },
  {
    year: "2023 - 2024",
    title: "Software Engineer",
    company: "Société Générale Global Solution Centre",
    description: "Shipped 30+ features in Java Spring Boot, accelerated AML batch ETL by 40% with Spark, migrated 50M+ records to Palantir OSv2 with zero data loss, and cut deployment errors 35% via Jenkins automation",
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
                className="w-full h-full object-cover"
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
              Software Engineer at Dreamline AI
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I&apos;m a Software Engineer at Dreamline AI in San Jose and a UC San Diego Data
              Science Master&apos;s graduate. I own code from design through deployment and
              on-call operations, working across Java, Python, and TypeScript.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Previously, I was a Software Engineer at Société Générale, where I shipped scalable
              Spring Boot microservices and Spark pipelines processing 50M+ daily records, and a
              Graduate Instructional Assistant at UCSD building Spark-based autograding pipelines.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I&apos;m an AWS Certified AI Practitioner who enjoys building fault-tolerant distributed
              systems at scale, along with RAG systems and GenAI-assisted development.
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
