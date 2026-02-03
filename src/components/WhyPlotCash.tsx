const reasons = [
  {
    title: "Unlock value without selling",
    description:
      "Keep your land and still access liquidity. Your plot stays in your name while you use its verified value to secure a loan.",
  },
  {
    title: "Works with your existing purchase",
    description:
      "If you already bought land through an onboarded real estate company, you may qualify. No need to buy through us—we connect to your existing ownership.",
  },
  {
    title: "Simple dashboard",
    description:
      "See your plots, loan options, and applications in one place. Connect once, then manage everything from your Plot Cash dashboard.",
  },
];

export function WhyPlotCash() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why Plot Cash
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Land as collateral, designed around how you already buy and own
          property.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
