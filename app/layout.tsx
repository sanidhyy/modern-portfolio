import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ethan Smith | Portfolio",
  description:
    "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "portfolio",
    "framer-motion",
    "3d-website",
    "particle-effect",
  ],
  authors: [{ name: "Sanidhya Kumar Verma" }],
  other: {
    "theme-color": "#f13024",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${sora.variable} font-sora page bg-site text-white bg-cover bg-no-repeat relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
