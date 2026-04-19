import { PackageGrid } from "@/components/catalog/package-grid";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFeaturedPackages } from "@/services/package.service";

export async function CuratedCollections() {
  const items = await getFeaturedPackages();

  return (
    <SectionShell className="section-gap">
      <div className="surface-card p-6 md:p-8">
        <SectionHeading
          eyebrow="Featured Packages"
          title="A scalable merchandising grid for premium package storytelling"
          description="This section can later become a carousel, tabbed theme showcase, or category-specific campaign strip without changing the package card contract."
        />
        <PackageGrid className="mt-8" items={items} />
      </div>
    </SectionShell>
  );
}
