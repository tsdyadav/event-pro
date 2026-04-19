import type { DecorPackage } from "@/types/package";

export function ProductGallery({ item }: { item: DecorPackage }) {
  return (
    <div className="surface-card overflow-hidden p-4">
      <div
        className="min-h-[420px] rounded-[26px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.heroImage})` }}
      />
      <div className="mt-4 grid grid-cols-3 gap-3">
        {item.gallery.slice(0, 3).map((image) => (
          <div
            key={image.id}
            className="aspect-[0.95] rounded-[20px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
      </div>
    </div>
  );
}
