type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-slate-600 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}