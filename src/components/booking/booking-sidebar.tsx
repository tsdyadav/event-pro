"use client";

import { useBookingStore } from "@/features/booking/booking.store";
import { PriceTag } from "@/components/shared/price-tag";

export function BookingSidebar() {
  const { packageId, customerName, location } = useBookingStore();

  return (
    <aside className="surface-card h-fit p-6">
      <p className="eyebrow">Booking Summary</p>
      <h2 className="mt-3 text-2xl font-bold text-ink-900">Frontend booking state</h2>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <p>Selected package: {packageId ?? "Pending selection"}</p>
        <p>Customer: {customerName || "Not added yet"}</p>
        <p>Location: {location || "Not added yet"}</p>
        <PriceTag price={2499} originalPrice={4999} />
      </div>
    </aside>
  );
}
