type Props = {
  price: number;
  originalPrice?: number;
};

export function PriceTag({ price, originalPrice }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-ink-900">₹{price.toLocaleString("en-IN")}</span>
      {originalPrice ? (
        <span className="text-sm text-slate-400 line-through">₹{originalPrice.toLocaleString("en-IN")}</span>
      ) : null}
    </div>
  );
}
