"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { usePathname } from "next/navigation";

function ParticleUniverse({ pathname }: { pathname: string | null }) {
  const ref = useRef<THREE.Points>(null!);
  
  // Define behavior based on route
  const isGenesis = pathname === "/chapter/genesis";
  const isCognitive = pathname === "/chapter/cognitive";
  const isAgricultural = pathname === "/chapter/agricultural";
  const isUnification = pathname === "/chapter/unification";
  const isScientific = pathname === "/chapter/scientific";
  const isFuture = pathname === "/chapter/future";
  const isHome = pathname === "/";

  const particleCount = isFuture ? 8000 : 5000;

  // Generate initial positions
  const { positions, randoms } = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const r = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      r[i] = Math.random();
      if (isUnification) {
        // Tight sphere
        const rad = 10 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        p[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
        p[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        p[i * 3 + 2] = rad * Math.cos(phi);
      } else if (isScientific) {
        // Geometric spiral/rings
        const rad = 2 + 15 * Math.random();
        const theta = rad * 5;
        p[i * 3] = rad * Math.cos(theta) + (Math.random() - 0.5);
        p[i * 3 + 1] = rad * Math.sin(theta) + (Math.random() - 0.5);
        p[i * 3 + 2] = (Math.random() - 0.5) * 5;
      } else if (isAgricultural) {
        // Wheat field / flat plane
        p[i * 3] = (Math.random() - 0.5) * 40;
        p[i * 3 + 1] = -5 + Math.random() * 2;
        p[i * 3 + 2] = (Math.random() - 0.5) * 40;
      } else {
        // Default scattered sphere / fire
        const rad = 20 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        p[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
        p[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        p[i * 3 + 2] = rad * Math.cos(phi);
      }
    }
    return { positions: p, randoms: r };
  }, [pathname]); // Recalculate if pathname changes drastically, though React handles key changes better

  // Dynamic colors based on chapter
  let color = "#e5b05c"; // default gold
  if (isGenesis) color = "#ff4400"; // Fire orange/red
  if (isCognitive) color = "#4488ff"; // Mind blue
  if (isUnification) color = "#ffffff"; // Imperial silver/white
  if (isScientific) color = "#00ffff"; // Cyan data
  if (isFuture) color = "#ff00ff"; // Cyber pink

  useFrame((state, delta) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array as Float32Array;

    if (isGenesis) {
      // Fire-like upward movement
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += delta * (1 + randoms[i] * 5); // move up
        if (positions[i * 3 + 1] > 20) {
          positions[i * 3 + 1] = -20; // reset to bottom
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    } else if (isCognitive) {
      // Brain pulsing
      const scale = 1 + Math.sin(time * 2) * 0.05;
      ref.current.scale.set(scale, scale, scale);
      ref.current.rotation.y += delta * 0.1;
    } else if (isAgricultural) {
      // Wind blowing through wheat
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += Math.sin(time + positions[i * 3 + 2]) * delta * 2;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    } else if (isUnification) {
      // Fast globe rotation
      ref.current.rotation.y += delta * 0.5;
      ref.current.rotation.x = Math.PI / 8;
    } else if (isScientific) {
      // Precision rotation
      ref.current.rotation.z -= delta * 0.2;
    } else if (isFuture) {
      // Glitch effect
      if (Math.random() > 0.95) {
        ref.current.position.x = (Math.random() - 0.5) * 0.5;
      } else {
        ref.current.position.x = 0;
      }
      ref.current.rotation.y += delta * 0.5;
    } else {
      // Default slow orbit
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, isScientific ? 0 : Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={isFuture ? 0.04 : 0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Scene() {
  const pathname = usePathname();
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, isNaN(Number(pathname)) ? 1 : 1] }}>
        {/* Force remount of universe to regenerate geometry array on route change */}
        <ParticleUniverse key={pathname} pathname={pathname} />
      </Canvas>
    </div>
  );
}
