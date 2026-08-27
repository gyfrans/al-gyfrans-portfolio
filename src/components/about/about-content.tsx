import FadeIn from "@/components/motion/fade-in";

export default function AboutContent() {
  return (
    <FadeIn>
      <div className="max-w-5xl">

        <p
          className="
            mb-8
            text-sm
            uppercase
            tracking-[0.3em]
            text-muted
          "
        >
          About Me
        </p>


        <h2
          className="
            max-w-4xl
            text-3xl
            font-medium
            leading-[1.1]
            tracking-tight
            md:text-5xl
          "
        >
          Building solutions,
          <br />
          learning continuously,
          <br />
          and adapting to challenges.
        </h2>


        <p
          className="
            mt-10
            max-w-3xl
            text-base
            leading-relaxed
            text-muted
            md:text-lg
          "
        >
          I see technology as a tool to solve problems,
          create impact, and turn ideas into reality.
          My journey has shaped me into someone who enjoys
          learning new things, adapting to challenges,
          and building solutions through collaboration
          and technology.
        </p>


        <div
          className="
            mt-16
            grid
            gap-10
            md:grid-cols-3
          "
        >

          <div>
            <h3
              className="
                text-3xl
                font-medium
              "
            >
              03+
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-muted
              "
            >
              Years Learning & Building
            </p>
          </div>


          <div>
            <h3
              className="
                text-3xl
                font-medium
              "
            >
              10+
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-muted
              "
            >
              Projects & Experiments
            </p>
          </div>


          <div>
            <h3
              className="
                text-3xl
                font-medium
              "
            >
              Adaptive
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-muted
              "
            >
              Mindset & Skills
            </p>
          </div>


        </div>

      </div>
    </FadeIn>
  );
}