"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground"
        >
          <span className="rounded-lg bg-primary px-2 py-0.5 text-white">
            Plot
          </span>
          <span>Cash</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
