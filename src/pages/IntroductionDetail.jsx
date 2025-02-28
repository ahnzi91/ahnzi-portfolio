import { Link } from "react-router-dom";

export default function IntroductionDetail() {
  return (
    <main className="container max-w-2xl px-6 py-12 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">소개</h1>
      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        안녕하세요.{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          운동하는 개발자
        </strong>{" "}
        안지훈입니다. 운동을 통해 만들어진 긍정적인 에너지를 개발에도 적용하며,
        끊임없이 배우고 성장하는 것을 즐깁니다.
      </p>

      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        프론트엔드 개발자로서{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          JavaScript 및 React
        </strong>
        를 주력으로 사용하며,{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          TypeScript, TailwindCSS
        </strong>{" "}
        등을 활용해 효율적이고 유지보수하기 쉬운 코드를 작성하는 것을 목표로
        합니다. 또한,{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          Zustand, TanStack Query
        </strong>
        와 같은 상태 관리 및 데이터 패칭 라이브러리를 적극 활용합니다. 최근에는{" "}
        <strong className="text-blue-600 dark:text-blue-400">Next.js</strong>를
        학습하며 SSR(Server-Side Rendering)과 SEO 최적화에 대한 이해를 넓혀가고
        있습니다.
      </p>

      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        품질 보증(QA) 연구원으로 일하면서,
        <strong className="text-blue-600 dark:text-blue-400">
          테스트 계획 수립, 버그 분석 및 재현, 성능 테스트
        </strong>{" "}
        등을 경험했습니다. 주로{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          Notion과 Excel
        </strong>
        을 활용하여 테스트 케이스를 작성하고, 체계적인 검증을 수행하며 서비스의
        안정성을 높이는 데 기여했습니다.
      </p>

      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        저는 단순히 기능을 개발하는 것이 아니라,
        <strong className="text-blue-600 dark:text-blue-400">
          더 나은 사용자 경험(UX)을 제공하는 것
        </strong>
        을 목표로 합니다. 코드의 가독성과 유지보수성을 고려하며, 팀원들과
        협업하여 최고의 결과물을 만드는 것을 지향합니다.
      </p>

      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        또한, 지속적인 학습과 공유를 중요하게 생각합니다. 개인 블로그를 운영하며{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          기술 아티클
        </strong>
        을 작성하고 있으며, 배운 내용을 정리하여 공유하는 것을 좋아합니다.
      </p>

      <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
        앞으로도 더 나은 프론트엔드 개발자가 되기 위해 끊임없이 고민하고, 배움을
        실천하며 성장해 나가겠습니다.{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          더 나은 웹/앱 서비스를 만들기 위해 함께 고민하고, 도전해 나가고
          싶습니다!
        </strong>
      </p>
      <div className="flex justify-center mt-6">
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2 text-white transition-transform bg-gray-800 rounded-md shadow-md hover:bg-gray-700 hover:scale-105 active:scale-95"
        >
          홈으로 돌아가기 <span className="ml-2 text-lg">🏠</span>
        </Link>
      </div>
    </main>
  );
}
