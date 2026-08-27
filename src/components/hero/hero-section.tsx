import Container from "@/components/common/container";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        pt-32
        pb-16
      "
    >
      <Container>
        <div
          className="
            grid
            items-center
            gap-10
            md:grid-cols-[1.05fr_0.95fr]
            md:gap-12
          "
        >
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
