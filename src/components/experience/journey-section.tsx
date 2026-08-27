import Container from "@/components/common/container";
import SectionTitle from "@/components/common/section-title";
import JourneyCard from "./journey-card";
import { journey } from "@/data/journey";

export default function JourneySection() {
  return (
    <section
      className="
        py-32
      "
    >
      <Container>

        <SectionTitle
          eyebrow="Experience"
          title="My Journey"
          description="A timeline of experiences, projects, and technologies that shaped my development journey."
        />

        <div
          className="
            mt-20
          "
        >
          {journey.map((item, index) => (
            <JourneyCard
              key={item.year}
              {...item}
              delay={index * 0.15}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}