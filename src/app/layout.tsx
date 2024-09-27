// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";  // Use ClerkProvider from @clerk/nextjs
import './globals.css';
import ParallelogramBanner from './components/ParallelogramBanner'; // Ensure correct import path

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Horistcs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="favicon.ico" />
          <meta name="description" content="Generated by create next app" />
          <title>Dialectics Center</title>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
          <ParallelogramBanner /> {/* Include the banner on the home page */}
        </body>
      </html>
    </ClerkProvider>
  );
}
