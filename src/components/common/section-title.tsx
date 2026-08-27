interface SectionTitleProps {
  eyebrow?: string;
  title: string;
}

export default function SectionTitle({
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}