"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import PillIcon from "./PillIcon";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:gap-12 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900">
            <Image
              src="/images/branding.PNG"
              alt="STRYK branding"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">About</p>
            <h2 className="mt-4 text-3xl font-bold leading-snug tracking-tight sm:text-4xl md:text-5xl">
              No filler.
              <br />
              <span className="text-neutral-500">Just fuel.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              STRYK Nutrition is built for those who demand more from their body and
              refuse to compromise on what goes into it. Clean formulas, transparent
              labels, and performance you can feel.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <PillIcon label="Clean Formula" />
              <PillIcon label="Lab Tested" />
              <PillIcon label="No Fillers" />
              <PillIcon label="Performance Driven" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
