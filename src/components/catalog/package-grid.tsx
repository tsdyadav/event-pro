import { cn } from "@/lib/utils";
import type { DecorPackage } from "@/types/package";
import { PackageCard } from "./package-card";

type Props = {
  items: DecorPackage[];
  className?: string;
};

export function PackageGrid({ items, className }: Props) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((item) => (
        <PackageCard key={item.id} item={item} />
      ))}
    </div>
  );
}
