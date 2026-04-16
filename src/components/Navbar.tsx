"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PillIcon from "./PillIcon";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/#about" },
  { label: "Athletes", href: "/#athletes" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-[26px] left-0 z-50 w-full backdrop-blur-md bg-black/40"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 justify-self-start sm:gap-3">
            <Image
              src="/images/logo.PNG"
              alt="STRYK"
              width={44}
              height={44}
              className="rounded-md sm:w-[52px] sm:h-[52px]"
            />
            <span className="text-lg font-bold uppercase tracking-tighter text-white sm:text-xl">
              STRYK
            </span>
          </Link>

          {/* Center: Nav wrapper — keeps grid column even when nav hidden */}
          <div className="justify-self-center">
            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <PillIcon label={link.label} />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Mobile menu button */}
          <div className="justify-self-end">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm transition-colors hover:border-neutral-500 md:hidden"
            >
              <span className="h-[2px] w-4 rounded-full bg-white" />
              <span className="h-[2px] w-4 rounded-full bg-white" />
              <span className="h-[2px] w-4 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
