import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { useTheme } from "@hooks/useTheme";

import Sidebar from "@components/layout/Sidebar";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
        <nav className="container flex items-center justify-between max-w-4xl px-6 py-3 mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Ahnzi</h1>
            <p className="text-sm text-gray-500">프론트엔드 개발자</p>
          </div>

          <div className="items-center hidden md:flex gap-x-6">
            <a href="#home" className="transition-colors hover:text-blue-500">
              홈
            </a>
            <a href="#about" className="transition-colors hover:text-blue-500">
              소개
            </a>
            <a href="#skills" className="transition-colors hover:text-blue-500">
              기술
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-blue-500"
            >
              프로젝트
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-500"
            >
              연락처
            </a>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 p-2 bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700"
            >
              {theme === "dark" ? (
                <FaSun className="text-2xl text-yellow-400" />
              ) : (
                <FaMoon className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-700 dark:text-white md:hidden"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
