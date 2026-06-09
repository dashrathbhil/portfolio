import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashrath Bhil — Backend Software Engineer",
  description:
    "Backend Software Engineer building scalable multi-tenant platforms, quote engines, RBAC systems, and production workflows for CRM, finance, and operational applications.",
  keywords: [
    "backend software engineer",
    "Node.js",
    "systems design",
    "multi-tenant architecture",
    "RBAC",
    "production systems",
    "API development",
    "PostgreSQL",
    "Redis",
  ],
  authors: [{ name: "Dashrath Bhil" }],
  openGraph: {
    type: "website",
    title: "Dashrath Bhil — Backend Software Engineer",
    description:
      "Backend Software Engineer building scalable multi-tenant platforms, RBAC systems, and production workflows.",
    siteName: "Dashrath Bhil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans overflow-x-hidden w-full max-w-[100vw]">
        {/* Background grid — spans full page */}
        <div className="fixed inset-0 bg-grid bg-grid-fade pointer-events-none z-0" />

        {/* Noise texture — spans full page */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-0" />

        {/* Top accent glow */}
        <div className="accent-glow" />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="relative z-10 flex-1">{children}</main>

        {/* Back to top */}
        <BackToTop />
      </body>
    </html>
  );
}
