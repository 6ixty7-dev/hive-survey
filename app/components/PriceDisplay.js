"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: "final-price",
    badge: "Final Price",
    badgeColor: "bg-emerald-500/15 text-emerald-400",
    price: "₹2,300",
    subtext: "All inclusive",
    tag: "What you see is what you pay",
  },
  {
    id: "delivery-extra",
    price: "₹2,100",
    subtext: "Delivery at checkout",
    subtextMuted: true,
    tag: "Delivery calculated separately",
  },
];

export default function PriceDisplay({ selected, onSelect }) {
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
        Question 02
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.15] font-medium text-center mb-10 sm:mb-12 max-w-md tracking-[-0.01em]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Which price display{" "}
        <span className="italic" style={{ color: "var(--hive-gold)" }}>
          would you prefer?
        </span>
      </motion.h2>

      {/* Product cards container */}
      <div className="w-full max-w-sm sm:max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {cards.map((card, i) => (
          <motion.button
            key={card.id}
            onClick={() => onSelect(card.id)}
            className={`relative text-left rounded-[var(--radius-lg)] border overflow-hidden transition-all duration-300 cursor-pointer ${
              selected === card.id
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
            {/* Product image */}
            <div className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
              <Image
                src="/dress.png"
                alt="Premium Dress"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />

              {/* Badge */}
              {card.badge && (
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide font-[family-name:var(--font-geist-sans)] ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Selected check */}
              {selected === card.id && (
                <motion.div
                  className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[var(--hive-gold)] flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="var(--bg-primary)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Product info */}
            <div className="p-4 sm:p-5">
              <p className="text-[var(--text-secondary)] text-[11px] sm:text-xs font-[family-name:var(--font-geist-sans)] mb-1 tracking-wide uppercase">
                Hive · Boutique Collection
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-white text-base sm:text-lg mb-3">
                Premium Dress
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-semibold text-white font-[family-name:var(--font-geist-sans)]">
                  {card.price}
                </span>
              </div>
              <p
                className="text-xs sm:text-sm mt-1.5 font-[family-name:var(--font-geist-sans)] font-medium text-[var(--hive-gold)]"
                style={{ textShadow: "0 0 10px rgba(244, 197, 66, 0.4)" }}
              >
                {card.subtext}
              </p>
              <div className="mt-3 pt-3 border-t border-[var(--border-subtle)]">
                <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)]">
                  {card.tag}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
