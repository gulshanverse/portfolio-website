"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ArrowRight, Mail, Cpu } from "lucide-react";

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

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background visual helpers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left side text and actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 self-start">
            <Cpu size={14} className="animate-spin-slow" /> GDGC AI/ML Team Member
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Hi, I&apos;m <span className="text-gradient-cyan">Gulshan Kumar</span>
            <br />
            <span className="text-zinc-400">Designing the Future of </span>
            <span className="text-gradient-purple">AI & ML Systems</span>
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed font-normal"
          >
            Developer focused on deep learning neural architectures, scalable web applications, and high-performance algorithms. Creator of <span className="text-cyan-400">VeriLex AI</span> and <span className="text-purple-400">NHIDE 2026</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Let&apos;s Connect <ArrowRight size={16} />
            </a>

            <a
              href="#"
              download="Gulshan_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 glass-panel text-white font-semibold hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
            >
              Download CV <Download size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <span className="text-xs tracking-widest text-zinc-500 uppercase font-semibold">Follow Me:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-800/60 glass-panel text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-800/60 glass-panel text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:contact@gulshankumar.com"
                className="p-2.5 rounded-full border border-zinc-800/60 glass-panel text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side interactive terminal graphic */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          {/* Ring light background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-2xl blur-3xl -z-10 pointer-events-none" />

          {/* Futuristic Terminal Card */}
          <div className="glass-panel border-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="bg-zinc-900/60 border-b border-zinc-800/40 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">verilex-agent.py</span>
              <span className="w-4" />
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-[12px] leading-relaxed text-zinc-300 overflow-x-auto min-h-[300px]">
              <div className="text-zinc-500 mb-2"># Initializing Neural Net Training</div>
              <div><span className="text-purple-400">import</span> torch</div>
              <div><span className="text-purple-400">import</span> verilex_models <span className="text-purple-400">as</span> vm</div>
              <div className="mt-2 text-zinc-500"># Config settings</div>
              <div>device = <span className="text-cyan-400">&quot;cuda&quot;</span> <span className="text-purple-400">if</span> torch.cuda.is_available() <span className="text-purple-400">else</span> <span className="text-cyan-400">&quot;cpu&quot;</span></div>
              <div>model = vm.VeriLexEncoder().to(device)</div>
              <div>optimizer = torch.optim.AdamW(model.parameters(), lr=<span className="text-amber-400">2e-4</span>)</div>
              
              <div className="mt-4 text-zinc-500"># Training loop logs</div>
              <div>&gt;&gt;&gt; loading dataset: document_verification_corpus... Done.</div>
              <div>&gt;&gt;&gt; training started on: <span className="text-emerald-400">NVIDIA RTX 4080</span></div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-cyan-400 font-bold">[Epoch 42/100]</span>
                <span className="text-zinc-400">loss:</span>
                <span className="text-emerald-400">0.0384</span>
                <span className="text-zinc-400">val_acc:</span>
                <span className="text-emerald-400">99.2%</span>
              </div>
              <div className="w-full bg-zinc-900 rounded-full h-[6px] mt-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </div>

              <div className="mt-4 text-cyan-400/80 animate-pulse">&gt;&gt;&gt; system state: optimizing learning rate scheduler...</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
