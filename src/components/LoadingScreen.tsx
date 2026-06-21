"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const duration = 1200; // 1.2 seconds
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const nextProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(nextProgress);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsMounted(false);
          setTimeout(() => {
            onComplete();
          }, 600); // Give exit animation time to complete
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative flex flex-col items-center">
          {/* Glowing rotating border */}
          <motion.div
            className="w-24 h-24 rounded-full border-2 border-zinc-800 border-t-cyan-400 border-r-purple-500 relative flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.15)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Centered Percentage */}
          <div className="absolute top-9 font-display text-lg font-bold tracking-widest text-cyan-400">
            {progress}%
          </div>

          {/* Name */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-2xl font-extrabold tracking-[0.25em] text-white">
              GULSHAN KUMAR
            </h1>
            <p className="text-xs text-zinc-500 tracking-[0.35em] uppercase mt-2">
              AI / ML Portfolio
            </p>
          </motion.div>

          {/* Progress bar line */}
          <div className="mt-6 w-48 h-[2px] bg-zinc-900 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
