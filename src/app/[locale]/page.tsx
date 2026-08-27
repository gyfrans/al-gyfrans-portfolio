import HeroSection from "@/components/hero/hero-section";


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
    </main>
  );
}
