import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

import SkillCard from "@components/SkillCard";

const skills = [
  { icon: <FaHtml5 className="mb-1 text-4xl text-red-500" />, title: "HTML5" },
  {
    icon: <FaCss3Alt className="mb-1 text-4xl text-blue-500" />,
    title: "CSS3",
  },
  {
    icon: <FaJs className="mb-1 text-4xl text-yellow-400" />,
    title: "JavaScript",
  },
  { icon: <FaReact className="mb-1 text-4xl text-blue-400" />, title: "React" },
  {
    icon: <BiLogoTypescript className="mb-1 text-4xl text-blue-800" />,
    title: "TypeScript",
  },
  { icon: <SiNextdotjs className="mb-1 text-4xl" />, title: "Next.js" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-6 text-3xl font-bold">기술</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </section>
  );
}
