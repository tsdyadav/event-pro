import categories from "@/data/categories.json";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  return categories as Category[];
}

export async function getFeaturedCategories(): Promise<Category[]> {
  return (categories as Category[]).slice(0, 4);
}
