"use client";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    id: "flat-fee",
    content: (
      <div className="text-center py-2">
        <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-[family-name:var(--font-geist-sans)] mb-2 tracking-wide">
          Delivery Fee
        </p>
        <p className="text-3xl sm:text-4xl font-semibold text-white font-[family-name:var(--font-geist-sans)]">
          ₹69
        </p>
      </div>
    ),
  },
  {
    id: "hive-subsidy",
    isReward: true,
    content: (
      <div className="text-center py-2">
        {/* Celebration emoji */}
        <motion.div
          className="text-3xl sm:text-4xl mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.5 }}
        >
          🎉
        </motion.div>

        {/* Cost breakdown */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between px-2 sm:px-4">
            <span className="text-[var(--text-secondary)] text-xs sm:text-sm font-[family-name:var(--font-geist-sans)]">
              Actual Delivery Cost
            </span>
            <span className="text-white text-sm sm:text-base font-medium font-[family-name:var(--font-geist-sans)]">
              ₹142
            </span>
          </div>
          <div className="flex items-center justify-between px-2 sm:px-4">
            <span className="text-xs sm:text-sm font-medium font-[family-name:var(--font-geist-sans)]" style={{ color: "var(--hive-gold)" }}>
              Hive Paid
            </span>
            <span className="text-sm sm:text-base font-semibold font-[family-name:var(--font-geist-sans)]" style={{ color: "var(--hive-gold)" }}>
              −₹73
            </span>
          </div>
        </div>

        {/* Savings badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "var(--hive-gold-dim)",
            border: "1px solid rgba(244, 197, 66, 0.25)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <polygon
              points="7,0 14,3.5 14,10.5 7,14 0,10.5 0,3.5"
              fill="var(--hive-gold)"
            />
          </svg>
          <span
            className="text-xs sm:text-sm font-semibold font-[family-name:var(--font-geist-sans)]"
            style={{ color: "var(--hive-gold)" }}
          >
            You Saved ₹73
          </span>
        </motion.div>

      </div>
    ),
  },
];

export default function DeliveryReward({ selected, onSelect }) {
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
        Question 05
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.15] font-medium text-center mb-2 max-w-md tracking-[-0.01em]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Which message would{" "}
        <span className="italic" style={{ color: "var(--hive-gold)" }}>
          make you happier?
        </span>
      </motion.h2>
      <motion.p
        className="text-[var(--text-secondary)] text-sm sm:text-base font-[family-name:var(--font-geist-sans)] text-center mb-10 sm:mb-12 max-w-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        We want delivery costs to feel fair.
      </motion.p>

      {/* Option cards */}
      <div className="w-full max-w-sm sm:max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {options.map((option, i) => (
          <motion.button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`relative w-full text-left rounded-[var(--radius-xl)] border overflow-hidden transition-all duration-300 p-5 sm:p-6 cursor-pointer ${
              selected === option.id
                ? option.isReward
                  ? "border-[var(--hive-gold)] bg-[var(--hive-gold-dim)]"
                  : "border-[var(--hive-gold)] ring-1 ring-[var(--hive-gold)]/30 bg-[var(--bg-card)]"
                : "border-[var(--border-subtle)] hover:border-[var(--border-medium)] bg-[var(--bg-card)]"
            }`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Selected check */}
            <div className="absolute top-4 right-4">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  selected === option.id
                    ? "border-[var(--hive-gold)] bg-[var(--hive-gold)]"
                    : "border-[var(--border-medium)]"
                }`}
              >
                <AnimatePresence>
                  {selected === option.id && (
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
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
                </AnimatePresence>
              </div>
            </div>

            {option.content}
          </motion.button>
        ))}
      </div>


    </motion.div>
  );
}
