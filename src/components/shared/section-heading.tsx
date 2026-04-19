type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-black tracking-tight text-ink-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
