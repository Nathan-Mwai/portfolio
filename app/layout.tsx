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
  metadataBase: new URL("https://nathanmwai.com"),
  title: {
    default: "Nathan Mwai Mwaniki | Software Engineer & Web Developer",
    template: "%s | Nathan Mwai Mwaniki"
  },
  description: "Portfolio of Nathan Mwai Mwaniki, a Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and React Native. Focused on building performant web and mobile applications with clean UI/UX.",
  keywords: [
    "Nathan Mwai Mwaniki",
    "Nathan Mwai",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "UI/UX Design",
    "Frontend Engineer"
  ],
  authors: [{ name: "Nathan Mwai Mwaniki", url: "https://nathanmwai.com" }],
  creator: "Nathan Mwai Mwaniki",
  publisher: "Nathan Mwai Mwaniki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nathan Mwai Mwaniki | Full-Stack Software Engineer",
    description: "Explore the portfolio of Nathan Mwai Mwaniki. Discover projects built with React, Next.js, TypeScript, and React Native. Let's build something amazing together.",
    url: "https://nathanmwai.com",
    siteName: "Nathan Mwai Mwaniki's Portfolio",
    images: [
      {
        url: "/images/nathan.webp",
        width: 1200,
        height: 630,
        alt: "Nathan Mwai Mwaniki - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Mwai Mwaniki | Software Engineer",
    description: "Full-Stack Web & Mobile Developer specializing in React, Next.js, and TypeScript. Building performant, clean, and scalable applications.",
    creator: "@CodebaseJournal",
    images: ["/images/nathan.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nathanmwai.com",
  },
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
