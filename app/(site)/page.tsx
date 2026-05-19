import Hero from "@/components/sections/Hero";
import BetaBand from "@/components/sections/BetaBand";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Packages from "@/components/sections/Packages";
import ROICalculator from "@/components/sections/ROICalculator";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BetaBand />
      <Services />
      <HowItWorks />
      <Packages />
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
