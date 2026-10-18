import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Kavya Sridhar | Software Engineer",
  description:
    "Kavya Sridhar is a software engineer at Dreamline AI working across full-stack, data engineering, and applied AI/ML. MS Data Science, UC San Diego.",
  keywords: ["portfolio", "software engineer", "full-stack", "data engineering", "machine learning"],
  authors: [{ name: "Kavya Sridhar" }],
};

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
