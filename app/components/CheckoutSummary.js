"use client";
import { motion } from "framer-motion";

const summaries = [
  {
    id: "separate-delivery",
    label: "Delivery fee shown",
    rows: [
      { name: "Premium Dress", value: "₹2,200" },
      { name: "Delivery", value: "₹69", subtle: false },
    ],
    total: "₹2,269",
    highlight: null,
  },
  {
    id: "free-delivery",
    label: "Free delivery included",
    rows: [
      { name: "Premium Dress", value: "₹2,269" },
      {
        name: "Delivery",
        value: "FREE",
        accent: true,
      },
    ],
    total: "₹2,269",
    highlight: "Free Delivery",
  },
];

export default function CheckoutSummary({ selected, onSelect }) {
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
        Question 03
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.15] font-medium text-center mb-10 sm:mb-12 max-w-md tracking-[-0.01em]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Which checkout{" "}
        <span className="italic" style={{ color: "var(--hive-gold)" }}>
          feels better?
        </span>
      </motion.h2>

      {/* Checkout cards */}
      <div className="w-full max-w-sm sm:max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {summaries.map((summary, i) => (
          <motion.button
            key={summary.id}
            onClick={() => onSelect(summary.id)}
            className={`relative w-full text-left rounded-[var(--radius-lg)] border overflow-hidden transition-all duration-300 cursor-pointer ${
              selected === summary.id
                ? "border-[var(--hive-gold)] ring-1 ring-[var(--hive-gold)]/30"
                : "border-[var(--border-subtle)] hover:border-[var(--border-medium)]"
            }`}
            style={{ background: "var(--bg-card)" }}
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
            {/* Header */}
            <div className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)]">
                  Order Summary
                </span>
                {/* Selected check */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    selected === summary.id
                      ? "border-[var(--hive-gold)] bg-[var(--hive-gold)]"
                      : "border-[var(--border-medium)]"
                  }`}
                >
                  {selected === summary.id && (
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
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
                </div>
              </div>

              {summary.highlight && (
                <div className="mt-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide bg-emerald-500/15 text-emerald-400 font-[family-name:var(--font-geist-sans)]">
                    {summary.highlight}
                  </span>
                </div>
              )}
            </div>

            {/* Line items */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 space-y-3">
              {summary.rows.map((row, j) => (
                <div
                  key={j}
                  className="flex items-center justify-between"
                >
                  <span className="text-[13px] sm:text-sm text-[var(--text-secondary)] font-[family-name:var(--font-geist-sans)]">
                    {row.name}
                  </span>
                  <span
                    className={`text-[13px] sm:text-sm font-medium font-[family-name:var(--font-geist-sans)] ${
                      row.accent
                        ? "text-emerald-400"
                        : "text-white"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 border-t border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base font-medium text-white font-[family-name:var(--font-geist-sans)]">
                  Total
                </span>
                <span className="text-lg sm:text-xl font-semibold text-white font-[family-name:var(--font-geist-sans)]">
                  {summary.total}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
