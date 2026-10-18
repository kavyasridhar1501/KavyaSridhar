"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
];

// End-credits roll
const credits = [
  { role: "Engineering", name: "Kavya Sridhar" },
  { role: "Design & Curation", name: "Kavya Sridhar" },
  { role: "Paintings", name: "Kavya Sridhar" },
  { role: "Soundtrack", name: "See the listening room" },
];

export default function Footer() {
  return (
    <footer className="bg-night px-5 py-20 text-night-ink sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label text-night-muted">Fin.</p>
        <dl className="mx-auto mt-10 max-w-md space-y-3">
          {credits.map((c) => (
            <div key={c.role} className="flex items-baseline gap-3 text-sm">
              <dt className="label flex flex-1 items-baseline gap-3 text-left text-night-muted">
                {c.role}
                <span aria-hidden="true" className="flex-1 border-b border-dotted border-night-line" />
              </dt>
              <dd className="shrink-0 font-serif text-lg italic">{c.name}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-14 flex justify-center gap-3">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-night-line text-night-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-night-ink hover:text-night-ink"
              >
                <social.icon size={16} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xs text-night-muted">
          © {new Date().getFullYear()} Kavya Sridhar · Built with Next.js · Set in Instrument Serif &amp; Inter
        </p>
        <a href="#home" className="label link-draw mt-6 inline-block text-night-muted hover:text-night-ink">
          Back to the entrance ↑
        </a>
      </div>
    </footer>
  );
}
