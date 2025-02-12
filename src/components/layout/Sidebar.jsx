import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useTheme } from "@hooks/useTheme";

const Sidebar = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-20 dark:bg-gray-800 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="p-2 m-4 text-gray-700 dark:text-white"
      >
        <FaTimes className="text-2xl" />
      </button>
      <nav className="flex flex-col px-6 mt-10 space-y-4">
        <Link to="/" className="transition-colors hover:text-blue-500">
          홈
        </Link>
        <Link to="/introduce" className="transition-colors hover:text-blue-500">
          소개
        </Link>
        <Link to="/skills" className="transition-colors hover:text-blue-500">
          기술
        </Link>
        <Link to="/contact" className="transition-colors hover:text-blue-500">
          연락처
        </Link>
        <button
          onClick={toggleTheme}
          className="w-full p-2 bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700"
        >
          {theme === "dark" ? (
            <FaSun className="text-2xl text-yellow-400" />
          ) : (
            <FaMoon className="text-2xl text-gray-700" />
          )}
        </button>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
