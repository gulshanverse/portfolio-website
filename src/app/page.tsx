"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import { ArrowUp, Heart } from "lucide-react";

// Dynamically import the Canvas container with SSR disabled to prevent node-canvas/window references on the server.
const CanvasContainer = dynamic(() => import("@/components/CanvasContainer"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-white">
          {/* R3F interactive background */}
          <CanvasContainer />

          {/* Nav */}
          <Navbar />

          {/* Section contents */}
          <main className="relative z-10 max-w-7xl mx-auto">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Leadership />
            <Contact />
          </main>

          {/* Premium Footer */}
          <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-12 text-center text-zinc-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-sm font-medium tracking-wide">
                © {new Date().getFullYear()} Gulshan Kumar. All rights reserved.
              </span>
              
              <span className="text-xs inline-flex items-center gap-1.5 font-medium">
                Made with <Heart size={12} className="text-rose-500 animate-pulse" /> using Next.js & Framer Motion
              </span>

              <button
                onClick={handleScrollToTop}
                className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-md group"
                aria-label="Scroll to Top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
