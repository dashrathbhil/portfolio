import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects";
import { AboutSection, EngineeringApproachSection, ContactSection, Footer } from "@/components/about-contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <EngineeringApproachSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
