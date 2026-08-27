"use client";

import Link from "next/link";
import ThemeToggle from "@/components/common/theme-toggle";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function Navbar() {
  return (
    <header className="
      fixed
      top-6
      left-1/2
      z-50
      w-[calc(100%-2rem)]
      max-w-5xl
      -translate-x-1/2
    ">
      <nav className="
        flex
        items-center
        justify-between
        rounded-full
        border
        border-border
        bg-background/80
        px-6
        py-3
        backdrop-blur-md
      ">
        <Link
          href="/"
          className="
            font-semibold
            tracking-tight
          "
        >
          AL
        </Link>

        <div className="
          hidden
          items-center
          gap-6
          text-sm
          text-muted
          md:flex
        ">
          <Link href="#">
            Work
          </Link>

          <Link href="#">
            About
          </Link>

          <Link href="#">
            Journey
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}