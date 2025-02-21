export default function AboutSection() {
  return (
    <section id="about" className="mb-16">
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
  );
}
