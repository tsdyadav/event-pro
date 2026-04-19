import Link from "next/link";
import { PriceTag } from "@/components/shared/price-tag";
import { RatingStars } from "@/components/shared/rating-stars";
import type { DecorPackage } from "@/types/package";

export function PackageSummary({ item }: { item: DecorPackage }) {
  return (
    <div className="surface-card p-8">
      <p className="eyebrow">{item.category}</p>
      <h1 className="mt-3 text-4xl font-black text-ink-900">{item.title}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      <div className="mt-4">
        <RatingStars value={item.rating} />
      </div>
      <div className="mt-6">
        <PriceTag price={item.basePrice} originalPrice={item.originalPrice} />
      </div>
      <div className="mt-6 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Included items</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {item.includedItems.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/booking"
          className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
        >
          Start booking
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-600"
        >
          Ask a question
        </Link>
      </div>
    </div>
  );
}
