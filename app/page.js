"use client";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "./components/ProgressBar";
import WelcomeScreen from "./components/WelcomeScreen";
import OrderPreference from "./components/OrderPreference";
import PriceDisplay from "./components/PriceDisplay";
import CheckoutSummary from "./components/CheckoutSummary";
import AccountTimeline from "./components/AccountTimeline";
import DeliveryReward from "./components/DeliveryReward";
import ThankYouScreen from "./components/ThankYouScreen";
import WaitlistForm from "./components/WaitlistForm";
import WaitlistSuccess from "./components/WaitlistSuccess";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqzzekw";
const TOTAL_QUESTIONS = 5;

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0); // 0 = welcome
  const [answers, setAnswers] = useState({
    orderPreference: null,
    priceDisplay: null,
    checkoutPreference: null,
    accountTiming: null,
    deliveryPreference: null,
  });
  const [waitlistData, setWaitlistData] = useState({
    name: "",
    phone: "",
    email: "",
    waitlistStatus: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const updateAnswer = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentScreen((prev) => prev + 1);
  }, []);

  const goBack = useCallback(() => {
    if (currentScreen > 1) {
      setDirection(-1);
      setCurrentScreen((prev) => prev - 1);
    }
  }, [currentScreen]);

  // Submit all data to Formspree
  const submitToFormspree = useCallback(async (waitlistStatus, waitlistInfo = {}) => {
    setIsSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Survey Answers
          orderPreference: answers.orderPreference,
          priceDisplay: answers.priceDisplay,
          checkoutPreference: answers.checkoutPreference,
          accountTiming: answers.accountTiming,
          deliveryPreference: answers.deliveryPreference,
          // Waitlist Details
          waitlistStatus: waitlistStatus,
          name: waitlistInfo.name || "",
          phone: waitlistInfo.phone || "",
          email: waitlistInfo.email || "",
          // Metadata
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      console.error("Submission error:", e);
    }
    setIsSubmitting(false);
  }, [answers]);

  const handleContinue = useCallback(() => {
    if (currentScreen === 5) {
      // Just progress to Thank You screen. Don't submit yet.
      goNext();
    } else {
      goNext();
    }
  }, [currentScreen, goNext]);

  const handleSkipWaitlist = useCallback(async () => {
    await submitToFormspree(false);
    // ThankYouScreen handles its own "done" state internally when skip is called
  }, [submitToFormspree]);

  const handleJoinWaitlist = useCallback(async (formData) => {
    setWaitlistData({ ...formData, waitlistStatus: true });
    await submitToFormspree(true, formData);
    // After successful submission, go to WaitlistSuccess (screen 8)
    setDirection(1);
    setCurrentScreen(8);
  }, [submitToFormspree]);

  const resetSurvey = useCallback(() => {
    setCurrentScreen(0);
    setAnswers({
      orderPreference: null,
      priceDisplay: null,
      checkoutPreference: null,
      accountTiming: null,
      deliveryPreference: null,
    });
    setWaitlistData({
      name: "",
      phone: "",
      email: "",
      waitlistStatus: false,
    });
  }, []);

  // Check if current question has an answer
  const answerKeys = [
    null,
    "orderPreference",
    "priceDisplay",
    "checkoutPreference",
    "accountTiming",
    "deliveryPreference",
  ];
  const currentAnswerKey = answerKeys[currentScreen];
  const hasAnswer = currentAnswerKey ? answers[currentAnswerKey] !== null : false;

  // Page transition variants
  const pageVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "6%" : "-6%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? "6%" : "-6%",
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-dvh flex flex-col relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(244, 197, 66, 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Progress bar — shown only during questions */}
      <AnimatePresence>
        {currentScreen >= 1 && currentScreen <= TOTAL_QUESTIONS && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative z-20"
          >
            <ProgressBar
              current={currentScreen}
              total={TOTAL_QUESTIONS}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen content */}
      <AnimatePresence mode="wait" custom={direction}>
        {currentScreen === 0 && (
          <motion.div
            key="welcome"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <WelcomeScreen onStart={goNext} />
          </motion.div>
        )}

        {currentScreen === 1 && (
          <motion.div
            key="q1"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <OrderPreference
              selected={answers.orderPreference}
              onSelect={(val) => updateAnswer("orderPreference", val)}
            />
          </motion.div>
        )}

        {currentScreen === 2 && (
          <motion.div
            key="q2"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <PriceDisplay
              selected={answers.priceDisplay}
              onSelect={(val) => updateAnswer("priceDisplay", val)}
            />
          </motion.div>
        )}

        {currentScreen === 3 && (
          <motion.div
            key="q3"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <CheckoutSummary
              selected={answers.checkoutPreference}
              onSelect={(val) => updateAnswer("checkoutPreference", val)}
            />
          </motion.div>
        )}

        {currentScreen === 4 && (
          <motion.div
            key="q4"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <AccountTimeline
              selected={answers.accountTiming}
              onSelect={(val) => updateAnswer("accountTiming", val)}
            />
          </motion.div>
        )}

        {currentScreen === 5 && (
          <motion.div
            key="q5"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <DeliveryReward
              selected={answers.deliveryPreference}
              onSelect={(val) => updateAnswer("deliveryPreference", val)}
            />
          </motion.div>
        )}

        {currentScreen === 6 && (
          <motion.div
            key="thankyou"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <ThankYouScreen
              onUnlock={goNext}
              onSkip={handleSkipWaitlist}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        )}

        {currentScreen === 7 && (
          <motion.div
            key="waitlist-form"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <WaitlistForm
              onJoin={handleJoinWaitlist}
              onBack={() => {
                setDirection(-1);
                setCurrentScreen(6);
              }}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        )}

        {currentScreen === 8 && (
          <motion.div
            key="waitlist-success"
            className="flex-1 flex flex-col"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <WaitlistSuccess onDone={resetSurvey} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation footer — shown during questions */}
      <AnimatePresence>
        {currentScreen >= 1 && currentScreen <= TOTAL_QUESTIONS && (
          <motion.div
            className="relative z-20 px-5 sm:px-8 md:px-12 py-5 sm:py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-md mx-auto flex items-center justify-between gap-4">
              {/* Back button */}
              <motion.button
                onClick={goBack}
                className={`flex items-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm font-[family-name:var(--font-geist-sans)] transition-all duration-300 cursor-pointer ${
                  currentScreen > 1
                    ? "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                    : "text-transparent pointer-events-none"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M10 3L5 8l5 5" />
                </svg>
                Back
              </motion.button>

              {/* Continue / Submit button */}
              <motion.button
                onClick={handleContinue}
                disabled={!hasAnswer || isSubmitting}
                className={`flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] transition-all duration-300 cursor-pointer ${
                  hasAnswer
                    ? "text-[var(--bg-primary)] hover:brightness-110"
                    : "text-[var(--text-tertiary)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] cursor-not-allowed"
                }`}
                style={
                  hasAnswer
                    ? {
                        background: "var(--hive-gold)",
                        boxShadow: "var(--shadow-gold)",
                      }
                    : {}
                }
                whileHover={hasAnswer ? { scale: 1.03 } : {}}
                whileTap={hasAnswer ? { scale: 0.97 } : {}}
                animate={
                  hasAnswer
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.6, scale: 1 }
                }
              >
                {currentScreen === TOTAL_QUESTIONS ? "Finish" : "Continue"}
                {!isSubmitting && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M6 3l5 5-5 5" />
                  </svg>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
