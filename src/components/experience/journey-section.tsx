import Container from "@/components/common/container";
import FadeIn from "@/components/motion/fade-in";
import JourneyCard from "./journey-card";
import { journey } from "@/data/journey";

export default function JourneySection() {
  return (
    <section
      className="
        pt-32
        pb-32
      "
    >
      <Container>

        <FadeIn>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-muted
            "
          >
            Experience
          </p>


          <h2
            className="
              mt-5
              text-5xl
              font-medium
              tracking-tight
            "
          >
            My Journey
          </h2>

        </FadeIn>


        <div className="mt-12">

          {journey.map((item,index)=>(
            <JourneyCard
              key={`${item.year}-${item.category}`}
              {...item}
              delay={index * 0.1}
            />
          ))}

        </div>


      </Container>
    </section>
  );
}