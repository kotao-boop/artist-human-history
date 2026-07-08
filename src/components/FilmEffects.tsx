"use client";

import { useCinematic } from "./CinematicProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function FilmEffects() {
  const { isCinematic } = useCinematic();

  return (
    <>
      {/* Persistent Film Grain and Vignette */}
      <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-overlay opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
      <div className="pointer-events-none fixed inset-0 z-[99] shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />

      {/* Cinematic Letterboxing (2.35:1 scope simulation) */}
      <AnimatePresence>
        {isCinematic && (
          <>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "12vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none fixed top-0 left-0 w-full bg-black z-[110]"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "12vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none fixed bottom-0 left-0 w-full bg-black z-[110]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
