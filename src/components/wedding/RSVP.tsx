"use client";

import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", attending: "yes", guests: "1", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Confetti burst — gold + maroon + blush
    const colors = ["#C9A24B", "#6B1E1E", "#E8C7C0", "#FBF5E9"];
    const fire = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 80,
        spread: 70,
        startVelocity: 45,
        origin,
        colors,
      });
    fire({ x: 0.2, y: 0.6 });
    fire({ x: 0.8, y: 0.6 });
    setTimeout(() => fire({ x: 0.5, y: 0.4 }), 200);
  };

  return (
    <Section
      id="rsvp"
      eyebrow="Will You Join Us?"
      title="RSVP"
      subtitle="Your presence will make our day complete."
    >
      <div className="mx-auto max-w-xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="glass gold-border space-y-5 rounded-3xl p-8 sm:p-10"
            >
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gold">
                  Your Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-gold/40 bg-ivory/60 px-4 py-3 font-display text-maroon-deep outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gold">
                  Will you attend?
                </label>
                <div className="flex gap-3">
                  {["yes", "no"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attending: opt })}
                      className={`flex-1 rounded-xl border px-4 py-3 font-display capitalize transition-all ${form.attending === opt
                        ? "gradient-royal border-transparent text-ivory shadow-royal"
                        : "border-gold/40 bg-ivory/60 text-maroon-deep hover:border-gold"
                        }`}
                    >
                      {opt === "yes" ? "Joyfully accept" : "Regretfully decline"}
                    </button>
                  ))}
                </div>
              </div>

              {form.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gold">
                    Number of guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-xl border border-gold/40 bg-ivory/60 px-4 py-3 font-display text-maroon-deep outline-none focus:border-gold"
                  />
                </motion.div>
              )}

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gold">
                  A note for the couple (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-gold/40 bg-ivory/60 px-4 py-3 font-body text-sm text-maroon-deep outline-none focus:border-gold"
                  placeholder="Wishing you a lifetime of love…"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn-shimmer w-full rounded-full gradient-royal py-4 font-display text-lg uppercase tracking-[0.3em] text-ivory shadow-royal"
              >
                Send RSVP
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="glass gold-border rounded-3xl p-12 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-gold text-4xl shadow-gold"
              >
                🪔
              </motion.div>
              <h3 className="font-script text-4xl text-gradient-gold">Thank You</h3>
              <p className="mt-4 font-display text-lg italic text-maroon-deep">
                {form.name && `Dear ${form.name}, `}
                {form.attending === "yes"
                  ? "we cannot wait to celebrate with you!"
                  : "we will miss you, but thank you for letting us know."}
              </p>
              <div className="floral-divider mx-auto mt-6 max-w-xs" />
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", attending: "yes", guests: "1", message: "" });
                }}
                className="mt-6 text-xs uppercase tracking-[0.3em] text-gold underline-offset-4 hover:underline"
              >
                Submit another response
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
