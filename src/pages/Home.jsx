import { Helmet } from "react-helmet-async";

import ProfileSection from "@components/profile/ProfileSection";
import ContactSection from "@components/contact/ContactSection";
import HomeSection from "@components/home/HomeSection";
import ProjectSection from "@components/project/ProjectSection";
import SkillsSection from "@components/skill/SkillsSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ahnzi의 포트폴리오</title>
        <meta
          name="description"
          content="Ahnzi의 프론트엔드 개발 포트폴리오입니다."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/ahnzi-avatar.png"
        />
      </Helmet>
      <main className="container max-w-4xl px-6 py-12 mx-auto">
        <HomeSection />
        <ProfileSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
