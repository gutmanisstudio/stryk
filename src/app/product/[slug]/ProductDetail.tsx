"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PillIcon from "@/components/PillIcon";
import WaitlistForm from "@/components/WaitlistForm";
import type { Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:px-6 sm:pt-32">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Coming Soon badge */}
            <div className="absolute top-4 right-4">
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black backdrop-blur-sm">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col justify-center"
          >
            <PillIcon label={product.category} />

            <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-1 text-base text-neutral-500">
              {product.subtitle}
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <p className="text-2xl font-bold">€{product.price}</p>
              <p className="text-xs uppercase tracking-wider text-neutral-500">
                at launch
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {product.description}
            </p>

            {/* Details list */}
            <ul className="mt-4 space-y-1.5">
              {product.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-center gap-2 text-sm text-neutral-500"
                >
                  <span className="h-1 w-1 rounded-full bg-neutral-700" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Waitlist form */}
            <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Get notified on drop day
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                Be first in line
              </h3>
              <p className="mt-1 text-xs text-neutral-500">
                Early access + 15% off your first order.
              </p>
              <div className="mt-4">
                <WaitlistForm productName={product.name} compact />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
