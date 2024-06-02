import MainLayout from "../components/layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

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
        path: "/lucky",
        element: <p>Lucky Page</p>,
      },
    ],
  },
]);

export default router;
