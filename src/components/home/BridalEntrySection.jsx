"use client";

import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/assets/bridal1.png",
    title: "Carnival Fun Birthday Decor",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/assets/bridal2.png",
    title: "Wild West Birthday Decor",
    rating: 4.8,
  },
  {
    id: 3,
    img: "/assets/bridal3.png",
    title: "Rockstar Music Birthday Decor",
    rating: 4.0,
  },
  {
    id: 4,
    img: "/assets/bridal4.png",
    title: "Mad Scientist Birthday Decor",
    rating: 4.0,
  },
];

export default function BridalEntrySection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Bridal Entry Decoration
          </h2>

          <p className="mt-3 text-sm text-pink-400 max-w-[500px] mx-auto">
            we are thrilled to offer a range of exceptional decoration
            services tailored to elevate your space.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item) => (
  <div
    key={item.id}
    className="bg-white rounded-[24px] overflow-hidden shadow-sm"
  >

    {/* IMAGE */}
    <div className="relative w-full h-[300px]">
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="p-4">

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-400 text-sm">
        ⭐⭐⭐⭐☆
        <span className="text-gray-600 ml-1">{item.rating}</span>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-sm font-semibold text-gray-800 leading-snug">
        {item.title}
      </h3>

      {/* Button */}
      <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold">
        BOOK NOW →
      </button>

    </div>
  </div>
))}
        </div>

        {/* Bottom Text (NOT BUTTON) */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium tracking-wide">
            DRAG TO SEE MORE →
          </p>
        </div>

      </div>
    </section>
  );
}