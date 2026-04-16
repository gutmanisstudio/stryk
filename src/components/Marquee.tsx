"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface MarqueeProps {
  text?: string;
}

export default function Marquee({ text = "STRYK NUTRITION" }: MarqueeProps) {
  const items = Array(10).fill(text);

  return (
    <FadeIn>
      <div className="overflow-hidden border-y border-neutral-800 bg-neutral-950 py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-8"
        >
          {items.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-neutral-600 sm:text-sm sm:tracking-[0.3em]"
            >
              {t} &mdash;
            </span>
          ))}
        </motion.div>
      </div>
    </FadeIn>
  );
}
