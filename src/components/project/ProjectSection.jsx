import { Link } from "react-router-dom";

import projects from "@data/projects";
import ProjectCard from "@components/project/ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6 text-3xl font-bold">프로젝트</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-auto-rows-[1fr]">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block h-full transition-transform duration-300 hover:scale-105"
          >
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
