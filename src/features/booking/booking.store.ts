"use client";

import { create } from "zustand";
import { initialBookingDraft } from "./booking.helpers";
import type { BookingDraft } from "./booking.types";

type BookingStore = BookingDraft & {
  setField: <K extends keyof BookingDraft>(key: K, value: BookingDraft[K]) => void;
  reset: () => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  ...initialBookingDraft,
  setField: (key, value) => set({ [key]: value } as Partial<BookingStore>),
  reset: () => set(initialBookingDraft),
}));
