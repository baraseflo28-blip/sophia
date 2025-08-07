import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./client-layout";
import { GoogleAnalytics } from "@/components/google-analytics";
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
    "Sofia Fashions - Premium women's fashion boutique in Aleppo. Turkish designer clothing, elegant dresses, luxury women's apparel from Istanbul. Shop authentic Turkish fashion, women's clothing store, fashion accessories. صوفيا فاشن - بوتيك الأزياء النسائية الراقية في حلب - ملابس تركية أصيلة، فساتين أنيقة، أزياء فاخرة للنساء",
  keywords: [
    "Sofia Fashions",
    "Sofia Fashion",
    "Women's Fashion Boutique",
    "Turkish Fashion Designer",
    "Istanbul Fashion Store",
    "Aleppo Fashion Shop",
    "Ladies Clothing Store",
    "Women's Dresses",
    "Fashion Accessories",
    "Luxury Women's Apparel",
    "Turkish Designer Clothing",
    "Women's Fashion Aleppo",
    "Fashion Store Syria",
    "صوفيا فاشن",
    "أزياء نسائية راقية",
    "أزياء تركية أصيلة",
    "متجر الأزياء النسائية",
    "بوتيك الأزياء",
    "ملابس نسائية فاخرة",
    "فساتين أنيقة",
    "إكسسوارات الأزياء",
    "إسطنبول",
    "حلب",
    "سوريا",
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
        secureUrl: "https://sofiafashions.com/images/shareimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Sofia Fashions - Premium Women's Fashion Collection - Turkish Fashion from Istanbul to Aleppo",
        type: "image/jpeg",
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
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
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
  alternates: {
    canonical: "https://sofiafashions.com/",
    languages: {
      ar: "https://sofiafashions.com/",
      en: "https://sofiafashions.com/",
    },
  },
  other: {
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    expires: "never",
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

        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicon and App Icons */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16 32x32 48x48"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icon-192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icon-512.png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/videos/video-poster-optimized.mp4"
          as="video"
          type="video/mp4"
        />

        {/* Enhanced meta tags for better social sharing */}
        <meta
          property="og:image"
          content="https://sofiafashions.com/images/shareimage.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:secure_url"
          content="https://sofiafashions.com/images/shareimage.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://sofiafashions.com/images/shareimage.jpeg"
        />
        <meta
          name="twitter:image:alt"
          content="Sofia Fashions - Premium Women's Fashion Collection"
        />

        {/* WhatsApp specific meta tags */}
        <meta
          property="og:image:alt"
          content="Sofia Fashions - Premium Women's Fashion Collection - Turkish Fashion from Istanbul to Aleppo"
        />
        <meta property="og:updated_time" content="2025-01-07T12:00:00Z" />

        {/* Additional social platforms */}
        <meta name="telegram:channel" content="@sofiafashions" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
