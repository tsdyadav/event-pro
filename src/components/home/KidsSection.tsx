"use client";

import Image from "next/image";

const kidsThemes = [
  { image: "elephant.png", alt: "Elephant theme", label: "BOOK NOW" },
  { image: "kid2.png", alt: "Princess theme", label: "BOOK NOW" },
  { image: "kid3.png", alt: "Fantasy theme", label: "BOOK NOW" },
  { image: "kid4.png", alt: "Cartoon theme", label: "BOOK NOW" },
  { image: "kid6.png", alt: "Spiderman theme", label: "SPIDER MAN" },
  { image: "kid7.png", alt: "Jungle theme", label: "JUNGLE" },
];

export default function KidsSection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-7xl px-3 pb-20 sm:px-4 md:mt-24 lg:mt-28">
      <div className="relative pt-12 sm:pt-16 md:pt-20">
        <div
          className="relative overflow-visible rounded-[20px] border border-[#f4bfd6] bg-[#ffd8e8] px-4 pb-12 pt-14 shadow-[0_18px_45px_rgba(220,164,192,0.22)] sm:px-6 md:rounded-[22px] md:px-8 md:pt-16 lg:px-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 26px 26px, rgba(232, 170, 202, 0.16) 0, rgba(232, 170, 202, 0.16) 2px, transparent 2px), radial-gradient(circle at 52px 52px, rgba(232, 170, 202, 0.12) 0, rgba(232, 170, 202, 0.12) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[120px] -translate-x-1/2 -translate-y-[104%] sm:w-[150px] md:w-[190px]">
            <Image
              src="/assets/stars.png"
              alt="Decorative stars"
              width={190}
              height={94}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="pointer-events-none absolute left-4 top-0 z-20 w-[78px] -translate-y-[68%] sm:left-6 sm:w-[96px] md:left-8 md:w-[118px] lg:left-10 lg:w-[128px]">
            <Image
              src="/assets/girl.png"
              alt="Girl decoration"
              width={128}
              height={162}
              className="h-auto w-full"
            />
          </div>

          <div className="pointer-events-none absolute right-4 top-0 z-20 w-[82px] -translate-y-[68%] sm:right-6 sm:w-[100px] md:right-8 md:w-[122px] lg:right-10 lg:w-[132px]">
            <Image
              src="/assets/boy.png"
              alt="Boy decoration"
              width={132}
              height={164}
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2rem] font-extrabold tracking-tight text-fuchsia-600 sm:text-[2.1rem]">
              Kid&apos;s Theme Decoration
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[11px] leading-5 text-fuchsia-500 sm:text-xs">
              we are thrilled to offer a range of exceptional decoration
              <br className="hidden sm:block" />
              services tailored to elevate your space.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 justify-items-center gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            {kidsThemes.map((theme) => (
              <div
                key={theme.image}
                className="flex w-[92px] flex-col items-center sm:w-[98px] md:w-[102px]"
              >
                <div className="relative z-10 mb-[-10px] h-[68px] w-[68px] overflow-hidden rounded-full bg-[#ffc4de] sm:h-[74px] sm:w-[74px] md:h-[78px] md:w-[78px]">
                  <Image
                    src={`/assets/${theme.image}`}
                    alt={theme.alt}
                    width={78}
                    height={78}
                    className="h-full w-full object-cover"
                  />
                </div>

                <button
                  type="button"
                  className="flex h-[26px] w-full items-end justify-center rounded-[8px] bg-gradient-to-r from-fuchsia-500 to-violet-500 pb-1.5 text-[7px] font-bold tracking-[0.08em] text-white shadow-[0_10px_18px_rgba(174,82,213,0.18)]"
                >
                  {theme.label}
                </button>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <button
              type="button"
              className="rounded-full border border-fuchsia-400 bg-white px-10 py-2 text-[10px] font-bold tracking-[0.2em] text-fuchsia-500 shadow-[0_10px_28px_rgba(255,255,255,0.95)]"
            >
              SEE ALL -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
