"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmotionalRevealScreen({ onUnlock, onSkip, isSubmitting }) {
  return (
    <motion.div
      className="flex-1 flex flex-col relative min-h-dvh overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dress.png"
          alt="Cinematic background"
          fill
          className="object-cover object-center opacity-30 blur-xl scale-110"
          priority
        />
        {/* Gradients to darken and soften */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-20" />
      </div>

      <div className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center py-12">
        <div className="max-w-lg mx-auto w-full flex flex-col items-center">
          
          {/* Main Headline Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] font-medium tracking-tight text-white mb-2">
              Some outfits stay with you.
            </h2>
            <p className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,5vw,2rem)] italic text-[var(--hive-gold)]">
              Even after the occasion ends.
            </p>
          </motion.div>

          {/* Body Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="space-y-6 mb-16 text-[clamp(1rem,3.5vw,1.125rem)] text-[var(--text-secondary)] font-[family-name:var(--font-geist-sans)] leading-relaxed max-w-md"
          >
            <p>
              The best outfits don't just look good. <br/>
              They make you feel like yourself.
            </p>
            <p>
              We're building Hive to make discovering those outfits feel effortless.
            </p>
          </motion.div>

          {/* Launch Info & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <div className="inline-block border border-[var(--hive-gold)]/30 rounded-full px-5 py-2 mb-4 bg-black/40 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-[family-name:var(--font-geist-sans)] tracking-[0.2em] uppercase text-[var(--hive-gold)] font-semibold">
                Launching July 15
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)] mb-8 max-w-xs leading-relaxed">
              ✨ Early access members may receive exclusive launch-day perks.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              <motion.button
                onClick={onUnlock}
                className="w-full py-4 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-sm sm:text-base tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer"
                style={{
                  background: "var(--hive-gold)",
                  boxShadow: "var(--shadow-gold)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ✨ Unlock Early Access
              </motion.button>

              <button
                onClick={onSkip}
                disabled={isSubmitting}
                className="w-full py-3 text-[13px] sm:text-sm text-[var(--text-tertiary)] hover:text-white transition-colors font-[family-name:var(--font-geist-sans)] cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "No Thanks"}
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
}
