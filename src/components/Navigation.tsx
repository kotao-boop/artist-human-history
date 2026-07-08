"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-[#f5f5f7]">
      <Link href="/" className="text-sm tracking-[0.3em] font-sans hover:text-[#e5b05c] transition-colors">
        CHRONICLE OF HUMANITY
      </Link>
      <div className="flex gap-4 md:gap-8 font-sans text-xs tracking-widest hidden sm:flex">
        <Link href="/chapter/genesis" className={pathname === "/chapter/genesis" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>GENESIS</Link>
        <Link href="/chapter/cognitive" className={pathname === "/chapter/cognitive" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>COGNITIVE</Link>
        <Link href="/chapter/agricultural" className={pathname === "/chapter/agricultural" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>AGRICULTURAL</Link>
        <Link href="/chapter/unification" className={pathname === "/chapter/unification" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>UNIFICATION</Link>
        <Link href="/chapter/scientific" className={pathname === "/chapter/scientific" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>SCIENTIFIC</Link>
        <Link href="/chapter/future" className={pathname === "/chapter/future" ? "text-[#e5b05c]" : "opacity-50 hover:opacity-100"}>FUTURE</Link>
      </div>
    </nav>
  );
}
