"use client";

import Image from "next/image";

export default function RomanticSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Romantic Couple Experiense
          </h2>

          <p className="mt-3 text-sm text-pink-400 max-w-[500px] mx-auto">
            we are thrilled to offer a range of exceptional decoration
            services tailored to elevate your space.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT BIG CARD */}
          <div className="relative col-span-2 h-[420px] rounded-[24px] overflow-hidden">
            <Image
              src="/assets/romantic.png"
              alt="romantic"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold leading-tight">
                Minnie Mouse Themed <br /> Birthday Party
              </h3>

              <p className="text-sm mt-2 text-white/80">
                Learn planning, coordination, and leadership skills to manage projects effectively.
              </p>

              <div className="mt-3 text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆ <span className="text-white ml-1">4.0</span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* IMAGE 1 */}
            <div className="relative h-[200px] rounded-[20px] overflow-hidden">
              <Image src="/assets/romantic1.png" alt="" fill className="object-cover" />
            </div>

            {/* IMAGE 2 */}
            <div className="relative h-[200px] rounded-[20px] overflow-hidden">
              <Image src="/assets/romantic2.png" alt="" fill className="object-cover" />
            </div>

            {/* IMAGE 3 */}
            <div className="relative h-[200px] rounded-[20px] overflow-hidden">
              <Image src="/assets/romantic3.png" alt="" fill className="object-cover" />
            </div>

            {/* CTA BOX */}
            <div className="h-[200px] rounded-[20px] flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg">
              EXPLORE <br /> MORE →
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}