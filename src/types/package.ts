export interface PackageImage {
  id: string;
  url: string;
  alt: string;
}

export interface PackageAddon {
  id: string;
  name: string;
  price: number;
}

export interface DecorPackage {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  shortDescription: string;
  description: string;
  basePrice: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  gallery: PackageImage[];
  includedItems: string[];
  addons: PackageAddon[];
  isFeatured?: boolean;
}
