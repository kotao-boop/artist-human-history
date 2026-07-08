"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface CinematicContextType {
  isCinematic: boolean;
  toggleCinematic: () => void;
}

const CinematicContext = createContext<CinematicContextType>({
  isCinematic: false,
  toggleCinematic: () => {},
});

export function useCinematic() {
  return useContext(CinematicContext);
}

export function CinematicProvider({ children }: { children: React.ReactNode }) {
  const [isCinematic, setIsCinematic] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Hans Zimmer style deep space drone using Web Audio API
  const startDrone = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (gainNodeRef.current) return; // Already playing

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 5); // 5 second fade in
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Create 3 oscillators for a thick, evolving drone chord (e.g., C minor / Deep Bass)
    const freqs = [65.41, 98.00, 130.81]; // C2, G2, C3
    
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const oscGain = ctx.createGain();

      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;

      // LFO for slow volume swelling (breathing effect)
      lfo.type = "sine";
      lfo.frequency.value = 0.05 + Math.random() * 0.05; // very slow
      
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfoGain.gain.value = 0.5;

      osc.connect(oscGain);
      oscGain.connect(masterGain);
      oscGain.gain.value = 0.5;

      osc.start();
      lfo.start();
      oscillatorsRef.current.push(osc, lfo);
    });
  };

  const stopDrone = () => {
    const ctx = audioCtxRef.current;
    const gain = gainNodeRef.current;
    if (ctx && gain) {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 3); // 3 second fade out
      setTimeout(() => {
        oscillatorsRef.current.forEach(o => {
          try { o.stop(); } catch(e){}
        });
        oscillatorsRef.current = [];
        gainNodeRef.current = null;
      }, 3000);
    }
  };

  const toggleCinematic = () => {
    setIsCinematic(prev => {
      const next = !prev;
      if (next) startDrone();
      else stopDrone();
      return next;
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  return (
    <CinematicContext.Provider value={{ isCinematic, toggleCinematic }}>
      {children}
    </CinematicContext.Provider>
  );
}
