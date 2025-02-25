import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/layout";
import Home from "@pages/Home";
import ProjectDetail from "@pages/ProjectDetail";
import NotFound from "@pages/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/projects/:projectId", element: <ProjectDetail /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      // 없으면 콘솔에 경고 표시
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
