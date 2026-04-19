import Link from "next/link";
import { Heart } from "lucide-react";
import { PriceTag } from "@/components/shared/price-tag";
import { RatingStars } from "@/components/shared/rating-stars";
import type { DecorPackage } from "@/types/package";

export function PackageCard({ item }: { item: DecorPackage }) {
  return (
    <article className="surface-card overflow-hidden rounded-[28px]">
      <div
        className="h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.heroImage})` }}
      />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">At your location</p>
            <h3 className="mt-2 text-xl font-bold text-ink-900">{item.title}</h3>
          </div>
          <button className="rounded-full border border-brand-100 p-2 text-slate-500">
            <Heart className="size-4" />
          </button>
        </div>
        <p className="text-sm leading-6 text-slate-600">{item.shortDescription}</p>
        <RatingStars value={item.rating} />
        <div className="flex items-center justify-between gap-3">
          <PriceTag price={item.basePrice} originalPrice={item.originalPrice} />
          <Link
            href={`/packages/${item.slug}`}
            className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white"
          >
            Book now
          </Link>
        </div>
      </div>
    </article>
  );
}
