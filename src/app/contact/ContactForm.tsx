"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ||
  "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          source: "STRYK contact form",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleWhatsApp = () => {
    const lines = [
      `*Name:* ${name}`,
      email ? `*Email:* ${email}` : "",
      subject ? `*Subject:* ${subject}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/27717545?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
  };

  return (
    <section className="mx-auto max-w-xl px-6 py-16">
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Send us a message
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Drop your message below — we&apos;ll reply by email. Prefer WhatsApp?
          Use the button at the bottom.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-400"
            >
              Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-400"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-400"
            >
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full appearance-none rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-neutral-600"
            >
              <option value="">Select a topic</option>
              <option value="Order Inquiry">Order Inquiry</option>
              <option value="Product Question">Product Question</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Athlete Application">Athlete Application</option>
              <option value="Returns & Refunds">Returns &amp; Refunds</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-400"
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
            />
          </div>

          {/* Status */}
          {status === "success" && (
            <div className="rounded-xl border border-green-900 bg-green-950/50 px-4 py-3 text-sm text-green-400">
              ✓ Message sent. We&apos;ll get back to you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-xl border border-red-900 bg-red-950/50 px-4 py-3 text-sm text-red-400">
              Something went wrong. Try again or use WhatsApp below.
            </div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
            className="w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* WhatsApp alternative */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-green-800 bg-green-950 py-3 text-sm font-medium text-green-400 transition-colors hover:bg-green-900"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Or message on WhatsApp
          </button>
        </form>
      </FadeIn>
    </section>
  );
}
