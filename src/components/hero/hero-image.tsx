"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/fade-in";

export default function HeroImage() {
  return (
    <FadeIn delay={0.2}>
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-10px]
          right-[10px]
          z-10
          hidden
          h-[82vh]
          w-[48%]
          md:block
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(120,170,255,0.10),transparent_65%)]
          "
        />

        <Image
          src="/images/profile.png"
          alt="Al Gyfrans"
          fill
          priority
          sizes="48vw"
          className="
            object-contain
            object-right-bottom
            scale-[1.55]
            translate-x-[-15%]
            translate-y-[25%]
          "
        />
      </div>
    </FadeIn>
  );
}