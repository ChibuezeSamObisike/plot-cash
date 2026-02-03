const faqs = [
  {
    q: "What land can I use as collateral?",
    a: "Any plot you’ve purchased through a real estate platform we’ve onboarded. Once you connect that account on Plot Cash, we verify your ownership and the property details. If your platform isn’t listed yet, you can register interest on the dashboard.",
  },
  {
    q: "Do I need to sell my land?",
    a: "No. You keep full ownership of your land. We use it as security for the loan—you get liquidity without giving up your plot or future appreciation.",
  },
  {
    q: "How do I connect my real estate account?",
    a: "Sign in to your Plot Cash dashboard and follow the steps to link your real estate platform account. We only request what’s needed to verify ownership and value.",
  },
  {
    q: "Where can I see my loans and plots?",
    a: "Everything is in one place: the Plot Cash dashboard. You’ll see your verified plots, active loans, and can apply for new loans using eligible land as collateral.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-border bg-background px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          Quick answers about using your land as collateral.
        </p>
        <dl className="mt-14 space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-foreground">{faq.q}</dt>
              <dd className="mt-3 text-muted">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
