import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <PrivacySection />
      <RoadmapSection />
      <FAQSection />
    </>
  );
}
