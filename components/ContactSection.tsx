"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

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
    value: "La Jolla, CA",
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/kavyasridhar1501", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/kavyasridhar", label: "LinkedIn" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Interested in collaboration or have questions? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold text-primary mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I&apos;m always open to discussing new research opportunities, collaborations,
              or interesting data science and ML projects.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-softGray rounded-full flex items-center justify-center">
                    <info.icon className="text-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 focus:border-primary rounded-lg px-4 py-3 text-primary outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 focus:border-primary rounded-lg px-4 py-3 text-primary outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-200 focus:border-primary rounded-lg px-4 py-3 text-primary outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
