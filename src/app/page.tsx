"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scene from "@/components/Scene";

function ParallaxImage({ src, alt, yOffset = 100 }: { src: string; alt: string; yOffset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);
  
  return (
    <div ref={ref} className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative opacity-70 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000">
      <motion.img 
        style={{ y, scale: 1.2 }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function RevealText({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#030305] text-[#f5f5f7] font-serif selection:bg-[#e5b05c]/30 selection:text-white">
      <Scene />
      
      {/* Title Hero */}
      <section className="h-[120vh] flex flex-col items-center justify-center relative z-10 px-6">
        <RevealText>
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-light tracking-widest mb-6 text-glow opacity-90">
              人類史
            </h1>
            <p className="text-sm md:text-xl tracking-[0.5em] text-[#e5b05c] uppercase font-sans">
              Chronicle of Humanity
            </p>
          </div>
        </RevealText>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-32 w-[1px] h-24 bg-gradient-to-b from-[#e5b05c] to-transparent"
        />
      </section>

      {/* Chapter 1: Genesis & Fire */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <RevealText>
              <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">01. GENESIS</h2>
              <h3 className="text-4xl md:text-6xl font-light mb-8 leading-snug">原初の火、<br/>闇を照らす</h3>
              <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify">
                およそ200万年前。我々の祖先は「火」というエネルギーを制御する術を手に入れた。
                それは単に暖を取るためではなく、食物の消化を助け、脳を巨大化させるための革命だった。
                夜の闇に怯える霊長類から、世界を加工する創造者への第一歩。
              </p>
            </RevealText>
          </div>
          <div className="order-1 md:order-2">
            <ParallaxImage src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=1000&auto=format&fit=crop" alt="Fire" yOffset={50} />
          </div>
        </div>
      </section>

      {/* Chapter 2: Cognitive Revolution */}
      <section className="py-48 px-6 md:px-24 bg-[#0a0a0c] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealText>
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-8 font-sans">02. COGNITIVE REVOLUTION</h2>
            <h3 className="text-3xl md:text-5xl font-light mb-12 leading-relaxed">
              虚構を信じる力。<br/>神話が数万の個体を繋ぐ。
            </h3>
            <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify md:text-center">
              ホモ・サピエンスが他の人類種を凌駕した理由。それは「存在しないもの」を想像し、共有する能力だった。
              宗教、国家、そして貨幣。実体を持たない虚構（フィクション）を信じることで、人類は見知らぬ他者と大規模な協力を可能にした。
            </p>
          </RevealText>
        </div>
      </section>

      {/* Chapter 3: Agricultural Revolution */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <ParallaxImage src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" alt="Agriculture" yOffset={80} />
          </div>
          <div>
            <RevealText>
              <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">03. AGRICULTURAL REVOLUTION</h2>
              <h3 className="text-4xl md:text-6xl font-light mb-8 leading-snug">小麦による隷属。<br/>定住という選択。</h3>
              <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify">
                狩猟採集の自由を捨て、大地を耕す日々へ。人口は爆発的に増加したが、人類は気候変動と病に縛られることになった。
                我々が小麦を栽培したのか、それとも小麦が我々を家畜化したのか。
                ここから「所有」という概念が生まれ、歴史は加速する。
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Chapter 4: Scientific & Industrial */}
      <section className="py-48 px-6 md:px-24 bg-gradient-to-b from-[#0a0a0c] to-[#030305] relative z-10">
        <div className="max-w-5xl mx-auto">
          <RevealText>
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-8 font-sans text-center">04. SCIENTIFIC REVOLUTION</h2>
            <h3 className="text-5xl md:text-7xl font-light mb-12 text-center leading-tight">無知の知、<br/>そして機械仕掛けの神</h3>
          </RevealText>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealText delay={0.2}>
              <p className="text-lg leading-loose opacity-70 font-light">
                「我々は何も知らない」という事実を認めた時、科学革命は始まった。
                観察と数学。錬金術は化学へ、占星術は天文学へと昇華した。
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-lg leading-loose opacity-70 font-light">
                蒸気機関が筋肉を置き換え、電力が夜を駆逐する。
                資本主義と結びついた科学技術は、地球の生態系そのものを不可逆的に作り変えていった。
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Chapter 5: Singularity */}
      <section className="h-[100vh] flex flex-col items-center justify-center relative z-10 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1] opacity-50 mix-blend-screen">
            <ParallaxImage src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop" alt="Future Network" yOffset={0} />
        </div>
        <RevealText>
          <div className="text-center bg-black/40 backdrop-blur-md p-12 md:p-24 border border-white/10">
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">05. SINGULARITY</h2>
            <h3 className="text-5xl md:text-8xl font-light mb-8">ホモ・デウス</h3>
            <p className="text-lg md:text-xl leading-loose opacity-80 font-light max-w-2xl mx-auto">
              データ至上主義とAI。遺伝子工学による生命の再設計。
              人類は死を克服し、自らを神（デウス）の領域へと押し上げようとしている。
              我々はどこから来て、どこへ行くのか。
            </p>
          </div>
        </RevealText>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center relative z-10 border-t border-white/10 font-sans text-xs tracking-widest text-white/40">
        <p>© 2027 CHRONICLE OF HUMANITY. Art Installation by ANRI-inspired AI.</p>
      </footer>
    </main>
  );
}
