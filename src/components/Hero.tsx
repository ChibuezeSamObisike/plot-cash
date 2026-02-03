"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1634757439914-23b8acb9d411?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const fadeUp = { opacity: 0, y: 24 };
const fadeUpView = { opacity: 1, y: 0 };
const t = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-light)/15%,transparent)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
        <div className="order-2 lg:order-1">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={fadeUp}
            animate={fadeUpView}
            transition={t}
          >
            Your land.
            <br />
            <span className="text-primary">Your collateral.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0 sm:text-xl"
            initial={fadeUp}
            animate={fadeUpView}
            transition={{ ...t, delay: 0.1 }}
          >
            Bought land from any onboarded real estate platform? Use it as
            collateral for a loan. Plot Cash connects your verified property to
            secure, transparent financing.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={fadeUp}
            animate={fadeUpView}
            transition={{ ...t, delay: 0.2 }}
          >
            <Link
              href="/dashboard"
              className="rounded-xl bg-primary px-8 py-4 text-center font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/30"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-xl border-2 border-primary bg-transparent px-8 py-4 text-center font-semibold text-primary transition-colors hover:bg-primary-muted"
            >
              How it works
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2 lg:aspect-auto lg:h-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...t, delay: 0.15 }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Aerial view of land and property — use your plot as collateral with Plot Cash"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
