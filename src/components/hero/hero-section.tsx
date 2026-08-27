import Container from "@/components/common/container";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";


export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        pt-32
      "
    >

      <Container>

        <div
          className="
            grid
            items-center
            gap-12
            md:grid-cols-2
          "
        >

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}
