import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import InquiryButton from "@/components/InquiryButton";
import Footer from "../components/Footer";
import { CompareProvider } from '@/context/CompareContext';
import CompareBar from '@/components/CompareBar';
import VisitorTracker from '@/components/VisitorTracker';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "EIE Instruments Pvt Ltd | Laboratory Testing Equipment Manufacturers",
    template: "%s | EIE Instruments",
  },
  description: "Since 1977, EIE Instruments is a leading manufacturer of high-quality laboratory testing equipment for Civil Engineering, Pharmaceutical, Tiles & Ceramics, Petroleum, Paper & Packaging industries. Pan-India service & NABL accredited calibration lab.",
  
  keywords: [
    "laboratory testing instruments", "civil engineering testing equipment", 
    "material testing machines", "pharmaceutical testing instruments", 
    "calibration services", "NABL accredited lab", "EIE Instruments", 
    "testing equipment manufacturers India"
  ],
  
  authors: [{ name: "EIE Instruments Pvt Ltd" }],
  creator: "EIE Instruments Pvt Ltd",
  
  openGraph: {
    title: "EIE Instruments Pvt Ltd - Laboratory Testing Equipment Since 1977",
    description: "Premium testing instruments for Civil, Pharma, Petroleum, Tiles, Paper industries with Pan-India service support.",
    url: "https://eieinstruments.co.in",
    siteName: "EIE Instruments",
    images: [
      {
        url: "/og-image.jpg", // Recommended: Add a good OG image
        width: 1200,
        height: 630,
        alt: "EIE Instruments Laboratory Testing Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <CompareProvider>
          <Navbar />

          <main className="min-h-screen">
            <VisitorTracker />
            {children}
          </main>
          
          <InquiryButton />
          <Footer />
          <CompareBar />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916357075375"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-6 bottom-5 z-[9997] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </CompareProvider>

        {/* Organization Schema (Important for GEO + SEO) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EIE Instruments Pvt Ltd",
              "url": "https://eieinstruments.co.in",
              "logo": "https://eieinstruments.co.in/logo.png",
              "description": "Leading manufacturer of laboratory testing instruments since 1977",
              "foundingDate": "1977",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-1301 BVR Ek, Opp. Hotel Inder Residency",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380006",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9227230010",
                "contactType": "customer service",
                "email": "info@eieinstruments.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/eie-instruments-pvt-ltd"
              ]
            })
          }}
        />

        <Script
          id="apollo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo() {
                var n = Math.random().toString(36).substring(7),
                    o = document.createElement("script");
                o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                o.async = true;
                o.defer = true;
                o.onload = function() {
                  window.trackingFunctions.onLoad({ appId: "67065747dd607403e975f341" });
                };
                document.head.appendChild(o);
              }
              initApollo();
            `,
          }}
        />
      </body>
    </html>
  );
}