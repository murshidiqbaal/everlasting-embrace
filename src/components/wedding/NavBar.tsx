"use client";

import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/rsvp", label: "RSVP" },
] as const;

export default function NavBar() {
  const loc = useLocation();
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="fixed left-1/2 top-4 z-40 -translate-x-1/2"
    >
      <div className="glass gold-border flex items-center gap-1 rounded-full px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
        {links.map((l) => {
          const active = loc.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`relative rounded-full px-3 py-1.5 font-display text-xs uppercase tracking-[0.2em] transition-colors sm:text-sm ${
                active ? "text-ivory" : "text-maroon-deep hover:text-maroon"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full gradient-royal shadow-royal"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {l.label}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
