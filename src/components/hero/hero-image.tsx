import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        h-[420px]
        w-full
        overflow-hidden
        rounded-[2rem]
        border
        border-border
        bg-gradient-to-b
        from-[#eef3fb]
        to-[#dfe7f3]
        dark:from-[#111827]
        dark:to-[#0f172a]
        md:h-[600px]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_55%)]
          dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-end
          justify-center
          p-6
          md:p-10
        "
      >
        <Image
          src="/images/profile.jpg"
          alt="Al Gyfrans"
          width={900}
          height={1200}
          priority
          className="
            h-full
            w-auto
            max-h-full
            object-contain
            object-bottom
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]
            transition
            duration-700
            hover:scale-[1.02]
          "
        />
      </div>
    </div>
  );
}
