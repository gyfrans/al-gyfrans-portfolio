
import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title:
    "Al Gyfrans — Developer & Problem Solver",

  description:
    "Personal portfolio of Al Gyfrans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
