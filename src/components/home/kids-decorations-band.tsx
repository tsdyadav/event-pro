"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

type KidsDecorationsBandProps = {
  cards: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
};

export function KidsDecorationsBand({ cards }: KidsDecorationsBandProps) {
  const [startIndex, setStartIndex] = useState(0);
  const total = cards.length;

  const visibleCards = Array.from({ length: 3 }, (_, offset) => {
    return cards[(startIndex + offset) % total];
  });

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <div className="relative overflow-visible rounded-[18px] bg-[linear-gradient(90deg,#ed4ca8_0%,#9b58ff_100%)] px-6 py-10 pb-16 text-white shadow-[0_24px_70px_rgba(141,54,174,0.28)]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20px_20px,white_1.2px,transparent_1.2px)] [background-size:42px_42px]" />


        <div className="relative mt-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous kids decoration"
            onClick={() => setStartIndex((current) => (current - 1 + total) % total)}
            className="hidden rounded-full border border-white/40 bg-white/20 p-2 text-white transition hover:bg-white/30 md:block"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="grid flex-1 gap-4 md:grid-cols-3">
            {visibleCards.map((card, index) => (
              <article
                key={`${card.id}-${index}`}
                className={`overflow-hidden rounded-[18px] bg-white/10 backdrop-blur transition ${
                  index === 1 ? "md:scale-[1.02]" : "opacity-95"
                }`}
              >
                <div className="relative h-56">
                  <Image src={card.image} alt={card.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(15,3,22,0.68)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-2xl font-black">{card.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/85">{card.description}</p>
                    <div className="mt-3 text-[10px] tracking-[0.24em] text-[#ffd54f]">*****</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next kids decoration"
            onClick={() => setStartIndex((current) => (current + 1) % total)}
            className="hidden rounded-full border border-white/40 bg-white/20 p-2 text-white transition hover:bg-white/30 md:block"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Link
            href="/categories/kids-birthday"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-2 text-[11px] font-bold tracking-[0.16em] text-brand-500 shadow-[0_16px_35px_rgba(96,32,120,0.24)]"
          >
            SEE ALL <MoveRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

