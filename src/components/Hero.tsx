"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PillIcon from "./PillIcon";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-end overflow-hidden">
      {/* Full-length background video */}
      <video
        src="/videos/hero.mov"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

      {/* Right-aligned content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-end px-5 pb-16 text-right sm:px-6 sm:pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs uppercase tracking-[0.25em] text-neutral-400 sm:text-sm sm:tracking-[0.3em]"
        >
          Stryk Nutrition
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-3 text-5xl font-bold uppercase leading-none tracking-tighter sm:mt-4 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          STRYK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-3 max-w-md text-base text-neutral-400 sm:mt-4 sm:text-lg md:text-xl"
        >
          Fuel the fight within.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 flex gap-2 sm:mt-8 sm:gap-3"
        >
          <Link href="/shop">
            <PillIcon label="Shop Now" active />
          </Link>
          <Link href="/#about">
            <PillIcon label="Learn More" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-4 right-4 z-10 sm:bottom-8 sm:right-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-neutral-700 pt-2"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
