"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import { wedding } from "@/lib/wedding-data";

function Typewriter({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView, text]);

  return (
    <p
      ref={ref}
      className="mx-auto max-w-2xl font-display text-lg italic leading-relaxed text-maroon-deep sm:text-xl"
    >
      {shown}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-5 w-[2px] translate-y-1 bg-gold"
      />
    </p>
  );
}

export default function InvitationMessage() {
  return (
    <Section id="invitation" eyebrow="A Blessing" title="With Joy in Our Hearts">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="glass gold-border mx-auto max-w-3xl rounded-3xl p-10 text-center sm:p-14"
      >
        <div className="floral-divider mx-auto mb-6 max-w-sm" />
        <Typewriter text={wedding.blessing} />
        <div className="floral-divider mx-auto mt-6 max-w-sm" />
        <p className="mt-8 font-script text-3xl text-gradient-gold sm:text-4xl">
          {wedding.groom} & {wedding.bride}
        </p>
      </motion.div>
    </Section>
  );
}
