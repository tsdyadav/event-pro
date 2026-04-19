"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { id: 1, img: "/images/kids1.jpg", title: "Kid's Birthday" },
  { id: 2, img: "/images/kids2.jpg", title: "Fun Party" },
  { id: 3, img: "/images/kids3.jpg", title: "Happy Moments" },
];

export default function KidsDecorations() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const getIndex = (index: number) => {
    if (index < 0) return slides.length - 1;
    if (index >= slides.length) return 0;
    return index;
  };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative py-20 pb-28 bg-gradient-to-r from-pink-500 to-purple-500 overflow-visible">
        
        {/* Heading */}
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Kids Decorations</h2>
          <p className="mt-2 text-sm opacity-90">
            Hear from our happy Students! See how we’ve helped them achieve their goals.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-12 flex items-center justify-center">

          {/* LEFT PREVIEW */}
          <div className="hidden md:block absolute left-0 w-[220px] h-[280px] opacity-30">
            <Image
              src={slides[getIndex(current - 1)].img}
              alt="prev"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          {/* MAIN CARD */}
          <div className="relative w-full max-w-[720px] h-[320px] md:h-[420px] rounded-[24px] overflow-hidden shadow-xl z-10">
            <Image
              src={slides[current].img}
              alt="main"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{slides[current].title}</h3>

              <div className="flex items-center gap-2 mt-2 text-yellow-400">
                ⭐⭐⭐⭐☆ <span className="text-white text-sm">4.0</span>
              </div>

              <p className="text-sm mt-2 max-w-[400px] text-white/80">
                we are thrilled to offer a range of exceptional decoration services
                tailored to elevate your space.
              </p>
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="hidden md:block absolute right-0 w-[220px] h-[280px] opacity-30">
            <Image
              src={slides[getIndex(current + 1)].img}
              alt="next"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-6 md:left-[140px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg z-20"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-6 md:right-[140px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg z-20"
          >
            ›
          </button>
        </div>

        {/* SEE ALL BUTTON (HALF OVERLAP) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-50">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-xl">
            <button className="px-10 py-3 rounded-full bg-white text-pink-500 font-semibold">
              SEE ALL →
            </button>
          </div>
        </div>

      </section>

    </>
  );
}