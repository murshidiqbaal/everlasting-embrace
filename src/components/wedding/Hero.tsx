"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding-data";

const PetalScene = lazy(() => import("./PetalScene"));

const letter = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ScriptName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          custom={i + delay * 10}
          variants={letter}
          initial="hidden"
          animate="show"
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* 3D petals */}
      <Suspense fallback={null}>
        <PetalScene />
      </Suspense>

      {/* Decorative gradient halo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
        }}
      />

      {/* Floating jasmine SVGs */}
      <motion.div
        className="absolute left-6 top-20 text-5xl opacity-40 sm:text-6xl"
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute right-8 top-32 text-5xl opacity-40 sm:text-6xl"
        animate={{ y: [0, -14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
      >
        🪔
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-10 text-4xl opacity-40 sm:text-5xl"
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        🌿
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-xs uppercase tracking-[0.45em] text-gold sm:text-sm"
        >
          ~ A Kerala Malabar Wedding ~
        </motion.p>

        <h1 className="mt-8 font-script text-7xl leading-none text-gradient-gold sm:text-8xl md:text-[8rem]">
          <ScriptName text={wedding.groom} />
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="my-2 font-display text-3xl text-maroon sm:text-4xl"
        >
          &
        </motion.div>
        <h1 className="font-script text-7xl leading-none text-gradient-gold sm:text-8xl md:text-[8rem]">
          <ScriptName text={wedding.bride} delay={1.8} />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="floral-divider mx-auto mt-10 max-w-xs"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl font-display text-base italic text-maroon-deep sm:text-lg"
        >
          {wedding.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 3.1 } },
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          {[
            { label: "When", value: wedding.dateLabel, sub: wedding.timeLabel },
            { label: "Where", value: wedding.venue.name, sub: wedding.venue.city },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="glass gold-border min-w-[16rem] rounded-2xl px-6 py-4"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{item.label}</p>
              <p className="mt-1 font-display text-lg text-maroon-deep">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold">Scroll</span>
          <div className="relative h-12 w-px bg-gold/40">
            <motion.div
              className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-gold"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
