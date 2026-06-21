"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Check, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Mock API request delay
    setTimeout(() => {
      setStatus("success");
      
      // Trigger canvas-confetti celebration
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f2fe", "#8b5cf6", "#10b981"]
      });

      // Reset form data after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Return status to idle after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Connect</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Get In Touch
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Let&apos;s discuss your next project.
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm sm:text-base font-normal">
                Whether you&apos;re a recruiter seeking a dedicated developer, have an AI/ML project idea, or simply want to connect, feel free to reach out. I will get back to you within 24 hours.
              </p>

              {/* Cards details */}
              <div className="flex flex-col gap-5">
                <div className="glass-panel border-zinc-800/60 p-5 rounded-2xl flex gap-4 items-center">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-cyan-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">Email Address</span>
                    <a href="mailto:contact@gulshankumar.com" className="text-zinc-300 font-semibold block text-sm hover:text-cyan-400 transition-colors mt-0.5">
                      contact@gulshankumar.com
                    </a>
                  </div>
                </div>

                <div className="glass-panel border-zinc-800/60 p-5 rounded-2xl flex gap-4 items-center">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">Location</span>
                    <span className="text-zinc-300 font-semibold block text-sm mt-0.5">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Footnote */}
            <div className="mt-12 lg:mt-0">
              <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-500 block mb-4">Social Links</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-105 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-105 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel border-zinc-800/60 p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter the subject"
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or role..."
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 tracking-wide transition-all duration-300 ${
                  status === "success"
                    ? "bg-emerald-500 text-zinc-950 cursor-default"
                    : status === "submitting"
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-cyan-500 text-zinc-950 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                }`}
              >
                {status === "success" ? (
                  <>
                    <Check size={16} /> Message Sent Successfully!
                  </>
                ) : status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
