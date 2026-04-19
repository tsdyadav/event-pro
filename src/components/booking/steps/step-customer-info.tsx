"use client";

import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/features/booking/booking.store";

export function StepCustomerInfo() {
  const { customerName, customerPhone, notes, setField } = useBookingStore();

  const handleChange =
    (field: "customerName" | "customerPhone" | "notes") =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setField(field, event.target.value);
    };

  return (
    <div className="surface-card p-6 md:p-8">
      <p className="eyebrow">Step Component</p>
      <h2 className="mt-3 text-3xl font-bold text-ink-900">Customer information</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        This is wired to Zustand already, so the booking flow can scale into step persistence and backend submission without refactoring local component state later.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          value={customerName}
          onChange={handleChange("customerName")}
          placeholder="Customer name"
          className="rounded-2xl border border-brand-100 bg-white px-4 py-3 outline-none ring-brand-100 focus:ring-2"
        />
        <input
          value={customerPhone}
          onChange={handleChange("customerPhone")}
          placeholder="Phone number"
          className="rounded-2xl border border-brand-100 bg-white px-4 py-3 outline-none ring-brand-100 focus:ring-2"
        />
        <textarea
          value={notes}
          onChange={handleChange("notes")}
          placeholder="Special instructions"
          className="min-h-[140px] rounded-2xl border border-brand-100 bg-white px-4 py-3 outline-none ring-brand-100 focus:ring-2 md:col-span-2"
        />
      </div>
      <div className="mt-6 flex justify-end">
        <Button>Continue to review</Button>
      </div>
    </div>
  );
}
