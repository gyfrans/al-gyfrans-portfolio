import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "../globals.css";

export const metadata: Metadata = {
  title:
    "Al Gyfrans — Developer & Problem Solver",

  description:
    "Personal portfolio of Al Gyfrans.",
};

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}