"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  productName?: string;
  compact?: boolean;
}

const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ||
  "https://formspree.io/f/YOUR_FORM_ID";

export default function WaitlistForm({
  productName,
  compact = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          product: productName || "General waitlist",
          source: "STRYK website",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonLabel =
    status === "loading"
      ? "..."
      : status === "success"
        ? "✓ You're on the list"
        : status === "error"
          ? "Error — try again"
          : compact
            ? "Notify Me"
            : "Notify Me When Available";

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading" || status === "success"}
          className="flex-1 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600 disabled:opacity-60"
        />
        <motion.button
          type="submit"
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            status === "success"
              ? "bg-green-600 text-white"
              : status === "error"
                ? "bg-red-600 text-white"
                : "bg-white text-black hover:bg-neutral-200"
          }`}
        >
          {buttonLabel}
        </motion.button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === "loading" || status === "success"}
        className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600 disabled:opacity-60"
      />
      <motion.button
        type="submit"
        disabled={status === "loading" || status === "success"}
        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
        whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
        className={`w-full rounded-full py-3 text-sm font-medium transition-colors ${
          status === "success"
            ? "bg-green-600 text-white"
            : status === "error"
              ? "bg-red-600 text-white"
              : "bg-white text-black hover:bg-neutral-200"
        }`}
      >
        {buttonLabel}
      </motion.button>
      <p className="text-center text-xs text-neutral-600">
        Get early access + 15% off launch discount
      </p>
    </form>
  );
}
