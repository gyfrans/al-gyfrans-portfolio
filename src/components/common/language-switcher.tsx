"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const parts = pathname.split("/");

  const currentLocale =
    parts[1] === "id" || parts[1] === "en"
      ? parts[1]
      : "en";

  const nextLocale =
    currentLocale === "en"
      ? "id"
      : "en";

  const target =
    pathname.replace(
      `/${currentLocale}`,
      `/${nextLocale}`
    );

  return (
    <Link
      href={
        target === pathname
          ? `/${nextLocale}`
          : target
      }
      className="text-sm text-muted"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}