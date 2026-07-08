"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "EcoNode",
    subtitle: "MLOps Renewable Energy Forecasting",
    description:
      "Fully automated MLOps pipeline that forecasts renewable energy availability and carbon intensity across US electrical grids using weather-enhanced Prophet models.",
    highlights: [
      "Weather-enhanced Prophet forecasting",
      "48-hour carbon intensity outlook",
      "Zero-maintenance GitHub Actions pipeline",
    ],
    technologies: ["Python", "Prophet", "Supabase", "GitHub Actions", "Chart.js", "EIA API"],
    github: "https://github.com/kavyasridhar1501/EcoNode",
    demo: "https://kavyasridhar1501.github.io/EcoNode/",
  },
  {
    title: "SmartSpend360",
    subtitle: "Financial Analytics Platform",
    description:
      "Production-grade financial analytics platform for spending tracking, anomaly detection, and cash flow forecasting using a zero-cost cloud stack.",
    highlights: [
      "Isolation Forest anomaly detection",
      "Prophet cash flow forecasting",
      "Zero-cost deployment on free tiers",
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Apache Airflow", "AWS S3", "PySpark"],
    github: "https://github.com/kavyasridhar1501/SmartSpend360",
    demo: "https://smartspend360-app-pink.vercel.app/dashboard",
  },
  {
    title: "SplitRight",
    subtitle: "Expense Splitting PWA",
    description:
      "Mobile-first progressive web app for fair expense splitting among college roommates, with debt simplification and group management via invite codes.",
    highlights: [
      "Debt simplification algorithm",
      "PWA with offline support",
      "JWT auth with bcrypt security",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/kavyasridhar1501/SplitRight",
    demo: "https://split-right-ecru.vercel.app",
  },
  {
    title: "Hemorrhoids RAG Chatbot",
    subtitle: "RAG-Based Medical Chatbot",
    description:
      "Developed a RAG-based medical chatbot using FAISS vector search and Claude Sonnet 4 over curated GI clinical guidelines.",
    highlights: [
      "100% clinical safety pass rate",
      "Outperformed baseline by 42%",
      "Submitted to DDW 2025",
    ],
    technologies: ["Python", "RAG", "FAISS", "Claude API", "LoRA"],
    github: "https://github.com/kavyasridhar1501/hemorrhoids-rag-chatbot",
  },
  {
    title: "LegalInsight",
    subtitle: "Self-RAG Legal Contract Analyzer",
    description:
      "Legal contract analysis tool using Self-RAG with EigenScore validation for hallucination detection.",
    highlights: [
      "74.65% semantic consistency",
      "4.26x faster review time",
      "Multiple LLM support",
    ],
    technologies: ["Python", "Flask", "Self-RAG", "FAISS"],
    github: "#",
  },
  {
    title: "DeepFool Defense",
    subtitle: "IEEE Published Research",
    description:
      "Improved ResNet50 robustness against adversarial attacks by 43% using adversarial training techniques.",
    highlights: [
      "IEEE WiSPNET 2023",
      "43% robustness improvement",
      "Skater interpretations",
    ],
    technologies: ["PyTorch", "Adversarial ML", "Computer Vision"],
    github: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section bg-softGray" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Latest Work
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent projects in ML, NLP, and data science
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <FaGithub className="text-6xl text-gray-400" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {project.subtitle}
                </p>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-softGray text-text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/kavyasridhar1501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
