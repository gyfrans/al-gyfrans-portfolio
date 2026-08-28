import Container from "@/components/common/container";

import CapabilityCard from "./capability-card";
import { capabilities } from "./data";

export default function CapabilitiesSection() {
  return (
    <section
      className="
        min-h-[calc(100vh-80px)]
        pt-28
        pb-12
        px-6
        md:pt-32
      "
    >
      <Container>
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/50
            "
          >
            Capabilities
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-normal
              tracking-tight
            "
          >
            What I Bring
          </h2>


          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-white/60
            "
          >
            Combining technical skills, curiosity, and adaptability
            to transform ideas into meaningful digital solutions.
          </p>


          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {capabilities.map((item, index) => (
              <CapabilityCard
                key={item.number}
                {...item}
                delay={index * 0.1}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}