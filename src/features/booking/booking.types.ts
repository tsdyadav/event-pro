export type BookingStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface BookingDraft {
  currentStep: BookingStep;
  packageId: string | null;
  addons: string[];
  eventDate: string;
  eventSlot: string;
  location: string;
  customerName: string;
  customerPhone: string;
  notes: string;
}
