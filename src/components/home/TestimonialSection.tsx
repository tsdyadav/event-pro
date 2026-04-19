"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    img: "/assets/testimonial.png",
    avatar: "/assets/Avatar.png",
    text: "Working with this team was an absolute pleasure. Their expertise and commitment to excellence helped us achieve results beyond our expectations. Highly recommended!",
    name: "John Doe",
    role: "CEO, XYZ Corp",
  },
  {
    id: 2,
    img: "/assets/testimonial2.png",
    avatar: "/assets/Avatar2.png",
    text: "Amazing service! Everything was perfectly arranged and exceeded expectations.",
    name: "Aman Sharma",
    role: "Founder, Eventify",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const item = testimonials[index];

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Success Stories That Inspire <br />
            Confidence in What We Do
          </h2>

          <p className="mt-3 text-sm text-pink-400 max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius elementum tristique.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="relative mt-14 flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] w-10 h-10 rounded-full bg-[#6b2c3d] text-white flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] w-10 h-10 rounded-full bg-[#6b2c3d] text-white flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>

          {/* OUTER CARD */}
          <div className="w-full max-w-[900px] bg-[#e6dce1] rounded-[28px] p-6 flex gap-6 items-center">

            {/* LEFT IMAGE */}
            <div className="relative w-[220px] h-[220px] rounded-[20px] overflow-hidden flex-shrink-0">
              <Image
                src={item.img}
                alt="user"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">

              {/* INNER WHITE CARD */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">

                {/* TEXT */}
                <p className="text-gray-700 leading-relaxed">
                  "{item.text}"
                </p>

                {/* USER INFO */}
                <div className="mt-6 flex items-center gap-3">

                  {/* AVATAR */}
                  <div className="relative w-[58px] h-[58px] rounded-[35px] overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* NAME */}
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}