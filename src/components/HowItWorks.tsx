const steps = [
  {
    step: 1,
    title: "Buy land from a partner",
    description:
      "Purchase your plot through any real estate platform we’ve onboarded. Your purchase is recorded and verifiable.",
  },
  {
    step: 2,
    title: "Connect on Plot Cash",
    description:
      "Sign in to Plot Cash and link your real estate account. We verify your ownership and the property details.",
  },
  {
    step: 3,
    title: "Use land as collateral",
    description:
      "Apply for a loan using your verified land as collateral. Get approved and receive funds—all from your dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--background)] to-[var(--primary-muted)]/30 px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[var(--muted)]">
          Three steps from land owner to loan.
        </p>
        <div className="mt-14 space-y-10">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="flex gap-6 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
