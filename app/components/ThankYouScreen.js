"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThankYouScreen({ onUnlock, onSkip, isSubmitting }) {
  const [showInvite, setShowInvite] = useState(false);
  const [doneSkipping, setDoneSkipping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInvite(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setDoneSkipping(true);
    onSkip();
  };

  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 text-center min-h-dvh relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Animated gold particles */}
        <div className="relative mb-8 sm:mb-10 h-16 w-16 flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${-5 + i * 10}px`,
                left: `${-10 + i * 25}px`,
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
            width="48"
            height="56"
            viewBox="0 0 56 64"
            fill="none"
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
          className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,6vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Thank you for helping shape{" "}
          <span className="italic" style={{ color: "var(--hive-gold)" }}>
            Hive.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[var(--text-secondary)] text-[clamp(0.875rem,3vw,1rem)] leading-relaxed max-w-sm mb-8 font-[family-name:var(--font-geist-sans)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Your feedback helps us build a better fashion experience.
        </motion.p>

        {/* Waitlist Invite Box */}
        <AnimatePresence>
          {showInvite && !doneSkipping && (
            <motion.div
              className="w-full mt-4 p-6 sm:p-8 rounded-[var(--radius-xl)] border border-[var(--hive-gold)]/30 relative overflow-hidden"
              style={{ background: "var(--bg-elevated)" }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
            >
              {/* Subtle gold glow inside box */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(244, 197, 66, 0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[var(--hive-gold)] font-bold font-[family-name:var(--font-geist-sans)] mb-3">
                  Exclusive Invitation
                </span>
                
                <p className="text-white text-[15px] sm:text-base font-medium font-[family-name:var(--font-geist-sans)] mb-2 leading-snug">
                  You've helped shape Hive.
                  <br />
                  Now be among the first to experience it.
                </p>
                
                <p className="text-[var(--text-secondary)] text-[13px] sm:text-sm font-[family-name:var(--font-geist-sans)] mb-6">
                  Get early access when we launch on July 15.
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <motion.button
                    onClick={onUnlock}
                    className="w-full py-3.5 sm:py-4 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-sm sm:text-base tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer flex justify-center items-center gap-2"
                    style={{
                      background: "var(--hive-gold)",
                      boxShadow: "var(--shadow-gold)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>✨ Unlock Early Access</span>
                  </motion.button>

                  <button
                    onClick={handleSkip}
                    disabled={isSubmitting}
                    className="w-full py-3 text-[13px] sm:text-sm text-[var(--text-tertiary)] hover:text-white transition-colors font-[family-name:var(--font-geist-sans)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Maybe Later"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {doneSkipping && !isSubmitting && (
            <motion.p
              className="mt-8 text-[var(--text-tertiary)] text-sm font-[family-name:var(--font-geist-sans)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Your responses have been recorded. You can safely close this window.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
