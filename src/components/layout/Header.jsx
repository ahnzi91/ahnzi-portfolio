import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "@hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
      <nav className="container flex items-center justify-between max-w-4xl px-6 py-3 mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Ahnzi</h1>
          <p className="text-sm text-gray-500">프론트엔드 개발자</p>
        </div>

        <div className="flex items-center gap-x-6">
          <Link to="/" className="transition-colors hover:text-blue-500">
            홈
          </Link>
          <Link
            to="/introduce"
            className="transition-colors hover:text-blue-500"
          >
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
            className="w-10 h-10 p-2 bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700"
          >
            {theme === "dark" ? (
              <FaMoon className="text-2xl text-yellow-400" />
            ) : (
              <FaMoon className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
