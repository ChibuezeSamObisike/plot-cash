"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "Verified", label: "Land from partner platforms" },
  { value: "One", label: "Dashboard for plots & loans" },
  { value: "Transparent", label: "Valuation & terms" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-b border-border bg-white px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
