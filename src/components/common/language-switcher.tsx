"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {

  const pathname = usePathname();

  const currentLocale =
    pathname.split("/")[1] || "en";

  const nextLocale =
    currentLocale === "en"
      ? "id"
      : "en";


  return (
    <Link
      href={
        pathname.replace(
          `/${currentLocale}`,
          `/${nextLocale}`
        )
      }
      className="
        text-sm
        text-muted
      "
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}