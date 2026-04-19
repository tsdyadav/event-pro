import { Star } from "lucide-react";

export function RatingStars({ value }: { value: number }) {
  const filled = Math.round(value);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3.5 ${index < filled ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}
