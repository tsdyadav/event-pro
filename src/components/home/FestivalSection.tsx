"use client";

import Image from "next/image";

const images = [
  "/assets/festival1.png",
  "/assets/festival2.png",
  "/assets/festival3.png",
  "/assets/festival4.png",
];

export default function FestivalSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Heading */}
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Make Every Festival Special
          </h2>

          <p className="mt-4 text-sm text-pink-400">
            we are thrilled to offer a range of exceptional decoration
            services tailored to elevate your space.
          </p>
        </div>

        {/* MAIN BIG IMAGE */}
        <div className="mt-8">
          <div className="relative w-full h-[350px] md:h-[420px] rounded-[28px] overflow-hidden">
            <Image
              src="/assets/festival.png"
              alt="festival"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SMALL GRID IMAGES */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[200px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={img}
                alt="festival item"
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

        {/* EXPLORE BUTTON */}
        <div className="mt-10">
          <button className="w-full py-4 rounded-full bg-[#e9e4e7] text-gray-600 font-semibold tracking-wide">
            EXPLORE MORE →
          </button>
        </div>

      </div>
    </section>
  );
}