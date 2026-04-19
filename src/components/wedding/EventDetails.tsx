"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { wedding } from "@/lib/wedding-data";

export default function EventDetails() {
  return (
    <Section
      id="events"
      eyebrow="Save the Dates"
      title="Wedding Events"
      subtitle="Four days of celebration, blessings, and joy."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wedding.events.map((ev, i) => (
          <motion.div
            key={ev.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass gold-border btn-shimmer group relative cursor-default rounded-3xl p-6 text-center transition-shadow hover:shadow-gold"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-gold text-3xl shadow-gold">
              {ev.icon}
            </div>
            <h3 className="mt-4 font-display text-xl text-maroon-deep">{ev.name}</h3>
            <div className="floral-divider mx-auto my-3 max-w-[120px]" />
            <p className="font-display text-sm text-maroon">
              {ev.date.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{ev.time}</p>
            <p className="mt-2 text-xs italic text-gold">{ev.place}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
