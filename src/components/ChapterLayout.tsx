"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function ParallaxImage({ src, alt, yOffset = 100 }: { src: string; alt: string; yOffset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);
  
  // Handle GitHub pages basePath for local images
  const imageSrc = src.startsWith("http") ? src : `/artist-human-history${src}`;
  
  return (
    <div ref={ref} className="w-full h-[60vh] overflow-hidden relative opacity-60 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000 my-24">
      <motion.img 
        style={{ y, scale: 1.2 }}
        src={imageSrc} 
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

interface ChapterLinkInfo {
  slug: string;
  title: string;
}

interface ChapterProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  heroImage: string;
  prevChapter?: ChapterLinkInfo;
  nextChapter?: ChapterLinkInfo;
}

export default function ChapterLayout({ id, title, subtitle, children, heroImage, prevChapter, nextChapter }: ChapterProps) {
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

      <div className="mt-48 mb-24 flex justify-center">
        <RevealText>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#e5b05c] to-transparent" />
        </RevealText>
      </div>

      <RevealText>
        <nav className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-16 mt-16 font-sans">
          {prevChapter ? (
            <Link href={`/chapter/${prevChapter.slug}`} className="group flex flex-col items-center md:items-start transition-opacity hover:opacity-100 opacity-60">
              <span className="text-xs tracking-widest text-[#e5b05c] mb-2 uppercase">PREVIOUS CHAPTER</span>
              <span className="text-xl md:text-2xl tracking-widest font-light group-hover:text-white transition-colors">{prevChapter.title}</span>
            </Link>
          ) : <div />}
          
          <Link href="/" className="group flex flex-col items-center transition-opacity hover:opacity-100 opacity-60 px-8 py-3 border border-white/10 hover:border-white/30 rounded-full">
            <span className="text-xs tracking-widest text-white uppercase">INDEX</span>
          </Link>

          {nextChapter ? (
            <Link href={`/chapter/${nextChapter.slug}`} className="group flex flex-col items-center md:items-end transition-opacity hover:opacity-100 opacity-60">
              <span className="text-xs tracking-widest text-[#e5b05c] mb-2 uppercase">NEXT CHAPTER</span>
              <span className="text-xl md:text-2xl tracking-widest font-light group-hover:text-white transition-colors">{nextChapter.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </RevealText>
    </main>
  );
}

export { RevealText, ParallaxImage };
