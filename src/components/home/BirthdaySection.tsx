"use client";

import Image from "next/image";

const images = [
  "/assets/sparkler.png",
  "/assets/cake.png",
  "/assets/balloons.png",
  "/assets/confetti.png",
];

export default function BirthdaySection() {
  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        
        {/* Heading */}
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-extrabold leading-tight text-pink-500">
            Make Your Birthday <br /> Extra Special
          </h2>

          <p className="mt-4 text-sm text-pink-400">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Images Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-[220px] w-full overflow-hidden rounded-[20px]"
            >
              <Image
                src={src}
                alt="birthday"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}