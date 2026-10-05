"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:kavyasridhar2001@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Wave Icon */}
        <motion.div
          initial={{ rotate: -20 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl mb-6 inline-block"
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 20, 0] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-4"
        >
          Hi, I&apos;m Kavya Sridhar
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary mb-8"
        >
          Software Engineer at Dreamline AI
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          UCSD Data Science Grad and AWS Certified AI Practitioner building
          scalable, fault-tolerant distributed systems with Java, Python, and
          TypeScript.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 mb-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resume.pdf`}
            download
            className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
