"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CuriosityCTAScreen({ onNext }) {
  useEffect(() => {
    // Play a bee buzzing vibration pattern for ~1.5 seconds
    // Pattern: short, short, short, medium, long, short, short...
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate([
        50, 30, 50, 30, 50, 30, 100, 40, 200, 40, 50, 30, 50, 30, 100, 40, 200, 40, 300
      ]);
    }
  }, []);

  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center min-h-dvh relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">
        {/* Animated Hive Gold Particles */}
        <div className="relative mb-12 flex justify-center items-center w-24 h-24">
          <motion.div
            className="absolute inset-0 border border-[var(--hive-gold)] rounded-full opacity-20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2, opacity: [0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--hive-gold)] rounded-full opacity-20 delay-100"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.5, opacity: [0, 0.1, 0] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg width="24" height="28" viewBox="0 0 12 14" fill="none">
            <polygon
              points="6,0 12,3.5 12,10.5 6,14 0,10.5 0,3.5"
              fill="var(--hive-gold)"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={onNext}
          className="group relative px-10 py-5 sm:px-12 sm:py-5 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-base sm:text-lg tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(244,197,66,0.3)] hover:shadow-[0_0_30px_rgba(244,197,66,0.5)] transition-all duration-300"
          style={{
            background: "var(--hive-gold)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center gap-3 font-semibold">
            ✨ One Last Thing
          </span>
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.15 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
