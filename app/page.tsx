import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
