import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";

export default function BookingSuccessPage() {
  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="surface-card mx-auto max-w-2xl p-10 text-center">
          <p className="eyebrow">Booking Saved</p>
          <h1 className="mt-3 text-3xl font-bold text-ink-900">Your enquiry is ready for backend integration</h1>
          <p className="mt-3 text-sm text-slate-600">
            Use this success route later for booking ID, confirmation summary, payment CTA, or support follow-up.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
          >
            Continue browsing
          </Link>
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
