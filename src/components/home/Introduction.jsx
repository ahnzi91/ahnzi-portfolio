import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="text-center md:text-right">
      <h1 className="mb-2 text-4xl font-bold">Ahnzi</h1>
      <p className="mb-4 text-xl dark:text-gray-300">운동하는 개발자</p>
      <p className="text-gray-600 dark:text-gray-400">
        프론트엔드 개발과 및 품질 보증(QA) 분야에서의 경험을 바탕으로
        <br />
        안정적이고 사용자 중심적인 웹/앱 서비스를 만드는게 기여하고 싶습니다.
      </p>
      <div className="mt-4">
        <Link
          to="/about"
          className="inline-flex items-center px-5 py-2 text-white transition-transform bg-gray-800 rounded-md shadow-md hover:bg-gray-700 hover:scale-105 active:scale-95"
        >
          더보기 <span className="ml-2 text-lg">👉🏻</span>
        </Link>
      </div>
    </div>
  );
}
