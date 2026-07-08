"use client";

import React from "react";
import Link from "next/link";
import { RevealText } from "@/components/ChapterLayout";
import eventsData from "./events.json";
import referencesData from "./references.json";

export default function Timeline() {
  return (
    <main className="pt-32 pb-48 px-6 md:px-24 max-w-5xl mx-auto relative z-10">
      <header className="mb-32 mt-12 text-center md:text-left">
        <RevealText>
          <p className="text-sm tracking-[0.4em] text-[#e5b05c] mb-6 font-sans">APPENDIX</p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-widest">TIMELINE</h1>
          <h2 className="text-2xl md:text-3xl opacity-70 tracking-widest leading-relaxed">永遠の系譜</h2>
        </RevealText>
      </header>

      <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-16 space-y-32 py-12">
        {eventsData.map((event, index) => (
          <RevealText key={index}>
            <div className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[37.5px] md:-left-[69.5px] top-2 w-3 h-3 bg-[#e5b05c] rounded-full shadow-[0_0_10px_#e5b05c]" />
              
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[#e5b05c] font-sans tracking-widest text-sm">{event.year}</span>
                  <h3 className="text-3xl md:text-4xl font-light tracking-wider text-white mt-2 mb-4">{event.title}</h3>
                  <p className="text-white/80 font-serif text-lg md:text-xl tracking-wider leading-relaxed">
                    {event.desc}
                  </p>
                </div>
                
                {/* Academic Notes & Contentions */}
                <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs tracking-widest text-[#e5b05c] mb-2 uppercase">学術的確認・注</h4>
                      <p className="text-white/60 font-serif text-sm md:text-base leading-relaxed">{event.academic}</p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest text-[#e5b05c] mb-2 uppercase">論点・留保</h4>
                      <p className="text-white/60 font-serif text-sm md:text-base leading-relaxed">{event.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealText>
        ))}
      </div>

      {/* Bibliography / References Section */}
      <div className="mt-48 pt-24 border-t border-white/10">
        <h3 className="text-2xl tracking-widest text-[#e5b05c] mb-12 uppercase text-center md:text-left">Selected Bibliography</h3>
        <ul className="space-y-6 text-white/50 text-sm md:text-base font-serif leading-relaxed">
          {referencesData.map((ref, i) => (
            <li key={i} className="pl-4 border-l-2 border-[#e5b05c]/30 hover:text-white/80 transition-colors">
              {ref}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-32 mb-24 flex justify-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#e5b05c] to-transparent" />
      </div>

      <nav className="flex justify-center items-center border-t border-white/10 pt-16 mt-16 font-sans">
        <Link href="/" className="group flex flex-col items-center transition-opacity hover:opacity-100 opacity-60 px-8 py-3 border border-white/10 hover:border-white/30 rounded-full">
          <span className="text-xs tracking-widest text-white uppercase">INDEX</span>
        </Link>
      </nav>
    </main>
  );
}
