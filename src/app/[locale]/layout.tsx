import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <ThemeProvider>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>
  );
}