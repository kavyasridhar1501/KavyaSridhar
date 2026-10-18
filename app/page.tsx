import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BeyondSection from "@/components/BeyondSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-wall">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BeyondSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
