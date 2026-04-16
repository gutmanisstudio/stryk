"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 z-[60] w-full border-b border-neutral-800 bg-neutral-950 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">
      <Link
        href="/shop"
        className="transition-colors hover:text-white"
      >
        <span className="sm:hidden">Launching Soon · 15% Off Waitlist</span>
        <span className="hidden sm:inline">
          Launching Soon · Join the Waitlist for 15% Off
        </span>
      </Link>
    </div>
  );
}
