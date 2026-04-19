import Link from "next/link";
import type { Category } from "@/types/category";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="surface-card group overflow-hidden rounded-[26px] transition duration-300 hover:-translate-y-1"
    >
      <div
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.42)), url(${category.image})` }}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-ink-900">{category.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
      </div>
    </Link>
  );
}
