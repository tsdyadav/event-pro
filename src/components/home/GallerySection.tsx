"use client";

import Image from "next/image";

const images = [
  "/assets/img5.png",
  "/assets/img2.png",
  "/assets/img3.png",
  "/assets/img4.png",
  "/assets/img5.png",
];

/* 🔥 MANUAL Y CONTROL */
const yOffsets = [
  "-translate-y-0",   // img1
  "-translate-y-10",  // img2
  "-translate-y-20",  // img3
  "-translate-y-12",  // img4
  "-translate-y-0",   // img5
];

export default function GallerySection() {
  return (
    <section className="relative w-full bg-[#f3f3f3] py-24 flex justify-center overflow-hidden">

      {/* 🔥 LEFT GLOW */}
      <div className="absolute left-[40px] bottom-[40px] w-[180px] h-[180px] 
        bg-purple-400 opacity-40 blur-[80px] rounded-full" />

      {/* ✅ MAIN CONTAINER */}
      <div className="relative w-full max-w-[1300px] h-[400px] flex flex-col">

        {/* IMAGES */}
        <div className="flex items-center justify-center gap-10">

          {images.map((src, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-[120px]
                w-[160px] h-[360px]

                ${yOffsets[index]}
                ${index === 2 ? "z-10" : ""}
              `}
            >
              {/* Shadow */}
              <div className="absolute inset-0 rounded-[120px] 
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]" />

              {/* Image */}
              <Image
                src={src}
                alt={`img-${index}`}
                fill
                className="object-cover object-center"
                sizes="160px"
                priority={index === 2}
              />
            </div>
          ))}

        </div>

        {/* ✅ TEXT BOTTOM ALIGNED */}
        <div className="text-center  pb-6">
          <h2 className="text-[28px] font-semibold text-pink-500">
            Welcome To DKG Pro
          </h2>

          <p className="text-[12px] text-pink-300 mt-2">
            we are thrilled to offer a range of exceptional decoration services tailored to elevate your space.
          </p>

          <div className="mt-6">
            <button className="px-8 py-3 rounded-full text-white text-sm font-semibold 
              bg-gradient-to-r from-pink-500 to-purple-500 
              shadow-[0_8px_20px_rgba(236,72,153,0.4)]
              hover:scale-105 transition">
              BOOK A CALL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}