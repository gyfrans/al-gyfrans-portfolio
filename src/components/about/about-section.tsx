import Container from "@/components/common/container";
import AboutContent from "./about-content";

export default function AboutSection() {
  return (
    <section
      className="
        pt-44
        pb-32
        md:pt-56
        md:pb-44
      "
    >
      <Container>
        <AboutContent />
      </Container>
    </section>
  );
}