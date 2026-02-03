import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyPlotCash } from "@/components/WhyPlotCash";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <WhyPlotCash />
      <Partners />
      <FAQ />
      <CTA />
    </main>
  );
}
