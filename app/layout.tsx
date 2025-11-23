import type { Metadata } from "next";
import { Georama,Roboto_Mono } from "next/font/google";
import "./globals.css";

const georama = Georama({
    variable: "--font-georama",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto",
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
        className={`${georama.variable} ${robotoMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
