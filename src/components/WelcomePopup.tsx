"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ||
  "https://formspree.io/f/YOUR_FORM_ID";

const STORAGE_KEY = "stryk_welcome_seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = localStorage.getItem(STORAGE_KEY);
    if (seen) return;

    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

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
          source: "STRYK welcome popup",
          list: "launch-waitlist",
        }),
      });

      if (res.ok) {
        setStatus("success");
        localStorage.setItem(STORAGE_KEY, "1");
        setTimeout(() => setOpen(false), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-500 backdrop-blur-sm transition-colors hover:text-white"
              >
                ✕
              </button>

              {/* Image header */}
              <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black sm:h-40">
                <Image
                  src="/images/logo.PNG"
                  alt="STRYK"
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-xl sm:h-[100px] sm:w-[100px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent sm:h-20" />
              </div>

              {/* Content */}
              <div className="p-5 pt-3 text-center sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 sm:text-xs sm:tracking-[0.3em]">
                  Launching Soon
                </p>
                <h2 className="mt-2 text-xl font-bold tracking-tight sm:mt-3 sm:text-2xl">
                  Get 15% off your first order
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Join the STRYK waitlist and be first in line on drop day.
                </p>

                {status === "success" ? (
                  <div className="mt-6 rounded-xl border border-green-900 bg-green-950/40 p-4 text-sm text-green-400">
                    ✓ You&apos;re on the list. Check your inbox soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      disabled={status === "loading"}
                      className="w-full rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-center text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600 disabled:opacity-60"
                    />
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                      whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
                      className="w-full rounded-full bg-white py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-neutral-200 disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending..." : "Claim My 15% Off"}
                    </motion.button>
                    {status === "error" && (
                      <p className="text-xs text-red-400">
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>
                )}

                <button
                  onClick={dismiss}
                  className="mt-4 text-xs text-neutral-600 transition-colors hover:text-neutral-400"
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
