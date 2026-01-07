import AboutDescription from "../components/about/AboutDescription";
import Facilities from "../components/about/Facilities";
import Certificates from "../components/about/Certificates";
import Timeline from "../components/about/Timeline";
import TeamMembers from "../components/about/TeamMembers";

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
