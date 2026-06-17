"use client";
import { motion } from "framer-motion";

const options = [
  {
    id: "order-first",
    label: "🛍️ Buy now, create account later",
    description: "You can place your order immediately.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8l10-4 10 4-10 4-10-4z" />
        <path d="M4 8v8l10 4 10-4V8" />
        <path d="M14 12v8" />
      </svg>
    ),
  },
  {
    id: "account-first",
    label: "🔐 Create account first",
    description: "You must sign up before placing your order.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="10" r="4" />
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" />
      </svg>
    ),
  },
];

export default function OrderPreference({ selected, onSelect }) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      {/* Question */}
      <motion.p
        className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4 font-[family-name:var(--font-geist-sans)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Question 01
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.15] font-medium text-center mb-2 max-w-md tracking-[-0.01em]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Which would{" "}
        <span className="italic" style={{ color: "var(--hive-gold)" }}>
          annoy you less?
        </span>
      </motion.h2>
      <motion.p
        className="text-[var(--text-secondary)] text-sm sm:text-base font-[family-name:var(--font-geist-sans)] text-center mb-10 sm:mb-12 max-w-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        We want buying to feel simple.
      </motion.p>

      {/* Selection cards */}
      <div className="w-full max-w-sm sm:max-w-md space-y-3 sm:space-y-4">
        {options.map((option, i) => (
          <motion.button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full text-left p-5 sm:p-6 rounded-[var(--radius-lg)] border transition-all duration-300 cursor-pointer ${
              selected === option.id
                ? "border-[var(--hive-gold)] bg-[var(--hive-gold-dim)]"
                : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-medium)] hover:bg-[var(--bg-card-hover)]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 120, damping: 18 }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                  selected === option.id
                    ? "text-[var(--hive-gold)]"
                    : "text-[var(--text-tertiary)]"
                }`}
              >
                {option.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-[family-name:var(--font-geist-sans)] font-medium text-[15px] sm:text-base mb-1 transition-colors duration-300 ${
                    selected === option.id ? "text-white" : "text-white/90"
                  }`}
                >
                  {option.label}
                </p>
                <p className="font-[family-name:var(--font-geist-sans)] text-[13px] sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {option.description}
                </p>
              </div>
              {/* Check indicator */}
              <div
                className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                  selected === option.id
                    ? "border-[var(--hive-gold)] bg-[var(--hive-gold)]"
                    : "border-[var(--border-medium)]"
                }`}
              >
                {selected === option.id && (
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="var(--bg-primary)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
