"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// Removed lucide icons for custom animated hamburger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "When & Where", href: "#d-time" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
    { name: "Apply", href: "#apply" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    // Body scroll lock
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Cleanup restores overflow
      const restore = () => (document.body.style.overflow = prev);
      // Hide MLH badge (fade via utility classes) if present
      const badge = document.getElementById("mlh-trust-badge");
      if (badge) {
        badge.classList.add("opacity-0", "pointer-events-none");
      }
      return () => {
        restore();
        if (badge) {
          badge.classList.remove("opacity-0", "pointer-events-none");
        }
      };
    } else {
      document.body.style.overflow = "";
      const badge = document.getElementById("mlh-trust-badge");
      if (badge) {
        badge.classList.remove("opacity-0", "pointer-events-none");
      }
    }
  }, [isOpen]);

  const desktopBase = isScrolled
    ? "md:w-[600px] md:bg-black/80 md:backdrop-blur-md md:rounded-full md:mx-4 md:shadow-2xl md:border md:border-black/50"
    : "md:w-full md:bg-black md:border-transparent";

  const mobileBase = `w-[92vw] max-w-[420px] ${
    isScrolled || isOpen
      ? "bg-black/80 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
      : "bg-black/60 backdrop-blur-md"
  } rounded-full border border-white/10`;

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] fancy-shadow transition-all duration-500 ease-out px-3 md:px-[5px] h-14 md:h-12 flex items-center ${mobileBase} ${desktopBase}`}
      style={{
        boxShadow: isScrolled
          ? "0 0 20px rgba(11, 10, 100, 0.8), 0 0 40px rgba(11, 10, 100, 0.6), 0 0 80px rgba(11, 10, 100, 0.4), 0 0 120px rgba(11, 10, 100, 0.2)"
          : "none",
      }}
    >
      <a
        href="#"
        className="flex items-center hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full"
      >
        <Image
          src="/Logo.svg"
          alt="Main Logo"
          width={isScrolled ? 26 : 32}
          height={isScrolled ? 28 : 36}
          priority
          className="transition-all duration-300 ease-in-out"
        />
      </a>
      <div className="hidden md:flex xl:space-x-8 lg:space-x-6 md:space-x-4 justify-center w-full ml-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white font-franklinGothic lg:text-lg md:text-base font-normal hover:text-purple-300 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
      <button
        className="md:hidden ml-auto relative text-white p-2 rounded-full hover:bg-white/10 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        type="button"
      >
        <span className="relative block w-7 h-6" aria-hidden="true">
          <span
            className={`absolute left-0 top-1 h-[2px] w-full bg-white rounded-full origin-center transition-all duration-300 ease-in-out ${
              isOpen ? "translate-y-2.5 rotate-45" : "translate-y-0 rotate-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-white rounded-full origin-center transition-all duration-200 ease-out ${
              isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`absolute left-0 bottom-1 h-[2px] w-full bg-white rounded-full origin-center transition-all duration-300 ease-in-out ${
              isOpen ? "-translate-y-2.5 -rotate-45" : "translate-y-0 rotate-0"
            }`}
          />
        </span>
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[92vw] max-w-[420px] origin-top overflow-hidden rounded-3xl border border-white/15 backdrop-blur-2xl bg-gradient-to-b from-black/85 to-purple-950/70 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.65)] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col py-6 px-6 space-y-3">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center font-franklinGothic text-white text-lg tracking-wide rounded-full py-2.5 px-4 bg-white/0 hover:bg-white/10 active:bg-white/15 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay kept mounted for smoother fade out */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-[90] transition-opacity duration-300 ease-in-out cursor-pointer ${
          isOpen
            ? "opacity-100 bg-black/40 backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </nav>
  );
}
