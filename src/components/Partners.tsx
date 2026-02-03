"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const labels = ["Real estate partners", "Coming soon", "Dashboard"];

export function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-b border-border bg-primary-muted/30 px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Land from any onboarded platform
        </motion.h2>
        <motion.p
          className="mt-4 text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          We partner with real estate companies so that land you've already
          bought can be verified and used as collateral. More partners are
          being added—check your dashboard to see if your platform is connected.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {labels.map((label, i) => (
            <motion.div
              key={label}
              className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-medium text-muted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
