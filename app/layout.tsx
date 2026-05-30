import type { Metadata } from "next";
import { Barlow_Condensed, JetBrains_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arnav Tambe | SYS_ARCH_V2.4",
  description:
    "Industrial-retro portfolio for Arnav Tambe, a backend and data systems engineer focused on APIs, pipelines, and reliability.",
  openGraph: {
    title: "Arnav Tambe | SYS_ARCH_V2.4",
    description:
      "Industrial-retro portfolio inspired by a technical spec sheet and workshop manual aesthetic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg font-body text-text antialiased">{children}</body>
    </html>
  );
}
