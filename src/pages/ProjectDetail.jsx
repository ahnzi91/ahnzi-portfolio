import { Link, useParams } from "react-router-dom";
import projects from "@data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams(); // 문자열 ID 가져오기
  const project = projects.find((project) => project.id === projectId); // 문자열 비교

  if (!project) {
    return (
      <main className="container max-w-4xl px-6 py-12 mx-auto text-center">
        <h1 className="text-3xl font-bold text-red-500">
          ⚠ 프로젝트를 찾을 수 없습니다.
        </h1>
        <p className="mt-2 text-gray-400">
          존재하지 않는 프로젝트이거나, 잘못된 URL입니다.
        </p>
        <Link
          to="/projects"
          className="inline-block px-6 py-2 mt-4 text-white bg-blue-600 rounded-md"
        >
          🔙 프로젝트 목록으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="container max-w-4xl px-6 py-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      {/* 프로젝트 이미지 */}
      <img
        className="object-cover w-full rounded-lg shadow-lg"
        src={project.image}
        alt={project.title}
      />

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-3 mt-6">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-gray-200 rounded-md dark:bg-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub 및 Live Demo 버튼 */}
      <div className="flex mt-6 space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          className="px-6 py-2 text-white bg-gray-800 rounded-md"
        >
          GitHub
        </a>
        <a
          href={project.liveDemoLink}
          target="_blank"
          className="px-6 py-2 text-white bg-blue-600 rounded-md"
        >
          Live Demo
        </a>
      </div>

      {/* 뒤로 가기 버튼 */}
      <div className="mt-8">
        <Link to="/" className="px-4 py-2 text-white bg-gray-500 rounded-md">
          🔙 프로젝트 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
