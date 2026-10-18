"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Artwork, { type ArtworkVariant } from "./Artwork";
import { Reveal, SectionHeading, asset, canHover } from "./ui";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  art: ArtworkVariant;
  /** Optional screenshot in /public; replaces the generated artwork. */
  image?: string;
};

const projects: Project[] = [
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
    art: "waves",
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
    art: "grid",
  },
  {
    title: "SplitRight",
    subtitle: "Expense Splitting PWA",
    description:
      "Full-stack, mobile-first PWA for fair expense splitting among college roommates, with debt simplification and group management via invite codes, deployed via Docker on Vercel.",
    highlights: [
      "90% test coverage across 3 split modes with Jest",
      "PWA with offline support",
      "JWT auth with bcrypt security",
    ],
    technologies: ["Next.js 14", "TypeScript", "Node.js", "REST API", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/kavyasridhar1501/SplitRight",
    demo: "https://split-right-ecru.vercel.app",
    art: "split",
  },
  {
    title: "HemsHappen",
    subtitle: "RAG Medical Chatbot",
    description:
      "RAG pipeline using FAISS and Claude Sonnet over curated GI clinical guidelines, validated by gastroenterologists, plus a Med42-8B model fine-tuned via 4-bit QLoRA for red-flag triage.",
    highlights: [
      "Validated by gastroenterologists",
      "+4.2 F1 on red-flag/triage via QLoRA",
      "95.6% schema validity",
    ],
    technologies: ["Python", "LangChain", "FAISS", "QLoRA", "SentenceTransformers", "Claude API"],
    github: "https://github.com/kavyasridhar1501/hemorrhoids-rag-chatbot",
    art: "fields",
  },
  {
    title: "LegalInsight",
    subtitle: "Self-RAG Legal Contract Analyzer",
    description:
      "Legal contract analysis tool using Self-RAG with EigenScore validation for hallucination detection.",
    highlights: ["74.65% semantic consistency", "4.26x faster review time", "Multiple LLM support"],
    technologies: ["Python", "Flask", "Self-RAG", "FAISS"],
    github: "https://github.com/kavyasridhar1501/LegalInsight",
    art: "lines",
  },
  {
    title: "DeepFool Defense",
    subtitle: "IEEE Published Research",
    description:
      "Improved ResNet50 robustness against adversarial attacks by 43% using adversarial training techniques.",
    highlights: ["IEEE WiSPNET 2023", "43% robustness improvement", "Skater interpretations"],
    technologies: ["PyTorch", "Adversarial ML", "Computer Vision"],
    art: "pixels",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Gentle 3D tilt + a light glare that follows the pointer
  const handleMove = (e: React.PointerEvent) => {
    const el = frameRef.current;
    if (!el || reduce || !canHover()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(px - 0.5) * 7}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 7}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };
  const handleLeave = () => {
    frameRef.current?.style.setProperty("--rx", "0deg");
    frameRef.current?.style.setProperty("--ry", "0deg");
  };

  const catNo = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" delay={(index % 2) * 0.12} className="group">
      <div
        ref={frameRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="relative bg-paper p-3 shadow-frame transition-[transform,box-shadow] duration-500 ease-out [transform:perspective(1000px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] group-hover:shadow-frame-lift sm:p-4"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-line">
          {project.image ? (
            <img
              src={asset(project.image)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover [@media(hover:hover)]:grayscale-[0.85] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
            />
          ) : (
            <Artwork
              variant={project.art}
              className="h-full w-full [@media(hover:hover)]:grayscale-[0.85] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0 group-focus-within:grayscale-0"
            />
          )}
          {/* Glare */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.35), transparent 55%)",
            }}
          />
          <span className="label absolute left-3 top-3 bg-paper/90 px-2 py-1 text-ink">Cat. {catNo}</span>
        </div>
      </div>

      {/* Wall label */}
      <div className="mt-6 grid gap-x-8 sm:grid-cols-[1fr_auto]">
        <div>
          <h3 className="font-serif text-4xl leading-none text-ink">{project.title}</h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-accent">{project.subtitle}</p>
        </div>
        <div className="mt-4 flex gap-5 text-sm sm:mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1.5 text-ink"
              aria-label={`${project.title} source code on GitHub`}
            >
              <FaGithub aria-hidden="true" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1 text-ink"
              aria-label={`${project.title} live demo`}
            >
              Live demo <HiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-ink">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
        <span className="label mr-2 text-ink">Medium</span>
        {project.technologies.join(", ")}
      </p>
    </Reveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          room="03"
          eyebrow="The permanent collection"
          title={
            <>
              Selected <span className="italic">Work</span>
            </>
          }
          intro="Projects across full-stack, data engineering, and applied AI/ML. Hover a piece to bring it into color."
        />

        <div className="grid gap-x-12 gap-y-20 md:grid-cols-2 lg:gap-x-20">
          {projects.map((project, index) => (
            <div key={project.title} className={index % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <Reveal className="mt-24 text-center">
          <a
            href="https://github.com/kavyasridhar1501"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <FaGithub aria-hidden="true" />
            See the full archive on GitHub
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
