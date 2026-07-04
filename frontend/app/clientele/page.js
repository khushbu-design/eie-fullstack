import { Metadata } from "next";
import ClienteleContent from "./ClienteleContent";

export const metadata = {
  title: "Our Clients & Testimonials | EIE Instruments",
  description: "Trusted by leading organizations across India and globally since 1977. Explore our esteemed clients from Petroleum, Cement, Pharma, Construction, and other industries.",
  keywords: ["EIE Instruments clients", "our clients", "customer testimonials", "trusted partners", "laboratory equipment clients", "NABL accredited"],
  openGraph: {
    title: "Our Valuable Clients - EIE Instruments",
    description: "Proudly serving top companies in Petroleum, Cement, Pharma, Construction and more since 1977.",
    url: "https://eieinstruments.co.in/clientele",
  },
};

export default function ClientelePage() {
  return <ClienteleContent />;
}