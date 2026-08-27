import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Gyfrans — Developer & Problem Solver",
  description:
    "Personal portfolio of Al Gyfrans, a developer and problem solver.",
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