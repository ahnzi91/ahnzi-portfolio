import ProjectCard from "@components/ProjectCard";

const projects = [
  {
    image: "/assets/images/i-land.png",
    title: "굿즈 스토어",
    techStack: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Zustand",
      "Tanstack",
      "Vite",
    ],
    githubLink: "https://github.com/ahnzi91/i-land",
    liveDemoLink: "https://i-land.netlify.app/",
  },
  {
    image: "/assets/images/admin-template.png",
    title: "관리자 템플릿",
    techStack: ["HTML", "TailwindCSS", "JavaSciprt", "Github Pages"],
    githubLink: "#",
    liveDemoLink: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6 text-3xl font-bold">프로젝트</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
