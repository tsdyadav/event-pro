"use client";

import Image from "next/image";

export default function OccasionSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        
        <div className="grid md:grid-cols-2 items-center gap-8">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 leading-tight">
              Make Every Occasion <br /> Extra Special
            </h2>

            <p className="mt-4 text-sm md:text-base text-pink-400 max-w-[450px]">
              we are thrilled to offer a range of exceptional decoration services
              tailored to elevate your space.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition">
              EXPLORE MORE →
            </button>
          </div>

          {/* RIGHT IMAGES (ALL INSIDE BOX) */}
          <div className="relative overflow-hidden">
            
            <div className="flex items-center gap-6">
              
              {/* Image 1 */}
              <div className="relative w-[220px] h-[300px] rounded-[24px] overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/occasion1.png"
                  alt="img1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="relative w-[220px] h-[300px] rounded-[24px] overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/occasion2.png"
                  alt="img2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 (THIN SLICE) */}
              <div className="relative w-[220px] h-[300px] rounded-[24px] overflow-hidden flex-shrink-0 ml-[-160px]">
                <Image
                  src="/assets/occasion3.png"
                  alt="img3"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}