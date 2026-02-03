"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 py-16 sm:py-24">
      <motion.div
        className="mx-auto max-w-3xl rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/20 sm:px-12 sm:py-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to use your land as collateral?
        </h2>
        <p className="mt-4 text-white/90">
          Connect your real estate account and see your options on the
          dashboard.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-white/95"
          >
            Open Dashboard
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
