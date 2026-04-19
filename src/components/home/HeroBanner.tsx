"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mx-auto mt-4 w-full max-w-7xl px-1 sm:px-4">
      <div className="relative h-[360px] overflow-visible rounded-[18px] sm:h-[420px] md:h-[470px]">
        <Image
          src="/assets/hero1.png"
          alt="Birthday decor hero banner"
          fill
          priority
          className="rounded-[18px] object-cover"
        />

        <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(90deg,rgba(35,13,18,0.78)_0%,rgba(66,21,12,0.45)_42%,rgba(87,31,13,0.22)_100%)]" />

        {/* <div className="absolute inset-y-0 left-0 flex max-w-[430px] flex-col justify-center px-7 text-white sm:px-10 md:px-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/80 sm:text-[11px]">
            At your location
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-[2.7rem]">
            Minnie Mouse Themed
            <br />
            Birthday Party
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/80 sm:text-[15px]">
            Learn planning, coordination, and decor ideas to make your celebration
            feel festive and photo-ready.
          </p>
          <div className="mt-5 flex items-center gap-3 text-[13px]">
            <span className="tracking-[0.24em] text-[#ffd54f]">★★★★★</span>
            <span className="text-white/80">4.0</span>
          </div>
        </div> */}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        </div>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <button className="rounded-full border-[5px] border-white bg-brand-gradient px-12 py-2.5 text-[11px] font-bold tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(181,70,178,0.45)]">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
