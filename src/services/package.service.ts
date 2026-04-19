import packages from "@/data/packages.json";
import type { DecorPackage } from "@/types/package";

export async function getPackages(): Promise<DecorPackage[]> {
  return packages as DecorPackage[];
}

export async function getFeaturedPackages(): Promise<DecorPackage[]> {
  return (packages as DecorPackage[]).filter((item) => item.isFeatured);
}

export async function getPackagesByCategory(slug: string): Promise<DecorPackage[]> {
  return (packages as DecorPackage[]).filter((item) => item.categorySlug === slug);
}

export async function getPackageBySlug(slug: string): Promise<DecorPackage | null> {
  return (packages as DecorPackage[]).find((item) => item.slug === slug) ?? null;
}
