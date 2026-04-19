"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            {eyebrow && (
              <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-script text-5xl text-gradient-gold sm:text-6xl">
                {title}
              </h2>
            )}
            <div className="floral-divider mx-auto mt-4 max-w-xs" />
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-sm italic text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
