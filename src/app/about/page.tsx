import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/shared/section-heading";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="surface-card p-8 md:p-12">
          <SectionHeading
            eyebrow="About Us"
            title="A brand-first event decor frontend built for trust and conversion"
            description="Use this page to showcase your team, process, service cities, execution quality, and why clients should trust you with milestone celebrations."
          />
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
