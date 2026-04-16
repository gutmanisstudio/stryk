"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What makes STRYK different from other brands?",
    a: "STRYK is built on transparency and performance. Every formula uses clinically-dosed, research-backed ingredients with no proprietary blends or fillers. What you see on the label is exactly what you get.",
  },
  {
    q: "Where do you ship to?",
    a: "We currently ship nationwide. International shipping is coming soon. Follow us on socials for updates on new regions.",
  },
  {
    q: "How do I place an order?",
    a: "Browse our products, add them to your cart, and checkout via WhatsApp. We'll confirm your order and arrange payment and delivery directly.",
  },
  {
    q: "Are your products third-party tested?",
    a: "Yes. All STRYK supplements are lab-tested for purity, potency, and safety. We believe in full transparency — no shortcuts.",
  },
  {
    q: "What is the BCAA 2:1:1 ratio?",
    a: "The 2:1:1 ratio refers to the proportion of leucine to isoleucine to valine — the three branched-chain amino acids essential for muscle recovery and growth.",
  },
  {
    q: "Can I return a product?",
    a: "Unopened products can be returned within 14 days of delivery. Contact us via WhatsApp to arrange a return.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 border-b border-neutral-800 py-5 text-left transition-colors hover:text-white"
      >
        <span className="text-[15px] font-medium text-neutral-200">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg text-neutral-500"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pt-2 text-sm leading-relaxed text-neutral-500">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-neutral-800">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Questions &amp; Answers
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
