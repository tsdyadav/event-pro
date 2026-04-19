import type { BookingDraft } from "./booking.types";

export const initialBookingDraft: BookingDraft = {
  currentStep: 1,
  packageId: null,
  addons: [],
  eventDate: "",
  eventSlot: "",
  location: "",
  customerName: "",
  customerPhone: "",
  notes: "",
};
