const Home = () => {
  return (
    <main className="container max-w-4xl px-6 py-12 mx-auto bg-gray-300">
      {/* Home Section */}
      <section className="bg-red-200 h-60"></section>
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
