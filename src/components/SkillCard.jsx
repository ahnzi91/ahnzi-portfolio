import PropTypes from "prop-types";

export default function SkillCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired, // React 노드 (컴포넌트, 요소) 타입
  title: PropTypes.string.isRequired, // 문자열 타입
};
