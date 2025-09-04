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
      <div className="font-franklinCondensed text-white text-center w-[100vw] mx-auto px-6 sm:px-10 p-[40px] mt-[-150px]">
        <WhenWhere />

        <div className="mt-16" />
        <Apply />

        <section id="schedule" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                HackUTA Schedule
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-franklinGothic max-w-2xl mx-auto">
                Plan your 24-hour hackathon journey with our detailed event
                schedule
              </p>
            </div>
            <div className="flex justify-center">
              <Schedule />
            </div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-franklinGothic max-w-2xl mx-auto">
                Got questions? We've got answers! Find everything you need to
                know about HackUTA 2025.
              </p>
            </div>
            <div className="w-full">
              <Faq />
            </div>
          </div>
        </section>

        <Sponsors />
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
