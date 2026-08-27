import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        group
        relative
        h-[420px]
        w-full
        overflow-hidden
        rounded-[2rem]
        border
        border-border
        bg-surface
        md:h-[600px]
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-accent/10
          mix-blend-overlay
        "
      />

      <Image
        src="/images/profile.jpg"
        alt="Al Gyfrans"
        fill
        priority
        sizes="
          (max-width: 768px) 100vw,
          50vw
        "
        className="
          object-cover
          object-center
          transition
          duration-700
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-background/30
          via-transparent
          to-transparent
        "
      />

    </div>
  );
}
