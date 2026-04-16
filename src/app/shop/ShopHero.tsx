"use client";

import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";

export default function ShopHero() {
  return (
    <section className="border-b border-neutral-800 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-neutral-500"
        >
          Launching Soon
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl"
        >
          Built for the fight.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base"
        >
          STRYK is dropping soon. Join the waitlist for early access and
          15% off your first order.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-md"
        >
          <WaitlistForm compact />
        </motion.div>
      </div>
    </section>
  );
}
