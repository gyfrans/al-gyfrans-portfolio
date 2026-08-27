"use client";

import FadeIn from "@/components/motion/fade-in";

interface CapabilityCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export default function CapabilityCard({
  number,
  title,
  description,
  tags,
  delay = 0,
}: CapabilityCardProps) {
  return (
    <FadeIn delay={delay}>
      <article
        className="
          group
          h-full
          border
          border-white/10
          rounded-2xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-white/30
          hover:bg-white/[0.04]
        "
      >
        <span
          className="
            text-sm
            tracking-[0.3em]
            text-white/40
          "
        >
          {number}
        </span>

        <h3
          className="
            mt-8
            text-2xl
            font-medium
            tracking-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            max-w-md
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          {description}
        </p>

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-2
          "
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/20
                px-3
                py-1
                text-xs
                text-white/70
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}