import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-8">
            <h1 className="text-3xl font-bold text-ink-900">Contact the decor team</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This page is ready for form integration, WhatsApp CTA, and service-area support content.
            </p>
          </div>
          <div className="surface-card p-8">
            <div className="space-y-4 text-sm text-slate-600">
              <p>Phone: +91 90000 00000</p>
              <p>Email: hello@eventdecor.test</p>
              <p>Service cities: Chennai, Bengaluru, Hyderabad</p>
              <Button className="w-full">Send enquiry</Button>
            </div>
          </div>
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
