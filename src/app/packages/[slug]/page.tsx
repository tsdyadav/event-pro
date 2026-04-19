import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";
import { ProductGallery } from "@/components/product/product-gallery";
import { PackageSummary } from "@/components/product/package-summary";
import { getPackageBySlug } from "@/services/package.service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getPackageBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery item={item} />
          <PackageSummary item={item} />
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
