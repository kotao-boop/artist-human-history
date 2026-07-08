"use client";

import React, { createContext, useContext, useState } from "react";

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

  const toggleCinematic = () => {
    setIsCinematic(prev => !prev);
  };

  return (
    <CinematicContext.Provider value={{ isCinematic, toggleCinematic }}>
      {children}
    </CinematicContext.Provider>
  );
}
