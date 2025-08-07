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
  title:
    "Sofia Fashions | Women's Fashion Store Istanbul & Aleppo | صوفيا فاشن",
  description:
    "Sofia Fashions - Premium women's clothing store. Turkish fashion from Istanbul, now serving Aleppo. صوفيا فاشن - متجر الأزياء النسائية الراقية - أبدعنا في إسطنبول والآن بداية جديدة من حلب",
  keywords: [
    "Sofia Fashions",
    "Sofia Fashion",
    "Women's Fashion",
    "Turkish Fashion",
    "Istanbul Fashion",
    "Aleppo Fashion",
    "Ladies Clothing",
    "صوفيا فاشن",
    "أزياء نسائية",
    "أزياء تركية",
    "إسطنبول",
    "حلب",
    "ملابس نسائية",
  ],
  authors: [{ name: "Sofia Fashions" }],
  creator: "Sofia Fashions",
  publisher: "Sofia Fashions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sofia Fashions | Premium Women's Fashion | صوفيا فاشن",
    description:
      "Premium women's clothing store - Turkish fashion from Istanbul, now in Aleppo. أزياء نسائية راقية - أبدعنا في إسطنبول والآن بداية جديدة من حلب",
    url: "https://sofiafashions.com/",
    siteName: "Sofia Fashions",
    images: [
      {
        url: "https://sofiafashions.com/images/shareimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Sofia Fashions - Premium Women's Fashion Collection - Turkish Fashion from Istanbul to Aleppo",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Fashions | Premium Women's Fashion",
    description:
      "Premium women's clothing store - Turkish fashion from Istanbul, now in Aleppo",
    images: ["https://sofiafashions.com/images/shareimage.jpeg"],
    creator: "@SofiaFashions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
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
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code-here", // Replace with actual verification code
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
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="google-site-verification-code-here"
        />
        <link rel="canonical" href="https://sofiafashions.com/" />
        <meta name="geo.region" content="SY-HL" />
        <meta name="geo.placename" content="Aleppo" />
        <meta name="geo.position" content="36.2021;37.1343" />
        <meta name="ICBM" content="36.2021, 37.1343" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
