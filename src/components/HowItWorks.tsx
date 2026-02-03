"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: 1,
    title: "Buy land from a partner",
    description:
      "Purchase your plot through any real estate platform we've onboarded. Your purchase is recorded and verifiable.",
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="border-b border-border bg-gradient-to-b from-background to-primary-muted/30 px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-center text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Three steps from land owner to loan.
        </motion.p>
        <div className="mt-14 space-y-10">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
