"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-between">
      <span
        className={`block h-0.5 w-full rounded-full bg-foreground transition-all ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-foreground transition-all ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-foreground transition-all ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-primary-muted lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile: slide-in panel + backdrop (Framer Motion) */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            aria-hidden={false}
          >
            <motion.button
              type="button"
              onClick={closeMobile}
              className="absolute inset-0 bg-black/40"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-8 border-l border-border bg-white p-6 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-primary-muted"
                  aria-label="Close menu"
                >
                  <MenuIcon open />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.17, duration: 0.25 }}
                >
                  <Link
                    href="/dashboard"
                    onClick={closeMobile}
                    className="mt-4 block rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-white hover:bg-primary-hover"
                  >
                    Dashboard
                  </Link>
                </motion.div>
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
