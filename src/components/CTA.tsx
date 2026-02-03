import Link from "next/link";

export function CTA() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[var(--primary)] px-6 py-14 text-center shadow-xl shadow-[var(--primary)]/20 sm:px-12 sm:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to use your land as collateral?
        </h2>
        <p className="mt-4 text-white/90">
          Connect your real estate account and see your options on the
          dashboard.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[var(--primary)] transition-colors hover:bg-white/95"
        >
          Open Dashboard
        </Link>
      </div>
    </section>
  );
}
