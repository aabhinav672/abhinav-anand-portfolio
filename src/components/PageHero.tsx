interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
