export function Partners() {
  return (
    <section className="border-b border-border bg-primary-muted/30 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Land from any onboarded platform
        </h2>
        <p className="mt-4 text-muted">
          We partner with real estate companies so that land you’ve already
          bought can be verified and used as collateral. More partners are
          being added—check your dashboard to see if your platform is connected.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {["Real estate partners", "Coming soon", "Dashboard"].map((label) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-medium text-muted"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
