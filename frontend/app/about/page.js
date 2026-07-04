import { Metadata } from "next";
import AboutDescription from "../components/about/AboutDescription";
import Facilities from "../components/about/Facilities";
import Certificates from "../components/about/Certificates";
import Timeline from "../components/about/Timeline";
import TeamMembers from "../components/about/TeamMembers";

export const metadata = {
  title: "About Us | EIE Instruments Pvt Ltd",
  description: "Since 1977, EIE Instruments has been a trusted manufacturer of laboratory testing equipment. Learn about our journey, facilities, certifications, and team.",
  keywords: ["about EIE Instruments", "company history", "testing equipment manufacturer", "NABL accredited", "laboratory equipment Ahmedabad"],
  openGraph: {
    title: "About EIE Instruments - Since 1977",
    description: "Leading manufacturer of laboratory testing instruments with 49+ years of excellence.",
    url: "https://eieinstruments.co.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="space-y-20">
      <AboutDescription />
      <Facilities />
      <Certificates />
      <Timeline />
      <TeamMembers />
    </main>
  );
}