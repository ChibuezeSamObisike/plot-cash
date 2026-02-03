const stats = [
  { value: "Verified", label: "Land from partner platforms" },
  { value: "One", label: "Dashboard for plots & loans" },
  { value: "Transparent", label: "Valuation & terms" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
