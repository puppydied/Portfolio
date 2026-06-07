import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yuda — Software Dev & Cybersecurity",
    template: "%s | Yuda",
  },
  description:
    "Portfolio of Yuda — Software Developer and Cybersecurity Enthusiast. Building secure, performant web experiences with modern stack.",
  keywords: [
    "Yuda",
    "Software Developer",
    "Cybersecurity",
    "Next.js",
    "React",
    "Portfolio",
    "Frontend",
  ],
  authors: [{ name: "Yuda" }],
  creator: "Yuda",
  openGraph: {
    type: "website",
    title: "Yuda — Software Dev & Cybersecurity",
    description:
      "Software Developer & Cybersecurity Enthusiast. Building secure, performant web experiences.",
    siteName: "Yuda's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuda — Software Dev & Cybersecurity",
    description:
      "Software Developer & Cybersecurity Enthusiast. Building secure, performant web experiences.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="h-full flex flex-col">
    <Navbar />
    {children}
</body>
    </html>
  );
}
