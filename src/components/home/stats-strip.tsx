import { SectionShell } from "@/components/layout/section-shell";

const stats = [
  { label: "Years of experience", value: "10+" },
  { label: "Completed projects", value: "20k" },
  { label: "Team members", value: "240+" },
  { label: "Advanced tools", value: "12+" },
];

export function StatsStrip() {
  return (
    <SectionShell className="section-gap">
      <div className="surface-card grid gap-6 p-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="bg-brand-gradient bg-clip-text text-4xl font-black text-transparent">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
