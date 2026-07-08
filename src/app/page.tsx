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
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-light tracking-widest mb-6 text-glow opacity-90">
              サピエンス
            </h1>
            <p className="text-sm md:text-xl tracking-[0.5em] text-[#e5b05c] uppercase font-sans">
              A Brief History of Humankind
            </p>
          </div>
        </RevealText>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-32 w-[1px] h-24 bg-gradient-to-b from-[#e5b05c] to-transparent"
        />
      </section>

      {/* Chapter 1: Cognitive Revolution */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <RevealText>
              <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">01. THE COGNITIVE REVOLUTION</h2>
              <h3 className="text-4xl md:text-6xl font-light mb-8 leading-snug">認知革命<br/><span className="text-3xl md:text-4xl opacity-80">虚構が紡ぐ覇権</span></h3>
              <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify">
                およそ7万年前、ホモ・サピエンスの脳に突如として起きた変異。我々は「存在しないもの」を語る能力を手に入れた。
                神話、精霊、そして法人。実体のない「虚構（フィクション）」を共有することで、サピエンスはダンバー数（150人）の壁を越え、見知らぬ無数の他者と柔軟に協力する唯一の動物となった。この力が、我々を食物連鎖の頂点へと押し上げたのだ。
              </p>
            </RevealText>
          </div>
          <div className="order-1 md:order-2">
            <ParallaxImage src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=1000&auto=format&fit=crop" alt="Fire and Early Humans" yOffset={50} />
          </div>
        </div>
      </section>

      {/* Chapter 2: Agricultural Revolution */}
      <section className="py-48 px-6 md:px-24 bg-[#0a0a0c] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealText>
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-8 font-sans">02. THE AGRICULTURAL REVOLUTION</h2>
            <h3 className="text-3xl md:text-5xl font-light mb-12 leading-relaxed">
              農業革命<br/>史上最大の詐欺
            </h3>
            <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify md:text-center">
              約1万年前、狩猟採集の豊かな生活を捨て、我々は大地を耕し始めた。しかし、それは決して楽な生活をもたらさなかった。
              人口は爆発的に増えたが、個人の労働時間は増え、栄養は偏り、疫病に苦しむことになった。
              我々が小麦を栽培したのではない。小麦が我々を家畜化したのだ。「未来への不安」という新たな概念が、人類を永遠の労働へと駆り立てた。
            </p>
          </RevealText>
        </div>
      </section>

      {/* Chapter 3: Unification of Humankind */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <ParallaxImage src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" alt="Global Network" yOffset={80} />
          </div>
          <div>
            <RevealText>
              <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">03. THE UNIFICATION OF HUMANKIND</h2>
              <h3 className="text-4xl md:text-6xl font-light mb-8 leading-snug">人類の統一<br/><span className="text-3xl md:text-4xl opacity-80">貨幣・帝国・宗教</span></h3>
              <p className="text-lg md:text-xl leading-loose opacity-70 font-light text-justify">
                分断されていた無数の文化は、歴史という巨大な潮流の中で一つのグローバル帝国へと収束していく。
                その原動力となったのは、普遍的秩序を説く「宗教」、異なる民族を束ねる「帝国」、そして人類史上最も寛容で普遍的な相互信頼のシステムである「貨幣」だった。
                これら最強の虚構が、地球上のあらゆる人々を同じルールの下へと統合した。
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Chapter 4: Scientific Revolution */}
      <section className="py-48 px-6 md:px-24 bg-gradient-to-b from-[#0a0a0c] to-[#030305] relative z-10">
        <div className="max-w-5xl mx-auto">
          <RevealText>
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-8 font-sans text-center">04. THE SCIENTIFIC REVOLUTION</h2>
            <h3 className="text-5xl md:text-7xl font-light mb-12 text-center leading-tight">科学革命<br/><span className="text-3xl md:text-4xl opacity-80">無知の発見と際限なき力</span></h3>
          </RevealText>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealText delay={0.2}>
              <p className="text-lg leading-loose opacity-70 font-light text-justify">
                500年前、「我々は最も重要な事柄について何も知らない」という事実を認めた時、科学革命が始まった。
                過去の伝統ではなく、観察と数学に基づき新たな力を獲得しようとする試み。
                それは資本主義と帝国主義と結びつき、地球の生態系そのものを不可逆的に作り変える原動力となった。
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-lg leading-loose opacity-70 font-light text-justify">
                産業革命はエネルギーの限界を打破し、我々を自然の束縛から解放した。
                国家と市場は共同体と家族を解体し、「個人」という新たな単位を生み出した。
                かつてない平和と物質的豊かさを手に入れた我々だが、果たして本当に幸福になったのだろうか。
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Future of Sapiens */}
      <section className="h-[100vh] flex flex-col items-center justify-center relative z-10 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1] opacity-40 mix-blend-screen">
            <ParallaxImage src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" alt="Abstract Future" yOffset={0} />
        </div>
        <RevealText>
          <div className="text-center bg-black/50 backdrop-blur-md p-12 md:p-24 border border-white/10 rounded-xl">
            <h2 className="text-sm tracking-[0.4em] text-[#e5b05c] mb-4 font-sans">05. THE FUTURE</h2>
            <h3 className="text-4xl md:text-7xl font-light mb-8 leading-tight">サピエンスの終焉<br/><span className="text-2xl md:text-4xl opacity-80">我々は何を望むのか？</span></h3>
            <p className="text-lg md:text-xl leading-loose opacity-80 font-light max-w-3xl mx-auto text-justify md:text-center">
              約40億年続いた自然選択による進化は終わりを告げようとしている。
              バイオテクノロジー、サイボーグ工学、非有機的生命の創造。人類は自らを神（ホモ・デウス）へとアップグレードする力に手を掛けた。
              神にまで昇り詰めようとする我々だが、自らが何を望んでいるかを知らない。
              「自分が何を望んでいるか分からない、不満を抱えた無責任な神々ほど危険なものがあるだろうか？」
            </p>
          </div>
        </RevealText>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center relative z-10 border-t border-white/10 font-sans text-xs tracking-widest text-white/40">
        <p>© 2027 CHRONICLE OF HUMANITY. Inspired by Yuval Noah Harari.</p>
      </footer>
    </main>
  );
}
