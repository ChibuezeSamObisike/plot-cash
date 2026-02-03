import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span className="rounded-lg bg-primary px-2 py-0.5 text-white">
            Plot
          </span>
          <span>Cash</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <Link
            href="/#how-it-works"
            className="text-sm text-muted hover:text-primary"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            className="text-sm text-muted hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            className="text-sm text-muted hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-muted hover:text-primary"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-sm text-muted">
        © {new Date().getFullYear()} Plot Cash. Land as collateral, made simple.
      </p>
    </footer>
  );
}
