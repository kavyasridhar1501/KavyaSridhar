"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-softGray py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-xl font-heading font-bold text-primary">
            Kavya Sridhar
          </a>

          {/* Navigation */}
          <div className="flex gap-6">
            <a href="#about" className="text-text-secondary hover:text-primary transition-colors text-sm">About</a>
            <a href="#skills" className="text-text-secondary hover:text-primary transition-colors text-sm">Skills</a>
            <a href="#projects" className="text-text-secondary hover:text-primary transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-text-secondary hover:text-primary transition-colors text-sm">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
