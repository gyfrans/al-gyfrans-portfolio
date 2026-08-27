import FadeIn from "@/components/motion/fade-in";

interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
  stack: string[];
  delay?: number;
}

export default function JourneyCard({
  year,
  title,
  description,
  stack,
  delay = 0,
}: JourneyCardProps) {
  return (
    <FadeIn delay={delay}>
      <article
        className="
          grid
          grid-cols-[120px_1fr]
          gap-8
          border-t
          border-border
          py-10
        "
      >
        <div>
          <p className="text-sm text-muted">
            {year}
          </p>
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-medium
              tracking-tight
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              leading-relaxed
              text-muted
            "
          >
            {description}
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {stack.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-border
                  px-3
                  py-1
                  text-xs
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}