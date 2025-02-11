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
      <section className="bg-yellow-200 h-60">
        <h2 className="mb-6 text-3xl font-bold">소개</h2>
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
