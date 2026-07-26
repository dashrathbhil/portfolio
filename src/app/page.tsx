import { HeroSection } from "@/components/hero-section";
import { EngineeringExpertiseSection } from "@/components/expertise";
import { FeaturedProjectsSection } from "@/components/featured-projects";
import { EngineeringPhilosophySection, ProfessionalExperienceSection, ContactSection, Footer } from "@/components/about-contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EngineeringExpertiseSection />
      <FeaturedProjectsSection />
      <EngineeringPhilosophySection />
      <ProfessionalExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

