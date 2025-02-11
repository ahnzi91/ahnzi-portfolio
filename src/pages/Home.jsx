const Home = () => {
  return (
    <main className="container max-w-4xl px-6 py-12 mx-auto">
      {/* Home Section */}
      <section className="flex items-center justify-between mb-12">
        <div className="mr-10 shrink-0">
          <img
            className="object-cover w-56 h-56 border-2 rounded-full"
            src="/assets/images/ahnzi-avatar.png"
            alt="Avatar"
          />
        </div>
        <div className="text-right">
          <h1 className="mb-2 text-4xl font-bold">Ahnzi</h1>
          <p className="mb-4 text-xl">운동하는 개발자</p>
          <p className="text-gray-600">
            항상 긍정적인 마인드로 개발하는 개발자입니다. 항상 긍정적인 마인드로
            개발하는 개발자입니다. 항상 긍정적인 마인드로 개발하는 개발자입니다.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">소개</h2>
        <div className="grid grid-cols-2 gap-6">
          <article className="p-6 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold">🧑‍🎓 교육 및 활동</h3>
            <ul className="leading-relaxed text-gray-800">
              <li>👉🏻 2024 멋쟁이사자처럼 프론트엔드 11기 수료</li>
              <li>👉🏻 2024 디웨일 QA 엔지니어</li>
              <li>👉🏻 2022 시큐레터 QA 엔지니어</li>
              <li>👉🏻 2019 시큐레터 프론트엔드 개발자</li>
            </ul>
          </article>
          <article className="p-6 transition-transform duration-300 bg-gray-100 rounded-lg shadow-md hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold">🧑🏻‍💻 자격증</h3>
            <ul className="leading-relaxed text-gray-800">
              <li>👉🏻 ISTQB Certified Tester Foundation Level 자격증 취득</li>
              <li>👉🏻 정보처리기사 자격증 취득</li>
              <li>👉🏻 한국디지털콘텐츠학회 논문경진대회 동상</li>
              <li>👉🏻 IoT(사물인터넷) 지식능력검정 자격증 취득</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="bg-blue-200 h-60">
        <h2 className="mb-6 text-3xl font-bold">기술</h2>
      </section>
      <section className="bg-cyan-200 h-60">
        <h2 className="mb-6 text-3xl font-bold">프로젝트</h2>
      </section>
      <section className="bg-green-200 h-60">
        <h2 className="mb-6 text-3xl font-bold">연락처</h2>
      </section>
    </main>
  );
};

export default Home;
