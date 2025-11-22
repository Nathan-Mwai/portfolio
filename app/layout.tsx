import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan's Portfolio",
  description: "Nathan’s developer portfolio showcasing React, Next.js, and TypeScript projects, experience, and contact details. Full‑stack web engineer focused on performant UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
