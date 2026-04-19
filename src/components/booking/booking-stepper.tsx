const steps = [
  "Package",
  "Event details",
  "Date & venue",
  "Add-ons",
  "Customer",
  "Review",
];

export function BookingStepper() {
  return (
    <div className="surface-card p-5">
      <div className="grid gap-3 md:grid-cols-6">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`rounded-full px-4 py-3 text-center text-sm font-semibold ${
              index === 0 ? "bg-brand-gradient text-white" : "bg-brand-50 text-brand-600"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
