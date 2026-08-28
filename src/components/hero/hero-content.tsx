import FadeIn from "@/components/motion/fade-in";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <FadeIn>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-muted
          "
        >
          Digital Creator & Problem Solver
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h1
          className="
            mt-6
            text-7xl
            font-semibold
            tracking-tight
            leading-[0.95]
          "
        >
          Al Gyfrans
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p
          className="
            mt-8
            max-w-lg
            text-lg
            leading-relaxed
            text-muted
          "
        >
          Building digital solutions, solving problems through technology,
          and continuously adapting to new challenges.
        </p>
      </FadeIn>

      <FadeIn delay={0.45}>
        <div className="mt-10 flex gap-8 items-center">
          <button>
            View Work
          </button>

          <button
            className="
              rounded-full
              border
              px-6
              py-3
            "
          >
            Download CV
          </button>
        </div>
      </FadeIn>

    </div>
  );
}