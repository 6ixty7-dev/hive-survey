"use client";
import { motion } from "framer-motion";

export default function WaitlistSuccess({ onDone }) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center min-h-dvh relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Animated large gold checkmark */}
        <div className="relative mb-8 sm:mb-10">
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center border-2 border-[var(--hive-gold)] bg-[var(--hive-gold-dim)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--hive-gold)] sm:w-12 sm:h-12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
          {/* Subtle glow behind checkmark */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none blur-xl"
            style={{ background: "rgba(244, 197, 66, 0.2)" }}
          />
        </div>

        {/* Headline */}
        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,6vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-4 text-white"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your spot is reserved.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[var(--text-secondary)] text-[clamp(0.875rem,3vw,1.125rem)] leading-relaxed max-w-sm mb-6 font-[family-name:var(--font-geist-sans)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We'll send your invitation as soon as Hive opens on July 15.
        </motion.p>

        {/* Optional small text */}
        <motion.p
          className="text-[var(--text-tertiary)] text-xs sm:text-sm leading-relaxed max-w-sm mb-12 font-[family-name:var(--font-geist-sans)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Thank you for helping us build a more thoughtful fashion experience. You're among the first to discover what's inside.
        </motion.p>

        {/* Done CTA */}
        <motion.button
          onClick={onDone}
          className="group relative px-10 py-4 sm:px-12 sm:py-4.5 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-sm sm:text-base tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer"
          style={{
            background: "var(--hive-gold)",
            boxShadow: "var(--shadow-gold)",
          }}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.8,
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">Done</span>
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
