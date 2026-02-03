"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={ref}
      className="border-b border-border bg-background px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Built for property owners
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          One dashboard. Verified land. Straightforward loans.
        </motion.p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
