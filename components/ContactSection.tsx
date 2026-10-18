"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal, SectionHeading } from "./ui";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "kavyasridhar2001@gmail.com",
    href: "mailto:kavyasridhar2001@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "San Jose, CA",
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
];

const fieldClass =
  "peer w-full border-0 border-b border-line bg-transparent px-0 pb-2 pt-6 text-lg text-ink placeholder-transparent outline-none transition-colors focus:border-accent focus:ring-0";
const labelClass =
  "pointer-events-none absolute left-0 top-6 origin-left text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:kavyasridhar2001@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          room="06"
          eyebrow="Visitor's book"
          title={
            <>
              Let&apos;s <span className="italic">talk</span>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              I&apos;m always open to discussing new roles, collaborations, or interesting full-stack, data, and ML
              projects. Leave a note in the guestbook, or reach me directly.
            </p>

            <ul className="mt-10 space-y-6">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink">
                    <info.icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="label text-muted">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="link-draw text-lg text-ink">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-ink">{info.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-10 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-4 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
                  >
                    <social.icon aria-hidden="true" /> {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8 bg-paper p-6 shadow-frame sm:p-10">
              <p className="label text-muted">Guestbook entry</p>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  className={fieldClass}
                />
                <label htmlFor="email" className={labelClass}>
                  Your email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message"
                  className={`${fieldClass} resize-none`}
                />
                <label htmlFor="message" className={labelClass}>
                  Your message
                </label>
              </div>
              <button type="submit" className="btn-solid group w-full sm:w-auto">
                <span>Sign the guestbook</span>
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
