import PropTypes from "prop-types";

export default function ProjectCard({
  image,
  title,
  techStack,
  githubLink,
  liveDemoLink,
}) {
  return (
    <article className="flex flex-col h-full overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
      <img
        className="object-cover w-full h-48"
        src={image}
        alt="굿즈 스토어 이미지"
      />
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start mt-auto space-x-2">
          <a
            href={githubLink}
            className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md dark:bg-gray-300 dark:text-gray-800"
            target="_blank"
          >
            Github
          </a>
          <a
            href={liveDemoLink}
            className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired, // 프로젝트 이미지 URL
  title: PropTypes.string.isRequired, // 프로젝트 이름
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired, // 기술 스택 리스트
  githubLink: PropTypes.string.isRequired, // Github 링크
  liveDemoLink: PropTypes.string.isRequired, // 라이브 데모 링크
};
