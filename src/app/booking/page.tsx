import { BookingSidebar } from "@/components/booking/booking-sidebar";
import { BookingStepper } from "@/components/booking/booking-stepper";
import { StepCustomerInfo } from "@/components/booking/steps/step-customer-info";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionShell } from "@/components/layout/section-shell";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <SectionShell className="section-gap">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <BookingStepper />
            <StepCustomerInfo />
          </div>
          <BookingSidebar />
        </div>
      </SectionShell>
      <Footer />
    </>
  );
}
