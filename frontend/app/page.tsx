import BannerSlider from "./components/home/BannerSlider";
import WorldClass from "./components/home/WorldClass";
import Since1977 from "./components/home/Since1977";
import IndustryServices from "./components/home/IndustryServices";
import OurServices from "./components/home/OurServices";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import ClientsCarousel from "./components/home/ClientsCarousel";

export default function Home() {
  return (
    <div className="space-y-20">
      <BannerSlider />
      <WorldClass />
      <Since1977 />
      <IndustryServices />
      <OurServices />
      <Stats />
      <Testimonials />
      <ClientsCarousel />
    </div>
  );
}
