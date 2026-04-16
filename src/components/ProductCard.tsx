"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PillIcon from "./PillIcon";

interface ProductCardProps {
  name: string;
  subtitle?: string;
  price: string;
  image: string;
  category: string;
  slug: string;
}

export default function ProductCard({
  name,
  subtitle,
  price,
  image,
  category,
  slug,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          {/* Coming Soon badge */}
          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-black backdrop-blur-sm">
              Coming Soon
            </span>
          </div>

          <div className="absolute bottom-3 left-3">
            <PillIcon label={category} />
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-2 sm:mt-4 sm:items-center">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-medium text-white">{name}</h3>
            {subtitle && (
              <p className="mt-0.5 truncate text-xs text-neutral-600">
                {subtitle}
              </p>
            )}
            <p className="mt-0.5 text-sm text-neutral-500">{price}</p>
          </div>
          <div className="flex-shrink-0">
            <PillIcon label="Notify" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
