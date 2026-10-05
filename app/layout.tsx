import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavya Sridhar | Portfolio",
  description: "Personal portfolio of Kavya Sridhar - Software Engineer at Dreamline AI",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
  authors: [{ name: "Kavya Sridhar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
