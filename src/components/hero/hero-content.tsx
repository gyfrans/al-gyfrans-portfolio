export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <p
        className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-muted
        "
      >
        Developer & Problem Solver
      </p>

      <h1
        className="
          mt-6
          text-6xl
          font-semibold
          leading-[0.95]
          tracking-[-0.04em]
          md:text-8xl
        "
      >
        Al Gyfrans
      </h1>

      <p
        className="
          mt-6
          max-w-lg
          text-lg
          leading-relaxed
          text-muted
        "
      >
        Building digital solutions, solving problems through
        technology, and continuously adapting to new challenges.
      </p>

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-4
        "
      >
        <button
          className="
            rounded-full
            bg-foreground
            px-6
            py-3
            text-sm
            text-background
            transition
            hover:opacity-80
          "
        >
          View Work
        </button>

        <button
          className="
            rounded-full
            border
            border-border
            px-6
            py-3
            text-sm
            transition
            hover:bg-surface
          "
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
