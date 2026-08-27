import HeroSection from "@/components/hero/hero-section";
import JourneySection from "@/components/experience/journey-section";
import AboutSection from "@/components/about/about-section";
import CapabilitiesSection from "@/components/capabilities/capabilities-section";


interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}


export default async function Home({
  params,
}: PageProps) {

  await params;

  return (
    <main>
      <HeroSection />
<JourneySection />
      <CapabilitiesSection />
      <AboutSection />
    </main>
  );
}
