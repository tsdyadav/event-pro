import { CategoryCard } from "@/components/catalog/category-card";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFeaturedCategories } from "@/services/category.service";

export async function FeaturedCategories() {
  const categories = await getFeaturedCategories();

  return (
    <SectionShell className="section-gap">
      <div className="surface-card bg-[linear-gradient(180deg,#ffe9f7_0%,#fff7fc_100%)] p-6 md:p-8">
        <SectionHeading
          eyebrow="Homepage Block"
          title="Category-led discovery that matches your reference direction"
          description="These cards are reusable across homepage sections, the categories index, and campaign landing pages."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
