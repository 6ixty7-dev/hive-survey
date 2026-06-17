"use client";
import { motion } from "framer-motion";

const steps = [
  {
    id: "before-browsing",
    label: "Before browsing",
    description: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3" />
        <path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      </svg>
    ),
  },
  {
    id: "before-checkout",
    label: "Before buying",
    description: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l1.5 9h9L17 6H6" />
        <circle cx="8" cy="16" r="1.5" />
        <circle cx="14" cy="16" r="1.5" />
      </svg>
    ),
  },
  {
    id: "after-first-order",
    label: "After my first order",
    description: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="14" height="12" rx="2" />
        <path d="M3 9h14" />
      </svg>
    ),
  },
  {
    id: "only-if-return",
    label: "Only if I come back again",
    description: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10a6 6 0 1 1 1.5 4" />
        <polyline points="4 14 4 10 8 10" />
      </svg>
    ),
  },
];

export default function AccountTimeline({ selected, onSelect }) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <motion.p
        className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4 font-[family-name:var(--font-geist-sans)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Question 04
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.15] font-medium text-center mb-2 max-w-md tracking-[-0.01em]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        When should an app{" "}
        <span className="italic" style={{ color: "var(--hive-gold)" }}>
          ask you to sign up?
        </span>
      </motion.h2>
      <motion.p
        className="text-[var(--text-secondary)] text-sm sm:text-base font-[family-name:var(--font-geist-sans)] text-center mb-10 sm:mb-12 max-w-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        We want sign-up to feel less annoying.
      </motion.p>

      {/* Timeline */}
      <div className="w-full max-w-sm sm:max-w-md relative">
        {/* Vertical line */}
        <div className="absolute left-[35px] sm:left-[43px] top-[35px] bottom-[35px] sm:top-[43px] sm:bottom-[43px] w-[1px] bg-[var(--border-medium)]" />

        <div className="space-y-2 sm:space-y-3">
          {steps.map((step, i) => (
            <motion.button
              key={step.id}
              onClick={() => onSelect(step.id)}
              className={`relative w-full text-left flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-[var(--radius-lg)] border transition-all duration-300 cursor-pointer ${
                selected === step.id
                  ? "border-[var(--hive-gold)] bg-[var(--hive-gold-dim)]"
                  : "border-transparent hover:bg-[var(--bg-card)]"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.25 + i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Timeline dot */}
              <div
                className={`relative z-10 flex-shrink-0 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full flex items-center justify-center transition-all duration-300 ${
                  selected === step.id
                    ? "bg-[var(--hive-gold)] text-[var(--bg-primary)]"
                    : "bg-[var(--bg-elevated)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]"
                }`}
                style={
                  selected === step.id
                    ? { boxShadow: "0 0 16px rgba(244, 197, 66, 0.3)" }
                    : {}
                }
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pt-1 sm:pt-2">
                <p
                  className={`font-[family-name:var(--font-geist-sans)] font-medium text-[14px] sm:text-[15px] mb-0.5 transition-colors duration-300 ${
                    selected === step.id ? "text-white" : "text-white/85"
                  }`}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="font-[family-name:var(--font-geist-sans)] text-[12px] sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
