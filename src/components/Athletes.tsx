"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import PillIcon from "./PillIcon";

const athletes = [
  {
    name: "Ruslans Rudenko",
    title: "MMA / Pankration",
    achievements: [
      "MMA National Champion",
      "Bazara 0 Amateur Champion",
      "MMA National Team",
    ],
    image: "/images/ruslan1.jpg",
    instagram: "russllzx",
  },
  {
    name: "Ričards Hauberts",
    title: "MMA / Pankration",
    achievements: [
      "2x Pankration National Champion",
      "Ghetto Fight Champion",
      "MMA National Team",
    ],
    image: "/images/hauberts.jpg",
    instagram: "kingrichard_0",
  },
  {
    name: "Raivis Bruno Ferreira",
    title: "MMA / Pankration",
    achievements: [
      "2x Pankration National Champion",
      "MMA National Champion",
      "MMA National Team",
    ],
    image: "/images/raivis.jpg",
    instagram: "mmaferreira_",
  },
  {
    name: "Viktors Krivcuns",
    title: "MMA / Pankration",
    achievements: [
      "2x Pankration National Champion",
      "MMA National Champion",
      "MMA National Team",
    ],
    image: "/images/vitja.jpeg",
    instagram: "vkrivcun",
  },
];

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Real athletes */}
          {athletes.map((athlete, i) => {
            const Wrapper = athlete.instagram ? "a" : "div";
            const wrapperProps = athlete.instagram
              ? {
                  href: `https://instagram.com/${athlete.instagram}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <FadeIn key={athlete.name} delay={i * 0.1}>
                <Wrapper
                  {...wrapperProps}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
                >
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                    <PillIcon label={athlete.title} />
                    {athlete.instagram && (
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
                        {/* Instagram icon */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {athlete.name}
                    </h3>
                    {athlete.instagram && (
                      <p className="mt-1 text-xs text-neutral-400">
                        @{athlete.instagram}
                      </p>
                    )}
                    <ul className="mt-2 space-y-1">
                      {athlete.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-center gap-2 text-xs text-neutral-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-neutral-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Wrapper>
              </FadeIn>
            );
          })}

          {/* Placeholder slots for upcoming athletes */}
          {Array.from({ length: Math.max(0, 4 - athletes.length) }).map(
            (_, i) => (
              <FadeIn key={`placeholder-${i}`} delay={(athletes.length + i) * 0.1}>
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
            )
          )}
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
