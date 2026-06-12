import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Services from "@/components/sections/Services";
import WhyQoreTech from "@/components/sections/WhyQoreTech";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      {/* <LogoMarquee /> */}
      <Services />
      <WhyQoreTech />
      <Process />
      <TechStack />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
