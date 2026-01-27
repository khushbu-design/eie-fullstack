import BannerSlider from "./components/home/BannerSlider";
import WorldClass from "./components/home/WorldClass";
import IndustryServices from "./components/home/IndustryServices";
import OurServices from "./components/home/OurServices";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import ClientsCarousel from "./components/home/ClientsCarousel";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <BannerSlider />
      
      <WorldClass />
      
      <IndustryServices />
      
      <OurServices />
      
      <Stats />
      
      <Testimonials />
      
      <ClientsCarousel />
    </div>
  );
}