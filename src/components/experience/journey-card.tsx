import FadeIn from "@/components/motion/fade-in";

interface JourneyCardProps {
  year: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  delay?: number;
}

export default function JourneyCard({
  year,
  category,
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
          gap-8
          
          
          py-12
          md:grid-cols-[80px_1fr]
        "
      >
        <div>
          <p className="
            text-sm
            text-muted
          ">
            {year}
          </p>
        </div>


        <div className="max-w-2xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-muted
            "
          >
            {category}
          </p>


          <h3
            className="
              mt-4
              text-3xl
              font-medium
              tracking-tight
            "
          >
            {title}
          </h3>


          <p
            className="
              mt-5
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