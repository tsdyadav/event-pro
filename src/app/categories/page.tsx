import { CategoryCard } from "@/components/catalog/category-card";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCategories } from "@/services/category.service";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <SectionHeading
          eyebrow="Browse Themes"
          title="Explore every decoration category"
          description="This route is your full discovery hub for themed birthdays, romantic setups, rooftop styling, festive decor, and more."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
