"use client";

import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/assets/showcase1.png",
  },
  {
    id: 2,
    img: "/assets/showcase2.png",
  },
  {
    id: 3,
    img: "/assets/showcase3.png",
  },
  {
    id: 4,
    img: "/assets/showcase3.png",
  },
];

export default function BirthdayShowcase() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-500">
          Level Up Your Birthday Party
        </h2>

        <p className="mt-3 max-w-[500px] text-sm text-pink-400">
          we are thrilled to offer a range of exceptional decoration services
          tailored to elevate your space.
        </p>

        {/* Top Banner Image */}
        <div className="relative mt-8 h-[260px] md:h-[320px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/assets/banner.png"
            alt="banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="grid overflow-hidden rounded-[24px] bg-white md:grid-cols-2"
            >
              
              {/* Text Section */}
              <div
                className={`p-6 flex flex-col justify-center ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-pink-400">
                  At your location
                </p>

                <h3 className="mt-2 text-xl font-bold text-pink-500">
                  Minnie Mouse Themed <br /> Birthday Party
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Learn planning, coordination, and leadership skills to manage
                  projects effectively.
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2 text-sm">
                  ⭐⭐⭐⭐ <span className="text-gray-500">4.0</span>
                </div>

                {/* Button */}
                <div className="mt-5 flex items-center gap-4">
                  <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 text-white text-sm font-semibold">
                    BOOK NOW →
                  </button>
                  <span className="text-xl">♡</span>
                </div>
              </div>

              {/* Image Section */}
              <div
                className={`relative h-[220px] md:h-full ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={item.img}
                  alt="birthday"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-8 text-center">
          <button className="text-sm font-semibold text-gray-500">
            EXPLORE MORE →
          </button>
        </div>

      </div>
    </section>
  );
}