import AboutSection from "@components/AboutSection";
import SkillsSection from "@components/SkillsSection";
import ProjectSection from "@components/ProjectSection";
import ContactSection from "@components/ContactSection";
import HomeSection from "@components/HomeSection";

const Home = () => {
  return (
    <main className="container max-w-4xl px-6 py-12 mx-auto">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default Home;
