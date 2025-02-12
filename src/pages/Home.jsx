import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiGmail, SiNextdotjs, SiVelog } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Home = () => {
  return (
    <main className="container max-w-4xl px-6 py-12 mx-auto">
      {/* Home Section */}
      <section className="flex flex-col items-center justify-between mb-12 md:flex-row">
        <div className="mb-6 md:mb-0 md:mr-10 shrink-0">
          <img
            className="object-cover w-56 h-56 border-2 rounded-full"
            src="/assets/images/ahnzi-avatar.png"
            alt="Avatar"
          />
        </div>
        <div className="text-center md:text-right">
          <h1 className="mb-2 text-4xl font-bold">Ahnzi</h1>
          <p className="mb-4 text-xl dark:text-gray-300">운동하는 개발자</p>
          <p className="text-gray-600 dark:text-gray-400">
            항상 긍정적인 마인드로 개발하는 개발자입니다. 항상 긍정적인 마인드로
            개발하는 개발자입니다. 항상 긍정적인 마인드로 개발하는 개발자입니다.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">소개</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="p-6 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">🧑‍🎓 교육 및 활동</h3>
            <ul className="leading-relaxed text-gray-800 dark:text-gray-300">
              <li>👉🏻 2024 멋쟁이사자처럼 프론트엔드 11기 수료</li>
              <li>👉🏻 2024 디웨일 QA 엔지니어</li>
              <li>👉🏻 2022 시큐레터 QA 엔지니어</li>
              <li>👉🏻 2019 시큐레터 프론트엔드 개발자</li>
            </ul>
          </article>
          <article className="p-6 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">🧑🏻‍💻 자격증</h3>
            <ul className="leading-relaxed text-gray-800 dark:text-gray-300">
              <li>👉🏻 2024 ISTQB Certified Tester Foundation Level</li>
              <li>👉🏻 2017 정보처리기사</li>
              <li>👉🏻 2016 한국디지털콘텐츠학회 논문경진대회 동상</li>
              <li>👉🏻 2016 IoT(사물인터넷) 지식능력검정</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">기술</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 hover:scale-105">
            <FaHtml5 className="mb-1 text-4xl text-red-500" />
            <h3 className="text-lg font-semibold">HTML5</h3>
          </div>
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <FaCss3Alt className="mb-1 text-4xl text-blue-500" />
            <h3 className="text-lg font-semibold">CSS3</h3>
          </div>
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <FaJs className="mb-1 text-4xl text-yellow-400" />
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <FaReact className="mb-1 text-4xl text-blue-400" />
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <BiLogoTypescript className="mb-1 text-4xl text-blue-800" />
            <h3 className="text-lg font-semibold">TypeScript</h3>
          </div>
          <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105 dark:bg-gray-800">
            <SiNextdotjs className="mb-1 text-4xl" />
            <h3 className="text-lg font-semibold">Next.js</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">프로젝트</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
            <img
              className="object-cover w-full h-48"
              src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=600"
              alt="굿즈 스토어 이미지"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                굿즈 스토어1
              </h3>
              <div className="mb-4 space-x-2">
                <span className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  TailwindCSS
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Zustand
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tanstack
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </a>
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
            <img
              className="object-cover w-full h-48"
              src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=600"
              alt="굿즈 스토어 이미지"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                굿즈 스토어1
              </h3>
              <div className="mb-4 space-x-2">
                <span className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  TailwindCSS
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Zustand
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tanstack
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </a>
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
            <img
              className="object-cover w-full h-48"
              src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=600"
              alt="굿즈 스토어 이미지"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                굿즈 스토어1
              </h3>
              <div className="mb-4 space-x-2">
                <span className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  TailwindCSS
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Zustand
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tanstack
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </a>
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
            <img
              className="object-cover w-full h-48"
              src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=600"
              alt="굿즈 스토어 이미지"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                굿즈 스토어1
              </h3>
              <div className="mb-4 space-x-2">
                <span className="dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  TailwindCSS
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Zustand
                </span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tanstack
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </a>
                <a
                  href=""
                  className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">연락처</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <form id="contactForm" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                이름
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                메시지
              </label>
              <textarea
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                name="name"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-500"
            >
              이메일 보내기
            </button>
          </form>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500"
              target="_blank"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500"
              target="_blank"
            >
              <SiVelog />
              <span>Blog</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500"
              target="_blank"
            >
              <SiGmail />
              <span>ahnzi91@gmail.com</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500"
              target="_blank"
            >
              <MdOutlinePhoneIphone />
              <span>010-8869-4712</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
