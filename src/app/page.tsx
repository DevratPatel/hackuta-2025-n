"use client";

import { useState } from "react";
import Schedule from "@/components/schedule";
import Faq from "@/components/faq";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhenWhere from "@/components/when-where";
import Apply from "@/components/apply";
import Sponsors from "@/components/sponsors";
import MLHBadge from "@/components/mlh-badge";
import Reveal from "@/components/reveal";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
  };

  return (
    <div className="scrollbar-hide bg-gradient-to-b from-black via-blue-950 to-blue-950 min-h-screen">
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} />

      <MLHBadge isMobileMenuOpen={isMobileMenuOpen} />
      <Hero />

      {/* Main Content */}
      <div className="font-franklinCondensed text-white text-center w-[100vw] mx-auto px-6 sm:px-10 p-[20px] mt-[-60px] sm:mt-[-40px] md:mt-0 relative z-[10]">
        <Reveal>
          <WhenWhere />
        </Reveal>

        <div className="mt-8" />
        <Reveal>
          <Apply />
        </Reveal>

        <section id="schedule" className="py-8">
          <Reveal>
            <Schedule />
          </Reveal>
        </section>

        <section id="faq" className="py-12">
          <Reveal>
            <Faq />
          </Reveal>
        </section>

        <Reveal>
          <Sponsors />
        </Reveal>
      </div>
      <footer className="w-full text-center py-8">
        <a
          href="http://mlh.io/code-of-conduct"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-lg sm:text-base hover:text-purple-300 transition"
        >
          MLH Code of Conduct
        </a>
      </footer>
    </div>
  );
}
