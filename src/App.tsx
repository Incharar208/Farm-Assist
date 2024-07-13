import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// conponents
import Header from "./components/Header.tsx";
// pages
import Home from "./pages/Home/Home.tsx";
import Register from "./pages/Auth/Register.tsx";
import Login from "./pages/Auth/Login.tsx";
import Weather from "./pages/WeatherReport/Weather.tsx";
import CropAdviser from "./pages/CropAdviser/CropAdviser.tsx";
import Disease from "./pages/DiseaseDetector/Disease.tsx";
import ErrorPage from "./pages/ErrorHandler/ErrorPage.tsx";

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "weather.report",
        element: <Weather />,
      },
      {
        path: "/crop.adviser.ai",
        element: <CropAdviser />,
      },
      {
        path: "/crop.disease.ai",
        element: <Disease />,
      },
      {
        path: "/auth.register",
        element: <Register />,
      },
      {
        path: "/auth.login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
);

export default App;
