import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import InquiryButton from "@/components/InquiryButton";
import Footer from "../components/Footer";
import { CompareProvider } from '@/context/CompareContext';
import CompareBar from '@/components/CompareBar';
import VisitorTracker from '@/components/VisitorTracker';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EIE Instruments Pvt Ltd",
  description: "Leading manufacturer of testing instruments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-800`}>
        
        {/* CompareProviderને સૌથી ઉપર wrap કરો — બધા components context access કરી શકશે */}
        <CompareProvider>
          
          {/* Navbar પહેલા */}
          <Navbar />

          {/* Main content */}
          <main>
            <VisitorTracker />
            {children}
          </main>

          {/* Inquiry Button */}
          <InquiryButton />

          {/* Footer */}
          <Footer />

          {/* Compare Bar (bottom floating bar) */}
          <CompareBar />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/916357075375"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 bottom-4 z-40 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full shadow-2xl flex items-center gap-2 text-lg transition"
          >
            WhatsApp
          </a>

        </CompareProvider>

      </body>
    </html>
  );
}