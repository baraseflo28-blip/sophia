import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./client-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophia Fashion - أبدعنا في إسطنبول والان بداية جديدة من حلب",
  description:
    "Sophia Fashion - تجارة الألبسة النسائية تركيا إسطنبول - أبدعنا في إسطنبول والان بداية جديدة من حلب",
  openGraph: {
    title: "Sophia Fashion",
    description: "أبدعنا في إسطنبول والان بداية جديدة من حلب",
    url: "https://sofiafashions.com/",
    siteName: "Sophia Fashion",
    images: [
      {
        url: "https://sofiafashions.com/images/logo.png",
        width: 400,
        height: 400,
        alt: "Sophia Fashion Logo",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophia Fashion",
    description: "أبدعنا في إسطنبول والان بداية جديدة من حلب",
    images: ["https://sofiafashions.com/images/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        sizes: "any",
      },
      {
        url: "/images/logo.png", 
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/logo.png",
        sizes: "32x32", 
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo.png",
  },
};

// Create viewport export for Next.js 15 compatibility
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
