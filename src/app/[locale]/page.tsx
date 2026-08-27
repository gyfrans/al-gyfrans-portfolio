import HeroSection from "@/components/hero/hero-section";
import JourneySection from "@/components/experience/journey-section";
import AboutSection from "@/components/about/about-section";


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
      <AboutSection />
    </main>
  );
}
