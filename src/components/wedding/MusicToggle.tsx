"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding-data";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(wedding.music);
    a.loop = true;
    a.volume = 0.4;
    audioRef.current = a;
    return () => {
      a.pause();
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        /* autoplay blocked — user must retry */
      }
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full glass gold-border text-2xl shadow-gold animate-glow"
    >
      <motion.span
        animate={playing ? { rotate: [0, 8, -8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {playing ? "🔔" : "🔕"}
      </motion.span>
    </motion.button>
  );
}
