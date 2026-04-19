"use client";

import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/assets/balloon1.png",
    title: "Carnival Fun Birthday Decor",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/assets/balloon2.png",
    title: "Wild West Birthday Decor",
    rating: 4.8,
  },
  {
    id: 3,
    img: "/assets/balloon3.png",
    title: "Rockstar Music Birthday Decor",
    rating: 4.0,
  },
  {
    id: 4,
    img: "/assets/balloon4.png",
    title: "Mad Scientist Birthday Decor",
    rating: 4.0,
  },
];

export default function BalloonDecorSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500">
            Balloon Ring Decoration
          </h2>
          <p className="mt-3 text-sm text-pink-400 max-w-[500px] mx-auto">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.id}>
              
              {/* Image */}
              <div className="relative w-full h-[320px] rounded-[28px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2 text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-600">{item.rating}</span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>

            

              {/* Button */}
              <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold shadow-md hover:scale-105 transition">
                BOOK NOW →
              </button>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-14">
          <div className="w-full py-4 rounded-full bg-[#FFFFFF] text-center text-gray-600 font-semibold">
            EXPLORE MORE →
          </div>
        </div>

      </div>
    </section>
  );
}