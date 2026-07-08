"use client";

import React from "react";
import Link from "next/link";
import { RevealText } from "@/components/ChapterLayout";

const events = [
  { year: "135億年前", title: "ビッグバン", desc: "物質とエネルギーの誕生。物理学の始まり。" },
  { year: "38億年前", title: "生命の誕生", desc: "地球という惑星で分子が結合。生物学の始まり。" },
  { year: "250万年前", title: "ホモ属の出現", desc: "東アフリカで最初の人類（ホモ属）が現れる。" },
  { year: "30万年前", title: "火の日常的な使用", desc: "調理による消化エネルギーの節約と、絶対的な外部エネルギーの獲得。" },
  { year: "7万年前", title: "認知革命", desc: "遺伝子の突然変異による「虚構（言語）」の獲得。大規模な協力と想像上の現実の始まり。" },
  { year: "1万2000年前", title: "農業革命", desc: "小麦による人類の家畜化と「贅沢の罠」。史上最大の詐欺。" },
  { year: "紀元前3500年頃", title: "書記体系と貨幣", desc: "帝国を管理するための「文字」の発明と、最強の相互信頼システム「貨幣」の誕生。" },
  { year: "紀元前500年頃", title: "帝国と宗教", desc: "普遍的帝国と普遍的宗教の出現。人類が単一のグローバル社会へと収束し始める。" },
  { year: "西暦1500年頃", title: "科学革命", desc: "「無知の発見」。過去の権威を疑い、科学・資本主義・帝国主義が結びつく。" },
  { year: "西暦1750年頃", title: "産業革命", desc: "化石燃料によるエネルギーの壁の突破。コミュニティの衰退と国家・市場の台頭。" },
  { year: "現在〜未来", title: "インテリジェント・デザイン", desc: "自然選択から知的設計へ。生物工学による自己アップグレードと、ホモ・デウス（神）への過渡期。" },
];

export default function Timeline() {
  return (
    <main className="pt-32 pb-48 px-6 md:px-24 max-w-4xl mx-auto relative z-10">
      <header className="mb-32 mt-12 text-center md:text-left">
        <RevealText>
          <p className="text-sm tracking-[0.4em] text-[#e5b05c] mb-6 font-sans">APPENDIX</p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-widest">TIMELINE</h1>
          <h2 className="text-2xl md:text-3xl opacity-70 tracking-widest leading-relaxed">永遠の系譜</h2>
        </RevealText>
      </header>

      <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-16 space-y-24 py-12">
        {events.map((event, index) => (
          <RevealText key={index}>
            <div className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-2 w-3 h-3 bg-[#e5b05c] rounded-full shadow-[0_0_10px_#e5b05c]" />
              
              <div className="flex flex-col gap-2">
                <span className="text-[#e5b05c] font-sans tracking-widest text-sm">{event.year}</span>
                <h3 className="text-3xl md:text-4xl font-light tracking-wider text-white mt-2 mb-4">{event.title}</h3>
                <p className="text-white/60 font-serif text-lg md:text-xl tracking-wider leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          </RevealText>
        ))}
      </div>

      <div className="mt-48 mb-24 flex justify-center">
        <RevealText>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#e5b05c] to-transparent" />
        </RevealText>
      </div>

      <RevealText>
        <nav className="flex justify-center items-center border-t border-white/10 pt-16 mt-16 font-sans">
          <Link href="/" className="group flex flex-col items-center transition-opacity hover:opacity-100 opacity-60 px-8 py-3 border border-white/10 hover:border-white/30 rounded-full">
            <span className="text-xs tracking-widest text-white uppercase">INDEX</span>
          </Link>
        </nav>
      </RevealText>
    </main>
  );
}
