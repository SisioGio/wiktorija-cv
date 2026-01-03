// App.js
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Experience from "./sections/Experience";
import SkillMatrix from "./sections/SkillMatrix";
import Certificates from "./sections/Certificates";
import Languages from "./sections/Languages";
import { CTA } from "./sections/CTA";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-600 overflow-hidden">
      <Hero />
      <Stats />
      <Experience />
      <SkillMatrix />
      <Certificates />
      <Languages />
      <CTA />
    </div>
  );
}
