"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { wedding } from "@/lib/wedding-data";

export default function StoryTimeline() {
  return (
    <Section
      id="story"
      eyebrow="Our Journey"
      title="Our Love Story"
      subtitle="Every great story begins with a single moment."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* center line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {wedding.story.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 40, rotate: left ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 sm:gap-10 ${
                  left ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* lamp icon */}
                <div className="relative z-10 flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-xl shadow-gold"
                  >
                    🪔
                  </motion.div>
                </div>

                <div className={`flex-1 sm:max-w-[45%] ${left ? "sm:text-right" : ""}`}>
                  <div className="glass gold-border rounded-2xl p-6">
                    <p className="font-script text-2xl text-gold">{m.year}</p>
                    <h3 className="mt-1 font-display text-xl text-maroon-deep">{m.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
                  </div>
                </div>
                <div className="hidden flex-1 sm:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
