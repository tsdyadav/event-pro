import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/shared/section-heading";

export function TestimonialSection() {
  return (
    <SectionShell className="section-gap">
      <div className="surface-card p-6 md:p-10">
        <SectionHeading
          eyebrow="Social Proof"
          title="Testimonial UI ready for slider integration"
          description="Client-event platforms convert better when trust is visible. Keep testimonials, ratings, and delivery confidence high on the homepage and detail pages."
          align="center"
        />
        <div className="mx-auto mt-8 max-w-4xl rounded-[28px] bg-[#f3e4ee] p-4 md:p-6">
          <div className="grid gap-6 rounded-[24px] bg-white p-5 md:grid-cols-[220px_1fr]">
            <div className="min-h-[220px] rounded-[20px] bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center" />
            <div className="flex flex-col justify-between">
              <p className="text-lg leading-8 text-slate-700">
                “Working with this team was an absolute pleasure. Their expertise and commitment to execution helped us deliver a polished celebration experience.”
              </p>
              <div className="pt-6">
                <p className="font-semibold text-ink-900">John Doe</p>
                <p className="text-sm text-slate-500">CEO, XYZ Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
