"use client";

import FadeIn from "./FadeIn";
import PillIcon from "./PillIcon";

export default function Athletes() {
  return (
    <section id="athletes" className="border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Team STRYK
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Our Athletes
          </h2>
          <p className="mt-4 max-w-lg text-neutral-500">
            We partner with athletes who share our values — discipline,
            transparency, and relentless pursuit of performance.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40">
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-700">
                    <span className="text-2xl text-neutral-600">?</span>
                  </div>
                  <h3 className="mt-4 text-sm font-medium text-neutral-300">
                    Coming Soon
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600">
                    Athlete announcement
                  </p>
                  <div className="mt-4">
                    <PillIcon label="Stay Tuned" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center sm:p-8">
            <h3 className="text-lg font-bold">Want to represent STRYK?</h3>
            <p className="mt-2 text-sm text-neutral-500">
              We&apos;re looking for athletes and creators who align with our
              mission. Reach out via WhatsApp to learn more.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://wa.me/27717545?text=Hi%2C%20I'm%20interested%20in%20becoming%20a%20STRYK%20athlete"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillIcon label="Apply Now" active />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
