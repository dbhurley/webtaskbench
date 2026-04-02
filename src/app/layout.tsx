import type { Metadata } from "next";
import { Syne, Azeret_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const azeretMono = Azeret_Mono({ subsets: ["latin"], variable: "--font-mono" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "WebTaskBench — AI Agent Web Fetching Benchmark",
  description:
    "An open benchmark measuring token efficiency across the real web. Fewer tokens means faster agents, lower costs, and more context for reasoning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${azeretMono.variable} ${dmSans.variable} font-body bg-bg text-text antialiased relative`}
      >
        <Header />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
