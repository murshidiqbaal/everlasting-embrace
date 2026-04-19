"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/lib/wedding-data";

function getDiff(target: Date) {
  const ms = target.getTime() - Date.now();
  const clamp = Math.max(0, ms);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="glass gold-border relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl sm:h-24 sm:w-24">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={text}
            initial={{ y: -30, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: 30, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-semibold text-gradient-gold sm:text-4xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold">{label}</span>
    </div>
  );
}

export default function Footer() {
  const [diff, setDiff] = useState(() => getDiff(wedding.date));

  useEffect(() => {
    const id = setInterval(() => setDiff(getDiff(wedding.date)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative mt-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--maroon-deep) 90%, transparent) 30%, var(--maroon-deep) 100%)",
        }}
      />
      <div className="px-6 py-16 text-center text-ivory">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs uppercase tracking-[0.4em] text-gold"
        >
          Counting Down To Forever
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-3 font-script text-5xl text-gradient-gold sm:text-6xl"
        >
          The Big Day
        </motion.h3>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Digit value={diff.days} label="Days" />
          <Digit value={diff.hours} label="Hours" />
          <Digit value={diff.minutes} label="Minutes" />
          <Digit value={diff.seconds} label="Seconds" />
        </div>

        <div className="floral-divider mx-auto mt-12 max-w-xs opacity-70" />

        <div className="mt-6 flex items-center justify-center gap-4 text-3xl">
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            🪔
          </motion.span>
          <p className="font-script text-3xl text-gold">{wedding.groom} & {wedding.bride}</p>
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}>
            🪔
          </motion.span>
        </div>
        <p className="mt-3 text-xs italic text-ivory/70">
          Made with love · {wedding.dateLabel}
        </p>
      </div>
    </footer>
  );
}
