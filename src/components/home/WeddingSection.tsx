"use client";

import Image from "next/image";

const images = [
  "/assets/wedding1.png",
  "/assets/wedding2.png",
  "/assets/wedding3.png",
  "/assets/wedding4.png",
];

export default function WeddingSection() {
  return (
    <section className="w-full px-4 py-16">
      
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Make Your’s Wedding Extra Special
          </h2>

          <p className="mt-3 text-sm md:text-base text-pink-400 max-w-[600px] mx-auto">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Images Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[220px] md:h-[260px] rounded-[24px] overflow-hidden"
            >
              <Image
                src={src}
                alt="wedding"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Explore More Bar */}
        <div className="mt-10">
          <div className="w-full py-4 rounded-full bg-gray-100 text-center text-gray-600 font-semibold tracking-wide">
            EXPLORE MORE →
          </div>
        </div>

      </div>
    </section>
  );
}