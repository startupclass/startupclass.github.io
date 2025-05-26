import GitHubBtn from "@/app/GitHubBtn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "How to Start a Startup",
  description:
    "A collection of lectures on how to start a startup, featuring industry experts and successful entrepreneurs.",
  keywords: [
    "startup",
    "entrepreneurship",
    "business",
    "innovation",
    "technology",
    "fundraising",
    "product development",
  ],
  creator: "Sam Altman, Dustin Moskovitz, and others",
};

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${font.className}`}>
      <body className="flex flex-col min-h-full">
        {/* Header */}
        <header className="container flex flex-col gap-2 items-start sm:flex-row justify-between sm:items-end mx-auto p-4">
          <h1 className="text-4xl">How to Start a Startup</h1>
          <GitHubBtn />
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
