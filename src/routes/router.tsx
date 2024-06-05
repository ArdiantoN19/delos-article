import MainLayout from "@/components/layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home";
import DetailArticlePage from "@/pages/DetailArticle";
import LuckyPage from "@/pages/Lucky";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <p>Error pak, perbaiki dulu</p>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailArticlePage />,
      },
      {
        path: "/lucky",
        element: <LuckyPage />,
      },
    ],
  },
]);

export default router;
