"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { wedding } from "@/lib/wedding-data";

export default function VenueMap() {
  return (
    <Section id="venue" eyebrow="The Venue" title="Find Us Here">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="glass gold-border mx-auto max-w-4xl overflow-hidden rounded-3xl"
      >
        <div className="aspect-[16/10] w-full">
          <iframe
            title="Wedding venue map"
            src={wedding.venue.mapsEmbed}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
          <div>
            <h3 className="font-display text-xl text-maroon-deep">{wedding.venue.name}</h3>
            <p className="text-sm text-muted-foreground">{wedding.venue.city}</p>
          </div>
          <a
            href={wedding.venue.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer rounded-full gradient-royal px-6 py-3 font-display text-sm uppercase tracking-[0.3em] text-ivory shadow-royal transition-transform hover:scale-105"
          >
            Get Directions
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
