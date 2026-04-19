"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { wedding } from "@/lib/wedding-data";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const next = () => setActive((a) => (a === null ? 0 : (a + 1) % wedding.gallery.length));
  const prev = () =>
    setActive((a) => (a === null ? 0 : (a - 1 + wedding.gallery.length) % wedding.gallery.length));

  return (
    <Section
      id="gallery"
      eyebrow="Memories"
      title="Our Moments"
      subtitle="Snapshots from the journey to forever."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {wedding.gallery.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl gold-border ${
              i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt={`Wedding moment ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <span className="font-script text-lg text-ivory">View</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-maroon-deep/90 p-6 backdrop-blur-md"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full glass gold-border px-4 py-2 text-ivory hover:scale-110 transition-transform"
              aria-label="Previous"
            >
              ‹
            </button>
            <motion.img
              key={active}
              src={wedding.gallery[active]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              alt={`Wedding moment ${active + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl gold-border"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full glass gold-border px-4 py-2 text-ivory hover:scale-110 transition-transform"
              aria-label="Next"
            >
              ›
            </button>
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 rounded-full glass gold-border px-3 py-1 text-sm text-ivory"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
