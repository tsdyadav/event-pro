"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, Search } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { label: "Anniversary", hasChildren: true },
    { label: "Birthdays", hasChildren: true },
    { label: "Candlelight Dinners", hasChildren: true },
    { label: "Decorations", hasChildren: true },
    { label: "Festivals", hasChildren: true },
    { label: "Kid's Celebrations", hasChildren: true },
    { label: "Home Decoration", hasChildren: true },
    { label: "Corporate Events", hasChildren: false },
    { label: "Tent Services", hasChildren: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 shadow-[0_12px_28px_rgba(37,19,41,0.08)] backdrop-blur-xl"
          : "bg-white/95"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 rounded-full bg-white px-3 py-2 shadow-[0_8px_24px_rgba(55,27,66,0.06)]">
          <Link href="/" className="flex items-center gap-2 pr-2">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1f7]">
              <Image
                src="/assets/logo.svg"
                alt="DKG Pro Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </span>
            <span className="text-lg font-black tracking-tight text-[#432336]">
              DKG<span className="text-brand-500">Pro</span>
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center md:flex">
            <div className="flex w-full items-center rounded-full border border-[#f0dfeb] bg-[#fff8fc] px-4 py-2.5">
              <Search className="size-4 text-slate-400" />
              <input
                placeholder="Search premium decorations, events..."
                className="ml-3 w-full bg-transparent text-sm text-[#4d3042] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full text-[#7a3157] transition hover:bg-[#fff3f8]">
            <Heart className="size-5" />
          </button>
        </div>

        <nav className="mt-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-1 rounded-full bg-white px-2 py-1 shadow-[0_8px_24px_rgba(55,27,66,0.04)]">
            {categories.map((item) => (
              <Link
                key={item.label}
                href="/categories"
                className="group relative flex items-center gap-1 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6b4c5d] transition hover:bg-[#fff3f8]"
              >
                <span>{item.label}</span>
                {item.hasChildren ? <ChevronDown className="size-3.5 text-[#a58496]" /> : null}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
