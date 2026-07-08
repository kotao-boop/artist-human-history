import ChapterLayout, { RevealText, ParallaxImage } from "@/components/ChapterLayout";

export default function UnificationOfHumankind() {
  return (
    <ChapterLayout 
      id="04" 
      title="UNIFICATION OF HUMANKIND" 
      subtitle="貨幣・帝国・宗教"
      heroImage="/images/unification.png"
      prevChapter={{ slug: "agricultural", title: "AGRICULTURAL REVOLUTION" }}
      nextChapter={{ slug: "scientific", title: "SCIENTIFIC REVOLUTION" }}
    >
      <RevealText>
        <p>
          農業革命以降、人類は無数の小さな文化圏に分裂し、争いを繰り返していた。
          しかし、鳥瞰図のように数千年の歴史を俯瞰すると、歴史には明確な一つの方向性があることがわかる。
          それは「統一」への強いベクトルである。今日、地球上の全人類は事実上、単一のグローバルな社会体系に組み込まれている。
        </p>
      </RevealText>

      <RevealText>
        <h3>最強の虚構：貨幣</h3>
        <p>
          見知らぬ人同士を協力させる最も効率的なシステム、それは「貨幣」である。
          言語や宗教が異なっても、そして互いを憎み合っていても、人間はお金という共通のフィクションの前では容易に協力する。
        </p>
        <p>
          貨幣の本質は、物質的な価値（金や銀そのもの）ではなく、「相互信頼」である。
          私がこの紙切れや電子データを受け取るのは、地球の裏側にいる見知らぬ誰かも、これを価値あるものとして受け取ってくれると信じているからだ。
          オサマ・ビンラディンはアメリカの文化や宗教、政治を徹底的に憎悪したが、アメリカ・ドルを憎むことはなかった。
          貨幣は、人類がこれまでに発明した中で最も普遍的で、最も寛容な相互信頼のシステムなのである。
        </p>
      </RevealText>

      <RevealText>
        <ParallaxImage src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2000&auto=format&fit=crop" alt="Ancient Coins / Exchange" yOffset={60} />
      </RevealText>

      <RevealText>
        <h3>帝国という溶鉱炉</h3>
        <p>
          人類の統一を推進した第二の力は「帝国」である。現代人は「帝国主義」という言葉にネガティブな印象を抱きがちだ。
          確かに帝国は、抑圧、戦争、奴隷制によって築かれた。しかし同時に、異なる民族や文化を一つの巨大な法と経済の枠組みに統合する「溶鉱炉」の役割を果たした。
        </p>
        <p>
          ローマ帝国、漢帝国、大英帝国。これらは武力で支配を広げたが、征服された側もやがて帝国の文化、言語、インフラを吸収した。
          今日、完全に純粋で独立した文化など存在しない。我々が誇る「伝統文化」の多くも、かつての帝国主義的遺産の一部にすぎないのだ。
        </p>
      </RevealText>

      <RevealText>
        <h3>超人的秩序：宗教</h3>
        <p>
          貨幣と帝国が物質的・政治的な結びつきを提供する一方で、人類の心を一つに束ねたのが「宗教」である。
          宗教とは、超人間的な秩序（神や自然の法則など）に対する信仰に基づいた、人間の規範や価値観の体系である。
        </p>
        <p>
          古代の局地的なアニミズムから、キリスト教やイスラム教のような普遍的で宣教的な宗教へと進化するにつれ、宗教は特定の部族や地域を超えて人類を統合する強力な接着剤となった。
          そして現代においては、自由主義、共産主義、資本主義といったイデオロギーもまた、人間の神を崇拝しない「新たな宗教（自然法則に基づく超人間的秩序）」として機能している。
        </p>
      </RevealText>
    </ChapterLayout>
  );
}
