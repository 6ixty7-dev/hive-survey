"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm({ onJoin, onBack, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onJoin(formData);
  };

  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-10 min-h-dvh relative"
      initial={{ opacity: 0, x: "6%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-6%" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="flex items-center gap-1.5 text-[var(--text-tertiary)] hover:text-white transition-colors text-sm font-[family-name:var(--font-geist-sans)] mb-8 cursor-pointer disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </button>

        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,6vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-4 text-white"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Reserve Your Spot
        </motion.h1>

        <motion.p
          className="text-[var(--text-secondary)] text-[14px] sm:text-[15px] leading-relaxed mb-10 font-[family-name:var(--font-geist-sans)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hive is a curated fashion marketplace designed to help you discover pieces you'll love with less searching and more confidence. Join the waitlist to receive your invitation when early access begins.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2 font-[family-name:var(--font-geist-sans)]">
              Name <span className="text-[var(--hive-gold)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full bg-[var(--bg-card)] border ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-[var(--border-subtle)] focus:border-[var(--hive-gold)]"} rounded-xl px-4 py-3.5 text-white font-[family-name:var(--font-geist-sans)] text-sm outline-none transition-colors disabled:opacity-50`}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400 font-[family-name:var(--font-geist-sans)]">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2 font-[family-name:var(--font-geist-sans)]">
              Phone Number <span className="text-[var(--hive-gold)]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full bg-[var(--bg-card)] border ${errors.phone ? "border-red-500/50 focus:border-red-500" : "border-[var(--border-subtle)] focus:border-[var(--hive-gold)]"} rounded-xl px-4 py-3.5 text-white font-[family-name:var(--font-geist-sans)] text-sm outline-none transition-colors disabled:opacity-50`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-400 font-[family-name:var(--font-geist-sans)]">{errors.phone}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2 font-[family-name:var(--font-geist-sans)]">
              Email Address <span className="text-[var(--text-tertiary)]">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] focus:border-[var(--hive-gold)] rounded-xl px-4 py-3.5 text-white font-[family-name:var(--font-geist-sans)] text-sm outline-none transition-colors disabled:opacity-50"
              placeholder="you@example.com"
            />
            <p className="mt-2 text-xs text-[var(--text-tertiary)] font-[family-name:var(--font-geist-sans)] leading-relaxed">
              Email is optional, but it helps us send your early access invitation and important launch updates.
            </p>
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full font-[family-name:var(--font-geist-sans)] font-medium text-[15px] sm:text-base tracking-wide text-[var(--bg-primary)] overflow-hidden cursor-pointer flex justify-center items-center disabled:opacity-70"
              style={{
                background: "var(--hive-gold)",
                boxShadow: "var(--shadow-gold)",
              }}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-5 h-5 border-2 border-[var(--bg-primary)]/30 border-t-[var(--bg-primary)] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                "Join Hive Waitlist"
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
