"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxImage({ src, alt, yOffset = 100 }: { src: string; alt: string; yOffset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);
  
  return (
    <div ref={ref} className="w-full h-[60vh] overflow-hidden relative opacity-60 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000 my-24">
      <motion.img 
        style={{ y, scale: 1.2 }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function RevealText({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface ChapterProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  heroImage: string;
}

export default function ChapterLayout({ id, title, subtitle, children, heroImage }: ChapterProps) {
  return (
    <main className="pt-32 pb-48 px-6 md:px-24 max-w-5xl mx-auto relative z-10">
      <header className="mb-32 mt-12 text-center md:text-left">
        <RevealText>
          <p className="text-sm tracking-[0.4em] text-[#e5b05c] mb-6 font-sans">CHAPTER {id}</p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-widest">{title}</h1>
          <h2 className="text-2xl md:text-3xl opacity-70 tracking-widest leading-relaxed">{subtitle}</h2>
        </RevealText>
      </header>
      
      <RevealText>
        <ParallaxImage src={heroImage} alt={title} yOffset={50} />
      </RevealText>

      <article className="prose prose-invert prose-lg md:prose-xl max-w-none font-serif leading-[2.5] tracking-wider text-justify text-white/80 marker:text-[#e5b05c]">
        {children}
      </article>

      <div className="mt-48 flex justify-center">
        <RevealText>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#e5b05c] to-transparent" />
        </RevealText>
      </div>
    </main>
  );
}

export { RevealText, ParallaxImage };
