import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";

export function CtaBand() {
  return (
    <SectionShell className="section-gap">
      <div className="surface-card overflow-hidden bg-[linear-gradient(135deg,#fff0f8_0%,#f7ecff_100%)] p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Conversion CTA</p>
            <h2 className="mt-3 text-3xl font-black text-ink-900 md:text-5xl">
              Turn a visual homepage into a real booking funnel
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              This section is intentionally built as a reusable campaign CTA so you can repurpose it for seasonal offers, wedding bundles, kids party launches, or premium consultation flows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
              >
                Book a call
              </Link>
              <Link
                href="/categories"
                className="rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-600"
              >
                View categories
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["gift", "sparkler", "balloons"].map((item) => (
              <div
                key={item}
                className="aspect-[0.7] rounded-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#ffe5f5_100%)]"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
