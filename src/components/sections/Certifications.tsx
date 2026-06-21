"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, ExternalLink, Calendar } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (via Coursera)",
    date: "Dec 2025",
    credentialId: "COURSERA-DL-987",
    link: "https://coursera.org",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online & DeepLearning.AI",
    date: "Aug 2025",
    credentialId: "STAN-ML-102",
    link: "https://coursera.org",
  },
  {
    title: "Google AI/ML Developer Certification Course",
    issuer: "Google Developer Groups",
    date: "Nov 2025",
    credentialId: "GDG-AI-8839",
    link: "https://developers.google.com",
  },
  {
    title: "Advanced Data Science with Python",
    issuer: "CodeAlpha Certified",
    date: "Jul 2025",
    credentialId: "CA-DS-774",
    link: "https://codealpha.com",
  }
];

export default function Certifications() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow visual lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Qualifications</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Certifications & Training
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              className="glass-panel glass-panel-hover border-zinc-800/60 p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
              variants={cardVariants}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-cyan-400 flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-semibold text-zinc-400 mt-1 block">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-medium mb-6">
                  <div className="flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar size={12} /> {cert.date}
                  </div>
                  <div className="h-3 w-[1px] bg-zinc-800" />
                  <div>
                    ID: <span className="font-mono text-zinc-400 uppercase">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  Verified Credential
                </span>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
