import { PackageGrid } from "@/components/catalog/package-grid";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";
import { getPackagesByCategory } from "@/services/package.service";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const packages = await getPackagesByCategory(slug);

  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="surface-card p-8 md:p-10">
          <p className="eyebrow">Category</p>
          <h1 className="mt-3 text-3xl font-bold capitalize text-ink-900">
            {slug.replaceAll("-", " ")} decorations
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            This listing page is ready for filters, sorting, URL-driven query state, and API pagination later.
          </p>
        </div>
        <PackageGrid className="mt-8" items={packages} />
      </SectionShell>
      <Footer />
    </>
  );
}
