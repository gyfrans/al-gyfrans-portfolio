import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Al Gyfrans — Developer & Problem Solver",

  description:
    "Portfolio of Al Gyfrans, a developer focused on building digital products and solving problems through technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}