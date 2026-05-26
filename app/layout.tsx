import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";


import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnav Tambe - Backend & Data Systems Engineer",
  description:
    "MCA student building ETL pipelines, REST APIs, data warehouses, and cloud-native systems. Targeting backend engineering and data engineering roles in Mumbai's BFSI and fintech sectors.",
  keywords: ["backend engineer", "data engineer", "ETL", "GCP", "SQL", "Spring Boot", "Mumbai"],
  authors: [{ name: "Arnav Tambe", url: "https://github.com/ArnavTambe06" }],
  openGraph: {
    title: "Arnav Tambe - Backend & Data Systems Engineer",
    description: "Building systems that move data and power backends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
