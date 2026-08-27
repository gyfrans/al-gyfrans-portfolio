
import Container from "@/components/common/container";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        pt-32
      "
    >
      <Container>
        <div
          className="
            relative
            flex
            min-h-[calc(100vh-160px)]
            items-center
          "
        >
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
