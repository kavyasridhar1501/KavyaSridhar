"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-night px-5 py-20 text-night-ink sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <ul className="flex justify-center gap-3">
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
