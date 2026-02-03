const features = [
  {
    title: "Any onboarded platform",
    description:
      "Land purchased from any real estate company on our network qualifies. We verify ownership and value so you can borrow with confidence.",
    icon: "🏠",
  },
  {
    title: "Land as collateral",
    description:
      "Use your verified plot as security—no need to sell. Get liquidity while keeping ownership and future appreciation.",
    icon: "📄",
  },
  {
    title: "Transparent process",
    description:
      "Clear terms, fair valuation, and a simple dashboard. Track your loan and collateral status in one place.",
    icon: "✓",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-[var(--border)] bg-[var(--background)] px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Built for property owners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          One dashboard. Verified land. Straightforward loans.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-muted)] text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
