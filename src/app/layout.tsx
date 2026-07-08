import type { Metadata } from "next";
import "./globals.css";
import Scene from "@/components/Scene";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "CHRONICLE OF HUMANITY",
  description: "A digital encyclopedia of human history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-serif bg-[#030305] text-[#f5f5f7] selection:bg-[#e5b05c]/30 selection:text-white">
        <Scene />
        <Navigation />
        <div className="relative z-10 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
