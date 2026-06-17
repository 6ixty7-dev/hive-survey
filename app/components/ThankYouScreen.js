"use client";
import { motion } from "framer-motion";

export default function ThankYouScreen({ onDone }) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gold particles / celebratory hexes */}
      <div className="relative mb-10 sm:mb-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${-15 + i * 10}px`,
              left: `${-20 + i * 25}px`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0.5],
              rotate: [0, 10, -5],
              y: [0, -20 - i * 10, -40 - i * 15],
            }}
            transition={{
              duration: 2,
              delay: 0.3 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <polygon
                points="6,0 12,3.5 12,10.5 6,14 0,10.5 0,3.5"
                fill="var(--hive-gold)"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        ))}

        <motion.svg
          width="56"
          height="64"
          viewBox="0 0 56 64"
          fill="none"
          className="sm:w-16 sm:h-[72px]"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            delay: 0.2,
          }}
        >
          <polygon
            points="28,0 56,16 56,48 28,64 0,48 0,16"
            fill="var(--hive-gold)"
          />
          {/* Check mark inside */}
          <path
            d="M18 32L25 39L38 25"
            stroke="var(--bg-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      {/* Headline */}
      <motion.h1
        className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,8vw,4rem)] leading-[1.05] font-medium tracking-[-0.03em] mb-5 sm:mb-6"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="block text-white">Thank</span>
        <span className="block italic" style={{ color: "var(--hive-gold)" }}>
          You
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-[var(--text-secondary)] text-[clamp(0.875rem,3vw,1.125rem)] leading-relaxed max-w-xs sm:max-w-sm mb-12 sm:mb-14 font-[family-name:var(--font-geist-sans)]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Every response helps us build a better Hive.
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

      {/* Bottom subtle branding */}
      <motion.div
        className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none">
          <polygon
            points="10,0 20,5.75 20,17.25 10,23 0,17.25 0,5.75"
            fill="var(--hive-gold)"
            opacity="0.4"
          />
        </svg>
        <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)] tracking-[0.15em] uppercase">
          Hive · Coming Soon
        </p>
      </motion.div>
    </motion.div>
  );
}
