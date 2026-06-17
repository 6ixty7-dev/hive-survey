"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ current, total }) {
  return (
    <div className="w-full px-6 pt-4 pb-2 sm:px-8 md:px-12">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] font-medium font-[family-name:var(--font-geist-sans)]">
            {current} of {total}
          </span>
          <span className="text-[11px] sm:text-xs text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)]">
            {Math.round((current / total) * 100)}%
          </span>
        </div>
        <div className="relative h-[2px] bg-[var(--border-subtle)] rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--hive-gold), #F7D76E)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${(current / total) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--hive-gold)]"
            style={{
              boxShadow: "0 0 8px rgba(244, 197, 66, 0.5)",
            }}
            initial={{ left: 0 }}
            animate={{ left: `${(current / total) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
