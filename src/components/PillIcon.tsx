"use client";

import { motion } from "framer-motion";

interface PillIconProps {
  label: string;
  active?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
}

export default function PillIcon({
  label,
  active = false,
  onClick,
  className = "",
}: PillIconProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-white bg-white text-black"
          : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-500 hover:text-white"
      } ${className}`}
    >
      {label}
    </motion.button>
  );
}
