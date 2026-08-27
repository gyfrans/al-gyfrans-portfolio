
import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title:
    "Al Gyfrans — Developer & Problem Solver",
};

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
