"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Soft chime + paper rustle via Web Audio API — no asset files.
function playOpenSound() {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    // Chime (two soft tones)
    [880, 1318].forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.value = 0;
      o.connect(g).connect(ctx.destination);
      const t0 = ctx.currentTime + i * 0.12;
      g.gain.linearRampToValueAtTime(0.18, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.4);
      o.start(t0);
      o.stop(t0 + 1.5);
    });
    // Paper rustle (filtered noise burst)
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2000;
    const ng = ctx.createGain();
    ng.gain.value = 0.08;
    noise.connect(filter).connect(ng).connect(ctx.destination);
    noise.start();
  } catch {
    /* ignore */
  }
}

export default function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("envelope-opened") === "1") setHidden(true);
  }, []);

  const handleOpen = () => {
    if (fired.current) return;
    fired.current = true;
    playOpenSound();
    setOpening(true);
    setTimeout(() => {
      sessionStorage.setItem("envelope-opened", "1");
      setHidden(true);
      onOpen();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.36 0.13 22) 0%, oklch(0.22 0.1 22) 70%, oklch(0.16 0.08 22) 100%)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating particles */}
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-gold"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
            />
          ))}

          <div className="relative" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-72 w-[22rem] sm:h-80 sm:w-[28rem]"
            >
              {/* Envelope body */}
              <div
                className="absolute inset-0 rounded-md shadow-royal"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.97 0.018 85), oklch(0.92 0.03 85))",
                  border: "1px solid oklch(0.74 0.13 80 / 0.6)",
                }}
              />
              {/* Inner card sliding up */}
              <motion.div
                className="absolute left-4 right-4 top-4 rounded-md p-6 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.99 0.01 85), oklch(0.96 0.02 85))",
                  border: "1px solid oklch(0.74 0.13 80 / 0.5)",
                }}
                animate={
                  opening
                    ? { y: -110, opacity: 1 }
                    : { y: 0, opacity: 0.95 }
                }
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                  You are invited
                </p>
                <p className="mt-3 font-script text-4xl text-gradient-gold">Badusha & Aishu</p>
                <p className="mt-2 text-xs text-muted-foreground">A Kerala Wedding Celebration</p>
              </motion.div>

              {/* Flap */}
              <motion.div
                className="absolute left-0 right-0 top-0 origin-top"
                style={{
                  height: "55%",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.13 80), oklch(0.62 0.13 70))",
                  transformStyle: "preserve-3d",
                  zIndex: 5,
                }}
                animate={opening ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              />

              {/* Wax seal */}
              <AnimatePresence>
                {!opening && (
                  <motion.button
                    onClick={handleOpen}
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Open invitation"
                  >
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full font-script text-3xl text-ivory shadow-royal"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, oklch(0.55 0.18 25), oklch(0.32 0.14 22))",
                        boxShadow:
                          "0 0 0 3px oklch(0.74 0.13 80), 0 10px 30px -5px oklch(0.22 0.1 22 / 0.7)",
                      }}
                    >
                      A&M
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="mt-10 text-center font-display text-sm uppercase tracking-[0.4em] text-gold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: opening ? 0 : 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Tap the seal to open
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
