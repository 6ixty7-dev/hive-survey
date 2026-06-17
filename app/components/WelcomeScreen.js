"use client";
import { motion } from "framer-motion";

export default function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative gold hex */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <svg
          width="40"
          height="46"
          viewBox="0 0 40 46"
          fill="none"
          className="sm:w-12 sm:h-14"
        >
          <polygon
            points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5"
            fill="var(--hive-gold)"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,7vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-4 sm:mb-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="block text-white">Hive is building</span>
        <span
          className="block italic"
          style={{ color: "var(--hive-gold)" }}
        >
          fashion differently.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-[var(--text-secondary)] text-[clamp(0.9rem,3vw,1.125rem)] leading-relaxed max-w-xs sm:max-w-sm mb-10 sm:mb-12 font-[family-name:var(--font-geist-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Help us design a better shopping experience.
      </motion.p>

      {/* Meta line */}
      <motion.div
        className="flex items-center gap-3 text-[var(--text-tertiary)] text-[11px] sm:text-xs tracking-[0.15em] uppercase mb-10 sm:mb-12 font-[family-name:var(--font-geist-sans)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span>30 seconds</span>
        <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
        <span>5 questions</span>
      </motion.div>

      {/* CTA */}
      <motion.button
        onClick={onStart}
        className="group relative px-10 py-4 sm:px-12 sm:py-4.5 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-sm sm:text-base tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer"
        style={{
          background: "var(--hive-gold)",
          boxShadow: "var(--shadow-gold)",
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.8 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">Start</span>
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      {/* Bottom text */}
      <motion.p
        className="mt-8 text-[10px] sm:text-[11px] text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)] tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Your insights shape what we build.
      </motion.p>
    </motion.div>
  );
}
