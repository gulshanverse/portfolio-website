"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Star, Lightbulb, ArrowRight } from "lucide-react";

const LEADERSHIP_ITEMS = [
  {
    role: "AI/ML Team Member",
    org: "Google Developer Groups on Campus (GDGC)",
    period: "Oct 2025 – Present",
    icon: <Star className="text-cyan-400" size={22} />,
    color: "cyan",
    description:
      "Core member of the AI/ML vertical, collaborating with a multidisciplinary team to design intelligent developer tools, workshops, and community events.",
    contributions: [
      "Designed and delivered hands-on workshops on PyTorch, TensorFlow, and LLM fine-tuning to 300+ students.",
      "Organized competitive hackathons and AI/ML challenges with cross-campus participation.",
      "Mentored junior members on model architecture, data preprocessing, and deployment pipelines.",
      "Produced technical blog posts and documentation for community-facing AI learning tracks.",
    ],
  },
  {
    role: "Community Workshop Instructor",
    org: "CodeAlpha Certified Program",
    period: "June 2025 – Aug 2025",
    icon: <Lightbulb className="text-purple-400" size={22} />,
    color: "purple",
    description:
      "Led structured online and in-person workshops introducing machine learning fundamentals, data analysis tools, and applied computer vision to aspiring developers.",
    contributions: [
      "Crafted curriculum covering Python, Scikit-Learn, OpenCV, and NumPy for beginner to intermediate learners.",
      "Developed hands-on project exercises resulting in 90%+ completion rates across cohorts.",
      "Provided one-on-one mentoring and code reviews for participants' final ML projects.",
      "Built reusable workshop starter kits used by subsequent instructors.",
    ],
  },
];

export default function Leadership() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
            Community
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Leadership &amp; Activities
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-col gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {LEADERSHIP_ITEMS.map((item) => (
            <motion.div
              key={item.role}
              className="glass-panel border-zinc-800/60 p-6 sm:p-10 rounded-2xl relative overflow-hidden group"
              variants={cardVariants}
            >
              {/* Corner accent glow */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[20px] pointer-events-none transition-all duration-300 ${
                  item.color === "cyan"
                    ? "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                    : "bg-purple-500/10 group-hover:bg-purple-500/20"
                }`}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                      {item.role}
                    </h3>
                    <span className="text-sm font-semibold text-zinc-400 mt-0.5 block">
                      {item.org}
                    </span>
                  </div>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border text-xs font-bold uppercase tracking-wider self-start flex-shrink-0 ${
                    item.color === "cyan"
                      ? "border-cyan-500/30 text-cyan-400"
                      : "border-purple-500/30 text-purple-400"
                  }`}
                >
                  <Users size={11} /> {item.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                {item.description}
              </p>

              {/* Contributions */}
              <div className="pt-5 border-t border-zinc-900">
                <h4 className="font-display text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                  Key Contributions
                </h4>
                <ul className="flex flex-col gap-3">
                  {item.contributions.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal"
                    >
                      <ArrowRight
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${
                          item.color === "cyan"
                            ? "text-cyan-400/70"
                            : "text-purple-400/70"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
