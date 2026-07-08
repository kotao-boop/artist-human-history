"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCinematic } from "@/components/CinematicProvider";

const chapters = [
  { id: "01", slug: "genesis", title: "GENESIS", subtitle: "原初の火、闇を照らす" },
  { id: "02", slug: "cognitive", title: "COGNITIVE REVOLUTION", subtitle: "虚構が紡ぐ覇権" },
  { id: "03", slug: "agricultural", title: "AGRICULTURAL REVOLUTION", subtitle: "史上最大の詐欺" },
  { id: "04", slug: "unification", title: "UNIFICATION OF HUMANKIND", subtitle: "貨幣・帝国・宗教" },
  { id: "05", slug: "scientific", title: "SCIENTIFIC REVOLUTION", subtitle: "無知の発見と際限なき力" },
  { id: "06", slug: "future", title: "THE FUTURE", subtitle: "サピエンスの終焉" }
];

export default function Home() {
  const { isCinematic, toggleCinematic } = useCinematic();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-light tracking-widest mb-6 text-glow opacity-90">
          サピエンス
        </h1>
        <p className="text-sm md:text-xl tracking-[0.5em] text-[#e5b05c] uppercase font-sans">
          Chronicle of Humanity
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        onClick={toggleCinematic}
        className={`mb-24 px-8 py-3 border tracking-widest text-xs font-sans transition-all duration-700 ${isCinematic ? 'border-[#e5b05c] text-[#e5b05c] shadow-[0_0_20px_rgba(229,176,92,0.3)] bg-[#e5b05c]/10' : 'border-white/30 text-white/50 hover:border-white hover:text-white'}`}
      >
        {isCinematic ? "EXIT CINEMATIC MODE" : "ENTER CINEMATIC EXPERIENCE"}
      </motion.button>

      <div className="w-full max-w-4xl">
        <ul className="flex flex-col gap-6">
          {chapters.map((chapter, index) => (
            <motion.li 
              key={chapter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            >
              <Link 
                href={`/chapter/${chapter.slug}`}
                className="group flex flex-col md:flex-row md:items-baseline border-b border-white/10 pb-6 hover:border-[#e5b05c] transition-colors"
              >
                <span className="text-[#e5b05c] font-sans tracking-widest text-sm md:w-24 shrink-0">
                  {chapter.id}.
                </span>
                <span className="text-2xl md:text-4xl font-light tracking-wider group-hover:text-white text-white/70 transition-colors md:w-1/2">
                  {chapter.title}
                </span>
                <span className="mt-2 md:mt-0 text-sm md:text-lg text-white/50 font-serif tracking-widest md:ml-auto group-hover:text-[#e5b05c]/80 transition-colors">
                  {chapter.subtitle}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex justify-center"
        >
          <Link 
            href="/timeline"
            className="group flex flex-col md:flex-row items-center md:items-baseline gap-4 py-4 hover:opacity-100 transition-opacity"
          >
            <span className="text-[#e5b05c] font-sans tracking-widest text-sm uppercase">APPENDIX</span>
            <span className="text-xl md:text-2xl font-light tracking-wider text-white/70 group-hover:text-white transition-colors">TIMELINE</span>
            <span className="text-sm text-white/50 font-serif tracking-widest group-hover:text-[#e5b05c]/80 transition-colors">永遠の系譜</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
