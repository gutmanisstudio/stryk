import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import Loader from "@/components/Loader";
import WelcomePopup from "@/components/WelcomePopup";
import { CartProvider } from "@/context/CartContext";
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
  metadataBase: new URL("https://strykclub.com"),
  title: {
    default: "STRYK — Fuel the Fight Within",
    template: "%s — STRYK Nutrition",
  },
  description:
    "Premium sports nutrition built on transparency, clean formulas, and real performance. Launching soon — join the waitlist for 15% off.",
  keywords: [
    "STRYK",
    "STRYK Nutrition",
    "sports nutrition",
    "BCAA",
    "electrolytes",
    "shaker",
    "pre-workout",
  ],
  authors: [{ name: "STRYK Nutrition" }],
  openGraph: {
    title: "STRYK — Fuel the Fight Within",
    description:
      "Premium sports nutrition. Launching soon — join the waitlist for 15% off.",
    type: "website",
    siteName: "STRYK Nutrition",
    url: "https://strykclub.com",
    images: [
      {
        url: "/images/logo.PNG",
        width: 600,
        height: 600,
        alt: "STRYK Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STRYK — Fuel the Fight Within",
    description:
      "Premium sports nutrition. Launching soon — join the waitlist for 15% off.",
    images: ["/images/logo.PNG"],
  },
  icons: {
    icon: "/images/logo.PNG",
    apple: "/images/logo.PNG",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <LenisProvider>
            <Loader>{children}</Loader>
            <WelcomePopup />
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  );
}
