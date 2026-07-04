// app/page.tsx
import type { Metadata } from 'next';
import BannerSlider from "./components/home/BannerSlider";
import WorldClass from "./components/home/WorldClass";
import IndustryServices from "./components/home/IndustryServices";
import OurServices from "./components/home/OurServices";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import ClientsCarousel from "./components/home/ClientsCarousel";
import ServiceNetwork from "./components/home/ServiceNetwork";
import FAQSection from "./components/home/FAQSection";

export const metadata: Metadata = {
  title: 'EIE Instruments Pvt Ltd | Laboratory Testing Equipment Manufacturers Since 1977',
  description: 'Leading manufacturer of Civil Engineering, Pharmaceutical, Tiles & Ceramics, Petroleum Testing Instruments in India. Pan-India service network with NABL accredited calibration lab.',
  keywords: [
    'laboratory testing instruments', 
    'civil engineering testing equipment',
    'material testing machines',
    'pharmaceutical testing instruments',
    'calibration services India',
    'EIE Instruments Ahmedabad'
  ],
  openGraph: {
    title: 'EIE Instruments - World Class Laboratory Testing Equipment',
    description: 'Since 1977 | Precision Testing Instruments for Civil, Pharma, Tiles, Petroleum & More',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <ServiceNetwork />
      <WorldClass />
      <IndustryServices />
      <OurServices />
      <Stats />
      <Testimonials />
      <ClientsCarousel />
      <FAQSection />
    </main>
  );
}