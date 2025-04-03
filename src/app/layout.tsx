// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind styles

const inter = Inter({ subsets: ["latin"] });

// Basic metadata - can be enhanced
export const metadata: Metadata = {
  title: "Geo Weather Image Gen",
  description: "Generate images based on location and weather.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the manifest link */}
        <link rel="manifest" href="/manifest.json" />
        {/* Add theme color for PWA */}
        <meta name="theme-color" content="#317EFB" />
        {/* Add apple touch icon */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
